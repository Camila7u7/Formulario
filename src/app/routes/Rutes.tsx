import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home} from '../screens/Home'


export const Rutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
    </Routes>
  )
}
