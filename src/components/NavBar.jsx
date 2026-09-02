import { useState, useEffect } from "react";

import { navLinks } from "../constants";
import { useTheme } from "../context/ThemeContext";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme, isLoaded } = useTheme();

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isLoaded) return null;

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          nuhk.dev
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex items-center space-x-4">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? (
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l-2.12-2.12a1 1 0 11 1.414-1.414l2.121 2.12a1 1 0 11-1.414 1.414zM2.05 12.464a1 1 0 111.414-1.414l2.12 2.121a1 1 0 11-1.414 1.414l-2.12-2.121zm9.546 4.95a1 1 0 111.414-1.414l2.121 2.12a1 1 0 11-1.414 1.414l-2.121-2.12zM2.929 2.929a1 1 0 111.414-1.414l2.121 2.12a1 1 0 01-1.414 1.415L2.929 2.929zm9.546 0a1 1 0 111.414 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.121-2.121zM18 10a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM3 10a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm14.464-7.536a1 1 0 111.414-1.414l2.121 2.12a1 1 0 11-1.414 1.414l-2.121-2.12z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          <a href="public\Resume_Najam.pdf" target="_blank" className="contact-btn group" download="Resume_Najam.pdf">
            <div className="inner">
              <span>My Resume</span>
            </div>
          </a>

          <a href="#contact" className="contact-btn group">
            <div className="inner">
              <span>Contact me</span>
            </div>
          </a>
        </ul>
      </div>
    </header>
  );
}

export default NavBar;
