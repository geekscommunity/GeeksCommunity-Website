import React from "react";
  
const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content text-center content-center">
     <div className="max-w-md">
     <img className="mask mask-circle mx-auto w-32" src="https://avatars.githubusercontent.com/u/121399569?s=200&v=4" />
        <h1 className="text-5xl font-bold">Welcome To Cool Community X</h1>
        <p className="py-6"> Cool Community X is a Coding socity where you can enjoy coding and staring projects</p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
  );
};
  
export default Home;