import "../dist/output.css";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const themeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div>
      <nav className="flex justify-between px-6 py-8 shadow-md shadow-gray-100 duration-300 dark:bg-[#2b3945] dark:text-white dark:shadow-xl dark:shadow-gray-800">
        <Link to="/">
          <div>
            <p className="font-bold">Where in the world?</p>
          </div>
        </Link>
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => themeSwitch()}
        >
          <Icon icon="ph:moon-light" />
          <p className="capitalize">dark mode</p>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
