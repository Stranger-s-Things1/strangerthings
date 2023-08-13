import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Posts from './components/Posts'
import PostForm from './components/PostForm'
import Register from './components/Register'
import Home from './Pages/Home'
import Profile from './Pages/Profile'


import './App.css'

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/users/register" element={<Register />}/>
      <Route path="/posts" element={<Posts />}/>
      <Route path="/post/form" element={<PostForm />} />
    </Routes>

    </>
  )
}

export default App
