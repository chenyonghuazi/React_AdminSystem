import React from 'react'
//import {Navigate} from 'react-router-dom'

import App from '../App'
import List from '../pages/List'
import Edit from '../pages/Edit'
import Profile from '../pages/Profile'
import Login from '../pages/Login'
import Register from '../pages/Register'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

const BaseRouter = ()=> (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='/list' element={<List/>}></Route>
                <Route path='/edit' element={<Edit/>}></Route>
                <Route path='/profile' element={<Profile/>}></Route>
            </Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
        </Routes>
    </BrowserRouter>
)

export default BaseRouter