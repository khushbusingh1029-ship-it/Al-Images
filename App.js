
import { useState, useEffect } from "react";
import "./Navbar";
import "./PromptBox";
import "./Hero";
function App() {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    if(darkMode){
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }

  }, [darkMode]);

  return (

    <div className="layout">

      {/* <Sidebar /> */}

      <div className="content">

        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <Hero />

        <PromptBox />
      </div>

    </div>
  );
}

export default App;
