import { useState } from "react";
import Home from "../companets/home";

import "../style/noti.css";
function Notifications() {
    const [activeTab, setActiveTab] = useState("assigned");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    const [isOn, setIsOn] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handleClick = (tabName) => {
        if (tabName === "requested") {
            setOpenModal(true);
        }
    };
    const toggle = () => setIsOn(!isOn);
    return (
        <>
            <Home />
            <div className="issuaus">
                <div className="lissuas">
                    <div className="sqqqq">
                        <div className="iisu" tabIndex={0} onClick={() => handleTabClick("assigned")}>
                            <span className={`pastgatush ${activeTab === "assigned" ? "active" : ""}`}></span>
                            <div className="iisua">
                                <span class="ActionListItem-visual ActionListItem-visual--leading">
                                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-inbox">
                                        <path d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"></path>
                                    </svg>
                                </span>
                                <p className="pasq" >Inbox </p>
                            </div>
                        </div>

                        <div className="iisu" tabIndex={0} onClick={() => handleTabClick("created")}>
                            <span className={`pastgatush ${activeTab === "created" ? "active" : ""}`}></span>
                            <div className="iisua">
                                <span class="ActionListItem-visual ActionListItem-visual--leading">
                                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-bookmark">
                                        <path d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"></path>
                                    </svg>
                                </span>
                                <p className="pasq" >Saved</p>
                            </div>
                        </div>

                        <div className="iisu" tabIndex={0} onClick={() => handleTabClick("mentioned")}>
                            <span className={`pastgatush ${activeTab === "mentioned" ? "active" : ""}`}></span>
                            <div className="iisua">
                                <span class="ActionListItem-visual ActionListItem-visual--leading">
                                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check">
                                        <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                                    </svg>
                                </span>
                                <p className="pasq">Done</p>
                            </div>
                        </div>

                    </div><br />
                    <div className="sqqqq">
                        <p>Filters</p>
                        <div className="iisu" tabIndex={0} onClick={() => handleTabClick("recent")}>
                            <span className={`pastgatush ${activeTab === "recent" ? "active" : ""}`}></span>
                            <div className="iisua">

                                <p >
                                🎯 <span className="pasq">  Assigned</span> </p>
                            </div>
                        </div>

                        <div className="iisu" tabIndex={0} onClick={() => handleTabClick("Partic")}>
                            <span className={`pastgatush ${activeTab === "Partic" ? "active" : ""}`}></span>
                            <div className="iisua">

                                <p> 💬<span className="pasq"> Participating</span></p>
                            </div>
                        </div>

                        <div className="iisu" tabIndex={0} onClick={() => handleTabClick("tioned")}>
                            <span className={`pastgatush ${activeTab === "tioned" ? "active" : ""}`}></span>
                            <div className="iisua">

                                <p>✋<span className="pasq"> Mentioned</span></p>
                            </div>
                        </div>

                        <div className="iisu" tabIndex={0} onClick={() => handleTabClick("Mentioned")}>
                            <span className={`pastgatush ${activeTab === "Mentioned" ? "active" : ""}`}></span>
                            <div className="iisua">

                                <p> 🙌<span className="pasq"> Team mentioned</span></p>
                            </div>
                        </div>
                        <div className="iisu" tabIndex={0} onClick={() => handleTabClick("teem")}>
                            <span className={`pastgatush ${activeTab === "teem" ? "active" : ""}`}></span>
                            <div className="iisua">

                                <p>👀<span className="pasq"> Review requested</span></p>
                            </div>
                        </div>
                        <div className="iisu" tabIndex={0} onClick={() => handleClick("requested")}>
                            <span className={`pastgatush ${activeTab === "mentioned" ? "active" : ""}`}></span>
                            <div className="iisua">
                                <p>+<span className="pasq"> Add new filter</span></p>
                            </div>
                        </div>


                    </div><br />
                    <a href="" className="akl" style={{ marginLeft: "70px" }}> <span className="pasq">Manage  notifications !</span></a>
                </div>
                {openModal && (
                    <div className="noyi-overlay" onClick={() => setOpenModal(false)}>
                        <div className="noyi-content" onClick={(e) => e.stopPropagation()}>
                            <div className="filter-container">
                               <div className="asq">
                                <h4>Filter</h4>
                                
                            <button className="reabtn" onClick={() => setOpenModal(false)}> <i className="fa-solid fa-x"></i> </button>
                               </div>
                                <div className="filter-list-wrapper">
                                    <div className="maql">
                                        <p>Name</p> <p>
                                        Filter inbox by…</p>  <button className="create-filter-button">Create new filter</button>
                         
                                    </div>
                                    <div className="filter-list">
                                        {[
                                            { name: "Assigned", reason: "assign" },
                                            { name: "Participating", reason: "participating" },
                                            { name: "Mentioned", reason: "mention" },
                                            { name: "Team mention", reason: "team-mention" },
                                            { name: "Review request", reason: "review-requested" },
                                        ].map((item, index) => (
                                            <div key={index} className="filter-item">
                                                <span className="noti-label">{`noti${item.name}`}</span>
                                                <span className="filter-reason">reason:{item.reason}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                  </div>

                        </div>
                    </div>
                )}

                <div className="rissus">
                    {activeTab === "assigned" && (
                        <div className="riaw">
                            <div className="rissua">
                                <div className={`requs-toggle ${isOn ? "on" : ""}`} onClick={toggle}>
                                    <div className="requs-toggle-ball"></div>
                                    <span className="requs-toggle-label">{isOn ? "ON" : "OFF"}</span>
                                </div>
                                <input type="text" className="notiin" placeholder="Search notifctons" />
                                <select name="" id="" className="sealo">
                                    <option value="">
                                        <p>Group by:Data</p>
                                    </option>
                                    <option value="">
                                        <p>Group by:Repository</p>
                                    </option>
                                </select>

                            </div><br />
                            <div className="loajqq">
                                <div className="asasq">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" role="img" aria-labelledby="a5jzd5wjl30ueoz6xk5kc7gm5q9e219x" class="mr-3 flex-self-start flex-shrink-0"><title id="a5jzd5wjl30ueoz6xk5kc7gm5q9e219x">Code alert</title><g transform="translate(5 5)" fill="none" fill-rule="evenodd"><circle fill="var(--color-marketing-icon-primary, #2088FF)" cx="38" cy="42" r="1"></circle><path d="M41.182 38.565c-.098-.132-.29.112-.58-1.565-.273-1.582-.655-3-2.602-3-1.947 0-2.363 1.361-2.628 3-.267 1.648-.477 1.414-.523 1.552-.566.22-.849.664-.849 1.334 0 .482.597 1.11 1 1.114h6c.435.001 1-.605 1-1.114 0-.667-.273-1.107-.818-1.32z" stroke="var(--color-marketing-icon-primary, #2088FF)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M38 29a9 9 0 110 18 9 9 0 010-18z" stroke="var(--color-marketing-icon-primary, #2088FF)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path stroke="var(--color-marketing-icon-secondary, #79B8FF)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M23 26H5M33 26h-5M26 32h-8M13 32H5"></path><path stroke="var(--color-marketing-icon-primary, #2088FF)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M23 6H5"></path><path stroke="var(--color-marketing-icon-secondary, #79B8FF)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M37 6h-9"></path><path stroke="var(--color-marketing-icon-primary, #2088FF)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M37 12H18"></path><path stroke="var(--color-marketing-icon-secondary, #79B8FF)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M13 12H5"></path><rect stroke="var(--color-marketing-icon-primary, #2088FF)" stroke-width="2" width="42" height="18" rx="2"></rect><path d="M0 22v14c0 1.105.892 2 1.993 2H25m17-11.94v-4" stroke="var(--color-marketing-icon-secondary, #79B8FF)" stroke-width="2" stroke-linecap="round"></path></g></svg>
                                    <span>
                                        <h5>Clear out the clutter.</h5>
                                        <p>Get the most out of your new inbox by quickly and easily marking all of your previously <br />  read notifications as done.</p>
                                    </span>
                                </div>
                                <div className="burr">
                                    <button className="respobt" > Dismis</button><button className="respobt1">Get started</button>
                                </div>
                            </div>
                            <img
                                src="https://github.githubassets.com/assets/inbox-zero-86555dddc82e.svg"
                                class="requs-inbox-img"
                                alt="Inbox zero"
                                className="imaer"
                            />
                        </div>


                    )}

                    {activeTab === "created" && (
                        <div className="rissu">
                            <input type="search" className="qaqee" placeholder="is:saved" />

                            <div className="lilqq">

                                <img
                                    src="https://github.githubassets.com/assets/saved-blank-5c57ab8c5992.svg"
                                    alt="Save a notification"
                                    className="imaer1"

                                />
                                <br /><br />
                                <h1>     Save something important</h1>
                                <p>    Notifications you save will appear here to read later.</p>
                            </div>
                        </div>
                    )}

                    {activeTab === "tioned" && (
                        <div className="rissu">
                            <input type="search" className="qaqee" placeholder="reason:mention" />

                            <div className="lilqq">

                                <img
                                    src="https://github.githubassets.com/assets/done-blank-8b439d32c291.svg"
                                    alt="Save a notification"
                                    className="imaer1"

                                />
                                <br /><br />
                                <h1>    Mark as done</h1>
                                <p>   Mark notifications as done so you can move on with your work <br />
                                    New activity appears in your inbox.</p>
                            </div>
                        </div>
                    )}

                    {activeTab === "recent" && (
                        <div className="rissu">

                            <div className="lilqq">
                                <input type="search" className="qaqee1" placeholder="reason:assign" />
                                <img
                                    src="https://github.githubassets.com/assets/inbox-zero-86555dddc82e.svg"
                                    alt="Save a notification"
                                    className="imaer1"

                                />
                                <br /><br />
                                <h1>    All done here!</h1>
                                <p>   You're caught up on this filter.</p>
                            </div>
                        </div>
                    )}

                    {activeTab === "Partic" && (
                        <div className="rissu">

                            <div className="lilqq">
                                <input type="search" className="qaqee1" placeholder="reason:participating" />
                                <img
                                    src="https://github.githubassets.com/assets/inbox-zero-86555dddc82e.svg"
                                    alt="Save a notification"
                                    className="imaer1"

                                />
                                <br /><br />
                                <h1>    All done here!</h1>
                                <p>   You're caught up on this filter.</p>
                            </div>
                        </div>
                    )}

                    {activeTab === "Mentioned" && (
                        <div className="rissu">

                            <div className="lilqq">
                                <input type="search" className="qaqee1" placeholder="reason:team-mention" />
                                <img
                                    src="https://github.githubassets.com/assets/inbox-zero-86555dddc82e.svg"
                                    alt="Save a notification"
                                    className="imaer1"

                                />
                                <br /><br />
                                <h1>    All done here!</h1>
                                <p>   You're caught up on this filter.</p>
                            </div>
                        </div>
                    )}
                    {activeTab === "teem" && (
                        <div className="rissu">

                            <div className="lilqq">
                                <input type="search" className="qaqee1" placeholder="reason:review-requested" />
                                <img
                                    src="https://github.githubassets.com/assets/inbox-zero-86555dddc82e.svg"
                                    alt="Save a notification"
                                    className="imaer1"

                                />
                                <br /><br />
                                <h1>    All done here!</h1>
                                <p>   You're caught up on this filter.</p>
                            </div>
                        </div>
                    )}
                       {activeTab === "mentioned" && (
                        <div className="rissu">
                            <input type="search" className="qaqee" placeholder="reason:mention" />

                            <div className="lilqq">

                                <img
                                    src="https://github.githubassets.com/assets/done-blank-8b439d32c291.svg"
                                    alt="Save a notification"
                                    className="imaer1"

                                />
                                <br /><br />
                                <h1>    Mark as done</h1>
                                <p>   Mark notifications as done so you can move on with your work <br />
                                    New activity appears in your inbox.</p>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </>
    );
}

export default Notifications;
