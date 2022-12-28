import React from "react"; 
import { Link } from "react-router-dom";
  
const Footer = () => {
  return (
    <>
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
    <div className="grid grid-flow-col gap-4">
     <Link to="/" >
            Home
          </Link>
         <Link to="/contact">
            Contact Us
          </Link>   <Link to="/join"  >
            Join
          </Link> 
     
  </div> 
  <div>
  <p>Copyright @ CoolCommunityX</p>
  </div>
</footer>
       
        
        
    </>
  );
};
  
export default Footer;