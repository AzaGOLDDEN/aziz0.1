import { useState, useEffect, useRef } from "react";
import "../style/lsiderbar.css";

function LSidebar({ isOpen, onClose }) {



  const sidebarRef = useRef();

 

  useEffect(() => {
    document.body.style.backgroundColor =
      isOpen ? "rgba(128, 128, 128, 0.093)" : "";

    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.body.style.backgroundColor = "";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const toggleAlik = () => {
    setAlikVisible((prev) => !prev); // Alik ko'rinishini almashtirish
  };
  const [avatarUrl, setAvatarUrl] = useState("");
  const [login, setLogin] = useState("");


  useEffect(() => {
    // LocalStorage'dan foydalanuvchini olish
    const user = JSON.parse(localStorage.getItem("User"));
    
    if (user) {
      if (user.avatar_url) {
        setAvatarUrl(user.avatar_url);
      }
      if (user.login) {
        setLogin(user.login);
      }
     
    }
  }, []); 
  return (
    <div ref={sidebarRef} className={`lsidebar ${isOpen ? "open" : "close"}`}>
      <div className="sidebar-header">
      <div className="pro">
      {avatarUrl ? (
       <div className="lasqq">
         <img src={avatarUrl} alt="User Avatar" />
   
          <h3>{login}</h3>
         
       </div>
      ) : (
        <p>Avatar not found</p>
      )}
      
    </div>
        <button className="close-btn" onClick={onClose}>
          <i className="fa-solid fa-xmark" />
        </button>
      </div><br />
      <div className="siede">
      <div className="lsalq">
      <span className="prc-ActionList-LeadingVisual-dxXxW prc-ActionList-VisualWrap-rfjV-">
      <svg 
        aria-hidden="true" 
        focusable="false" 
        className="octicon octicon-smiley" 
        viewBox="0 0 16 16" 
        width="18" 
        height="18" 
        fill="currentColor" 
        style={{ verticalAlign: "text-bottom" }}
      >
        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm3.82 1.636a.75.75 0 0 1 1.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 0 1 1.222.87l-.022-.015c.02.013.021.015.021.015v.001l-.001.002-.002.003-.005.007-.014.019a2.066 2.066 0 0 1-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.331 3.331 0 0 1-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 0 1 .183-1.044ZM12 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM5 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5.25 2.25.592.416a97.71 97.71 0 0 0-.592-.416Z" />
      </svg>
    </span>    <h4 ><a href="/home" className="qaq">Set  status</a></h4>
        </div>
        
      </div>
      <div className="siede">
      <div className="lsalq">
      <span className="prc-ActionList-LeadingVisual-dxXxW prc-ActionList-VisualWrap-rfjV-">
      <svg 
        aria-hidden="true" 
        focusable="false" 
        className="octicon octicon-person" 
        viewBox="0 0 16 16" 
        width="18" 
        height="18" 
        fill="currentColor" 
        style={{ verticalAlign: "text-bottom" }}
      >
        <path d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142.75.75 0 1 1-1.498.07 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-1.498-.07 6.004 6.004 0 0 1 3.431-5.142 3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z" />
      </svg>
    </span>
          <h4 ><a href="/profile" className="qaq">Your profile</a></h4>
        </div>
        <div className="lsalq">
        <span className="prc-ActionList-LeadingVisual-dxXxW prc-ActionList-VisualWrap-rfjV-">
      <svg
        aria-hidden="true"
        focusable="false"
        className="octicon octicon-repo"
        viewBox="0 0 16 16"
        width="18"
        height="18"
        fill="currentColor"
        style={{ verticalAlign: "text-bottom" }}
      >
        <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
      </svg>
    </span>
          <h4 ><a href="/yourrepo" className="qaq">Your repositor</a></h4>
        </div>
        <div className="lsalq">
        <span className="prc-ActionList-LeadingVisual-dxXxW prc-ActionList-VisualWrap-rfjV-">
  <svg
    aria-hidden="true"
    focusable="false"
    className="octicon octicon-copilot"
    viewBox="0 0 16 16"
    width="18"
    height="18"
    fill="currentColor"
    style={{ verticalAlign: "text-bottom" }}
  >
    <path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z" />
    <path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z" />
  </svg>
</span>

          <h4 ><a href="/home" className="qaq">Your copilot</a></h4>
        </div>
        <div className="lsalq"><span className="prc-ActionList-LeadingVisual-dxXxW prc-ActionList-VisualWrap-rfjV-">
  <svg
    aria-hidden="true"
    focusable="false"
    className="octicon octicon-project"
    viewBox="0 0 16 16"
    width="18"
    height="18"
    fill="currentColor"
    style={{ verticalAlign: "text-bottom" }}
  >
    <path d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25ZM11.75 3a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75Zm-8.25.75a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-1.5 0ZM8 3a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 3Z" />
  </svg>
</span>

         <h4 ><a href="/issuas" className="qaq">Your projects</a></h4>
        </div>
        <div className="lsalq"><span className="prc-ActionList-LeadingVisual-dxXxW prc-ActionList-VisualWrap-rfjV-">
  <svg
    aria-hidden="true"
    focusable="false"
    className="octicon octicon-star"
    viewBox="0 0 16 16"
    width="18"
    height="18"
    fill="currentColor"
    style={{ verticalAlign: "text-bottom" }}
  >
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z" />
  </svg>
</span>

         <h4 ><a href="/pulls" className="qaq">Your stars</a></h4>
        </div>
        <div className="lsalq"><span className="prc-ActionList-LeadingVisual-dxXxW prc-ActionList-VisualWrap-rfjV-">
  <svg
    aria-hidden="true"
    focusable="false"
    className="octicon octicon-code-square"
    viewBox="0 0 16 16"
    width="18"
    height="18"
    fill="currentColor"
    style={{ verticalAlign: "text-bottom" }}
  >
    <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Zm7.47 3.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L10.69 8 9.22 6.53a.75.75 0 0 1 0-1.06ZM6.78 6.53 5.31 8l1.47 1.47a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-2-2a.75.75 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z" />
  </svg>
</span>

         <h4 ><a href="/projects" className="qaq">Your gists</a></h4>
        </div>
        <div className="lsalq"><span className="prc-ActionList-LeadingVisual-dxXxW prc-ActionList-VisualWrap-rfjV-">
  <svg
    aria-hidden="true"
    focusable="false"
    className="octicon octicon-organization"
    viewBox="0 0 16 16"
    width="18"
    height="18"
    fill="currentColor"
    style={{ verticalAlign: "text-bottom" }}
  >
    <path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z" />
  </svg>
</span>

         <h4 ><a href="/discussions" className="qaq">Your organizator</a></h4>
        </div>
        <div className="lsalq"><span className="prc-ActionList-LeadingVisual-dxXxW prc-ActionList-VisualWrap-rfjV-">
  <svg
    aria-hidden="true"
    focusable="false"
    className="octicon octicon-globe"
    viewBox="0 0 16 16"
    width="18"
    height="18"
    fill="currentColor"
    style={{ verticalAlign: "text-bottom" }}
  >
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM5.78 8.75a9.64 9.64 0 0 0 1.363 4.177c.255.426.542.832.857 1.215.245-.296.551-.705.857-1.215A9.64 9.64 0 0 0 10.22 8.75Zm4.44-1.5a9.64 9.64 0 0 0-1.363-4.177c-.307-.51-.612-.919-.857-1.215a9.927 9.927 0 0 0-.857 1.215A9.64 9.64 0 0 0 5.78 7.25Zm-5.944 1.5H1.543a6.507 6.507 0 0 0 4.666 5.5c-.123-.181-.24-.365-.352-.552-.715-1.192-1.437-2.874-1.581-4.948Zm-2.733-1.5h2.733c.144-2.074.866-3.756 1.58-4.948.12-.197.237-.381.353-.552a6.507 6.507 0 0 0-4.666 5.5Zm10.181 1.5c-.144 2.074-.866 3.756-1.58 4.948-.12.197-.237.381-.353.552a6.507 6.507 0 0 0 4.666-5.5Zm2.733-1.5a6.507 6.507 0 0 0-4.666-5.5c.123.181.24.365.353.552.714 1.192 1.436 2.874 1.58 4.948Z" />
  </svg>
</span>

         <h4 ><a href="/codespaces" className="qaq">Your enterprices</a></h4>
        </div>
        <div className="lsalq"> 
        <span className="prc-ActionList-LeadingVisual-dxXxW prc-ActionList-VisualWrap-rfjV-">
  <svg
    aria-hidden="true"
    focusable="false"
    className="octicon octicon-heart Octicon-sc-9kayk9-0"
    viewBox="0 0 16 16"
    width="18"
    height="18"
    fill="currentColor"
    style={{ verticalAlign: "text-bottom" }}
  >
    <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z" />
  </svg>
</span>


               <h4 ><a href="/pacapilot" className="qaq">Your sponsers</a></h4>
        </div>
      </div>
      <div className="siede">
        <div className="lsalq">
        <span className="prc-ActionList-LeadingVisual-dxXxW prc-ActionList-VisualWrap-rfjV-">
  <svg
    aria-hidden="true"
    focusable="false"
    className="octicon octicon-upload Octicon-sc-9kayk9-0"
    viewBox="0 0 16 16"
    width="18"
    height="18"
    fill="currentColor"
    style={{ verticalAlign: "text-bottom" }}
  >
    <path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z" />
    <path d="M11.78 4.72a.749.749 0 1 1-1.06 1.06L8.75 3.811V9.5a.75.75 0 0 1-1.5 0V3.811L5.28 5.78a.749.749 0 1 1-1.06-1.06l3.25-3.25a.749.749 0 0 1 1.06 0l3.25 3.25Z" />
  </svg>
</span>



          <h4 ><a href="/home" className="qaq">Try Enterprise</a></h4>
        </div>
        <div className="lsalq"><span className="prc-ActionList-LeadingVisual-dxXxW prc-ActionList-VisualWrap-rfjV-">
  <svg
    aria-hidden="true"
    focusable="false"
    className="octicon octicon-beaker Octicon-sc-9kayk9-0"
    viewBox="0 0 16 16"
    width="16"
    height="16"
    fill="currentColor"
    style={{ verticalAlign: "text-bottom" }}
  >
    <path d="M5 5.782V2.5h-.25a.75.75 0 0 1 0-1.5h6.5a.75.75 0 0 1 0 1.5H11v3.282l3.666 5.76C15.619 13.04 14.543 15 12.767 15H3.233c-1.776 0-2.852-1.96-1.899-3.458Zm-2.4 6.565a.75.75 0 0 0 .633 1.153h9.534a.75.75 0 0 0 .633-1.153L12.225 10.5h-8.45ZM9.5 2.5h-3V6c0 .143-.04.283-.117.403L4.73 9h6.54L9.617 6.403A.746.746 0 0 1 9.5 6Z" />
  </svg>
</span>


         <h4 ><a href="/issuas" className="qaq">Feature previuw</a></h4>
        </div>
        <div className="lsalq"><span className="prc-ActionList-LeadingVisual-dxXxW prc-ActionList-VisualWrap-rfjV-">
  <svg
    aria-hidden="true"
    focusable="false"
    className="octicon octicon-gear Octicon-sc-9kayk9-0"
    viewBox="0 0 16 16"
    width="18"
    height="18"
    fill="currentColor"
    style={{ verticalAlign: "text-bottom" }}
  >
    <path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z" />
  </svg>
</span>
         <h4 ><a href="/pulls" className="qaq">Settings</a></h4>
         
        </div>
        
        
      </div>
      <div className="siede">
        <div className="lsalq"><span className="prc-ActionList-LeadingVisual-dxXxW prc-ActionList-VisualWrap-rfjV-">
  <svg
    aria-hidden="true"
    focusable="false"
    className="octicon octicon-browser Octicon-sc-9kayk9-0"
    viewBox="0 0 16 16"
    width="18"
    height="18"
    fill="currentColor"
    style={{ verticalAlign: "text-bottom" }}
  >
    <path d="M0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25ZM14.5 6h-13v7.25c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Zm-6-3.5v2h6V2.75a.25.25 0 0 0-.25-.25ZM5 2.5v2h2v-2Zm-3.25 0a.25.25 0 0 0-.25.25V4.5h2v-2Z" />
  </svg>
</span>

         <h4 ><a href="/explore" className="qaq">Github website</a></h4>
        </div>
        <div className="lsalq"><span className="prc-ActionList-LeadingVisual-dxXxW prc-ActionList-VisualWrap-rfjV-">
  <svg
    aria-hidden="true"
    focusable="false"
    className="octicon octicon-book Octicon-sc-9kayk9-0"
    viewBox="0 0 16 16"
    width="18"
    height="18"
    fill="currentColor"
    style={{ verticalAlign: "text-bottom" }}
  >
    <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z" />
  </svg>
</span>

         <h4 ><a href="/marketplace" className="qaq">Github Docs</a></h4>
        </div>
        <div className="lsalq"><span className="prc-ActionList-LeadingVisual-dxXxW prc-ActionList-VisualWrap-rfjV-">
  <svg
    aria-hidden="true"
    focusable="false"
    className="octicon octicon-people Octicon-sc-9kayk9-0"
    viewBox="0 0 16 16"
    width="18"
    height="18"
    fill="currentColor"
    style={{ verticalAlign: "text-bottom" }}
  >
    <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z" />
  </svg>
</span>

         <h4 ><a href="/explore" className="qaq">Github supports</a></h4>
        </div>
        <div className="lsalq"><span className="prc-ActionList-LeadingVisual-dxXxW prc-ActionList-VisualWrap-rfjV-">
  <svg
    aria-hidden="true"
    focusable="false"
    className="octicon octicon-comment-discussion Octicon-sc-9kayk9-0"
    viewBox="0 0 16 16"
    width="18"
    height="18"
    fill="currentColor"
    style={{ verticalAlign: "text-bottom" }}
  >
    <path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z" />
  </svg>
</span>

         <h4 ><a href="/marketplace" className="qaq">Github Cummunity</a></h4>
        </div>
      </div><br />
      <div className="lsalq"><span className="prc-ActionList-LeadingVisual-dxXxW prc-ActionList-VisualWrap-rfjV-">
  <svg
    aria-hidden="true"
    focusable="false"
    className="octicon octicon-sign-out Octicon-sc-9kayk9-0"
    viewBox="0 0 16 16"
    width="18"
    height="18"
    fill="currentColor"
    style={{ verticalAlign: "text-bottom" }}
  >
    <path d="M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 0 1 0 1.5h-2.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 0 1.5h-2.5A1.75 1.75 0 0 1 2 13.25Zm10.44 4.5-1.97-1.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l1.97-1.97H6.75a.75.75 0 0 1 0-1.5Z" />
  </svg>
</span>

         <h4 ><a href="/" className="qaq">Sign out</a></h4>
        </div>
   
    </div>
  );
}

export default LSidebar;