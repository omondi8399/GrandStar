import { Route, Routes } from 'react-router-dom'
import Header from "./components/Header"
import Home from "./views/Home"
import Project from './views/Project'
import { isWallectConnected } from './services/blockchain'
import { useEffect } from 'react'

const App = () => {
  useEffect(async () => {
    await isWallectConnected()
    console.log('Blockchain Loaded')
  }, [])
  return (
    <div className="min-h-screen relative">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<Project />} />
      </Routes>
    </div>
  )
}

export default App
