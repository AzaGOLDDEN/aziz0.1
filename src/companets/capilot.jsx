import React, { useState, useRef, useEffect } from "react";
import "../style/capilot.css";

function Capilot({ isOpen, onClose }) {
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState("");
  const token = import.meta.env.VITE_GITHUB_TOKEN;

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

 

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Tashqariga bosilganini aniqlash
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  const filteredRepos = repos.filter((repo) =>
    repo.full_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className={`capilot-overlay ${isOpen ? "open" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="capilot-box">
        <div className="atr">
          <h4></h4>
          <div className="sete">
            <button
              type="button"
              aria-label="New conversation"
              className="cpapilei"
            >
              <span
                role="tooltip"
                aria-label="New conversation"
                className="tooltip"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  className="octicon octicon-plus"
                  viewBox="0 0 16 16"
                  width="20"
                  height="20"
                  fill="currentColor"
                  style={{ verticalAlign: "text-bottom" }}
                >
                  <path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path>
                </svg>
              </span>
              <span className="tooltip-chiqw">
                <h5>New conversation</h5>
              </span>
            </button>

            {/* Kebab button */}
            <button
              type="button"
              aria-label="Conversation options"
              aria-haspopup="true"
              aria-expanded={isModalOpen}
              className="cpapilei"
              onClick={toggleModal}
            >
              <span
                role="tooltip"
                aria-label="Conversation options"
                className="tooltip"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  className="octicon octicon-kebab-horizontal"
                  viewBox="0 0 16 16"
                  width="20"
                  height="20"
                  fill="currentColor"
                  style={{ verticalAlign: "text-bottom" }}
                >
                  <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                </svg>
              </span>
              <span className="tooltip-chiqw">
                <h5>Conversation options</h5>
              </span>
            </button>

            {/* Modal */}

            <div className="chiiq"></div>
            <button className="cpapilei">
              <a href="/pacapilot">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 16 16"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <path d="M1.75 10a.75.75 0 0 1 .75.75v2.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 0 1.5h-2.5A1.75 1.75 0 0 1 1 13.25v-2.5a.75.75 0 0 1 .75-.75Zm12.5 0a.75.75 0 0 1 .75.75v2.5A1.75 1.75 0 0 1 13.25 15h-2.5a.75.75 0 0 1 0-1.5h2.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 .75-.75ZM2.75 2.5a.25.25 0 0 0-.25.25v2.5a.75.75 0 0 1-1.5 0v-2.5C1 1.784 1.784 1 2.75 1h2.5a.75.75 0 0 1 0 1.5ZM10 1.75a.75.75 0 0 1 .75-.75h2.5c.966 0 1.75.784 1.75 1.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.25.25 0 0 0-.25-.25h-2.5a.75.75 0 0 1-.75-.75Z"></path>
                </svg>
              </a>
              <span class="tooltip-chiqw">
                <h5>Continue in mersevvie</h5>
              </span>
            </button>

            <button onClick={onClose} className="cpapilei">
              <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 16 16"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
              </svg>
              <span class="tooltip-chiqw">
                <h5>Close chat</h5>
              </span>
            </button>
          </div>
        </div>
        <br />
        {isModalOpen && (
          <div className="modal-container">
            <div className="modal" ref={modalRef} >
              <button
                disabled
                style={{
                  border: "none",
                  boxShadow: "0px 1px 0px 0px black",
                  padding: "3px",
                  cursor: "no-drop",
                
                }}
              >
                {" "}
                <p>
                  <i class="fa-solid fa-trash"></i> Delete conversation
                </p>
              </button>
              <button className="incgat">
  <span className="prc-ActionList-LeadingVisual-dxXxW prc-ActionList-VisualWrap-rfjV-">
    <svg
      aria-hidden="true"
      focusable="false"
      className="octicon octicon-tools"
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="currentColor"
      style={{ verticalAlign: "text-bottom" }}
    >
     <path d="M5.433 2.304A4.492 4.492 0 0 0 3.5 6c0 1.598.832 3.002 2.09 3.802.518.328.929.923.902 1.64v.008l-.164 3.337a.75.75 0 1 1-1.498-.073l.163-3.33c.002-.085-.05-.216-.207-.316A5.996 5.996 0 0 1 2 6a5.993 5.993 0 0 1 2.567-4.92 1.482 1.482 0 0 1 1.673-.04c.462.296.76.827.76 1.423v2.82c0 .082.041.16.11.206l.75.51a.25.25 0 0 0 .28 0l.75-.51A.249.249 0 0 0 9 5.282V2.463c0-.596.298-1.127.76-1.423a1.482 1.482 0 0 1 1.673.04A5.993 5.993 0 0 1 14 6a5.996 5.996 0 0 1-2.786 5.068c-.157.1-.209.23-.207.315l.163 3.33a.752.752 0 0 1-1.094.714.75.75 0 0 1-.404-.64l-.164-3.345c-.027-.717.384-1.312.902-1.64A4.495 4.495 0 0 0 12.5 6a4.492 4.492 0 0 0-1.933-3.696c-.024.017-.067.067-.067.16v2.818a1.75 1.75 0 0 1-.767 1.448l-.75.51a1.75 1.75 0 0 1-1.966 0l-.75-.51A1.75 1.75 0 0 1 5.5 5.282V2.463c0-.092-.043-.142-.067-.159Z"></path>
    </svg>
  </span>
  <span>Delete conversation</span>
</button>

              <button className="incgat">
                <span className="prc-ActionList-LeadingVisual-dxXxW prc-ActionList-VisualWrap-rfjV-">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    className="octicon octicon-history"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    fill="currentColor"
                    style={{ verticalAlign: "text-bottom" }}
                  >
                    <path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path>
                  </svg>
                </span>
                                 <span>Delete conversation</span>
              </button>

              <button className="incgat">
                <span className="prc-ActionList-LeadingVisual-dxXxW prc-ActionList-VisualWrap-rfjV-">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    className="octicon octicon-comment-discussion"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    fill="currentColor"
                    style={{ verticalAlign: "text-bottom" }}
                  >
                    <path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z"></path>
                  </svg>
                </span>
                <span>Reply to conversation</span>
              </button>
            </div>
          </div>
        )}{" "}
        <br />
        <div className="korsa">
          <span>
            <svg aria-hidden="true" viewBox="0 0 16 16" width="50" fill="grey">
              <path
                fill="black"
                d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.054 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"
              ></path>
              <path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path>{" "}
            </svg>

            <span className="tooltip-text" id="tooltip-copilot">
              <h5>Chat new Copilot</h5>
            </span>
          </span>

          <h2>Ask Copilot</h2>
          <p>
            Select a repository to get started. Ask questions about your <br />
            codebase to get answers fast and learn your way around.
          </p>
        </div>
        <br />
        {/* Repos list */}
        <div className="alik">
          <input
            type="text"
            placeholder="Search repositories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />{" "}
          <br />
          <br />
          <h5>Recent repositories</h5>
          {filteredRepos.length === 0 ? (
                            <p>No repositories found</p>
                        ) : (
                            <ul className="repo-list1" style={{overflowY:"scroll",height:"140px"}} >
                                {filteredRepos.slice(0, 100).map((repo) => ( // Faqat birinchi 10 ta natijani ko'rsatish
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
          <div className="aksem">
            <p>General purpose chat</p>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Capilot;
