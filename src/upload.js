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

var Upload = createReactClass({
    getInitialState: function(){ 
        return{
            passport: <FaPlusCircle style={{marginRight: "7%", width: "30%",color: "#E04406"}}/>,
            signature: <FaPlusCircle style={{marginRight: "7%", width: "30%",color: "#E04406"}}/>,
            idCard: <FaPlusCircle style={{marginRight: "7%", width: "30%",color: "#E04406"}}/>
        }
    },
    componentDidMount: function(){
       
       if (localStorage.getItem("passport")=="good"){
           this.setState({
               passport: <FaCheckCircle style={{marginRight: "7%", width: "30%",color: "green"}}/>,
           })
       }
       else{
        this.setState({
            passport: <FaPlusCircle style={{marginRight: "7%", width: "30%",color: "#E04406"}}/>,
        })
      }


       if (localStorage.getItem("signature")=="good"){
        this.setState({
            signature: <FaCheckCircle style={{marginRight: "7%", width: "30%",color: "green"}}/>,
        })
       }
       else{
        this.setState({
            signature: <FaPlusCircle style={{marginRight: "7%", width: "30%",color: "#E04406"}}/>,
        })
       }


       if (localStorage.getItem("idCard")=="good"){
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

        var data;

        if((localStorage.getItem("passport") == "good" && document.querySelector("#passport").checked == true) || (localStorage.getItem("signature") == "good" && document.querySelector("#signature").checked == true)||(localStorage.getItem("idCard") == "good" && document.querySelector("#idCard").checked == true)){
             alert("you've uploaded a document and still tick i dont have")
        }
        else if((localStorage.getItem("passport") != "good" && document.querySelector("#passport").checked == false)||(localStorage.getItem("signature") != "good" && document.querySelector("#signature").checked == false)||(localStorage.getItem("idCard") != "good" && document.querySelector("#idCard").checked == false)){
            alert("if you dont have a document to upload tick i dont have below")
       }
       
      else{

        
        if(localStorage.getItem("passport") != "good" && localStorage.getItem("signature") != "good"){
        //     data = {

        //        Passport: "i dont have passport to upload",
        //        Signature: "i dont have signature to upload"
        //    }
              localStorage.setItem("Passport", "i dont have passport to upload")
              localStorage.setItem("Signature", "i dont have Signature to upload")
       }
     
      else if(localStorage.getItem("passport") != "good" && localStorage.getItem("idCard") != "good"){
    //     data = {

    //        Passport: "i dont have passport to upload",
    //        IdCard: "i dont have idCard to upload"
    //    }
              localStorage.setItem("Passport", "i dont have passport to upload")
              localStorage.setItem("IdCard", "i dont have idCard to upload")

      }

    else if(localStorage.getItem("signature") != "good" && localStorage.getItem("idCard") != "good"){
    //    data = {

    //    Signature: "i dont have signature to upload",
    //    IdCard: "i dont have idCard to upload"
    //   }

    localStorage.setItem("IdCard", "i dont have idCard to upload")
    localStorage.setItem("Signature", "i dont have Signature to upload")
    }
    
    else if(document.querySelector("#passport").checked == true && document.querySelector("#signature").checked == true && document.querySelector("#idCard").checked == true){
    //     data = {
    //     Passport: "i dont have passport to upload",
    //     Signature: "i dont have signature to upload",
    //     IdCard: "i dont have idCard to upload"
    //    }

    localStorage.setItem("Passport", "i dont have passport to upload")
    localStorage.setItem("Signature", "i dont have Signature to upload")
    localStorage.setItem("IdCard", "i dont have idCard to upload")
     }
            

    else if(localStorage.getItem("passport") != "good"){
        //  data = {
        //     Passport: "i dont have passport to upload"
        // }

        localStorage.setItem("Passport", "i dont have Passport to upload")
    }
    else if(localStorage.getItem("signature") != "good"){
        //  data = {
        //     Signature: "i dont have signature to upload"
        // }

        localStorage.setItem("Signature", "i dont have Signature to upload")
    }
    else if(localStorage.getItem("idCard") != "good"){
        //  data = {
        //     IdCard: "i dont have idCard to upload"
        // }

        localStorage.setItem("IdCard", "i dont have IdCard to upload")
    }
     
      data = {
        
        PhoneNumber: localStorage.getItem("PhoneNumber"),
        Address: localStorage.getItem("Address"),
        Gender: localStorage.getItem("Gender"),
        Email: localStorage.getItem("Email"),
        Bvn: localStorage.getItem("Bvn"),
        Dob: localStorage.getItem("Dob"),
        FirstName: localStorage.getItem("FirstName"),
        MiddleName: localStorage.getItem("MiddleName"),
        LastName: localStorage.getItem("LastName"),
        Passport: localStorage.getItem("Passport"),
        Signature: localStorage.getItem("Signature"),
        IdCard: localStorage.getItem("IdCard"),
      }
    

        axios.post('https://akachi-task-manager-api.herokuapp.com/complete', data).then((res)=>{
            
              if(res.data = "good"){
                
                this.props.history.push('/email/bvn/verify/info/address/upload/complete')
              }
              else{
                  alert(res.data)
                  this.props.history.push('/email/bvn/verify/info/address/upload')
              }
            
            
        }).catch((err)=>{
            alert("error occurred")
            console.log(err)
        })
    }
    },
    back: function(){
         
        this.props.history.push("/email/bvn/verify/info/address")
    },

    render: function(){
        return(
            <div>
                <div className="container7">
                    
                    <div className="subcontainer">
                    <div style={{height:"40px", backgroundColor:"#E04406",borderTopLeftRadius:"40px", borderTopRightRadius: "40px",width: "99%",marginLeft:"0.5%"}}></div>
                    <p style={{color: "whitesmoke"}}><FaArrowLeft id="back" onClick={this.back} style={{marginLeft:"10%", marginRight: "27%", height:"25px",width:"5%"}}/>SIGN UP</p>
                      <p className="Uattention">Upload Documents (optional)</p>
                      
                      <NavLink to="/email/bvn/verify/info/address/upload/document" style={{textDecoration: "none"}}><button className="passport">{this.state.passport}Passport</button></NavLink>
                      <input type="checkbox" id="passport" style={{color: "whitesmoke",marginLeft: "14%",marginRight: "2%"}}/><label for="photograph"  style={{color:"#757575", fontSize:"11px"}}>I dont have a photograph</label><br/><br/>
                      <NavLink to="/email/bvn/verify/info/address/upload/signature" style={{textDecoration: "none"}}><button className="signature">{this.state.signature}Signature</button></NavLink>
                      <input type="checkbox" id="signature" style={{color: "whitesmoke",marginLeft: "14%",marginRight: "2%"}}/><label style={{color:"#757575", fontSize:"11px"}}>I dont have a signature photo</label><br/><br/>
                      <NavLink to="/email/bvn/verify/info/address/upload/idCard" style={{textDecoration: "none"}}><button className="Id">{this.state.idCard}Identity Card</button></NavLink>
                      <input type="checkbox" id="idCard" style={{color: "#757575",marginLeft: "14%",marginRight: "2%", backgroundColor: "#757575"}}/><label style={{color:"#757575", fontSize:"11px"}}>I dont have a govt approved ID card</label><br/><br/>
                        <button className="Ustart" onClick={this.post}>Create Account</button>
                    </div>
                    <div className="Uoverlay"></div>

                </div>
            </div>
        )
    }
})


export default Upload