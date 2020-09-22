import React from 'react';
import ReactDOM from 'react-dom'
//import logo from './logo.svg';
//import './App.css';
import createReactClass from 'create-react-class'
import { BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'
import GTB from './gtlogo.png'
import {FaArrowLeft, FaRedoAlt} from 'react-icons/fa'
import './verify.css'
import axios from 'axios'


var Verify = createReactClass({
    getInitialState: function(){
        return{
            vcode: "",
            
        }
    },

    stores: function(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    },
    
    post: function(e){

        e.preventDefault()
        const data = {

            Vcode: this.state.vcode,
            
        }

        if(this.state.vcode===localStorage.getItem('vcode')){
            this.props.history.push('/email/bvn/verify/info')
        }
        
        else{
                 alert("Enter a valid verification code")
             }


    //     if(this.state.vcode==localStorage.getItem('vcode')){
    //     axios.post('http://fintech-account-backend.herokuapp.com/verify', data).then((res)=>{
    //         //alert("Data successfully encrypted")
            
           
    //         if(res.data == "good"){
    //         this.props.history.push('/email/bvn/verify/info')
    //         }

    //         // this.setState({
    //         //     encryptedData: res.data
    //         // })
            
            
    //     }).catch((err)=>{
    //         alert("error occurred")
    //         console.log(err)
    //     })
    // }
    // else{
    //     alert("Enter a valid verification code")
    // }
    },
    resend: function(){
        const data = {

            Email: localStorage.getItem("Email")
            
        }

        axios.post('https://akachi-task-manager-api.herokuapp.com/email', data).then((res)=>{
           
            
           
            if(res.data.comment === "good"){
                localStorage.setItem("vcode", res.data.code)  
            }
           

            
            
        }).catch((err)=>{
            alert("error occurred")
            console.log(err)
        })
    },
    back: function(){
         
        this.props.history.push("/email/bvn")
    },
    render: function(){
        return(
            <div>
                <div className="container4">
                    
                    <div className="subcontainer">
                    <div style={{height:"40px", backgroundColor:"#E04406",borderTopLeftRadius:"40px", borderTopRightRadius: "40px",width: "99%",marginLeft:"0.5%"}}></div>
                    <p style={{color: "whitesmoke"}}><FaArrowLeft id="back" onClick={this.back} style={{marginLeft:"10%", marginRight: "27%", height:"25px",width:"5%"}}/>SIGN UP</p>
                      <p className="Vattention">Enter your verification code</p>
                      <form onSubmit={this.post} autoComplete="off">
                      <label className="Vdetails" for="verify">Enter the 6-digit code sent</label>
                      <input className="verify" id="verify" name="vcode" onChange={this.stores} placeholder="Enter your OTP" required/>
                      <p style={{textAlign: "center", color: "whitesmoke", fontSize: "13px"}}>Did not receive the mail?</p>
                      <p style={{textAlign: "center", paddingTop: "5px", color: "whitesmoke"}} onClick={this.resend}><FaRedoAlt style={{height: "11px", paddingRight:"1%"}}/>Resend mail</p>
                      <button className="Vstart" value="submit">Next</button>
                      </form>
                    </div>
                    <div className="overlay"></div>

                </div>
            </div>
        )
    }
})


export default Verify