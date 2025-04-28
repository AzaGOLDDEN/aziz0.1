import "../style/repositor.css";
import React, { useState, useEffect } from "react";
import Home from "../companets/home";

function Repositor() {
  const [user, setUser] = useState("");
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("User"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);
  return (
    <>
      <Home></Home>
      <div className="repositoe">
        <h1>Create a new repository</h1>
        <p className="repositop">
          A repository contains all project files, including the revision
          history. Already have a project repository elsewhere?{" "}
          <a href="" className="akl">
            Import a repository.
          </a>
        </p>
        <br /> <em>Required fields are marked with an asterisk (*).</em>
        <br /> <br />
        <div className="lihroa">
          <h4>Owner *</h4> <h4>Repository name *</h4>
        </div>
        <br />
        <div className="lihroa">
          <button className="reaoca">
            {user ? (
              <div className="ilkq">
                <img src={user.avatar_url || "N/A"} alt="" className="imat" />
                <p> {user.login || "N/A"}</p>
              </div>
            ) : (
              <div>
                <p>Loading...</p>
              </div>
            )}
          </button>{" "}
          <span className="olpas">
            {" "}
            <big>
              <strong>/</strong>
            </big>
          </span>
          <input type="text" className="repoin" />
        </div>
        <br />
        <p>
          Great repository names are short and memorable. Need inspiration? How
          about{" "}
          <a href="" className="akl">
            super-duper-octo-enigma
          </a>
          ?
        </p>
        <div className="ouk">
          <h3>
            Description <small>(optional)</small>
          </h3>
          <input type="text" className="inpo" />
        </div>
        <div className="ouk1">
          <input type="radio" id="lk" />
          <i className="fa-solid fa-book" id="lok"></i>
          <div className="lihtor">
            <div className="texta">
              <span>Public</span>
              <p>
                Anyone on the internet can see this repository. You choose who
                can commit.
              </p>
            </div>
          </div>
        </div>
        <div className="ouk2">
          <input type="radio" id="lk" />
          <i className="fa-solid fa-lock" id="lok"></i>
          <div className="lihtor">
            <div className="texta">
              <span>Private</span>
              <p>
              
              You choose who can see and commit to this repository.
              </p>
            </div>
          </div>
        </div>
        <br />
        <h3>
        Initialize this repository with:
          </h3>
          <div className="ouk1">
          <input type="checkbox" id="lk" />
       
          <div className="lihtor">
            <div className="texta">
              <span> Add a README file</span>
              <p>
             
              This is where you can write a long description for your project. <a href="" className="akl">Learn more about READMEs.</a>
              </p>
            </div>
          </div>
        </div>
        <div className="ouk3">
          <h3>
          Add .gitignore
            
          </h3>
<button className="re">.gitignore tempale: None</button>
<p>Choose which files not to track from a list of templates. <a href="" className="akl"> Learn more about ignoring files.</a></p>
        </div>
        <div className="ouk3">
          <h3>
          Choose a license
            
          </h3>
<button className="re">License:none</button>
<p>A license tells others what they can and can't do with your code.<a href="" className="akl">Learn more about licenses.</a></p>
        </div>
        <div className="ouk3">
       
        You are creating a public repository in your personal account.
       
               </div><br />
               <button className="repobtn" >Create repository</button>
<br /><br /><br />
               <div className="reqaa">
                    <i className="fa-brands fa-github"></i>   © 2025 GitHub, Inc.
              
                  <div className="aq">
                  <a href="" className="akl">Terms</a>  <a href="" className="akl">Privacy</a>   <a href="" className="akl">Security</a>   <a href="" className="akl">Status</a>   <a href="" className="akl">Docs</a>   <a href="" className="akl">Contact</a>  <a href="" className="akl">Manage cookies</a>   <a href="" className="akl">Do not share my personal information</a>

                  </div>
                </div>
      </div>
    </>
  );
}
export default Repositor;
