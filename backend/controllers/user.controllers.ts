import { Context } from 'hono'
import { generateToken } from '../middleware/authUser.middleware'
import bcrypt from 'bcryptjs'


const userSignUp = async (c: Context) => {
    const prisma = c.get('prisma')
    const { email, fullname, password } = await c.req.json()
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = await prisma.user.create({
            data: {
                email,
                fullname,
                password: hashedPassword
            }
        })

        // jwt token generation can be added here
        const token = await generateToken(user.id, user.email, c.env.SECRET_KEY,) // Assuming a function to generate JWT token

        return c.json({
            message: `User with email ${user.email} created successfully!`,
            status: 'success',
            access_token: token
        }, 201)
    }
    catch (error) {

        return c.json({
            message: "Error creating user",
            status: 'error',
        }, 500)
    }

}

const userLogin = async (c: Context) => {
    try {
        const prisma = c.get('prisma')
        const { email, password } = await c.req.json()
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if (!user) throw new Error("User not found");

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new Error("Invalid credentials");

        const token = await generateToken(user.id, user.email, c.env.SECRET_KEY)
        return c.json({
            message: 'User logged in successfully!',
            access_token: token,
            status: 'success',
        }, 200)
    }
    catch (error) {
        return c.json({
            message: 'User not found',
            status: 'error',
        }, 404)
    }
}

export { userSignUp, userLogin }