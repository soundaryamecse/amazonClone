import React from 'react'
import Styled from 'styled-components'
import {Link} from 'react-router-dom'

const SecondHeader=Styled.div` 
    .secondHead{
        display:flex;
        background:rgba(38, 50, 56,1.0);
        width:102%;
        height:60px;
        font-size:20px;
        position:relative;        
        left:-15px;    
        color:white;
        line-height:14px;  
        justify-content:space-between;
        span{
            font-size:12px;
        }  
    }
    .link{
        margin-left:300px;
    }
    
    
    
`
const NavBar=()=>{
    return(
    
        <SecondHeader>
                <div className="secondHead">
                    <div className="d-flex pt-2">
                        <div> <i class="fas fa-map-marker-alt" style={{color:"white",padding:"10px"}}></i>  </div>
                        <div><span>Deliver to </span><p>India</p></div>
                    </div>
                    <div className="link pt-2">
                        <Link to="/" style={{textDecoration:"none",color:"white",padding:"30px",position:"relative",top:"10px"}}>Home</Link>
                         <Link to="/products" style={{textDecoration:"none",color:"white",padding:"30px",position:"relative",top:"10px"}}>Products</Link>
                        
                    </div>
                    <div className="pt-3">Amazon's Response to covid-19</div>
                </div>
        </SecondHeader>
    )
}

export  default NavBar