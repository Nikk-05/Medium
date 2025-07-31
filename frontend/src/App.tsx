import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IntroPage from './pages/IntroPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Blog from './pages/Blog'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App 