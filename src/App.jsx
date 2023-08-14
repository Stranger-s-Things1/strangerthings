import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { createContext, useState } from 'react'
import Posts from './components/Posts'
import PostForm from './components/PostForm'
import Register from './components/Register'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import './App.css'

export const LoginContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <>
      <LoginContext.Provider value={loggedIn}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/users/register" element={<Register />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/post/form" element={<PostForm />} />
          </Routes>
        </BrowserRouter>
      </LoginContext.Provider>

    </>
  )
}

export default App
