import React from 'react';
import ReactDOM from 'react-dom'
//import logo from './logo.svg';
//import './App.css';
import createReactClass from 'create-react-class'
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect} from 'react-router-dom'
import GTB from './gtlogo.png'
import {FaArrowRight, FaPlusCircle,FaCheckCircle} from 'react-icons/fa'
import './complete.css'
import axios from 'axios'

var Complete = createReactClass({
    getInitialState: function(){
        return{
            pics: "",
            accountNumber: "",
            email: "",
            password: "",
            firstName: ""
        }
    },
    // componentDidMount: function(){
        
    //     const data = {
    //         Email: localStorage.getItem("Email")
    //     }

    // axios.post('https://akachi-task-manager-api.herokuapp.com/congrat', data).then((res)=>{
     
   

    // if(res.data.comment === "good"){    
       
    //     //alert(URL.createObjectURL(res.data.passport))
    //     document.querySelector("#myImage").style.display = "block"
    //     document.querySelector("#myImage").src = res.data.Passport
        
    //     this.setState({
    //         pics: res.data.Passport,
    //         accountNumber: res.data.AccountNumber,
    //         email: res.data.email,
    //         password: res.data.Password,
    //         firstName: res.data.firstName
    //     })
    // }
    
    
        
        
    // }).catch((err)=>{
    //     this.props.history.push('/email/bvn/verify/info/address/upload')
    //     console.log(err)
    // })
    
    // },
    
   
    message: function(){
        alert("Welcome to GTBank")
        localStorage.clear()
        this.props.history.push("/")
    },
    render: function(){
        return(
            <div>
                <div className="containerC">
                    
                    <div className="subcontainer">
                    <div style={{height:"40px", backgroundColor:"#E04406",borderTopLeftRadius:"40px", borderTopRightRadius: "40px",width: "99%",marginLeft:"0.5%"}}></div>
                      <p style={{textAlign: "center", color: "#000",fontSize:"18px"}}>Registration Complete</p>
                      <div className="profilePics"><img src="default.jpg" id="myImage" style={{height:"100px", width:"100%", display:"none",  borderRadius: "100px"}} /></div>
                      <div id="wrap">
                      <i className="Cattention">Congratulations {this.state.firstName}!</i><br/>
                      <i className="Cattention2">Your account is now open!</i>
                      </div>
                      <p className="Adetails">An email with these details has been forwarded to<br/>{this.state.email}</p>
                      <p className="acct">Your account number is:</p>  
                      <p className="acctNum">{this.state.accountNumber}</p>
                      <p className="acct">Your password is:</p>  
                      <p className="acctNum">{this.state.password}</p>
                      <p className="Adetails">You can now log in with your Account Number, Phone<br/> Number and Email Address</p>
                      <button className="Cstart" onClick={this.message}>Get Started</button>
                      {/* <a href={this.state.pics} download><button>click me</button></a> */}
                        
                    </div>
                    <div className="overlayC"></div>

                </div>
            </div>
        )
    }
})


export default Complete