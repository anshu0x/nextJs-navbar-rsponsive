import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
import { BiMenuAltLeft } from "react-icons/bi";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/About" },
  { text: "Contact", href: "/Contact" },
  { text: "Blog", href: "/blog" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
 
  return (
    <header>
      <nav id="nav" className={`nav`}>
        <Link href={"/"}>
          <a>
            <h1 className="logo">Anshu Sharma</h1>
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <BiMenuAltLeft />
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
