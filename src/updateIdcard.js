import React from 'react';
import ReactDOM from 'react-dom'
//import logo from './logo.svg';
//import './App.css';
import createReactClass from 'create-react-class'
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect} from 'react-router-dom'
import GTB from './gtlogo.png'
import {FaArrowLeft, FaPlusCircle,FaCheckCircle} from 'react-icons/fa'
import './document.css'
import axios from 'axios'

var UpdateIdCard = createReactClass({
    getInitialState: function(){
        return{
            imagesave: ""
        }
    },
    showImage: function(e){

        this.setState({
            imagesave: e.target.files[0]
        })
        document.querySelector("#alt").style.display = "none"
        document.querySelector("#myImage").style.display = "block"
        document.querySelector("#myImage").src = URL.createObjectURL(e.target.files[0])

    
    },
    uploadDocument: function(){

        if(document.querySelector("#upload").value != ""){
            
         
            const data = new FormData() 
            data.append('File',this.state.imagesave)
            data.append("AccountNumber", localStorage.getItem("AccountNumber"))
 
        axios.post('https://akachi-task-manager-api.herokuapp.com/UpdateIdCard', data).then((res)=>{
            
           
            if(res.data === "good"){
            
                localStorage.setItem("idCard1", "good")
                alert("Identity card succesfully uploaded")
                this.props.history.push('/vaccount/upload-document')
               }
    
               else{
                   localStorage.setItem("idCard1","bad")
                   alert("Identity card could not be uploaded")
               }
            
            
        }).catch((err)=>{
            alert("error occurred")
            console.log(err)
        })
        
            }
        else{
                localStorage.setItem('idCard1',"bad")
                alert("choose file to upload")
            }
        
        
    },
    back: function(){
         
        this.props.history.push("/vaccount/upload-document")
    },
    render: function(){
        return(
            <div>
                <div className="container8">
                    
                    <div className="subcontainer">
                    <div style={{height:"40px", backgroundColor:"#E04406",borderTopLeftRadius:"40px", borderTopRightRadius: "40px",width: "99%",marginLeft:"0.5%"}}></div>
                    <p style={{color: "whitesmoke"}}><FaArrowLeft id="back" onClick={this.back} style={{marginLeft:"10%", marginRight: "27%", height:"25px",width:"5%"}}/>UPDATE</p>
                      <p className="Dattention">Upload approved ID card</p>
                      <form>
                      <label for="upload"><div className="image"><p id="alt" style={{textAlign: "center",paddingTop:"80px",fontSize:"20px",fontWeight:"400px"}}>Tap to Upload</p><img src="default.jpg" id="myImage" alt="Passport" style={{height:"200px", width:"100%", display:"none",borderRadius:"7px"}} /></div></label>
                      <input type="file" id="upload" onChange={this.showImage} name="Signature" style={{display: "none"}}/>
                      <button className="Dstart" onClick={this.uploadDocument}>Upload</button>
                        </form>
                    </div>
                    <div className="overlay"></div>

                </div>
            </div>
        )
    }
})


export default UpdateIdCard