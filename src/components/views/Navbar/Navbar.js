import { FaReact } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import { useState } from "react";
// import { useState } from 'react'

export const Navbar = () => {
  const NavbarData = [
    { link: "/", title: "Doc" },
    { link: "/tutorial", title: "Tutorial" },
    { link: "/blog", title: "Blog" },
    { link: "/community", title: "community" },
  ];

  const [isActive, setIsActive] = useState(0);

  const toggle = (i) => {
    setIsActive(i);
  };

  return (
    <nav className="navbar-nav-container">
      <Link className="Navbar-logo">
        <FaReact className="logo" />
        <span>React</span>
      </Link>
      <ul className="navbar-list-container">
        {NavbarData.map((item, i) => (
          <li className="navbar-list">
            <Link
              onClick={() => toggle(i)}
              className={isActive === i ? "selected-li" : "li-container"}
              to={item.link}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <span className="navbar-search">
        <BiSearch className="logo" />
        <input type="search" placeholder="Search" />
      </span>
    </nav>
  );
};
