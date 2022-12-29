import React from "react"; 
import { Link } from "react-router-dom";
const Join = () => {
  return (
    <div>


<div className="hero min-h-screen bg-base-200">
    <div className="hero-content text-center content-center">
     <div className="">
     <img className="mask mask-squircle mx-auto w-32" src="https://cdn.jsdelivr.net/gh/geekscommunity/.github@main/profile/logo.png" />
        <h1 className="text-3xl sm:text-5xl text-white font-bold">Join Geeks Events</h1>
        <p className="py-6 text-[1/2]xl sm:text-2xl"> To boost your skills Geeks Community organises various events to participate in and earn cool Badges .  </p> 

        <div className=" btn-group-horizontal ">
        
   <a href="https://github.com/geekscommunity/.github/issues/new?assignees=&labels=invite+me+to+the+organisation&template=invitation.yml&title=Please+invite+me+to+the+GitHub+Community+Organization">
  <button className="btn  gap-2 bg-primary ml-4 glass text-white rounded-xl">
Join Now </button> </a>
</div>


      </div>
    </div>
    
  </div> 


  
    </div>
  
  );
};
  
export default Join;
