import React from 'react'
import Home from '../Pages/Home'
import Bollywood from '../Pages/Bollywood'
import Technology from '../Pages/Technology'
import Hollywood from '../Pages/Hollywood'
import Fitness from '../Pages/Fitness'
import Food from '../Pages/Food'
import { Route, Routes } from 'react-router-dom'
import SingleDataComponent from '../Pages/SingleDataComponent'
import SinglePageDetails from '../Pages/SinglePageDetails'

const RouteFile = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bollywood' element={<Bollywood/>}/>
        <Route path='/technology' element={<Technology/>}/>
        <Route path='/hollywood' element={<Hollywood/>}/>
        <Route path='/fitness' element={<Fitness/>}/>
        <Route path='/food' element={<Food/>}/>
        <Route path=':category/articleid' element={<SingleDataComponent/>}/>
        <Route path='*' element={<SinglePageDetails/>}/>
    </Routes>
  )
}

export default RouteFile