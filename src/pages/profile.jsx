import Home from "../companets/home";
import React, { useState, useEffect } from "react";
import "../style/profile.css";
function Profile() {
    const [repos, setRepos] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("User"));

    if (user && user.repos_url) {
      fetch(user.repos_url)
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            setRepos(data);
          } else {
            console.error("No repositories found in API response");
            setRepos([]);
          }
        })
        .catch((err) => {
          console.error("Error fetching repositories:", err);
          setRepos([]);
        });
    } else {
      console.error("No repos_url found in user data");
      setRepos([]);
    }
  }, []);

  // Helper function to determine the color based on language
  const getLanguageColor = (language) => {
    switch (language) {
      case "HTML":
        return "bg-red-500"; // Qizil
      case "CSS":
        return "bg-blue-500"; // Ko'k
      case "JavaScript":
        return "bg-yellow-500"; // Sariq
      case "Python":
        return "bg-green-500"; // Yashil
      case "Ruby":
        return "bg-pink-500"; // Pushti
      default:
        return "bg-gray-500"; // Kulrang (default)
    }
  };
  const [user, setUser] = useState({
    login: "",
    avatar_url: "",
    followers: 0,
    following: 0,
  });

  useEffect(() => {
    // LocalStorage'dan foydalanuvchi ma'lumotlarini olish
    const userData = JSON.parse(localStorage.getItem("User"));
    if (userData) {
      fetch(userData.url)
        .then((res) => res.json())
        .then((data) => {
          setUser({
            login: data.login || "Unknown",
            avatar_url: data.avatar_url || "https://placehold.co/128x128",
            followers: data.followers || 0,
            following: data.following || 0,
          });
        })
        .catch((err) => {
          console.error("Error fetching user data:", err);
        });
    }
  }, []);
  const toggleClaos = () => {
    const element = document.querySelector(".laksq"); // Select the element with the class 'laksq'
    if (element) {
      // Check current height and toggle between open and closed states
      if (element.style.height === "0px" || element.style.height === "") {
        // Expand the element
        element.style.transition = "height 0.5s ease, opacity 0.5s ease";
        element.style.height = "200px"; // Set height to original value (adjust as needed)
        element.style.opacity = "1"; // Restore opacity
      } else {
        // Collapse the element
        element.style.transition = "height 0.5s ease, opacity 0.5s ease";
        element.style.height = "0px"; // Collapse height
        element.style.opacity = "0"; // Fade out
      }
    } else {
      console.error("Element with class 'laksq' not found");
    }
  };
  const toggleClaos2 = () => {
    const element = document.querySelector(".laslq"); // Select the element with the class 'laksq'
    if (element) {
      // Check current height and toggle between open and closed states
      if (element.style.height === "0px" || element.style.height === "") {
        // Expand the element
        element.style.transition = "height 0.5s ease, opacity 0.5s ease";
        element.style.height = "100px"; // Set height to original value (adjust as needed)
        element.style.opacity = "1"; // Restore opacity
      } else {
        // Collapse the element
        element.style.transition = "height 0.5s ease, opacity 0.5s ease";
        element.style.height = "0px"; // Collapse height
        element.style.opacity = "0"; // Fade out
      }
    } else {
      console.error("Element with class 'laksq' not found");
    }
  };
    return(
        <>

        <Home></Home>
        <div className="pro-card">
        <div className="propr">
    <div className="pasas">
    <img
        className="pro-profile-picture"
        src={user.avatar_url}
        alt="Profile Picture"
      />
    <div className="auq">
    <h2 className="pro-name">{user.login}</h2>
    <p className="pro-username">@{user.login}</p>
    </div>
    </div>
      <button className="pro-edit-button">Edit profile</button><br /><br />
      <div className="pro-follow-info">
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
      </div>
    </div>
  <div className="prpra">
 <div className="aqwasq">
 <h3 className="pro-title">Popular repositories</h3>
 <a href="" className="akl">Customize your pins</a>
 </div>
  <div className="pro-repositories">

  <div className="pro-repo-list">
      {repos.length > 0 ? (
        repos.slice(0 , 7).map((repo) => (
          <div key={repo.id} className="pro-repo-item">
            <div className="asass">
              {/* Language Color Indicator */}
            
           <a href="" className="akl" >   <span className="pro-repo-name">{repo.name}</span></a>
              <span
                className={`px-2 py-1 rounded text-white ${
                  repo.private ? "bg-red-700" : "bg-green-700"
                }`}
              >
                {repo.private ? "Private" : "Public"}
              </span>
            </div><br />
            <span className="pro-repo-description">
              {repo.description || "-"}
            </span><br /><br />
            <div className="flex items-center space-x-2">
  <span
    className={`h-4 w-4 rounded-full ${getLanguageColor(repo.language)}`}
  ></span>
  <span className="pro-repo-language">{repo.language || "Unknown"}</span>
</div>
          </div>
        ))
      ) : (
        <p>No repositories available</p>
      )}
    </div>
  </div>

  <div className="pro-contributions">
    <h3 className="pro-title">25 contributions in the last year</h3>
    <div className="pro-contribution-details">
      <div className="pro-months">
        <span className="pro-month">May</span>
        <span className="pro-month">Jun</span>
        <span className="pro-month">Jul</span>
        <span className="pro-month">Aug</span>
        <span className="pro-month">Sep</span>
        <span className="pro-month">Oct</span>
        <span className="pro-month">Nov</span>
        <span className="pro-month">Dec</span>
        <span className="pro-month">Jan</span>
        <span className="pro-month">Feb</span>
        <span className="pro-month">Mar</span>
        <span className="pro-month">Apr</span>
      </div>
      <div className="pro-contribution-dots">
        <span className="pro-dot green"></span>
        <span className="pro-dot green"></span>
        <span className="pro-dot gray"></span>
        <span className="pro-dot gray"></span>
        <span className="pro-dot gray"></span>
        <span className="pro-dot green"></span>
        <span className="pro-dot gray"></span>
        <span className="pro-dot gray"></span>
        <span className="pro-dot gray"></span>
        <span className="pro-dot gray"></span>
        <span className="pro-dot green"></span>
        <span className="pro-dot gray"></span>
      </div>
      <p className="pro-contribution-note">Learn how we count contributions</p>
    </div>
  </div><br />
  <h3>Contribution activity</h3>
 <div className="aksq">

<br />
<div className="likk">
<p>Created 200 commits  in  30 repositor</p>  <svg style={{ cursor: "pointer"}} onClick={toggleClaos} aria-label="Collapse" class="octicon octicon-fold" viewBox="0 0 16 16" version="1.1" width="18" height="18" aria-hidden="true"><path d="M10.896 2H8.75V.75a.75.75 0 0 0-1.5 0V2H5.104a.25.25 0 0 0-.177.427l2.896 2.896a.25.25 0 0 0 .354 0l2.896-2.896A.25.25 0 0 0 10.896 2ZM8.75 15.25a.75.75 0 0 1-1.5 0V14H5.104a.25.25 0 0 1-.177-.427l2.896-2.896a.25.25 0 0 1 .354 0l2.896 2.896a.25.25 0 0 1-.177.427H8.75v1.25Zm-6.5-6.5a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5h.5ZM6 8a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1 0-1.5h.5A.75.75 0 0 1 6 8Zm2.25.75a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5h.5ZM12 8a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1 0-1.5h.5A.75.75 0 0 1 12 8Zm2.25.75a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5h.5Z"></path></svg>
</div><br />
  <div className="laksq">
  {repos.length > 0 ? (
      repos.slice(0 , 10).map((repo) => (
          <div key={repo.id} className="pro-repo-item1">
            <div className="asass">
              {/* Language Color Indicator */}
            
           <a href="" className="akl" >   <span className="pro-repo-name">{repo.name}</span></a>
             
            </div><br />
           
     
          </div>
        ))
      ) : (
        <p>No repositories available</p>
      )}
    
    </div> <br />
     <div className="likk">
     <p>Created 400 commits  in  30 repositor</p>  <svg style={{ cursor: "pointer"}} onClick={toggleClaos2} aria-label="Collapse" class="octicon octicon-fold" viewBox="0 0 16 16" version="1.1" width="18" height="18" aria-hidden="true"><path d="M10.896 2H8.75V.75a.75.75 0 0 0-1.5 0V2H5.104a.25.25 0 0 0-.177.427l2.896 2.896a.25.25 0 0 0 .354 0l2.896-2.896A.25.25 0 0 0 10.896 2ZM8.75 15.25a.75.75 0 0 1-1.5 0V14H5.104a.25.25 0 0 1-.177-.427l2.896-2.896a.25.25 0 0 1 .354 0l2.896 2.896a.25.25 0 0 1-.177.427H8.75v1.25Zm-6.5-6.5a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5h.5ZM6 8a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1 0-1.5h.5A.75.75 0 0 1 6 8Zm2.25.75a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5h.5ZM12 8a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1 0-1.5h.5A.75.75 0 0 1 12 8Zm2.25.75a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5h.5Z"></path></svg></div><br />
     
 <div className="laslq">
 {repos.length > 0 ? (
      repos.slice(0 , 6).map((repo) => (
          <div key={repo.id} className="pro-repo-item1">
            <div className="asass">
              {/* Language Color Indicator */}
            
           <a href="" className="akl" >   <span className="pro-repo-name">{repo.name}</span></a>
             
            </div><br />
           
     
          </div>
        ))
      ) : (
        <p>No repositories available</p>
      )}
 </div>
 </div><br />
 <button className="pro-edit-button"> <a href="" className="akl">Shoe more activity</a></button>
  </div>
  
</div>
<div className="reqaa">
                    <i className="fa-brands fa-github"></i>   © 2025 GitHub, Inc.
              
                    <a href="" className="akl">Terms</a>  <a href="" className="akl">Privacy</a>   <a href="" className="akl">Security</a>   <a href="" className="akl">Status</a>   <a href="" className="akl">Docs</a>   <a href="" className="akl">Contact</a>  <a href="" className="akl">Manage cookies</a>   <a href="" className="akl">Do not share my personal information</a>

                </div>
        </>
    )
}
export default Profile;