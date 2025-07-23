import { sign, verify } from "hono/jwt";


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
    console.log(user)
    return user;
  }
  catch(error) {
    console.log(error)
    return null;
  }
}

export { generateToken, verifyToken };