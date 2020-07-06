import React from 'react';
import Base from './Base';
import '../App.css'





const Home = () => {

    return(
        <Base className="homebg">
       
        <div>
        <h2 id="hm-welcome">Welcome to Visitor Tracking </h2>
        <div className="lead hm-lead">
        Digital visitor log with check in/check out information
        </div>

<div id="hm-content">
      <span id="hm-t">
        A handwritten visitor log can be impossible to read. Even worse, the information might not be correct. 
        With a visitor management system, you have a digital log of everyone who was in your office and how long they were there. 
        If a problem arises, you can refer to this information and check it against other records.
        </span>
      </div>

       

         </div>
        </Base>
    )
}



export default Home;