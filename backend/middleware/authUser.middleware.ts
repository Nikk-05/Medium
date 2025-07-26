import { sign, verify } from "hono/jwt";
import { Context, Next } from 'hono'


const generateToken = async (userId: string, email: string, secretKey: string) => {
  if (!secretKey) throw new Error('JWT_SECRET is not defined in environment');
  const payload = {
    id: userId,
    email: email
  }
  const token = await sign(payload, secretKey);
  return token;
};


const verifyToken = async (token: string, secretKey: string) => {
  try {
    const user = await verify(token, secretKey)
    return user;
  }
  catch (error) {
    return null;
  }
}


const authUser = async (c: Context, next: Next) => {
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
}

export { generateToken, verifyToken, authUser };