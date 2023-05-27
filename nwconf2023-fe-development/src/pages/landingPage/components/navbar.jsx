import React from 'react'
import logo from "../../../images/nwconflogo.png"
import { NavLink, Outlet } from 'react-router-dom'
const navbar = () => {
    return (
        <div className='nav-container'>
            <div className='nav-header'>
                <div className="nav-set">
                <div className='logo-data'>
                    <div className="logo-data-img">
                        <img src={logo} alt="logo" />
                    </div>
                    <h1>NWMSU</h1>
                </div>
           
                   <div className='lsit-set'>
                   <li><NavLink to="/" className="nav-link">HOME</NavLink></li>
                   <li> <NavLink to="/ProgramCommity" >PROGRAM COMMITTEE</NavLink></li>
                   <li> <NavLink to="#" >REGISTRATION</NavLink></li>
                   <li> <NavLink to="#" >VENUE</NavLink></li>
                   <li> <NavLink to="#" >CONTACT DETAILS</NavLink></li>
                   {/* <li> <NavLink to="/Accept">ACCEPT</NavLink></li> */}
                   {/* <li>  <NavLink to="/Evaluation">EVALUATION</NavLink></li> */}
                   <li>  <NavLink to="/Login">LOGIN</NavLink></li>
              
                   </div>
                

         
 
                </div>
             
            






            </div>
            <Outlet />
        </div>
    )
}

export default navbar