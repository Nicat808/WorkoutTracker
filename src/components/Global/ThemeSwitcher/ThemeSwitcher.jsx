import { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

const ThemeSwitcher = () => {
  const [isDarkModeActive, setIsDarkModeActive] = useState(true);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkModeActive(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkModeActive);
    localStorage.setItem("darkMode", isDarkModeActive);
  }, [isDarkModeActive]);

  const toggleDarkMode = () => {
    setIsDarkModeActive((prevMode) => !prevMode);
  };

  return (
    <button
      id="themeSwitcher"
      onClick={toggleDarkMode}
      style={{
        backgroundColor: `${isDarkModeActive ? "#0f0f0f" : "#e7f6f2"}`,
        color: `${isDarkModeActive ? "#e7f6f2" : "#0f0f0f"}`,
      }}
    >
      {isDarkModeActive ? "Light" : "Dark"}
      {isDarkModeActive ? <CiLight /> : <CiDark />}
    </button>
  );
};

export default ThemeSwitcher;
