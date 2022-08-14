import React from 'react'
//import {Navigate} from 'react-router-dom'

//pages
import LifeService from '../pages/Main/LifeService'
import Shop from '../pages/Main/Shop'
import User from '../pages/Main/User'
import City from '../pages/City'
import Search from '../pages/Search'
import Details from '../pages/Details'
import Login from '../pages/Login'
//container
import Layout from '../pages/Main/Layout'


import { BrowserRouter, Routes, Route } from 'react-router-dom'

const router = () => {
    return (
        <BrowserRouter>

            <Routes>

                

                <Route path="/City" element={<City />}></Route>
                <Route path="/search/:inputvalue" element={<Search />}></Route>
                <Route path="/details/:id" element={<Details />}></Route>
                <Route path="/login" element={<Login />}></Route>

                {/* 底层保底路由 免去写redirect的麻烦 除非已准备不存在的页面*/}
                <Route path="/" element={<Layout />}>
                    <Route path="/life" element={<LifeService />}></Route>
                    <Route path="/shop" element={<Shop />}></Route>
                    <Route path="/user" element={<User />}></Route>
                </Route>

            </Routes>

        </BrowserRouter>
    )
}

export default router