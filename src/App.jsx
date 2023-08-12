import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Posts from './components/Posts'
import PostForm from './components/PostForm'
import Login from './components/Login'
import Register from './components/Register'



import './App.css'

function App() {


  return (
    <>
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/post" element={<Posts />}/>
    </Routes>

    </>
  )
}

export default App
