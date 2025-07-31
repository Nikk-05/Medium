import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { Context, Next } from 'hono'
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

type Env = {
  DATABASE_URL: string;
  SECRET_KEY: string;
};

const app = new Hono<{ Bindings: Env }>();

app.use('*', cors())


import routes from '../routes/blog.routes'
 

app.use('*', async (c: Context, next: Next) => {
    try {
        const prisma = new PrismaClient({
            datasources: {
                db: {
                    url: c.env.DATABASE_URL,
                },
            },
        }).$extends(withAccelerate());
        c.set('prisma', prisma)
        await next()
    }
    catch (error) {
        console.error('Error connecting to the database:', error);
        return c.json({
            error: 'Unable to reach to database'
        }, 500)
    }
})

app.route('/api/v1/', routes)

export default app
