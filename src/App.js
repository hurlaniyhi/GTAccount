import React from 'react';
import ReactDOM from 'react-dom'
//import logo from './logo.svg';
//import './App.css';
import createReactClass from 'create-react-class'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SignUp from './signup.js'
import Email from './email.js'
import BVN from './bvn.js'
import Verify from './verify.js'
import Info from './info.js'
import Address from './address.js'
import Upload from './upload.js'
import Document from './document.js'
import Signature from './signature.js'
import IDCard from './idCard.js'
import Complete from './complete.js'
import Vaccount from './vaccount.js'
import ExistUpload from './ExistUpload.js'
import UpdatePassport from './updatePassport.js'
import UpdateSignature from './updateSignature.js'
import UpdateIdCard from './updateIdcard.js';



 


var Bootstrap = createReactClass({
  render: function(){
    return(
      <Router>
        <div>
          <Switch>
          <Route path="/" exact component={SignUp}></Route>
          <Route path="/email" exact component={Email}></Route>
          <Route path="/vaccount" exact component={Vaccount}></Route>
          <Route path="/email/bvn" exact component={BVN}></Route>
          <Route path="/vaccount/upload-document" exact component={ExistUpload}></Route>
          <Route path="/email/bvn/verify" exact component={Verify}></Route>
          <Route path="/email/bvn/verify/info" exact component={Info}></Route>
          <Route path="/email/bvn/verify/info/address" exact component={Address}></Route>
          <Route path="/email/bvn/verify/info/address/upload" exact component={Upload}></Route>
          <Route path="/email/bvn/verify/info/address/upload/document" exact component={Document}></Route>
          <Route path="/email/bvn/verify/info/address/upload/signature" exact component={Signature}></Route>
          <Route path="/email/bvn/verify/info/address/upload/idCard" exact component={IDCard}></Route>
          <Route path="/email/bvn/verify/info/address/upload/complete" exact component={Complete}></Route>
          <Route path="/vaccount/upload-document/update-passport" exact component={UpdatePassport}></Route>
          <Route path="/vaccount/upload-document/update-signature" exact component={UpdateSignature}></Route>
          <Route path="/vaccount/upload-document/update-idcard" exact component={UpdateIdCard}></Route>
          

          </Switch>
        </div>
      </Router>
    )
  }
})

ReactDOM.render(<Bootstrap />, document.getElementById("root"))
