import React from 'react'
import {BrowserRouter ,Routes ,Route} from 'react-router-dom'
import GlobalLayout from './layouts/GlobalLayout'
import Home from './pages/Home'
const Router = () => {
  
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<GlobalLayout />}>
            <Route path='' element={<Home />} />

            </Route>
        </Routes>
        </BrowserRouter>
        </>
    ) 
}

export default Router
