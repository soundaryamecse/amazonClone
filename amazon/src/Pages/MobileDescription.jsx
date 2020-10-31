import React from 'react'
import {AppContext} from '../ContextApi/AppContext'


class MobileDescription extends React.Component{
    render()
    {
        const {id}=this.props.match.params
        console.log(this.props.match.url)
        const {url}=this.props.match
        const {mobile,handleCart}=this.context
        console.log(id)
        const item=mobile.find(item=>item.id===Number(id))

        if(item===undefined)
        {
            return (<h4>Error Page Not Found</h4>)
        }
        else
        {
            return(
                
                    <div className="card mb-3" width="700px" >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <img src={item.image} class="card-img" height="400px" width="400px" alt="..."/>
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <small style={{color:"blue"}}>Ratings:{item.ratings}</small>
                                <h6 className="card-text">Description:</h6>
                                <div dangerouslySetInnerHTML={{__html:item.description}}></div>
                                <button className="btn btn-primary" onClick={()=>handleCart(url)}>Add To Cart</button>
                            </div>
                            </div>
                        </div>
                    </div>
                
            )
        }
    }
}

MobileDescription.contextType=AppContext

export default MobileDescription