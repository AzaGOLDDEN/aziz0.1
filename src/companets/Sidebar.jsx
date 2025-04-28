import { useState, useEffect, useRef } from "react";
import "../style/Sidebar.css";

function Sidebar({ isOpen, onClose }) {
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState("");
  const [alikVisible, setAlikVisible] = useState(false); // Alik elementining ko'rinishi uchun state
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  const sidebarRef = useRef();

  useEffect(() => {
    // LocalStorage'dan foydalanuvchi ma'lumotlarini olish
    const user = JSON.parse(localStorage.getItem("User"));

    if (user && user.repos_url) {
        // Repozitoriyalarni API orqali olish
        fetch(user.repos_url)
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setRepos(data); // API orqali olingan repozitoriyalarni holatga o'rnatish
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
}, [isOpen]);

  const filteredRepos = repos.filter((repo) =>
    repo.full_name.toLowerCase().includes(search.toLowerCase())
  );

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

  return (
    <div ref={sidebarRef} className={`sidebar ${isOpen ? "open" : "close"}`}>
      <div className="sidebar-header">
        <i className="fa-brands fa-github" />
        <button className="close-btn" onClick={onClose}>
          <i className="fa-solid fa-xmark" />
        </button>
      </div><br />
      <div className="siede">
        <div className="lsalq">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="18" viewBox="0 0 16 16" version="1.1" width="18" data-view-component="true" class="octicon octicon-home">
    <path d="M6.906.664a1.749 1.749 0 0 1 2.187 0l5.25 4.2c.415.332.657.835.657 1.367v7.019A1.75 1.75 0 0 1 13.25 15h-3.5a.75.75 0 0 1-.75-.75V9H7v5.25a.75.75 0 0 1-.75.75h-3.5A1.75 1.75 0 0 1 1 13.25V6.23c0-.531.242-1.034.657-1.366l5.25-4.2Zm1.25 1.171a.25.25 0 0 0-.312 0l-5.25 4.2a.25.25 0 0 0-.094.196v7.019c0 .138.112.25.25.25H5.5V8.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v5.25h2.75a.25.25 0 0 0 .25-.25V6.23a.25.25 0 0 0-.094-.195Z"></path>
</svg>
        </span>
          <h4 ><a href="/home" className="qaq">Home</a></h4>
        </div>
        <div className="lsalq"><span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="18" viewBox="0 0 16 16" version="1.1" width="18" data-view-component="true" class="octicon octicon-issue-opened">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
        </span>
         <h4 ><a href="/issuas" className="qaq">Issues</a></h4>
        </div>
        <div className="lsalq"><span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="18" viewBox="0 0 16 16" version="1.1" width="18" data-view-component="true" class="octicon octicon-git-pull-request">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
        </span>
         <h4 ><a href="/pulls" className="qaq">Pull requests</a></h4>
        </div>
        <div className="lsalq"><span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="18" viewBox="0 0 16 16" version="1.1" width="18" data-view-component="true" class="octicon octicon-table">
    <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
</svg>
        </span>
         <h4 ><a href="/projects" className="qaq">Projects</a></h4>
        </div>
        <div className="lsalq"><span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="18" viewBox="0 0 16 16" version="1.1" width="18" data-view-component="true" class="octicon octicon-comment-discussion">
    <path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z"></path>
</svg>
        </span>
         <h4 ><a href="/discussions" className="qaq">Discussions</a></h4>
        </div>
        <div className="lsalq"><span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="18" viewBox="0 0 16 16" version="1.1" width="18" data-view-component="true" class="octicon octicon-codespaces">
    <path d="M0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm2-9.5C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 2 6.75Zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25Zm-2 9.5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z"></path><path d="M7 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path>
</svg>
        </span>
         <h4 ><a href="/codespaces" className="qaq">Codespaces</a></h4>
        </div>
        <div className="lsalq"><span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="18" viewBox="0 0 16 16" version="1.1" width="18" data-view-component="true" class="octicon octicon-copilot">
    <path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path>
</svg>
        </span>
         <h4 ><a href="/pacapilot" className="qaq">Copilot</a></h4>
        </div>
      </div>
      <div className="siede">
        <div className="lsalq"><span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="18" viewBox="0 0 16 16" version="1.1" width="18" data-view-component="true" class="octicon octicon-telescope">
    <path d="M14.184 1.143v-.001l1.422 2.464a1.75 1.75 0 0 1-.757 2.451L3.104 11.713a1.75 1.75 0 0 1-2.275-.702l-.447-.775a1.75 1.75 0 0 1 .53-2.32L11.682.573a1.748 1.748 0 0 1 2.502.57Zm-4.709 9.32h-.001l2.644 3.863a.75.75 0 1 1-1.238.848l-1.881-2.75v2.826a.75.75 0 0 1-1.5 0v-2.826l-1.881 2.75a.75.75 0 1 1-1.238-.848l2.049-2.992a.746.746 0 0 1 .293-.253l1.809-.87a.749.749 0 0 1 .944.252ZM9.436 3.92h-.001l-4.97 3.39.942 1.63 5.42-2.61Zm3.091-2.108h.001l-1.85 1.26 1.505 2.605 2.016-.97a.247.247 0 0 0 .13-.151.247.247 0 0 0-.022-.199l-1.422-2.464a.253.253 0 0 0-.161-.119.254.254 0 0 0-.197.038ZM1.756 9.157a.25.25 0 0 0-.075.33l.447.775a.25.25 0 0 0 .325.1l1.598-.769-.83-1.436-1.465 1Z"></path>
</svg>
        </span>
         <h4 ><a href="/explore" className="qaq">Explore</a></h4>
        </div>
        <div className="lsalq"><span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="18" viewBox="0 0 16 16" version="1.1" width="18" data-view-component="true" class="octicon octicon-gift">
    <path d="M2 2.75A2.75 2.75 0 0 1 4.75 0c.983 0 1.873.42 2.57 1.232.268.318.497.668.68 1.042.183-.375.411-.725.68-1.044C9.376.42 10.266 0 11.25 0a2.75 2.75 0 0 1 2.45 4h.55c.966 0 1.75.784 1.75 1.75v2c0 .698-.409 1.301-1 1.582v4.918A1.75 1.75 0 0 1 13.25 16H2.75A1.75 1.75 0 0 1 1 14.25V9.332C.409 9.05 0 8.448 0 7.75v-2C0 4.784.784 4 1.75 4h.55c-.192-.375-.3-.8-.3-1.25ZM7.25 9.5H2.5v4.75c0 .138.112.25.25.25h4.5Zm1.5 0v5h4.5a.25.25 0 0 0 .25-.25V9.5Zm0-4V8h5.5a.25.25 0 0 0 .25-.25v-2a.25.25 0 0 0-.25-.25Zm-7 0a.25.25 0 0 0-.25.25v2c0 .138.112.25.25.25h5.5V5.5h-5.5Zm3-4a1.25 1.25 0 0 0 0 2.5h2.309c-.233-.818-.542-1.401-.878-1.793-.43-.502-.915-.707-1.431-.707ZM8.941 4h2.309a1.25 1.25 0 0 0 0-2.5c-.516 0-1 .205-1.43.707-.337.392-.646.975-.879 1.793Z"></path>
</svg>
        </span>
         <h4 ><a href="/marketplace" className="qaq">Marketplace</a></h4>
        </div>
      </div>
<br />

      <div className="reopa">
        <p>Repositories</p>
        <button onClick={toggleAlik} className="toggle-btn">
          {alikVisible}
          <i className="fa-solid fa-search" style={{ marginLeft: "0.5rem" }} />
        </button>
      </div>
<br />
      <div
        id="alik"
        className="alik"
        style={{
          opacity: alikVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
          height: alikVisible ? "250px" : "0",
        }}
      >
        <input
          type="text"
          placeholder="Search repositories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <h5>Recent repositories</h5>
        <ul className="repo-list" style={{height:"200px"}}>
          {filteredRepos.map((repo) => (
            <li className="repo-item" key={repo.id}>
              <div className="lak">
                <i className="fa-solid fa-book" />
                <h4 className="repaaa">{repo.full_name}</h4>
              </div>
            
            </li>
          ))}
        </ul>
      </div><br />
      {filteredRepos.length === 0 ? (
                            <p>No repositories found</p>
                        ) : (
                            <ul className="repo-list1">
                                {filteredRepos.slice(0, 10).map((repo) => ( // Faqat birinchi 10 ta natijani ko'rsatish
                                    <li className="repo-item1" key={repo.id}>
                                        <div className="lak">
                                            <img
                                                className="imat"
                                                src={repo.owner.avatar_url}
                                                alt="Owner Avatar"
                                                style={{ width: "30px", borderRadius: "50%" }}
                                            />
                                            <h4 className="repaaa">
                                                <a
                                                    href={repo.html_url}
                                                    className="akl"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {repo.full_name}
                                                </a>
                                            </h4>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
      <div className="ahq">
        <p>© 2025 GitHub, Inc.</p>
       <div className="ax"><br />
       <a class="akl" href="">About</a>    <a class="akl" href="">Blog</a>    <a class="akl" href="">Terms</a>    <a class="akl" href="">Privacy</a>    <a class="akl" href="">Securty</a>    <a class="akl" href="">Status</a> 
<br />
<a class="akl" href="">Do not share my personal information</a>
<br />
<a class="akl" href="">Manage Cookies</a>

       </div>
      </div>
    </div>
  );
}

export default Sidebar;