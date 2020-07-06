import React, { useState } from 'react'
import Base from "../core/Base"
import {  visitorLogin } from './helper'
import '../App.css'

//import { authenticate, isAuthenticated} from "../auth/helper"


const VisitorSignin = () => {


    //use state
    const [values, setValues] = useState({
        visitorname: "",
        phone: "",
        tokenid: '',
        success: '',
        error: "",
        loading: false,
        didRedirect: false
    })

    const {visitorname, phone, tokenid, error, loading, success} = values
    // const {user} = 'isAuthenticated()'; 
    
    //method

     //onChange in form - handle change 
    const handleChange = name => (event) => {
        setValues({...values, error: false, [name]: event.target.value})
        
    }
    console.log(values)

    //onSubmit
    const onSubmit = (event) => {
        event.preventDefault();
        setValues({...values, loading: true})
        visitorLogin(visitorname, phone, tokenid)
        .then(data => {
            
            if(data.err) {
                setValues({...values, error: data.err})
                
            }else {

                setValues({...values, loading: false, success: data, visitorname: '', phone: '', tokenid: ''})
            }
        }) 
     
    }

 

   //success message
   const loadingMessage = () => {
    return (
       loading && (
           <div className="alert alert-info">
               <h2>Loading...</h2>
           </div>
       )
    )
}

// Error Message
const errorMessage = () => {
    return (
            <div className="row successMessage">
            <div className="col-md-4 offset-sm-3 text-center">
        <div className="alert alert-danger"
        style={ {display: error ? "" : "none"}}>
                   <lead text-center>{error}</lead> 
        </div>
        </div>
        </div>
       
       
    )
}

// Error Message
const successMessage = () => {
    return (
            <div className="row successMessage">
            <div className="col-md-4 offset-sm-3 text-center">
        <div className="alert alert-primary"
        style={ {display: success ? "" : "none"}}>  
        <lead text-center>Visitor login success!</lead>   
        </div>
        </div>
        </div>
       
       
    )
}


    //signin form-control    
     const SignInForm = () => {
        return (
            
  
            
           <div className="card">
               
                  <div className="row signinForm">
                      
                      <div className="col-md-6 offset-sm-3 text-left" >
                  <form>
                  
                  <div className="form-group visitorLogin">
                
                          <input className="form-control loginInput" type="text"
                          placeholder="Visitor Name"
                          onChange={handleChange("visitorname")} value={visitorname}
                          />
                      </div>
                      <div className="form-group visitorLogin">
                        
                          <input className="form-control loginInput" type="text"
                          placeholder="Mobile Number"
                          onChange={handleChange("phone")} value={phone}
                          />
                      </div>
                      
                      <div className="form-group visitorLogin">
                     
                          <input className="form-control loginInput" type="text"
                          placeholder="Token Id"
                          onChange={handleChange("tokenid")} value={tokenid}/>
                      </div>
                 
                     <button className="btn btn-primary btn-block loginbtn" 
                      onClick={onSubmit}>Check In</button>
              
                  </form>
              </div>
            
              </div>
              
      </div>

          
        )
    }


    return (
        <Base className="logingBG signinForm"> 
        {successMessage()}
        {errorMessage()}
        {SignInForm()}
        
        </Base>
    )
  } 



  export default VisitorSignin;