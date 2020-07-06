import React from 'react';
import Menu from './Menu';

const Base = ({
    title = "My title",
    description = "My description",
    className ="",
    children
}) => {
    return(
        <div> 
            <Menu />
        <div className="container-fluid">
              
    <div className={className}>{children}</div>
            </div>
         
        </div>
    )
}


export default Base;