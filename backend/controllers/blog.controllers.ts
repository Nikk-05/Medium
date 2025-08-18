import { Context } from "hono"
import { createBlogSchemaValidation, updateBlogSchemaValidation } from "@nikk_05/medium-global"

const getAllBlogs = async (c: Context) => {
    try {
        const prisma = c.get('prisma')

        interface Author {
            fullname: string;
        }

        interface Post {
            id: string;
            title: string;
            content: string;
            publishedDate: string;
            author: Author;
        }

        interface Blog {
            id: string;
            title: string;
            content: string;
            publishedDate: string;
            authorName: string;
        }

        const posts: Post[] = await prisma.post.findMany({
            include: {
                author: {
                    select: {
                        fullname: true
                    }
                }
            }
        });

        const allBlogs: Blog[] = posts.map((post: Post): Blog => ({
            id: post.id,
            title: post.title,
            content: post.content,
            publishedDate: post.publishedDate,
            authorName: post.author.fullname
        }));

        return c.json({
            data: allBlogs,
            message: 'Fetched all blogs successfully!',
            status: 'success',
        }, 200)
    }
    catch (error) {
        return c.json({
            error: 'Uable to get posts' + error
        }, 404)
    }
}

const getBlogById = async (c: Context) => {
    try {
        const postId = c.req.param('id')
        const prisma = c.get('prisma')


        const data = await prisma.post.findUnique({
            where: { id: postId },
            include: {
                author: {
                    select: {
                        fullname: true
                    }
                }
            },
        })
        const blog = {
            id: data.id,
            title: data.title,
            content: data.content,
            publishedDate: data.publishedDate,
            authorName: data.author.fullname
        }

        return c.json({
            blog: blog,
            message: "Blog fetched successfully!",
            status: 'success'
        }, 200)
    }
    catch (error) {
        return c.json({
            message: "Unable to get blog by ID" + error,
            status: 'error'
        }, 404)
    }
}


const updateBlog = async (c: Context) => {
    try {
        const postId = c.req.param('id')
        const { title, content } = await c.req.json()
        const { success } = updateBlogSchemaValidation.safeParse({ title, content })
        if (!success) {
            return c.json({
                message: "Invalid input data",
                status: 'error',
            }, 400)
        }
        const prisma = c.get('prisma')
        const post = await prisma.post.update({
            where: { id: postId },
            data: {
                title,
                content,
            }
        })
        return c.json({
            message: `Blog with ID ${postId} updated successfully!`,
            status: 'success',
            data: post
        }, 200)

    }
    catch (error) {
        return c.json({
            message: error,
            status: 'error'
        }, 400)
    }
}

const createBlog = async (c: Context) => {
    try {
        const prisma = c.get('prisma')
        const { title, content } = await c.req.json()
        const publishedDate = new Date().toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        }).replace(/ /g, ' ');
        const { success } = createBlogSchemaValidation.safeParse({ title, content, publishedDate })
        if (!success) {
            return c.json({
                message: "Invalid input data",
                status: 'error',
            }, 400)
        }
        const userId = c.get('userId')
        await prisma.post.create({
            data: {
                title,
                content,
                publishedDate,
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
            message: "Unable to create Post" + error,
            status: 'error'
        }, 403)
    }
}

const getUsersPost = async (c: Context) => {
    try {
        const prisma = c.get('prisma')
        const userId = c.req.param('id')

        interface Author {
            fullname: string;
        }

        interface Post {
            id: string;
            title: string;
            content: string;
            publishedDate: string;
            author: Author;
        }

        interface Blog {
            id: string;
            title: string;
            content: string;
            publishedDate: string;
            authorName: string;
            authorId: string;
        }

        const posts: Post[] = await prisma.post.findMany({
            where: {
                authorId: userId
            },
            include: {
                author: {
                    select: {
                        fullname: true
                    }
                }
            }
        });

        const myBlogs: Blog[] = posts.map((post: Post): Blog => ({
            id: post.id,
            title: post.title,
            content: post.content,
            publishedDate: post.publishedDate,
            authorName: post.author.fullname,
            authorId:userId
        }));



        return c.json({
            data: myBlogs,
            message: "User's blog fetched",
            success: true
        }, 200)
    }
    catch (error) {
        c.json({
            message: error,
            success: false
        }, 404)
    }
}

const deletePost = async(c:Context) => {
    try{
        const prisma = c.get('prisma')
        const blogId = c.req.param('id')
        await prisma.post.delete({
            where:{
                id: blogId
            }
        })
        return c.json({
            message:"Post deleted successfully"
        }, 200)
    }
    catch(error){
        return c.json({
            message: "Something went wrong",
            success: false
        }, 402)
    }

}

export { getAllBlogs, updateBlog, createBlog, getBlogById, getUsersPost, deletePost }