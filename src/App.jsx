import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './companets/home';
import Pacapilot from './pages/pacapilot';
import Issues from './pages/issuas';
import Pulls from './pages/pulls';
import Notifications from './pages/notifications';
import Repositor from './pages/repositor';
import Profile from './pages/profile';
import Yourrepo from './pages/yourrepo';
import './App.css';

// LoginPage komponenti
function LoginPage() {
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch("https://api.github.com/users");
      const users = await res.json();
  
      // Kiritilgan login va id'ni solishtirish
      const user = users.find((u) => u.login === username && String(u.id) === userId);
  
      if (user) {
        // Foydalanuvchi ma'lumotlarini saqlash
        localStorage.setItem("User", JSON.stringify(user));
  
        // Agar topilsa, "/home" sahifasiga o'tish
        navigate("/home");
      } else {
        setError("Incorrect login or ID.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <div className="ah">
        <div className="login">
          <div className="loh">
            <i className="fa-brands fa-github" id='ica'></i>
            <h2>Sign in to GitHub</h2>
            {error && (
              <div className="error-box">
                {error}
                <span onClick={() => setError('')} className="close-icon">X</span>
              </div>
            )}
          </div><br />
          <div className="bji">
            <h5>Username or email address</h5>
            <input className='inputa'
              type="text"
              value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <div className="tast">
              <h5>Password</h5>
              <a href="#">Forgot password?</a>
            </div>
            <input
              className='inputa1'
              type="password"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            /> <br /><br />
            <button className='btn5' onClick={handleLogin}>Sign in</button>
          </div><br />
          <div className="bji2">
            <a href="#">Sign in with passkey</a>
            <p>Want to create an account? <a href="#">Sign out</a></p>
          </div>
        </div>
      </div>
      <div className="ahtem">
        <a href="">Terms</a><a href="">Privacy</a><a href="">Docs</a><a href="">Contact GitHub Support</a><a href="">Manage cookies</a><a href="">Do not share my personal information</a>
      </div>
    </>
  );
}

// toggleSidebar funksiyasini App dan uzatamiz
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Home toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />} />
      <Route path="/pacapilot" element={<Pacapilot />} />
      <Route path="/issuas" element={<Issues/>} />
      <Route path="/pulls" element={<Pulls/>} />
      <Route path="/notifications" element={<Notifications/>} /> 
      <Route path="/repositor" element={<Repositor/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/yourrepo" element={<Yourrepo/>} />
    </Routes>
  );
}

export default App;
