import React from 'react';
import ReactDOM from 'react-dom'
//import logo from './logo.svg';
//import './App.css';
import createReactClass from 'create-react-class'
import { BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'
import GTB from './gtlogo.png'
import {FaArrowLeft} from 'react-icons/fa'
import './address.css'
import axios from 'axios'

var Vaccount = createReactClass({
    getInitialState: function(){
        return{
            
            AccountNumber: null,
            Password: null,

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

            AccountNumber: this.state.AccountNumber,
            Password: this.state.Password,
            
        }

        axios.post('http://fintech-account-backend.herokuapp.com/verifyAccount', data).then((res)=>{
            //alert("Data successfully encrypted")
            
           
            if(res.data == "good"){
                localStorage.setItem("AccountNumber", this.state.AccountNumber)
                localStorage.setItem("Password", this.state.Password)

                this.props.history.push('/vaccount/upload-document')
            }
            else{
                alert("Account number or password is incorrect")
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
                <div className="container6">
                    
                    <div className="subcontainer">
                    <div style={{height:"40px", backgroundColor:"#E04406",borderTopLeftRadius:"40px", borderTopRightRadius: "40px",width: "99%",marginLeft:"0.5%"}}></div>
                    <p style={{color: "whitesmoke"}}><FaArrowLeft id="back" onClick={this.back} style={{marginLeft:"10%", marginRight: "27%", height:"25px",width:"5%"}}/>UPDATE</p>
                      <p className="Iattention">Let's verify your account</p><br/>
                      <form onSubmit={this.post} autoComplete="off">
                      <label className="Hdetails" for="phone">Account Number</label>
                      <input className="phone" id="phone" type="number" onChange={this.stores} name="AccountNumber" placeholder="AccountNumber" required/>
                      <label className="Hdetails2" for="ha">Password</label>
                      <input className="ha" id="ha" onChange={this.stores} name="Password" type="number" placeholder="Password" required/>
                      <br/><br/><br/>
                     <button className="Hstart" value="submit">Next</button>
                    </form>
                    </div>
                    <div className="overlay"></div>

                </div>
            </div>
        )
    }
})


export default Vaccount