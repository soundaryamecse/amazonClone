import React from 'react'
import Styled from 'styled-components'
import {AppContext} from "../ContextApi/AppContext"
import {Link} from 'react-router-dom'

const HeaderWrapper=Styled.div`
    display:flex;
    flex-wrap:wrap;
    height:70px;
    background:#212121;
    width:102%;
    justify-content:space-between;
    position:relative;
    left:-15px;
    .navbar{

    }
    .navbar:hover{
        border:1px solid white;
    }
    img{
        height:50px;
        margin-top:10px;
    }
    span{
        font-weight:bolder;
        font-size:16px;
        color:white;
    }
    .searchbar{
        border:none;
        padding:10px;

    }
    
    
    
`


class Header extends React.Component{
    render()
    {
        const {cart}=this.context
        return(
            <div>
            <HeaderWrapper>
                <div ><i class="fa fa-bars" aria-hidden="true" 
                style={{color:"#E0E0E0",fontSize:"25px",border:"1px solid #E0E0E0",padding:"10px",
                borderRadius:"5px",marginTop:"10px"}}></i></div>
                <div><img src="img/amazon.jpg" alt="amazon" /></div>
    
                <div class="col-auto" style={{marginTop:"7px"}}>
                    <label class="sr-only" for="inlineFormInputGroup">Search For Item</label>
                    <div class="input-group mb-2 pt-1">
                        <div class="input-group-prepend">
                            <div class="input-group-text">All</div>
                        </div>
                            <div><input type="text" className="searchbar" id="inlineFormInputGroup" placeholder="Search for Item" style={{width:"500px"}} /></div>
                        <div class="input-group-prepend" >
                            <div class="input-group-text" style={{background:"rgba(245, 127, 23,1.0)" ,border:"none",borderRadius:"0px 5px 5px 0px",width:"50px"}}></div>
                        </div>                    
                    </div>
                </div>
                <div><i style={{ textAlign: "left",position:"relative", left:"-585PX", top: "20px",color:"black" }} class="fas fa-caret-down"></i>
    </div>
                <div><i class="fa fa-search" aria-hidden="true" style={{color:"white",position:"relative",left:"-80px",top:"20px"}}></i></div>
                <Link to="/login" style={{textDecoration:"none"}}><div  className="text-white ml-5 mt-3" style={{fontSize:"12px"}}>Hello,<span>SignIn</span><i class="fas fa-caret-down" style={{color:"white",padding:"10px"}}></i></div></Link>
                <div className="text-white ml-5 mt-3" style={{fontSize:"12px"}}>Returns & <span>Orders</span><i class="fas fa-caret-down" style={{color:"white",padding:"10px"}}></i></div>
                <Link to="/cart"><div className="ml-5 mt-3"><i class="fas fa-shopping-cart" style={{color:"white"}}><span>Cart<span style={{color:"red"}}>{`  ${cart.length}`}</span> </span></i></div></Link>
                         
                
            </HeaderWrapper>
            
                
            
        </div>
        )
    }
    
}

Header.contextType=AppContext

export default Header