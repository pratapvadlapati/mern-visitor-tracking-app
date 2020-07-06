import React from 'react';
import Base from '../core/Base';
import '../App.css'


const visitorLogout = () => {


    const visitorsLogoutList = () => {
        return(
            <div>
              <h1>visitors list</h1>
            </div>
        )
    }


    return(
       <Base container>
       <div className="row listrow justify-content-around">
           <div className ="col-md-8 text-center listcol">
           <h3>Visitors logged list</h3>
           </div>
           <div className="col-md-4 text-center listcol">
           <button type="button" class="btn btn-warning">Status</button>
           </div>
       </div>
       </Base>
            
        
        
       
    )
}


export default visitorLogout;