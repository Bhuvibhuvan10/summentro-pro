import React from 'react';
import Home from '../pages/Home';
import PastEdition from '../pages/PastEdition'
import Nomination from '../pages/Nomination'
import Awards from '../pages/Awards'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import {Routes,Route} from 'react-router-dom'
const Routers = () => {
  return <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/pastEditions' element={<PastEdition/>}/>
    <Route path='/nomination' element={<Nomination/>}/>
    <Route path='/awards' element={<Awards/>}/>
    <Route path='/blog' element={<Blog/>}/>
    {/* <Route path='/login' element={<Login/>}/> */}
    {/* <Route path='/register' element={<Signup/>}/> */}
    <Route path='/contact' element={<Contact/>}/>
   
  </Routes>
}

export default Routers;
