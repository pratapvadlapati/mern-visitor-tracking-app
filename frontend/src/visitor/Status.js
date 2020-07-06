import React , {useState, useEffect} from 'react';
import Base from '../core/Base'
import { visitorStatus, visitorLogut } from '../visitor/helper'
import '../App.css'



const Status = () => {


    const [values, setValues] = useState({
       data: [],
        error: '',
        visitorLoggedout: false
    })

    const {data, error, visitorLoggedout } = values;

    const getStatus = () => {
        visitorStatus()
        .then(data => {
            console.log(data)
            if(data.error) {
                setValues({...values, 
                        error: data.error})
            }
            setValues({...values, data: data})

        })
    }
   
 useEffect(() => {
   getStatus()
 },[visitorLoggedout])


//onCheck out

const checkOut = (visitorId) => {
    console.log('enter checkout', visitorId)
    visitorLogut(visitorId)
        .then(data => {
            if(data.error) {
                setValues({...values, error: data.error, visitorLoggedout: false})
            }
            console.log('visitor-loggedout!')
            setValues({...values, error: '', visitorLoggedout: true})
        })
}




    const statusData = () => {

        return(
           <div className="container statusContainer">
             
            
        {data.map((visitor, index) => {
                return(
                    <div className="container-item" key={index}>
        <span id="vName">{visitor.visitorname}</span>
        <span id="vStatus"> {visitor.status}</span>
        <span>
            <button className="status-btn-logout" onClick={()=> {checkOut(visitor.id)}}>Checkout</button>
        </span>
             </div>

                )
            })} 
           </div>
        )
    } 


    return(
        <Base className="statusBG">
        {statusData ()}
        </Base>
    )
}



export default Status;