import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "../style/home.css";
import Sidebar from './Sidebar';
import Sesrch from './search';
import Capilot from './capilot';
import Home_modus from '../pages/home_modus';
import Avaar from '../companets/avaar'
import Issues from '../pages/issuas';
import LSidebar from './lsiderbar';
const Home = ({ showCapilot = true }) => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [islSidebarOpen, setIslSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [iscapilotOpen, setIscapilotOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  
  const hideModal = () => {
    setIsModalVisible(false);
  };

  const [pageTitle, setPageTitle] = useState("Dashboard");
const [user, setUser] = useState(null);  // Boshlang'ich qiymat null bo'lsin

useEffect(() => {
  const storedUser = JSON.parse(localStorage.getItem("User"));
  if (storedUser) {
    setUser(storedUser);  // Agar ma'lumotlar mavjud bo'lsa, ularni holatga saqlaymiz
  }
}, []);

useEffect(() => {
  const path = location.pathname;
  let title = "Dashboard";

  if (path === "/" || path === "/home") {
    title = "Dashboard";
  } else if (path === "/issues") {
    title = "Issues";
  } else if (path === "/pulls") {
    title = "Pull Requests";
  } else if (path === "/pacapilot") {
    title = "Capilot";
  } else if (path === "/notifications") {
        title = "Notifications";
  }else if (path === "/yourrepo") {
      title = "Your repositors";
  } else if (path === "/profile" && user) {
    title = `${user.login}`;  // Foydalanuvchi loginini faqat `user` mavjud bo'lganda ko'rsatish
  } else if (path === "/search") {
    title = "Search";
  } else {
    title = path.replace("/", "").charAt(0).toUpperCase() + path.slice(2);
  }

  setPageTitle(title);
}, [location, user]);  // `location` yoki `user` o'zgarganda `useEffect` ishga tushadi


  const togglepacapilot = () => {
    setIscapilotOpen(!iscapilotOpen);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const closelSidebar = () => {
    setIslSidebarOpen(false);
  };
  const togglelSidebar = () => {
    setIslSidebarOpen(!isSidebarOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };
  const togglecapilot = () => {
    setIscapilotOpen(!iscapilotOpen);
  };

  const closecapilot = () => {
    setIscapilotOpen(false);
  };

  return (
    <>
      <div className="header">
        <div className="liga">
          <div className="blok">
            <button className="btn1" onClick={toggleSidebar}>
              <i className="fa-solid fa-bars"></i>
            </button>
            <i className="fa-brands fa-github"></i>

            <h4>{pageTitle}</h4>
          </div>
          <div className="lblok">
            <button className="btn2" onClick={toggleSearch}><i className="fa-solid fa-magnifying-glass" style={{ fontSize: "1.2em" }}></i> <span className='akter'>Type [/] to search</span> </button>
            {showCapilot && (
              <div className="capilot">
                <span className="Button-label2" onClick={togglecapilot}>
                  <a href="#" data-target="react-partial-anchor.anchor" id="copilot-chat-header-button" aria-expanded="false" aria-controls="copilot-chat-panel" aria-labelledby="tooltip-805ff6a1-5976-4e86-adf8-4c9141fac901" data-view-component="true">
                    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="20" data-view-component="true">
                      <path fill="black" d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.054 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path>
                      <path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path>
                    </svg>
                  </a>
                  <span className="tooltip-text"><h5>Chat new Capilot </h5></span>
                </span>
                <span className="Button-label1" onClick={showModal}>
                  <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="20" data-view-component="true" className="octicon octicon-triangle-down">
                    <path fill="grey" d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
                  </svg>
                  <span className="tooltip-text"><h5>Open Capilot </h5></span>
                </span>
                {isModalVisible && (
                  <div
                    className="moasq"
                    onClick={hideModal} // Close modal when clicking on the modal background
                  >
                    <div
                      className="moasq-content"
                      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
                    >
                      <h5>New conversation in</h5>
                      <div className="cpainodo" onClick={togglecapilot}><br />
                      <i className='fa-regular fa-message'></i> <p>Assitive</p>
                      </div>
                      <a href="/pacapilot"> <div className="cpainodo"><br />
                 <svg  aria-hidden="true" focusable="false" viewBox="0 0 16 16" width="20" height="20" fill="currentColor"><path d="M1.75 10a.75.75 0 0 1 .75.75v2.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 0 1.5h-2.5A1.75 1.75 0 0 1 1 13.25v-2.5a.75.75 0 0 1 .75-.75Zm12.5 0a.75.75 0 0 1 .75.75v2.5A1.75 1.75 0 0 1 13.25 15h-2.5a.75.75 0 0 1 0-1.5h2.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 .75-.75ZM2.75 2.5a.25.25 0 0 0-.25.25v2.5a.75.75 0 0 1-1.5 0v-2.5C1 1.784 1.784 1 2.75 1h2.5a.75.75 0 0 1 0 1.5ZM10 1.75a.75.75 0 0 1 .75-.75h2.5c.966 0 1.75.784 1.75 1.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.25.25 0 0 0-.25-.25h-2.5a.75.75 0 0 1-.75-.75Z"></path></svg>  
                 <p  style={{color:"black"}}>immersive</p>
                  
                     </div>
                     </a>
                      <div className="cpainodo"><br />
                      <i class="fa-solid fa-download"></i> <p>Download for</p>
                       </div>
                       <div className="cpainodo"><br />
                       <i class="fa-solid fa-gear"></i> <p>Settings</p>
                       </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            <div className="as">

            </div>
            <button id="global-create-menu-anchor" onClick={openModal} className="create-button">
        <span className="button-content">
          <svg aria-hidden="true" viewBox="0 0 16 16" width="18" className="icon">
            <path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z" />
          </svg>
          <svg aria-hidden="true" viewBox="0 0 16 16" width="18" className="icon">
            <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z" />
          </svg>
        </span>
        <span className="tooltip-text">Create new</span>
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h4>Repository</h4>
              <button className="close-button" onClick={closeModal}>
                &times;
              </button>
            </div>
            <div className="qkisa">
            <div className="cpainodo">
              <i className='fa-solid fa-book'></i>
              <p>New repository</p>
            </div><br />
             <div className="cpainodo">
              <i className='fa-solid fa-book'></i>
              <p>Import repository</p>
            </div>
            </div>
            <div className="qkisa">
            <div className="cpainodo">
              <i className='fa-solid fa-book'></i>
              <p>New repository</p>
            </div><br />
             <div className="cpainodo">
              <i className='fa-solid fa-book'></i>
              <p>Import repository</p>
            </div>
            </div>
            <div className="qkis">
            <div className="cpainodo">
              <i className='fa-solid fa-book'></i>
              <p>New repository</p>
            </div><br />
             <div className="cpainodo">
              <i className='fa-solid fa-book'></i>
              <p>Import repository</p>
            </div>
            </div>
          </div>
        </div>
      )}
            <button className="issues">
              <a href="/issuas" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;ISSUES_HEADER&quot;,&quot;label&quot;:null}" id="icon-button-1da605c9-a2ed-475d-aad3-61e3d02fa316" aria-labelledby="tooltip-25bd531c-3ed5-498e-b879-c0838a41ae66" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened Button-visual">
                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
              </svg>
              </a><span class="tooltip-text"><h6>Your issues</h6></span>
            </button>
            <button className="pulls">
              <a href="/pulls" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PULL_REQUESTS_HEADER&quot;,&quot;label&quot;:null}" id="icon-button-30e396c4-9c88-4b09-a41c-4a2fb3ac64b2" aria-labelledby="tooltip-80a06a93-e351-4685-bb6d-d95dca2e16f8" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request Button-visual">
                <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
              </svg>
              </a>  <span class="tooltip-text"><h6>Your pulls requests</h6></span>
            </button>
            <button className="notication">
              <a id="AppHeader-notifications-button" href="/notifications" aria-labelledby="notification-indicator-tooltip" data-hotkey="g n" data-target="notification-indicator.link" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;NOTIFICATIONS_HEADER&quot;,&quot;label&quot;:&quot;icon:read&quot;}" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-inbox Button-visual">
                <path d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"></path>
              </svg>
              </a>  <span class="tooltip-text1"><h6>You have no underd notifaction</h6></span>
            </button>
            <div className="alala" onClick={togglelSidebar}>   <Avaar  /></div>
          
          </div>
        </div>
        {location.pathname === "/home" && <Home_modus />}
      </div>
      <LSidebar  isOpen={islSidebarOpen} onClose={closelSidebar}/>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <Sesrch isOpen={isSearchOpen} onClose={closeSearch} />
      <Capilot isOpen={iscapilotOpen} onClose={closecapilot} />


    </>
  )
}
export default Home
