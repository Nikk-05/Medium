import {Hono} from 'hono'
import { userSignUp, userLogin } from '../controllers/user.controllers'
import { getAllBlogs, updateBlog, createBlog } from '../controllers/blog.controllers'

const routes = new Hono()

routes.get('/hello', (c) => {
    console.log(c.env)
  return c.text('Hello Hono!')
})

routes.post('/signup', userSignUp);

routes.post('/login', userLogin);

routes.get('/blog', getAllBlogs);

routes.put('/blog', updateBlog);

routes.post('/blog', createBlog);

export default routes;