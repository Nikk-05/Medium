import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { Context, Next } from 'hono'
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

const app = new Hono()

app.use('*', cors())


import routes from '../routes/blog.routes'
import { verifyToken } from '../middleware/authUser.middleware'

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
        return c.json({
            error: 'Unable to reach to database'
        }, 500)
    }
})

app.use('/api/v1/blog/*', async (c: Context, next: Next) => {
    try {
        const authToken = c.req.header('Authorization')
        const token = authToken?.split(" ")[1]
        if (!token) {
            return c.json({ error: 'Unauthorized: No token provided' }, 401);
        }

        const user = await verifyToken(token, c.env.SECRET_KEY)
        if (!user) {
            return c.json({ error: 'Invalid or expired token' }, 403);
        }
        c.set('userId', user.id)
        c.set('email', user.email)
        await next()
    }
    catch (error) {
        return c.json({ error: 'Unauthorized access' }, 401);
    }
})

app.route('/api/v1', routes)

export default app
