import React from 'react';
import ReactDOM from 'react-dom'
//import logo from './logo.svg';
//import './App.css';
import createReactClass from 'create-react-class'
import { BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'
import GTB from './gtlogo.png'
import {FaArrowLeft, FaPlusCircle,FaCheckCircle} from 'react-icons/fa'
import './upload.css'
import axios from "axios"

var ExistUpload = createReactClass({
    getInitialState: function(){
        return{
            passport: <FaPlusCircle style={{marginRight: "7%", width: "30%",color: "#E04406"}}/>,
            signature: <FaPlusCircle style={{marginRight: "7%", width: "30%",color: "#E04406"}}/>,
            idCard: <FaPlusCircle style={{marginRight: "7%", width: "30%",color: "#E04406"}}/>
        }
    },
    componentDidMount: function(){
       
       if (localStorage.getItem("passport1")=="good"){
           this.setState({
               passport: <FaCheckCircle style={{marginRight: "7%", width: "30%",color: "green"}}/>,
           })
       }
       else{
        this.setState({
            passport: <FaPlusCircle style={{marginRight: "7%", width: "30%",color: "#E04406"}}/>,
        })
      }


       if (localStorage.getItem("signature1")=="good"){
        this.setState({
            signature: <FaCheckCircle style={{marginRight: "7%", width: "30%",color: "green"}}/>,
        })
       }
       else{
        this.setState({
            signature: <FaPlusCircle style={{marginRight: "7%", width: "30%",color: "#E04406"}}/>,
        })
       }


       if (localStorage.getItem("idCard1")=="good"){
        this.setState({
            idCard: <FaCheckCircle style={{marginRight: "7%", width: "30%",color: "green"}}/>,
        })
       }
        else{
        this.setState({
            idCard: <FaPlusCircle style={{marginRight: "7%", width: "30%",color: "#E04406"}}/>,
        })
    }
    },

    post: function(e){

        e.preventDefault()

       if(localStorage.getItem("passport1") !== "good" && localStorage.getItem("signature1") !== "good" && localStorage.getItem("idCard1") !== "good"){

        if(window.confirm("Are you sure you don't want to upload passport, signature and ID card now?")){
        this.props.history.push("/")
        }
    }
    else if(localStorage.getItem("passport1") !== "good" && localStorage.getItem("signature1") !== "good"){

        if(window.confirm("Are you sure you don't want to upload passport and signature now?")){
        this.props.history.push("/")
        }    
     
    }
    else if(localStorage.getItem("passport1") !== "good" && localStorage.getItem("idCard1") !== "good"){

        if(window.confirm("Are you sure you don't want to upload passport and ID Card now?")){
        this.props.history.push("/")
        }    
     
    }
    else if(localStorage.getItem("signature1") !== "good" && localStorage.getItem("idCard1") !== "good"){

        if(window.confirm("Are you sure you don't want to upload signaure and ID Card now?")){
        this.props.history.push("/")
        }    
     
    }
    else if(localStorage.getItem("passport1") !== "good"){

        if(window.confirm("Are you sure you don't want to upload passport now?")){
        this.props.history.push("/")
        }    
     
    }
    else if(localStorage.getItem("signature1") !== "good"){

        if(window.confirm("Are you sure you don't want to upload signature now?")){
        this.props.history.push("/")
        }    
     
    }
    else if(localStorage.getItem("idCard1") !== "good"){

        if(window.confirm("Are you sure you don't want to upload ID Card now?")){
        this.props.history.push("/")
        }    
     
    }
    else{
        alert("You have successfully uploaded all necessary documents")
    }


    },
    back: function(){
         
        this.props.history.push("/vaccount")
    },

    render: function(){
        return(
            <div>
                <div className="container7">
                    
                    <div className="subcontainer">
                    <div style={{height:"40px", backgroundColor:"#E04406",borderTopLeftRadius:"40px", borderTopRightRadius: "40px",width: "99%",marginLeft:"0.5%"}}></div>
                    <p style={{color: "whitesmoke"}}><FaArrowLeft id="back" onClick={this.back} style={{marginLeft:"10%", marginRight: "27%", height:"25px",width:"5%"}}/>UPDATE</p>
                      <p className="Uattention">Upload Documents</p>
                      
                      <NavLink to="/vaccount/upload-document/update-passport" style={{textDecoration: "none"}}><button style={{marginBottom:"10px"}} className="passport">{this.state.passport}Passport</button></NavLink>
                      <NavLink to="/vaccount/upload-document/update-signature" style={{textDecoration: "none"}}><button style={{marginBottom:"10px"}} className="signature">{this.state.signature}Signature</button></NavLink>
                      <NavLink to="/vaccount/upload-document/update-idcard" style={{textDecoration: "none"}}><button className="Id">{this.state.idCard}Identity Card</button></NavLink><br/><br/><br/><br/>
                      <button className="Ustart" onClick={this.post}>Done</button>
                    </div>
                    <div className="Uoverlay"></div>

                </div>
            </div>
        )
    }
})


export default ExistUpload