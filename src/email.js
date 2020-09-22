import React from 'react';
import ReactDOM from 'react-dom'
//import logo from './logo.svg';
//import './App.css';
import createReactClass from 'create-react-class'
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect} from 'react-router-dom'
import GTB from './gtlogo.png'
import {FaArrowLeft} from 'react-icons/fa'
import './email.css'
import axios from 'axios'

var Email = createReactClass({
    getInitialState: function(){
        return{
            email: ""
        }
    },

    stores: function(e){
        this.setState({
            email: e.target.value
        })
    },  
    
    post: function(e){
       
        e.preventDefault()
       localStorage.setItem('Email',this.state.email)
        const data = {

            Email: this.state.email
            
        }

        axios.post('https://akachi-task-manager-api.herokuapp.com/email', data).then((res)=>{
            
           
            if(res.data.comment == "good"){
                localStorage.setItem("vcode", res.data.code)
                this.props.history.push('/email/bvn')
            }
           
            
            else{
            
                alert("User already exist")
                
            }
            
            
            
        }).catch((err)=>{
            alert("error occurred")
            console.log(err)
        })
    },
     back: function(){
         
         this.props.history.push("/")
     },
    render: function(){
        return(
            <div>
                <div className="container2">
                    
                    <div className="subcontainer">
                    <div style={{height:"40px", backgroundColor:"#E04406",borderTopLeftRadius:"40px", borderTopRightRadius: "40px",width: "99%",marginLeft:"0.5%"}}></div>
                   <p style={{color: "whitesmoke"}}><FaArrowLeft id="back" onClick={this.back} style={{marginLeft:"10%", marginRight: "27%", height:"25px",width:"5%"}}/>SIGN UP</p>
                      <p className="Eattention">Let's get started</p>
                      <form onSubmit={this.post} autoComplete="off">
                      <label className="Edetails" for="email">What's your email?</label>
                      <input className="email" id="email" onChange={this.stores} name="Email" type="email" placeholder="Enter Your Email" required/>
                      {/* <p id="message" style={{textAlign:"center",color:"red",fontSize:"12px",visibility: "hidden"}}>Email already used</p> */}
                      <button className="Estart" value="submit">Start</button>
                      </form>
                    </div>
                    <div className="overlay"></div>

                </div>
            </div>
        )
    }
})


export default Email