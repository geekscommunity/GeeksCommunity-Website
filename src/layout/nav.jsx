import React from "react";
import { Link } from "react-router-dom";
  
const Nav = () => {
  return (
    <>

<div className="navbar nav z-50	 bg-base-300 shadow-xl fixed">
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
  <Link to="/"    className="text-xl text-white">Geeks Community</Link>
  </div>
  <div className="navbar-end">
    <a className="" href="https://github.com/geekscommunity"> 
    
    <label  className="btn btn-ghost btn-circle p-1">
    <svg xmlns="http://www.w3.org/2000/svg"     fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>
    </label>
    </a>
  </div>
</div>
      
         
          
         
        
        
    </>
  );
};
  
export default Nav;
