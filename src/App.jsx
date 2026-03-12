import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import Login from './pages/Login'
import { Route, Router, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import List from './pages/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/list"
        element={
          <ProtectedRoute>
            <List />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default App
