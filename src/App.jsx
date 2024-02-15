import React from 'react'
import {Route, Routes} from 'react-router-dom'
import MainPage from './pages/MainPage'
import CharacterPage from './pages/CharacterPage'


export default function App() {
  return (
    <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path="/character/:id" element={<CharacterPage/>}/>
    </Routes>
  )
}
