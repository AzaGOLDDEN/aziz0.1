import { useState } from "react";
import Home from "../companets/home";
import "../style/issuas.css";

function Issues() {
  const [activeTab, setActiveTab] = useState("assigned");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Home />
      <div className="issuaus">
        <div className="lissuas">
          <div className="iisu" tabIndex={0} onClick={() => handleTabClick("assigned")}>
            <span className={`pastgatush ${activeTab === "assigned" ? "active" : ""}`}></span>
            <div className="iisua">
              <i className="fa-solid fa-user-check"></i>
              <p className="asrta">Assigned to me</p>
            </div>
          </div>

          <div className="iisu" tabIndex={0} onClick={() => handleTabClick("created")}>
            <span className={`pastgatush ${activeTab === "created" ? "active" : ""}`}></span>
            <div className="iisua">
              <i className="fa-solid fa-pen-to-square"></i>
              <p className="asrta">Created by me</p>
            </div>
          </div>

          <div className="iisu" tabIndex={0} onClick={() => handleTabClick("mentioned")}>
            <span className={`pastgatush ${activeTab === "mentioned" ? "active" : ""}`}></span>
            <div className="iisua">
              <i className="fa-solid fa-at"></i>
              <p className="asrta">Mentioned</p>
            </div>
          </div>

          <div className="iisu" tabIndex={0} onClick={() => handleTabClick("recent")}>
            <span className={`pastgatush ${activeTab === "recent" ? "active" : ""}`}></span>
            <div className="iisua">
              <i className="fa-solid fa-clock-rotate-left"></i>
              <p className="asrta">Recent activity</p>
            </div>
          </div>
        </div>

        <div className="rissus">
          {activeTab === "assigned" && (
            <div className="rissua">
              <h1 >Assigned to me</h1>
              <button className="issis">New issue</button>
            </div>
          )}

          {activeTab === "created" && (
            <div className="rissua">
              <h1 >Created by me</h1>
              <button className="issis">New issue</button>
            </div>
          )}

          {activeTab === "mentioned" && (
            <div className="rissua">
              <h1 >Mentioned</h1>
              <button className="issis">New issue</button>
            </div>
          )}

          {activeTab === "recent" && (
            <div className="rissua">
              <h1 >Recent activity</h1>
              <button className="issis">New issue</button>
            </div>
          )}

          <div className="issus-container">
            <div className="ixter">
              <input type="text" placeholder="Search Issues" className="issus-input" />
              <button className="issus-button"><i className="fa-solid fa-search"></i></button>
            </div>
            <div className="issus-results">
              <div className="issus-info">0 results</div>
              <h2 className="issus-title">No results</h2>
              <p className="issus-text">Try adjusting your search filters.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Issues;
