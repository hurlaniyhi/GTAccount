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

var Address = createReactClass({
    getInitialState: function(){
        return{
            selectC: "#757575",
            PhoneNumber: "",
            Address: "", 
            Gender: ""

        }
    },
    
    stores: function(e){
        this.setState({
            
            [e.target.name]: e.target.value
        })
    },
    
    post: function(e){

        e.preventDefault()

        localStorage.setItem("PhoneNumber", this.state.PhoneNumber)
        localStorage.setItem("Address", this.state.Address)
        localStorage.setItem("Gender", this.state.Gender)

        this.props.history.push('/email/bvn/verify/info/address/upload')
        
        // const data = {

        //     PhoneNumber: this.state.PhoneNumber,
        //     Address: this.state.Address,
        //     Gender: this.state.Gender
            
        // }

        // axios.post('http://fintech-account-backend.herokuapp.com/address', data).then((res)=>{
        //     //alert("Data successfully encrypted")
            
           
        //     if(res.data == "good"){
        //     this.props.history.push('/email/bvn/verify/info/address/upload')
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

    selectColor: function(e){
        this.setState({
            selectC: "whitesmoke",
            Gender: e.target.value
        })
    },
    back: function(){
         
        this.props.history.push("/email/bvn/verify/info")
    },
    render: function(){
        return(
            <div>
                <div className="container6">                
                    <div className="subcontainer">
                    <div style={{height:"40px", backgroundColor:"#E04406",borderTopLeftRadius:"40px", borderTopRightRadius: "40px",width: "99%",marginLeft:"0.5%"}}></div>
                    <p style={{color: "whitesmoke"}}><FaArrowLeft id="back" onClick={this.back} style={{marginLeft:"10%", marginRight: "27%", height:"25px",width:"5%"}}/>SIGN UP</p>
                      <p className="Iattention">Other Information</p>
                      <form onSubmit={this.post} autoComplete="off">
                      <label className="Hdetails" for="phone">Phone Number</label>
                      <input className="phone" id="phone" type="number" onChange={this.stores} name="PhoneNumber" placeholder="Enter Phone Number" required/>
                      <label className="Hdetails2" for="ha">Home Address</label>
                      <input className="ha" id="ha" onChange={this.stores} name="Address" type="text" placeholder="Enter Home Address" required/>
                      <label className="Hdetails3" for="gender">Gender</label>
                      <select onChange={this.stores} name="Gender" className="gender" id="gender" style={{color: this.state.selectC}} onChange={this.selectColor} required>
                      <option>Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      </select>
                     <button className="Hstart" value="submit">Next</button>
                    </form>
                    </div>
                    <div className="overlay"></div>

                </div>
            </div>
        )
    }
})


export default Address