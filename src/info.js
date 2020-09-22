import React from 'react';
//import ReactDOM from 'react-dom'
//import logo from './logo.svg';
//import './App.css';
import createReactClass from 'create-react-class'
import { BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'
import GTB from './gtlogo.png'
import {FaArrowLeft} from 'react-icons/fa'
import './info.css'
import axios from 'axios'

var Info = createReactClass({
    getInitialState: function(){
        return{
            FirstName: "",  
            MiddleName: "",
            LastName: ""
        }
    },

    stores: function(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    },
    
    post: function(e){

        e.preventDefault()
  
        localStorage.setItem("FirstName",this.state.FirstName)
        localStorage.setItem("MiddleName",this.state.MiddleName)
        localStorage.setItem("LastName",this.state.LastName)

        this.props.history.push('/email/bvn/verify/info/address')

        
        // const data = {

        //     FirstName: this.state.FirstName,
        //     MiddleName: this.state.MiddleName,
        //     LastName: this.state.LastName
            
        // }

        // axios.post('https://fintech-account-backend.herokuapp.com/info', data).then((res)=>{
        //     //alert("Data successfully encrypted")
            
           
        //     if(res.data == "good"){
        //     this.props.history.push('/email/bvn/verify/info/address')
        //     }
        //     else{
        //         alert("wait")
        //     }

        //     // this.setState({
        //     //     encryptedData: res.data
        //     // })
            
            
        // }).catch((err)=>{
        //     alert("error occurred")
        //     console.log(err)
        // })
    },
    back: function(){
         
        this.props.history.push("/email/bvn/verify")
    },
    render: function(){
        return(
            <div>
                <div className="container5">
                    
                    <div className="subcontainer">
                    <div style={{height:"40px", backgroundColor:"#E04406",borderTopLeftRadius:"40px", borderTopRightRadius: "40px",width: "99%",marginLeft:"0.5%"}}></div>
                    <p style={{color: "whitesmoke"}}><FaArrowLeft id="back" onClick={this.back} style={{marginLeft:"10%", marginRight: "27%", height:"25px",width:"5%"}}/>SIGN UP</p>
                      <p className="Iattention">Full legal Name</p>
                      <form onSubmit={this.post} autoComplete="off">
                      <label className="Idetails" for="fname">First name</label>
                      <input className="fname" id="fname" onChange={this.stores} name="FirstName" placeholder="Enter First Name" required/>
                      <label className="Idetails2" for="mname">Middle Name</label>
                      <input className="mname" id="mname" onChange={this.stores} name="MiddleName" type="text" placeholder="Enter Middle Name (optional)" required/>
                      <label className="Idetails3" for="lname">Last Name</label>
                      <input className="lname" id="lname" onChange={this.stores} name="LastName" type="text" placeholder="Enter Last Name" required/>
                     <button className="Istart" value="submit">Next</button>
                     </form>
                    </div>
                    <div className="overlay"></div>

                </div>
            </div>
        )
    }
})


export default Info