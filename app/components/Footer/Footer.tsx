'use client'
import "./Footer.css";
import { FaCircle, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

import en from "../../locales/en";
import ar from "../../locales/ar";
import { useLanguage } from "@/app/context/LanguageContext";
import Link from "next/link";
const Footer = () => {
    const { language } = useLanguage();
    const translations = language === "en" ? en : ar;
  return (
    <div className="Footer">
      <div className="footer-section">
        <div className="logo">
          <img src={'/logo.svg'} alt="" width={250} height={58} />
        </div>
        <div className="footer-column">
          <div className="column">
            <h2>{translations.Address}</h2>
            <p className="address">{translations.location}</p>
            <p className="address">
              {translations.daily}
            </p>
          </div>
          <div className="column">
            <div>
              <Link className="tele" href="tel:+971501447480">
                {" "}
                <span>
                  <FaCircle />
                </span>{" "}
                0501447480
              </Link> <br />
              <Link className="tele" href="tel:+971553206022">
                {" "}
                <span>
                  <FaCircle />
                </span>{" "}
                0553206022
              </Link><br />
              <Link className="tele" href="tel:+971092286004">
                {" "}
                <span>
                  <FaCircle />
                </span>{" "}
                092286004
              </Link>
              <p className="tele">
                <span>
                  <FaCircle />
                </span>{" "}
                example@gmail.com
              </p>
            </div>
            <div className="social">
              <Link href='https://www.facebook.com/people/Signature-clinic/61571591897477/' className="iconSocial">
                <FaFacebook />
              </Link>
              <Link href='https://www.instagram.com/the_s_clinic.fuj?igsh=MzVvM2VpZXM5ODZs' className="iconSocial">
                <FaInstagram />
              </Link>
              <Link href='https://www.tiktok.com/@signature.clinic2?_t=zs-8ujxbqrwgxh&_r=1' className="iconSocial">
                <FaTiktok />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section-1">
        <div className="footer-menu">
          <Link href="/" className="nav-links">
            {translations.Home}
          </Link>

          <Link href="/" className="nav-links">
            {translations.About}
          </Link>

          <Link href="/" className="nav-links">
            {translations.Service}
          </Link>

          <Link href="/contact-us" className="nav-links">
            {translations.contact}
          </Link>
        </div>
        <p className="copywrite">
        © 2025 The S Clinic. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
