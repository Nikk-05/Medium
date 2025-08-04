import { Context } from 'hono'
import { generateToken } from '../middleware/authUser.middleware'
import bcrypt from 'bcryptjs'
import { signUpSchemaValidation, loginSchemaValidation } from '@nikk_05/medium-global'


const userSignUp = async (c: Context) => {
    try {
        const prisma = c.get('prisma')
        const { email, fullname, password } = await c.req.json()
        const { success } = signUpSchemaValidation.safeParse({ email, fullname, password })
        if (!success) {
            return c.json({
                message: "Invalid input data",
                status: 'error',
            }, 400)
        }
        const hashedPassword = await bcrypt.hash(password, 10);
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
            data: user.fullname,
            message: `User with email ${user.email} created successfully!`,
            status: 'success',
            access_token: token
        }, 201)
    }
    catch (error) {

        return c.json({
            message: "Error creating user" + error,
            status: 'error',
        }, 500)
    }

}

const userLogin = async (c: Context) => {
    try {
        const prisma = c.get('prisma')
        const { email, password } = await c.req.json()
        const { success } = loginSchemaValidation.safeParse({ email, password })
        if (!success) {
            return c.json({
                message: "Invalid input data",
                status: 'error',
            }, 400)
        }
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
            data: user.fullname,
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