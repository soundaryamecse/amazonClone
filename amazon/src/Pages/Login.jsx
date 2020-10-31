import React from 'react'
import { Redirect } from 'react-router-dom'
import Styled from 'styled-components'
import {AppContext} from '../ContextApi/AppContext'

const LoginWrapper=Styled.div`
    border:1px solid lightgrey;
    margin:auto;    
    width:30%;
    background:white;
    text-align:center;
    padding:10px;
    margin-top:10px;
    img{
        height:100px;
        width:100px;
    }
    h3{
        color:blue;
        
    }
    small{
        color:blue;
        position:relative;
        left:-100px;
        top:15px;
        background:#E0F7FA;
    }
    
    input{
        padding:10px;
        border-radius:10px;        
        border:1px solid black;
        width:80%;
        margin:5px;
        

    }
    span{
        color:blue;
        
    }
    p{
        position:relative;
        top:-10px;
    }
    button{
        background:#F9A825;
        color:white;
        border:none;
        border-radius:10px;
        padding:10px;
    }
   

`

class Login extends React.Component{
    render()
    {
        console.log(this.context)
        const {isAuth,email,password,handleChange,handleSubmit}=this.context
        if(isAuth)
        {
            return <Redirect push to="/products" />
        }
        else
        {
            return(
                <LoginWrapper>
                    <img src="img/amazon.JPG" alt="amazon" width="100px" height="50px"/>
                    <h4>Sign In</h4>
                    <p>Use Your Amazon Account</p>
                    <div>       
                        <small>Email</small>
                        <div><input  type="text" name="email" value={email} onChange={handleChange} /></div>
                    </div>
                    <div>       
                        <small>Password</small>
                        <div><input  type="text" name="password" value={password} onChange={handleChange} /></div>
                    </div>
                    <p  className="mt-2 text-muted" style={{fontSize:"12px"}}><span>Learn More</span> about Terms and Condition</p>
                    <div style={{display:"flex",justifyContent:"space-between",padding:"20px"}}>
                        <div style={{color:"blue"}}>Create Account</div>
                       <button onClick={handleSubmit}>Sign In</button>
                       </div>
                </LoginWrapper>
            )

        }
      
    }
    
}

Login.contextType=AppContext
export default Login