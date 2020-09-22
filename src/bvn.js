import React from 'react';
import ReactDOM from 'react-dom'
//import logo from './logo.svg';
//import './App.css';
import createReactClass from 'create-react-class'
import { BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'
import GTB from './gtlogo.png'
import {FaArrowLeft} from 'react-icons/fa'
import './bvn.css' 
import axios from 'axios'

var BVN = createReactClass({
    getInitialState: function(){
        return{
            BVN: "",
            DOB: ""
        }
    },

    stores: function(e){
        document.querySelector("#date").style.color = "whitesmoke"
        this.setState({
            [e.target.name]: e.target.value
        })
    },
    
    post: function(e){

        e.preventDefault()
        
        var bVN;

        if(this.state.BVN != "" && document.querySelector("#checkbox").checked == true){
            alert("Either you tick  i dont have BVN or provide BVN")
        }
        else if(this.state.BVN == "" && document.querySelector("#checkbox").checked == false){
            alert("Either you tick  i dont have BVN or provide BVN")
        }
        else{
            if(document.querySelector("#checkbox").checked == true){
                 bVN = "I dont have BVN"
            }
            else{
                 bVN = this.state.BVN
            }

            localStorage.setItem("Bvn", bVN)
            localStorage.setItem("Dob", this.state.DOB)

            this.props.history.push('/email/bvn/verify')
        
    //     const data = {

    //         Bvn: bVN,
    //         Dob: this.state.DOB
            
    //     }

    //     axios.post('http://fintech-account-backend.herokuapp.com/bvn', data).then((res)=>{
    //         //alert("Data successfully encrypted")
            
           
    //         if(res.data == "good"){
    //         this.props.history.push('/email/bvn/verify')
    //         }
    //         else{
    //             alert("wait")
    //         }

    //         // this.setState({
    //         //     encryptedData: res.data
    //         // })
            
            
    //     }).catch((err)=>{
    //         alert("error occurred")
    //         console.log(err)
    //     })
    }
    },
    back: function(){
         
        this.props.history.push("/email")
    },

    render: function(){
        return(
            <div>
                <div className="container3">
                    
                    <div className="subcontainer">
                    <div style={{height:"40px", backgroundColor:"#E04406",borderTopLeftRadius:"40px", borderTopRightRadius: "40px",width: "99%",marginLeft:"0.5%"}}></div>
                    <p style={{color: "whitesmoke"}}><FaArrowLeft id="back" onClick={this.back} style={{marginLeft:"10%", marginRight: "27%", height:"25px",width:"5%"}}/>SIGN UP</p>
                      <p className="Battention">Tell us about yourself</p>
                      <form onSubmit={this.post} autoComplete="off">
                      <label className="Bdetails" for="email">What's your BVN? (optional)</label>
                      <input className="bvn" type="number" onChange={this.stores} id="bvn" name="BVN" placeholder="Enter your BVN" />
                      <input type="checkbox" id="checkbox" style={{color: "whitesmoke",marginLeft: "14%",marginRight: "2%"}}/><i style={{color:"#757575", fontSize:"12px"}}>I dont have BVN</i><br/><br/><br/>
                      <label className="Bdetails2" for="date">What's your date of birth?</label>
                      <input className="date" id="date" onChange={this.stores} name="DOB" type="date" placeholder="Enter your date of birth" required/>
                     <button className="Bstart" value="submit">Next</button>
                      </form>
                    </div>
                    <div className="Boverlay"></div>

                </div>
            </div>
        )
    }
})


export default BVN