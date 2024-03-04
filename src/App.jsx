import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import MainPage from './pages/MainPage'
import CharacterPage from './pages/CharacterPage'
import NotFoundPage from './pages/NotFoundPage'
import TestPage from './pages/TestPage'


export default function App() {
  return (
    <div>
      <Link to='/test'>test page</Link>
    <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path="/character/:id" element={<CharacterPage/>}/>
        <Route path="/test" element={<TestPage/>}/>
        <Route path="/not-found" element={<NotFoundPage/>}/>
        
    </Routes>
    </div>
  )
}
