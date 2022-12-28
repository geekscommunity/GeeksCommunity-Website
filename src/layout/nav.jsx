import React from "react";
import { Link } from "react-router-dom";
  
const Nav = () => {
  return (
    <>

<div className="navbar z-50	 bg-base-300 shadow-xl fixed">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>  <Link to="/" >
            Home
          </Link></li>
        <li> <Link to="/contact">
            Contact Us
          </Link></li>
        <li>  <Link to="/join"  >
            Join
          </Link></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
  <Link to="/"    className="text-xl text-white">Geeks CommunitY</Link>
  </div>
  <div className="navbar-end">
    <a className="btn" href="https://github.com/geekscommunity">Get started</a>
  </div>
</div>
      
         
          
         
        
        
    </>
  );
};
  
export default Nav;