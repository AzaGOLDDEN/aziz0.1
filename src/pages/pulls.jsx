import "../style/pulls.css";
import Home from "../companets/home";
function Pulls() {
    return (
        <>
            <Home></Home>
            <div className="pullss">
                <div className="requs-header">
                    <button className="requs-btn requs-btn-active">Created</button>
                    <button className="requs-btn">Assigned</button>
                    <button className="requs-btn">Mentioned</button>
                    <button className="requs-btn">Review requests</button>
                    <div className="requs-search">
                        <input
                            type="text"
                            placeholder="Search issues"
                            className="requs-input"
                        />
                    </div>
                </div>
                <div className="requs-noresults">
                    <div className="reaq">
                        <div className="requs-status">

                            <span className="requs-muted">0 Open</span>
                            <span className="requs-separator">|</span>
                            <span className="requs-muted">0 Closed</span>
                        </div>
                        <div className="loaq">
                          <select className="reposec"> 
                            <option value="" className="reop">
                               Visiblitiy

                            </option>
                            <option value="" className="reop">
                                <p>Private repositor only</p>
                               
                            </option>
                            <option value="" className="reop">
                            <p>Private repositor only</p>
                            </option>
                          </select>
                          <select className="reposec"> 
                            <option value="" className="reop">
                               Orgazition

                            </option>
                            <option value="" className="reop">
                                <p>Private repositor only</p>
                               
                            </option>
                            <option value="" className="reop">
                            <p>Private repositor only</p>
                            </option>
                          </select>
                          <select className="reposec"> 
                            <option value="" className="reop">
                               Sort

                            </option>
                            <option value="" className="reop">
                                <p>Newest</p>
                               
                            </option>
                            <option value="" className="reop">
                            <p>Oldest</p>
                            </option>
                            <option value="" className="reop">
                            <p>Most commented</p>
                            </option>
                            <option value="" className="reop">
                            <p>Least commented</p>
                            </option>
                            <option value="" className="reop">
                            <p>Recently uptade</p>
                            </option>
                          </select>
                        </div>
                    </div>
                    <div className="requs-empty">
                        <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-issue-opened blankslate-icon">
                            <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Zm9.5 2a2 2 0 1 1-.001-3.999A2 2 0 0 1 12 14Z"></path>
                        </svg>
                        <h2 className="requs-empty-title">No results matched your search.</h2>
                        <p className="requs-muted">
                            You could search all of GitHub or try an <a href="#" className="requs-link">advanced search</a>.
                        </p>
                    </div>

                </div>
                <div className="requs-tip">
                    <span className="requs-bold">ProTip!</span> Notify someone on an issue with a mention, like: <span className="requs-highlight">@AzaGOLDEN</span>.
                </div>
                <div className="reqaa">
                    <i className="fa-brands fa-github"></i>   © 2025 GitHub, Inc.
              
                    <a href="" className="akl">Terms</a>  <a href="" className="akl">Privacy</a>   <a href="" className="akl">Security</a>   <a href="" className="akl">Status</a>   <a href="" className="akl">Docs</a>   <a href="" className="akl">Contact</a>  <a href="" className="akl">Manage cookies</a>   <a href="" className="akl">Do not share my personal information</a>

                </div>
            </div>

        </>
    )
}
export default Pulls;