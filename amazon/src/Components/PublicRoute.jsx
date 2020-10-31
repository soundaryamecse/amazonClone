import React from 'react'
import {Switch,Route,Link} from 'react-router-dom'
import Home from '../Pages/Home'
import Products from '../Pages/Products'
import Mobile from '../Pages/Mobile'
import Tv from '../Pages/Tv'
import MobileDescription from '../Pages/MobileDescription'
import TvDescription from '../Pages/TvDescription'
import Cart from '../Pages/Cart'
import Login from '../Pages/Login'

const Faq=()=>{
    return(
        <div className="d-flex m-3 justify-content-center">
            <h3 className="m-3">This is Faq Page</h3>
            <button className="btn btn-primary m-3"><Link to="/" style={{color:"white",textDecoration:"none"}}>Go to Home</Link></button>
        </div>
    )
}

class PublicRoute extends React.Component{
    render( )
    {
        return (
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/products" component={Products}/> 
                <Route path="/mobile" exact component={Mobile}/>
                <Route path="/tv" exact component={Tv}/>
                <Route path="/mobile/:id" render={(props)=><MobileDescription {...props}/>}/>
                <Route path="/tv/:id" render={(props)=><TvDescription {...props}/>}/>
                <Route path="/faq" component={Faq}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/login" component={Login}/>
                <Route path="/product/sort/:orderBy(asc|desc)" component={Mobile}/>
                <Route path="/produ/sort/:orderBy(asc|desc)" component={Tv}/>
            </Switch>
        )
    }
}

export default PublicRoute