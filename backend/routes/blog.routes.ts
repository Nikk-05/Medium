import { Hono } from 'hono'
import { userSignUp, userLogin } from '../controllers/user.controllers'
import { getAllBlogs, updateBlog, createBlog } from '../controllers/blog.controllers'
import { authUser } from '../middleware/authUser.middleware'

const routes = new Hono()

routes.get('/hello', (c) => {
  console.log(c.env)
  return c.text('Hello Hono!')
})

routes.post('/signup', userSignUp);

routes.post('/login', userLogin);

routes.get('/blog', authUser, getAllBlogs);

routes.put('/blog/:id', authUser, updateBlog);

routes.post('/blog', authUser, createBlog);

export default routes;