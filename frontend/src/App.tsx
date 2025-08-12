import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IntroPage from './pages/IntroPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Logout from './pages/Logout'
import Viewblog from './pages/Viewblog'
import Blogs from './pages/Blogs'
import PublishBlog from './pages/PublishBlog'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/blog/:id" element={<Viewblog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/create" element={<PublishBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App 