import { Hono } from 'hono'
import { userSignUp, userLogin } from '../controllers/user.controllers'
import { getAllBlogs, updateBlog, createBlog, getBlogById, getUsersPost, deletePost } from '../controllers/blog.controllers'
import { authUser } from '../middleware/authUser.middleware'

const routes = new Hono()


routes.post('/signup', userSignUp);

routes.post('/login', userLogin);

routes.get('/blogs', authUser, getAllBlogs);

routes.get('/blog/:id', authUser, getBlogById);

routes.put('/blog/:id', authUser, updateBlog);

routes.post('/blog', authUser, createBlog);

routes.get('/blog/user/:id', authUser, getUsersPost)

routes.delete('/blog/:id', authUser, deletePost)



export default routes;