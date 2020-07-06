import React, { Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
//import {signout, isAuthenticated } from '../auth/helper/index'
import '../App.css'

const ActiveTab = (history, path) =>{
    if(history.location.pathname === path) {
        return { color: "#2ecc72"}
    }else {
        return { color: "#ffffff"}
    }
}

const Menu = ({ history }) => {
    return (
        <div menu>
            <ul className="nav nav-tabs bg-dark">
                <li className="nav-item">
                    <Link style={ActiveTab(history, "/")} className="nav-link" to="/">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link style={ActiveTab(history, "/visitor/signin")} className="nav-link" to="/visitor/signin">
                        Visitor Login
                    </Link>
                </li>
              
                    <li className="nav-item">
                    <Link style={ActiveTab(history, "/visitor/logout")} className="nav-link" to="/visitor/history">
                        Visitor History
                    </Link>
                </li>
                
            
                    <li className="nav-item">
                    <Link style={ActiveTab(history, "/visitor/status")} className="nav-link" to="/visitor/status">
                        Status
                    </Link>
                </li>
               
            
                      <Fragment>
                      <li className="nav-item">
                            <Link style={ActiveTab(history, "/user/signup")} className="nav-link" to="/user/signup">
                                Signup
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link style={ActiveTab(history, "/user/signin")} className="nav-link" to="/user/signin">
                                SignIn
                            </Link>
                        </li>
                      </Fragment>
             
           <li className="nav-item">
                   <span className="nav-link text-warning"
                   >
                        SignOut
                       </span>
                       
                   
                </li>
            </ul>
        </div>
    )
}

export default withRouter(Menu);