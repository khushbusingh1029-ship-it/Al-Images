 import "./sidebar.css";
import React, { useState } from "react";
import {
    FaTimes,
    FaBars
}from "react-icons/fa";
function Sidebar() {
   const [open, setOpen] = useState(false);
   return (
    <div>
       <div className="nav-left">
               <button className="menu-btn" onClick={() => setOpen(true)}>
                 <FaBars />
               </button>
                 </div>
 <div className={`sidebar ${open ? "show" : ""}`}>
        <div className="top">

          <button className="close-btn" onClick={() => setOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <ul>
          <li><a href="#home"> Home</a></li>
          <li><a href="#Generate"> Generate</a></li>
          <li><a href="Gallery">Gallery</a></li>
          <li><a href="#Favorites">Favorites </a></li>
          <li><a href="#History">History </a></li>
      
        </ul>
      </div>

      {/* Overlay */}
      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}
      </div>
  );
}
export default Sidebar;
