import React from 'react'
import {Link} from 'react-router-dom'


class Products extends React.Component{
    render()
    {
        return(
            <div className="d-flex justify-content-center">
               <Link to="/mobile" style={{textDecoration:"none"}}> <div className="card p-3 pl-4 mt-3" style={{width: "19rem"}}>
                    <div><h4 className="text-dark">Mobile</h4></div>
                    <div><img src="https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBOPPO-A12-3-GFUTU629745E657DA2D/1591384302184_0..png" style={{height:"250px",width:"237px",}} class="card-img-top" alt="..."/></div>
                    <div className="card-body">
                        <span class="text-primary" style={{fontSize:"10px"}}>See More</span>
                    </div>
                </div></Link>
                <Link to="/tv" style={{textDecoration:"none"}}><div className="card p-3 pl-4 mt-3 ml-3" style={{width: "19rem"}}>
                    <div><h4 className="text-dark">Appliances</h4></div>
                    <div><img src="https://previews.123rf.com/images/tan4ikk/tan4ikk1601/tan4ikk160100001/50031799-collage-of-different-types-of-kitchen-appliances-isolated-on-white-background.jpg" style={{height:"250px",width:"237px",}} class="card-img-top" alt="..."/></div>
                    <div className="card-body">
                        <span class="text-primary" style={{fontSize:"10px"}}>See More</span>
                    </div>
                </div></Link>
            </div>
        )
    }
}

export default Products