import "../style/navbar.css";
import Sidebar from "./Sidebar"

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
<Sidebar/>

      <h1>AI Vision Studio</h1>

      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >

        {darkMode ? "Light Mode" : "Dark Mode"}

      </button>

    </nav>
  );
}

export default Navbar;