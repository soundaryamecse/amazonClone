import React from 'react'
import Styled from 'styled-components'

const HomeWrapper=Styled.div`
    position:relative;
    top:-200px;
    text-align:center;
    background:white;
    font-size:12px;
    padding:10px;
    span{
        color:blue;
    }
    .card{
        justify-content:center;
    }
`

const Home=()=>{
    return(
        <div>
               <div id="carouselExampleControls" style={{width:"102%",left:"-15px"}} className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                             <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                             <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v2_en_US_2x._CB428993290_.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg" className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
            </div>
            <HomeWrapper>
            <div className="box"> You are on amazon.com You can also shop on Amazon India for Millions of products
            with fast local delivary <span>Click here to go</span> </div></HomeWrapper>

            <div className="d-flex flex-wrap justify-content-between" style={{position:"relative",top:"-200px"}}>
                <div className="card mt-4" style={{width: "19rem",padding:"20px"}}>
                    <div><h4>Shop By Category</h4></div>
                    <div><img src="img/shop.JPG" style={{height:"250px",width:"237px",}} class="card-img-top" alt="..."/></div>
                    <div className="card-body">
                        <span class="text-primary" style={{fontSize:"12px"}}>Shop Now</span>
                    </div>
                </div>
                <div className="card mt-4 " style={{width: "19rem",padding:"20px"}}>
                    <div><h4>Amazon Basics</h4></div>
                    <div ><img src="img/basics.JPG" style={{height:"250px",width:"237px",}} class="card-img-top" alt="..."/></div>
                    <div className="card-body">
                        <span class="text-primary" style={{fontSize:"12px"}}>See More</span>
                    </div>
                </div>
                <div className="card mt-4" style={{width: "19rem",padding:"20px"}}>
                    <div><h4>Electronics</h4></div>
                    <div style={{alignItems:"center"}}><img src="img/electronics.JPG" style={{height:"250px",width:"237px",}} class="card-img-top" alt="..."/></div>
                    <div className="card-body">
                        <span class="text-primary" style={{fontSize:"12px"}}>See More</span>
                    </div>
                </div>
                <div className="card mt-4" style={{width: "19rem",alignItems:"center",padding:"20px"}}>
                    <div><h4>Sign In for the best Experiance</h4></div>
                    <div><button className="p-2" style={{border:"none",borderRadius:"10px",background:"rgba(245, 127, 23,1.0)",width:"230px"}}>Sign in Securely</button></div>
                    
                </div>
            </div>
        </div>
    
    )
}

export default Home