import React from 'react'
import {Link,Redirect} from 'react-router-dom'
import {AppContext} from "../ContextApi/AppContext"

class Cart extends React.Component{
    render()
    {
        
        const {cart,isAuth}=this.context
        console.log(cart)
        if(!isAuth)
        {
            return(
                <Redirect push to="/login"/>
            )
        }
        return(
            <div>
            <ul class="list-group">
                {cart && cart.map((item)=>(                    
                    <li class="list-group-item d-flex">
                        <div><img src={item.image} height="100px" width="100px"/></div>
                        <div>{item.name}----</div>
                        <div style={{color:"red"}}>₹{item.price}</div>                       
                    </li>
                    ))}
                </ul>
                <Link to="/">Go Back To Home</Link>
             </div>       
        )
    }
}

Cart.contextType=AppContext
export default Cart