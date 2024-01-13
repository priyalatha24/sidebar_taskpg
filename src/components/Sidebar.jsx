import React, { useState } from 'react';

// import { FaIconName } from 'react-icons/fa';

import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Profile",
            icon:<FaTh/>
        },
        {
            path:"/contact",
            name:"Contact",
            icon:<FaUserAlt/>
        },
        {
            path:"/pan",
            name:"Pan",
            icon:<FaRegChartBar/>
        },
        {
            path:"/insurance",
            name:"Insurance",
            icon:<FaCommentAlt/>
        },
        {
            path:"/issue",
            name:"Issue",
            icon:<FaShoppingBag/>
        },
        {
            path:"/notification",
            name:"Notification",
            icon:<FaThList/>
        },
        {
            path:"/setting",
            name:"Setting",
            icon:<FaThList/>
        },
        {
            path:"/signout",
            name:"Signout",
            icon:<FaThList/>
        },
        
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Menu</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <div className='body'>
            <div className='header'>
             <h1 className='h1'>Profile</h1>
            </div>        
            </div> 
        </div>
    );
};

export default Sidebar;