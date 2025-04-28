import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faKey,
  faFile,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import "../style/home_modus.css";
function Home_modus() {
  const [search, setSearch] = useState("");
  const [repos, setRepos] = useState([]);

  const [alikVisible, setAlikVisible] = useState(false);
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  const [user, setUser] = useState("");

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
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("User"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const filteredRepos = repos.filter((repo) =>
    repo.full_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="bagram">
        <div className="lbagram">
          <br />
          <div
            id="alik"
            className="alik"
            style={{
              border: "none",
            }}
          >
            <div className="johaa">
              <h5>Top repositories</h5>

              <a href="/repositor">
                <button className="reabtn">
                  <i className="fa-solid fa-book"></i> New
                </button>
              </a>
            </div>
            <br />
            <input
              type="text"
              placeholder="Search repositories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />

            {filteredRepos.length === 0 ? (
              <p>No repositories found</p>
            ) : (
              <ul className="repo-list1">
                {filteredRepos.slice(0, 10).map((repo) => (
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
          </div>
          <br />
        </div>
        <div className="rbagram">
          <div className="rgear">
            <h2>Home</h2>
            <div className="space-y-4 ebr">
              <div className="ebr__input-wrapper" style={{ marginTop: "10px" }}>
                <input
                  type="text"
                  placeholder="Ask Copilot"
                  className="ebr__input"
                />

                <div className="ebr__icons">
                  <button className="ebr__icon-btn">
                    <a href="/pacapilot">
                      {" "}
                      <FontAwesomeIcon icon={faPaperPlane} />
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="imlo">
              <div className="imblck">
                <FontAwesomeIcon icon={faKey} />
                <h5 style={{ marginLeft: "10px" }}>
                  Git creditanial managemenat
                </h5>
              </div>
              <div className="imblck">
                <FontAwesomeIcon icon={faPaperPlane} />
                <h5 style={{ marginLeft: "10px" }}>
                  {" "}
                  Learn Python file chesks
                </h5>
              </div>
              <div className="imblck">
                <FontAwesomeIcon icon={faFile} />
                <h5 style={{ marginLeft: "10px" }}>
                  Convert single branch clane
                </h5>
              </div>
            </div>
            <br />
            <div className="mais">
              <div className="asqee">
                <div className="cire">
                  <span
                    class="circl d-inline-flex mr-2 p-2"
                    data-view-component="true"
                  >
                    <svg
                      aria-hidden="true"
                      height="18"
                      viewBox="0 0 18 18"
                      width="18"
                      class="octicon octicon-north-star color-fg-subtle"
                    >
                      <path d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939V.75Z" />
                    </svg>
                  </span>
                </div>
                <p>Learn with a tutorial project</p>
              </div>
              <button
                style={{
                  border: "none",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                <svg
                  aria-hidden="true"
                  height="18"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="18"
                  data-view-component="true"
                  class="octicon octicon-kebab-horizontal color-fg-default"
                >
                  <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                </svg>
              </button>
            </div>
            <br />
            <div className="bara">
              <div className="maha">
                <a href="" className="akl">
                  Introduction with to Github <br />
                  Get started using Guthub in less than an bour.
                </a>
              </div>
              <div className="maha">
                <a href="" className="akl">
                  {" "}
                  Github pages
                  <br />
                  Create site or blog from you Github repositor with Github
                  pages
                </a>
              </div>
              <div className="maha">
                <a href="" className="akl">
                  Code with capilot <br />
                  Develop with Ai-powered code sugnets using Github Copilot,
                  Codesapase and Vs Code.
                </a>
              </div>
              <div className="maha">
                <a href="" className="akl">
                  Hello GIthub Actions <br />
                  Create a Github Action and use it in a workflow.
                </a>
              </div>
            </div>
            <br />
            <a href="" className="akl">
              {" "}
              See more tutorel project
            </a>
            <br />
            <br />
            <div className="mais">
              <div className="asqee">
                <div className="cire1">
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <p>Start writing code</p>
              </div>
              <button
                style={{
                  border: "none",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                <svg
                  aria-hidden="true"
                  height="18"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="18"
                  data-view-component="true"
                  class="octicon octicon-kebab-horizontal color-fg-default"
                >
                  <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                </svg>
              </button>
            </div>
            <br />
            <div className="altrioa">
              <div className="altrioas1">
                {user && (
                  <h5>
                    Start a new repository for{" "}
                    <span>{user.login || user.login}</span>
                  </h5>
                )}{" "}
                <br />
                <p>
                  A repository contains all of your project's files, revision
                  history, and collaborator discussion.
                </p>
                <br />
                <h5>Repository name *</h5>
                <input
                  type="text"
                  className="inasq"
                  placeholder="name your new repositor..."
                />
                <br />
                <br />
                <div className="brle">
                  <input type="radio" />
                  <div className="kaq">
                    <h5>Public</h5>
                    <p>Anyone on the internet can see this repository</p>
                  </div>
                </div>
                <br />
                <div className="brle">
                  <input type="radio" />
                  <div className="kaq">
                    <h5>Private</h5>
                    <p>You choose who can see and commit to this repository</p>
                  </div>
                </div>
                <br />
                <a href="/repositor">  <button className="iakq"  style={{cursor:"pointer"}}>Cretae a new repository</button></a>
              
              </div>
              <div className="altrioas1">
                <h5>Introduce yourself with a profile README</h5>
                <br />
                <p>
                  Share information about yourself by creating a profile README,
                  which appears at the top of your profile page.
                </p>
                <br />
                <br />

                <div className="readme">
                  <div className="yeqw">
                    {user ? (
                      <div>
                        <p>{user.login || "N/A"}/README.md</p>
                      </div>
                    ) : (
                      <p>Loading user data...</p>
                    )}
                    <button className="reabtn">Crate</button>
                  </div>

                  <div className="asdqe">
                    {user ? (
                      <div>
                        <p> 1 - 👋 Hi, I’m {user.login || "N/A"}</p>
                      </div>
                    ) : (
                      <p>Loading user data...</p>
                    )}
                    2 - 👀 I’m interested in ... <br />
                    3- 🌱 I’m currently learning ... <br />
                    4 - 💞️ I’m looking to collaborate on ... <br />
                    5 - 📫 How to reach me ... <br />
                    6 - 😄 Pronouns: ... <br />7 - ⚡ Fun fact: ..
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="mais">
              <div className="asqee">
                <div className="cire1">
                  <span
                    className="circle d-inline-flex p-2 mr-2"
                    style={{
                      backgroundColor:
                        "var(--bgColor-neutral-muted, var(--color-scale-gray-2))",
                    }}
                  >
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      className="octicon octicon-tools color-fg-subtle"
                    >
                      <path d="M5.433 2.304A4.492 4.492 0 0 0 3.5 6c0 1.598.832 3.002 2.09 3.802.518.328.929.923.902 1.64v.008l-.164 3.337a.75.75 0 1 1-1.498-.073l.163-3.33c.002-.085-.05-.216-.207-.316A5.996 5.996 0 0 1 2 6a5.993 5.993 0 0 1 2.567-4.92 1.482 1.482 0 0 1 1.673-.04c.462.296.76.827.76 1.423v2.82c0 .082.041.16.11.206l.75.51a.25.25 0 0 0 .28 0l.75-.51A.249.249 0 0 0 9 5.282V2.463c0-.596.298-1.127.76-1.423a1.482 1.482 0 0 1 1.673.04A5.993 5.993 0 0 1 14 6a5.996 5.996 0 0 1-2.786 5.068c-.157.1-.209.23-.207.315l.163 3.33a.752.752 0 0 1-1.094.714.75.75 0 0 1-.404-.64l-.164-3.345c-.027-.717.384-1.312.902-1.64A4.495 4.495 0 0 0 12.5 6a4.492 4.492 0 0 0-1.933-3.696c-.024.017-.067.067-.067.16v2.818a1.75 1.75 0 0 1-.767 1.448l-.75.51a1.75 1.75 0 0 1-1.966 0l-.75-.51A1.75 1.75 0 0 1 5.5 5.282V2.463c0-.092-.043-.142-.067-.159Z"></path>
                    </svg>
                  </span>
                </div>
                <p>Start writing code</p>
              </div>
              <button
                style={{
                  border: "none",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                <svg
                  aria-hidden="true"
                  height="18"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="18"
                  data-view-component="true"
                  class="octicon octicon-kebab-horizontal color-fg-default"
                >
                  <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                </svg>
              </button>
            </div>
            <br />
            <div className="bara2">
              <div className="maha">
                <p>Simplify your development workflow with a GUI</p>
                <div className="asqeel">
                  <img
                    src="https://github.githubassets.com/assets/gh-desktop-7c9388a38509.png"
                    alt=""
                    style={{ width: "40px" }}
                  />
                  Install GitHub Desktop to visualize, commit, and push changes
                  without ever touching the command line.
                </div>
              </div>
              <div className="maha">
                <p>Write code in your web browser</p>
                <div className="asqeel">
                  <img
                    src="https://github.githubassets.com/assets/github-vscode-logo-light-a58629c90ef3.svg"
                    alt=""
                    style={{ width: "40px" }}
                  />
                  Use the github.dev web-based editor from your repository or
                  pull request to create and commit changes.
                </div>
              </div>
            </div>
            <br />
            <div className="mais">
              <div className="asqee">
                <div className="cire1">
                  <span
                    className="circle d-inline-flex p-2 mr-2"
                    style={{
                      backgroundColor:
                        "var(--bgColor-neutral-muted, var(--color-scale-gray-2))",
                    }}
                  >
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      className="octicon octicon-mortar-board color-fg-subtle"
                    >
                      <path d="M7.693 1.066a.747.747 0 0 1 .614 0l7.25 3.25a.75.75 0 0 1 0 1.368L13 6.831v2.794c0 1.024-.81 1.749-1.66 2.173-.893.447-2.075.702-3.34.702-.278 0-.55-.012-.816-.036a.75.75 0 0 1 .133-1.494c.22.02.45.03.683.03 1.082 0 2.025-.221 2.67-.543.69-.345.83-.682.83-.832V7.503L8.307 8.934a.747.747 0 0 1-.614 0L4 7.28v1.663c.296.105.575.275.812.512.438.438.688 1.059.688 1.796v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3c0-.737.25-1.358.688-1.796.237-.237.516-.407.812-.512V6.606L.443 5.684a.75.75 0 0 1 0-1.368ZM2.583 5 8 7.428 13.416 5 8 2.572ZM2.5 11.25v2.25H4v-2.25c0-.388-.125-.611-.25-.735a.697.697 0 0 0-.5-.203.707.707 0 0 0-.5.203c-.125.124-.25.347-.25.735Z" />
                    </svg>
                  </span>
                </div>
                <p>Start writing code</p>
              </div>
              <button
                style={{
                  border: "none",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                <svg
                  aria-hidden="true"
                  height="18"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="18"
                  data-view-component="true"
                  class="octicon octicon-kebab-horizontal color-fg-default"
                >
                  <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                </svg>
              </button>
            </div>
            <br />
            <div className="altrioa">
              <div className="altrioa">
                <iframe
                  width="320"
                  height="220"
                  src="https://www.youtube.com/embed/pBy1zgt0XPc"
                  title="YouTube video player"
                  frameBorder="0"
                  style={{ borderRadius: "7px" }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="altrioas1">
                <svg
                  aria-hidden="true"
                  height="24"
                  viewBox="0 0 24 24"
                  version="1.1"
                  width="24"
                  data-view-component="true"
                  class="octicon octicon-git-pull-request color-fg-subtle mr-2"
                >
                  <path d="M16 19.25a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm-14.5 0a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm0-14.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM4.75 3a1.75 1.75 0 1 0 .001 3.501A1.75 1.75 0 0 0 4.75 3Zm0 14.5a1.75 1.75 0 1 0 .001 3.501A1.75 1.75 0 0 0 4.75 17.5Zm14.5 0a1.75 1.75 0 1 0 .001 3.501 1.75 1.75 0 0 0-.001-3.501Z"></path>
                  <path d="M13.405 1.72a.75.75 0 0 1 0 1.06L12.185 4h4.065A3.75 3.75 0 0 1 20 7.75v8.75a.75.75 0 0 1-1.5 0V7.75a2.25 2.25 0 0 0-2.25-2.25h-4.064l1.22 1.22a.75.75 0 0 1-1.061 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM4.75 7.25A.75.75 0 0 1 5.5 8v8A.75.75 0 0 1 4 16V8a.75.75 0 0 1 .75-.75Z"></path>
                </svg>
                <br />
                <h5>Follow this exercise to try the GitHub flow</h5>
                <br />
                <p>
                  GitHub's “Hello World” tutorial teaches you essentials, where
                  you create your own repository and learn GitHub's pull request
                  workflow for creating and reviewing code.
                </p>
                <br />
                <button className="hirtyaa">Try the Github flow</button>
              </div>
            </div>
            <br />
            <div className="feed-container">
              <div className="qhdaasda">
                <h2 className="feed-title">Feed</h2>
                <button className="akro">
                  <svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    class="octicon octicon-filter mr-2"
                  >
                    <path d="M.75 3h14.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1 0-1.5ZM3 7.75A.75.75 0 0 1 3.75 7h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 3 7.75Zm3 4a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"></path>
                  </svg>{" "}
                  Filter 4{" "}
                </button>
              </div>
              <div className="repository-card">
                <div className="activity-header">
                  <span className="username">yusupovbekmurod</span>
                  <span className="activity-action">forked a repository</span>
                  <span className="activity-time">3 weeks ago</span>
                </div>
                <div className="repository-info">
                  <span className="repository-name">
                    yusupovbekmurod/Rasulwebs
                  </span>
                  <span className="repository-stars">⭐ 5</span>
                </div>
              </div>

              <h3 className="section-heading">Trending repositories</h3>

              <a href="#" className="repository-card">
                <div className="repository-card-header">
                  <span className="repository-icon error-icon">✖</span>
                  <span className="repository-link">nari-labs/dia</span>
                </div>
                <p className="repository-description">
                  A TTS model capable of generating ultra-realistic dialogue in
                  one pass.
                </p>
                <span className="repository-language">Python • 8.8k</span>
              </a>

              <a href="#" className="repository-card">
                <div className="repository-card-header">
                  <span className="repository-icon box-icon">📦</span>
                  <span className="repository-link">SandAI-org/MAGI-1</span>
                </div>
                <p className="repository-description">
                  MAGI-1: Autoregressive Video Generation at Scale
                </p>
                <span className="repository-language">Python • 2.4k</span>
              </a>

              <h3 className="section-heading">Recommended for you</h3>

              <a href="#" className="repository-card">
                <div className="repository-card-header">
                  <span className="repository-icon search-icon">🔍</span>
                  <span className="repository-link">MILVLG/imp</span>
                </div>
                <p className="repository-description">
                  a family of highly capable yet efficient large multimodal
                  models
                </p>
                <span className="repository-language">Python • 178</span>
              </a>
            </div>

            <footer>
              <div className="fooaq">
                <i className="fa-brands fa-github"></i>
                <p>© 2025 GitHub, Inc.</p>
              </div>
              <div className="aqqw">
                <a href="" className="akl">
                  Terms{" "}
                </a>{" "}
                <a href="" className="akl">
                  Privacy
                </a>{" "}
                <a href="" className="akl">
                  Security{" "}
                </a>{" "}
                <a href="" className="akl">
                  Status
                </a>{" "}
                <a href="" className="akl">
                  Docs{" "}
                </a>{" "}
                <a href="" className="akl">
                  {" "}
                  Docs{" "}
                </a>{" "}
                <a href="" className="akl">
                  Contact
                </a>{" "}
                <a href="" className="akl">
                  {" "}
                  Manage cookies
                </a>
                <br />
                <a class="akl" href="">
                  Do not share my personal information
                </a>
              </div>
            </footer>
          </div>
          <div className="lgear">
            <div className="lheaq">
              <h5>Latest changes</h5>
              <div className="lasdqwd">
                <div className="deua">
                  <div className="dumaloq"></div>
                  <div className="chiqziq"></div>
                </div>
                <div className="yeta">
                  <p>18 hours ago</p>
                  <a href="" className="akl">
                    Update to securty confuration setings for custemor in
                    existing grace perids.
                  </a>
                </div>
              </div>
              <div className="lasdqwd">
                <div className="deua">
                  <div className="dumaloq"></div>
                  <div className="chiqziq"></div>
                </div>
                <div className="yeta">
                  <p>19 hours ago</p>
                  <a href="" className="akl">
                    Update to securty confuration setings for custemor in
                    existing grace perids.
                  </a>
                </div>
              </div>
              <div className="lasdqwd">
                <div className="deua">
                  <div className="dumaloq"></div>
                  <div className="chiqziq"></div>
                </div>
                <div className="yeta">
                  <p>yesterday</p>
                  <a href="" className="akl">
                    Update to securty confuration setings for custemor in
                    existing grace perids.
                  </a>
                </div>
              </div>
              <div className="lasdqwd">
                <div className="deua">
                  <div className="dumaloq"></div>
                  <div className="chiqziq"></div>
                </div>
                <div className="yeta">
                  <p>yesterday</p>
                  <a href="" className="akl">
                    Update to securty confuration setings for custemor in
                    existing grace perids.{" "}
                  </a>

                  <br />
                  <a href="">viev changing</a>
                </div>
              </div>
            </div>
            <br />
            <div className="lheaq">
              <h5>Explore repositories</h5>
              <div className="lqee">
                <div className="lasdq">
                  <div className="asqqe">
                    <img
                      className="imat"
                      src="https://avatars.githubusercontent.com/u/118160626?s=40&v=4"
                      alt=""
                    />
                    <h5> baaivision / EVE</h5>
                  </div>
                  <button style={{ width: "35px", height: "30px" }}>
                    <i className="fa-regular fa-star"></i>
                  </button>
                </div>
                <br />
                <h5>
                  EVE Series: Encoder-Free Vision-Language Models from BAAI
                </h5>
                <br />
                <span style={{ display: "flex", gap: "10px" }}>
                  <i className="fa-regular fa-star"></i> 322{" "}
                  <i
                    className="fa-solid fa-circle"
                    style={{ color: "blue" }}
                  ></i>{" "}
                  <p>Python</p>{" "}
                </span>
              </div>
              <div className="lqee">
                <div className="lasdq">
                  <div className="asqqe">
                    <img
                      className="imat"
                      src="https://avatars.githubusercontent.com/u/2695301?s=40&v=4"
                      alt=""
                    />
                    <h5> NVlabs / EAGLE</h5>
                  </div>
                  <button style={{ width: "35px", height: "30px" }}>
                    <i className="fa-regular fa-star"></i>
                  </button>
                </div>
                <br />
                <h5>
                  Eagle Family: Exploring Model Designs, Data Recipes and
                  Training Strategies for Frontier-Class Multimodal LLMs
                </h5>
                <br />
                <span style={{ display: "flex", gap: "10px" }}>
                  <i className="fa-regular fa-star"></i> 717{" "}
                  <i
                    className="fa-solid fa-circle"
                    style={{ color: "blue" }}
                  ></i>{" "}
                  <p>Python</p>{" "}
                </span>
              </div>
              <div className="lqee">
                <div className="lasdq">
                  <div className="asqqe">
                    <img
                      className="imat"
                      src="https://avatars.githubusercontent.com/u/15921929?s=40&v=4"
                      alt=""
                    />
                    <h5> yuweihao / MM-Vet</h5>
                  </div>
                  <button style={{ width: "35px", height: "30px" }}>
                    <i className="fa-regular fa-star"></i>
                  </button>
                </div>
                <br />
                <h5>
                  MM-Vet: Evaluating Large Multimodal Models for Integrated
                  Capabilities (ICML 2024)
                </h5>
                <br />
                <span style={{ display: "flex", gap: "10px" }}>
                  <i className="fa-regular fa-star"></i> 296{" "}
                  <i
                    className="fa-solid fa-circle"
                    style={{ color: "blue" }}
                  ></i>{" "}
                  <p>Python</p>{" "}
                </span>
              </div>

              <br />

              <a href="" className="akl">
                Explore more{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home_modus;
