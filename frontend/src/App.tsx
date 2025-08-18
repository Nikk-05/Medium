import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IntroPage from './pages/IntroPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Logout from './pages/Logout'
import Viewblog from './pages/Viewblog'
import Blogs from './pages/Blogs'
import PublishBlog from './pages/PublishBlog'
import Myblogs from './pages/Myblog'
import { ToastContainer } from 'react-toastify'
import UpdatePost from './pages/UpdatePost'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/blog/:id" element={<Viewblog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/create" element={<PublishBlog />} />
          <Route path="/userblogs/:id" element={<Myblogs />} />
          <Route path="/update-post/:id" element={<UpdatePost />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App 