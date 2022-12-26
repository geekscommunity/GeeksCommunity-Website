import React from "react";
import { Link } from "react-router-dom";
  
const Nav = () => {
  return (
    <>
      
          <Link to="/" activeStyle>
            Home
          </Link>
          <Link to="/contact" activeStyle>
            Contact Us
          </Link>
          <Link to="/join" activeStyle>
            Join
          </Link>
        
        
    </>
  );
};
  
export default Nav;