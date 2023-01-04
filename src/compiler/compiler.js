import React, { Component } from "react";
 
const css = `
.nav ,footer {visibility: hidden;}
   
`

export default class Compiler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: localStorage.getItem('input')||``,
      output: ``,
      language_id:localStorage.getItem('language_Id')|| 2,
      user_input: ``,
    };
  }
  input = (event) => {
 
    event.preventDefault();
  
    this.setState({ input: event.target.value });
    localStorage.setItem('input', event.target.value)
 
  };
  userInput = (event) => {
    event.preventDefault();
    this.setState({ user_input: event.target.value });
  };
  language = (event) => {
   
    event.preventDefault();
   
    this.setState({ language_id: event.target.value });
    localStorage.setItem('language_Id',event.target.value)
   
  };

  submit = async (e) => {
    e.preventDefault();

    let outputText = document.getElementById("output");
    outputText.innerHTML = "";
    outputText.innerHTML += "Creating Submission ...\n";
    const response = await fetch(
        "https://judge0-ce.p.rapidapi.com/submissions",
      {
        method: "POST",
        headers: {
            'X-RapidAPI-Key': '4d5fdb515amsh34d74db809e079ep1408b3jsnb23a68d88dc9',
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com', // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          source_code: this.state.input,
          stdin: this.state.user_input,
          language_id: this.state.language_id,
        }),
      }
    );
    outputText.innerHTML += "Submission Created ...\n";
    const jsonResponse = await response.json();

    let jsonGetSolution = {
      status: { description: "Queue" },
      stderr: null,
      compile_output: null,
    };

    while (
      jsonGetSolution.status.description !== "Accepted" &&
      jsonGetSolution.stderr == null &&
      jsonGetSolution.compile_output == null
    ) {
      outputText.innerHTML = `Creating Submission ... \nSubmission Created ...\nChecking Submission Status\nstatus : ${jsonGetSolution.status.description}`;
      if (jsonResponse.token) {
        let url = `https://judge0-ce.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=true`;

        const getSolution = await fetch(url, {
          method: "GET",
          headers: {
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
            "x-rapidapi-key": "", // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
            "content-type": "application/json",
          },
        });

        jsonGetSolution = await getSolution.json();
      }
    }
    if (jsonGetSolution.stdout) {
      const output = atob(jsonGetSolution.stdout);

      outputText.innerHTML = "";

      outputText.innerHTML += `Results :\n${output}\nExecution Time : ${jsonGetSolution.time} Secs\nMemory used : ${jsonGetSolution.memory} bytes`;
    } else if (jsonGetSolution.stderr) {
      const error = atob(jsonGetSolution.stderr);

      outputText.innerHTML = "";

      outputText.innerHTML += `\n Error :${error}`;
    } else {
      const compilation_error = atob(jsonGetSolution.compile_output);

      outputText.innerHTML = "";

      outputText.innerHTML += `\n Error :${compilation_error}`;
    }
  };
  render() {
 
    return (
     
<> 
<div className="navbar z-50 bg-base-100">
  <div className="navbar-start">
    <a className="btn btn-ghost normal-case text-xl">GeeksCommunity</a>
  </div>
  <div className="navbar-center  lg:flex">
    <ul className="menu menu-horizontal px-1">
    <label htmlFor="tags" className="mr-1">
              <b className="heading">Language:</b>
            </label>
            <select
              value={this.state.language_id}
              onChange={this.language}
              id="tags"
              className="form-control form-inline mb-2 language"
            >
              <option value="54">C++</option>
              <option value="50">C</option>
              <option value="62">Java</option>
              <option value="71">Python</option>
            </select>
    </ul>
  </div>
  <div className="navbar-end">
      <button
              type="submit"
              className="btn btn-danger ml-2 mr-2 "
              onClick={this.submit}
            >
              <i className="fas fa-cog fa-fw"></i> Run
            </button>
  </div>
</div>
        
        <div className="flex flex-col w-full h-[80h] lg:flex-row">
            <style>{css}</style>
  <div className="grid flex-grow  card   place-items-center">
  <textarea className="textarea w-[98%]  h-[80vh] textarea-info"
              required
              name="solution"
              id="source"
              onChange={this.input}
              
              value={this.state.input}
            ></textarea>
    
    
    
    </div> 
  <div className="divider lg:divider-horizontal"></div> 
  <div className="grid flex-grow card   place-items-center">
  <span className="badge badge-primary heading my-2 ">
            <i className="fas fa-user fa-fw fa-md"></i> User Input
          </span>
          <br />
          <textarea  className="textarea w-[98%]  h-[10vh] textarea-info" id="input" onChange={this.userInput}></textarea>

          <i className="fas fa-user fa-fw fa-md"></i> output      

  <textarea  className="textarea w-[98%]  h-[98%] textarea-info" id="output"></textarea>
  </div>
</div>


</> 
    );
  }
}
