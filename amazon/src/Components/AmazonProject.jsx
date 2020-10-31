import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Header from './Header'
import NavBar from './NavBar'
import PublicRoute from './PublicRoute'
import Footer from './Footer'

const AmazonProject=()=>{
    return(
        <BrowserRouter>            
            <Header/>
            <NavBar/>
            <PublicRoute/>
            <Footer/>
        </BrowserRouter>
    )
}

export default AmazonProject