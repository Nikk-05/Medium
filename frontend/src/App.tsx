import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IntroPage from './pages/IntroPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Viewblog from './pages/Viewblog'
import Blogs from './pages/Blogs'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blog/:id" element={<Viewblog />} />
           <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App 