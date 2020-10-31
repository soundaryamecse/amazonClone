import React from 'react'
import {AppContext} from '../ContextApi/AppContext'
import {Link} from 'react-router-dom'


class Mobile extends React.Component{
    render()
    {
        const {mobile}=this.context
        const {match}=this.props
        console.log(match)
       
        if(match.params.orderBy == "asc"){
            mobile.sort((a, b) => a.price - b.price);
        }
        else if(match.params.orderBy == "desc"){
            mobile.sort((a, b) => b.price - a.price);
        }
        
        return(
                <div>
                    <div>
                         <Link to="/product/sort/asc">Low to High</Link>
                        <Link to="/product/sort/desc">High to Low</Link>
                    </div>
                    <div style={{display:"flex",flexWrap:"wrap"}}>
                        {mobile && mobile.map((item)=>(
                            <Link to={`mobile/${item.id}`} style={{textDecoration:"none"}}>
                            <div className="card p-3 pl-2 m-2" style={{width: "19rem",height:"380px"}}>                        
                                <div style={{height:"180px"}}><img src={item.image} style={{height:"180px",width:"150px",marginLeft:"40px"}} class="card-img-top" alt="..."/></div>
                                <div style={{height:"80px",marginTop:"10px"}}><h6>{item.name}</h6></div>
                                <div className="card-body d-flex justify-content-between">
                                    <div class="text-dark">₹{item.price}</div>
                                    <div><span class="text-primary" style={{fontSize:"12px"}}>See More</span></div>
                                </div>
                        </div></Link>
                        ))}
                    </div>
                </div>
            
        )
    }
}

Mobile.contextType=AppContext

export default Mobile


