'use client';
import "./Navbar.css";
import Image from 'next/image';
import BookNow from "../shared/BookNow/BookNow";

import { FaBars, FaTimes } from "react-icons/fa";

import en from '../../locales/en';
import ar from '../../locales/ar';
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useLanguage } from "@/app/context/LanguageContext";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
      const { language } = useLanguage();
      const translations = language === "en" ? en : ar;
  const [toggle, setToggle] = useState(false);
  const TogglerHandler = () => {
    setToggle(!toggle);
  };
  const closeMenu = () => setToggle(false);
  return (
    <div className="Navbar">
    <div className="logo">
    <Image src="/logo.svg" alt="Logo" width={120} height={40}priority/>
    </div>

    {/* Burger menu for small screens */}
    <div className="burger-menu" onClick={TogglerHandler}>
      {toggle ? <FaTimes /> : <FaBars />}
    </div>

    {/* Responsive Navigation Links */}
    <div className={`nav-menu ${toggle ? "active" : ""}`}>
      <Link onClick={closeMenu} href="/" className="nav-links">{translations.Home}</Link>
      <span className="separator">|</span>
      <Link onClick={closeMenu} href="/about" className="nav-links">{translations.About}</Link>
      <span  className="separator">|</span>
      <Link onClick={closeMenu} href="/services" className="nav-links">{translations.Services}</Link>
      <span className="separator">|</span>
      <Link onClick={closeMenu} href="/contact" className="nav-links">{translations.ContactUs}</Link>
      <LanguageSwitcher/>
      <BookNow />
    </div>
  </div>
  );
};

export default Navbar;
