import React from 'react'
import {AppContext} from '../ContextApi/AppContext'
import {Link} from 'react-router-dom'


class Tv extends React.Component{
    render()
    {
        const {tv}=this.context
        const {match}=this.props
        console.log(match)
       
        if(match.params.orderBy == "asc"){
            tv.sort((a, b) => a.price - b.price);
        }
        else if(match.params.orderBy == "desc"){
            tv.sort((a, b) => b.price - a.price);
        }
        return(
            <div>
                <div>
                
                <Link to="/produ/sort/asc">Low to High</Link>
                <Link to="/produ/sort/desc">High to Low</Link>
                
                </div>
            <div style={{display:"flex",flexWrap:"wrap"}}>
                {tv && tv.map((item)=>(
                     <Link to={`tv/${item.id}`} style={{textDecoration:"none"}}>
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

Tv.contextType=AppContext

export default Tv


