import React from 'react';
import ReactDOM from 'react-dom'
//import logo from './logo.svg';
//import './App.css';
import createReactClass from 'create-react-class'
import { BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'
import GTB from './gtlogo.png'
import GTAccount from './GTAccount.jpg'
import {FaArrowRight} from 'react-icons/fa'
import './signup.css'

var SignUp = createReactClass({
    render: function(){
        return( 

            <div id="background">
                <div className="container1">
                    
                    <div className="subcontainer1">
                      <div className="infoLogo">
                      <img src={GTAccount} className="logo"/>
                      <h2 className="caption" style={{color: "whitesmoke", fontSize: "22px", fontWeight: "600"}}>GTAccount</h2>
                      </div>
                      <h3 className="attention">Take control of your money</h3>
                      <p className="details">Sign up with your Email and BVN</p>
                      <NavLink to="/vaccount" style={{textDecoration:"none"}}><button className="doc">Upload Documents (Existing Account)</button></NavLink>
                      <NavLink to="/email" style={{textDecoration:"none"}}><button className="signup">Open my account</button></NavLink>
                      {/* <FaArrowRight style={{paddingLeft:"25%",height: "15px",width: "20%", paddingTop:"5px"}}/> */}
                    </div>
                    <div className="overlay"></div>

                </div>
            </div>
        )
    }
})


export default SignUp