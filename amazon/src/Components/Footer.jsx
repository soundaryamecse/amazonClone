import React from 'react'
import {Link} from 'react-router-dom'

const Footer=()=>{
    return(
        <div style={{background:"#212121",paddingTop:"20px",width:"102%",position:"relative",left:"-15px"}}>
        <div class="row justify-content-center">
            <div class="col-3">
                <h5 class="font-weight-bold text-uppercase  text-muted text-center">Get to Know Us</h5>
                <ul class="list-unstyled text-center" >
                    <li> <a href="#!">About Us</a></li>
                    <li> <a href="#!">Careers</a></li>
                    <li> <a href="#!">Press Releases</a></li>
                    <li> <a href="#!">Amazon Cares</a></li>
                    <li> <a href="#!">Gift a Smile</a></li>
                </ul>
            </div>

            

            <div class="col-3">
                <h5 class="font-weight-bold text-uppercase text-muted text-center">Make Money with Us</h5>
                <ul class="list-unstyled text-center" >
                    <li><a href="#!">Sell on Amazon</a></li>
                    <li><a href="#!">Sell under Amazon Accelerator</a></li>
                    <li><a href="#!">Become an Affiliate</a></li>
                    <li><a href="#!">Fulfilment by Amazon</a></li>
                    <li><a href="#!">Advertise Your Products</a></li>
                    <li><a href="#!">Amazon Pay on Merchants</a></li>
                </ul>
            </div>

            <div class="col-3">
                <h5 class="font-weight-bold text-uppercase text-muted text-center">Let Us Help You</h5>
                <ul class="list-unstyled text-center" >
                    <li><a href="#!">COVID-19 and Amazon</a></li>
                    <li><a href="#!">Your Account</a></li>
                    <li><a href="#!">Returns Centre</a></li>
                    <li><a href="#!">100% Purchase Protection</a></li>
                    <li><a href="#!">Amazon App Download</a></li>
                    <li><a href="#!">Amazon Assistant Download</a></li>
                    <li><Link to='/faq' >FAQ</Link></li>
                </ul>
            </div>

        </div>
        <div class="row justify-content-center">
            <div class="col-3 ">
                    <h5 class="font-weight-bold text-uppercase mt-3 mb-4 text-muted text-left text-center">Connect with Us</h5>
                    <ul class="list-unstyled text-center" style={{color:"grey"}} >                        
                        <li style={{display:"inline"}}><i class="fab fa-facebook-f"></i></li>
                        <li style={{display:"inline"}}><i class="fab fa-twitter"></i></li>
                        <li style={{display:"inline"}}><i class="fab fa-instagram"></i></li>
                        <li style={{display:"inline"}}><i class="fab fa-linkedin-in"></i></li>
                        <li style={{display:"inline"}}><i class="fab fa-github"></i></li>
                        <li style={{display:"inline"}}><i class="fab fa-youtube"></i></li>
                    </ul>
                </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-center" >
                    <p class=" text-muted"><span>©️ 1996-2020, Amazon.com, Inc. or its affiliates</span></p>
                </div>
            </div>
        </div>
    </div >

    )
}

export default Footer