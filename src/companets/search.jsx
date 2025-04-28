import { useEffect, useState } from "react";
import "../style/search.css";

function Search({ isOpen, onClose }) {
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState("");
  const token = import.meta.env.VITE_GITHUB_TOKEN; // Tokenni .env fayldan olish

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

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className={`search-overlay ${isOpen ? "open" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="search-box">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
        className="inpunk"
          type="search"
          placeholder="Search repositories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="liha">
          <div className="lik">
          {filteredRepos.length === 0 ? (
                            <p>No repositories found</p>
                        ) : (
                            <ul className="repo-list1">
                                {filteredRepos.slice(0, 10).map((repo) => ( // Faqat birinchi 10 ta natijani ko'rsatish
                                    <li className="repo-item1" key={repo.id}>
                                        <div className="lak">
                                            
                                            <h4 className="repaaa">
                                                <p
                                                  
                                         
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {repo.full_name}
                                                </p>
                                            </h4>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )} <br />
          </div>
          <div className="lik">
            < p style={{marginLeft:"10px"}}>Repositories:</p>
            {filteredRepos.length === 0 && <p>No repositories found.</p>}
            {filteredRepos.map((repo) => (
              <div className="cgu" key={repo.id}>
                <h4>
                {repo.name}
                </h4>
                <p>Jump to</p>
              </div>
            ))} <br />
          </div>
          <div className="anotoya"><br />
          <h4>Capilot</h4>
          <div className="axayo"><br />
        <div className="kaal">
        <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="20" data-view-component="true"><path fill="grey" d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.054 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path></svg><p>Chat with capilot</p>
       
        </div>
        <p>
        Start a new Copilot thread</p>
           </div>
        </div>
        </div><br />
      <div className="ijli">
        <a href="#" style={{color:"blue",textDecoration:"none"}}>Search syntax tips
        </a>
        <a href="#" style={{color:"blue",textDecoration:"none"}}>
        Give feedback

        </a>
      </div>
      </div>
    </div>
  );
}

export default Search;
