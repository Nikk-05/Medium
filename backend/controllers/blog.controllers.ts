import { Context } from "hono"

const getAllBlogs = async (c: Context) => {
    try {
        const userId = c.get('userId')
        const prisma = c.get('prisma')

        const posts = await prisma.post.findMany({
            where: {
                authorId: userId
            }
        })
        return c.json({
            data: posts,
            message: 'Fetched all blogs successfully!',
            status: 'success',
        }, 200)
    }
    catch (error) {
        return c.json({
            error: 'Uable to get posts'
        }, 404)
    }
}

const updateBlog = async (c: Context) => {
    const data = await c.req.json()
    return c.json({
        message: `Blog with ID ${data.id} updated successfully!`,
        status: 'success',
    }, 200)
}

const createBlog = async (c: Context) => {
    try {
        const prisma = c.get('prisma')
        const { title, content, published } = await c.req.json()
        const userId = c.get('userId')
        await prisma.post.create({
            data: {
                title,
                content,
                published,
                authorId: userId
            }
        })
        return c.json({
            message: "Post created successfully",
            status: 'success'
        }, 200)
    }
    catch (error) {
        return c.json({
            message: "Unable to create Post",
            status: 'error'
        }, 403)
    }
}

export { getAllBlogs, updateBlog, createBlog }