'use client'
import  { useState } from "react";
import "./WhatsAppBtn.css";


import { FaWhatsapp } from "react-icons/fa";
import en from "@/app/locales/en";
import ar from "@/app/locales/ar";
import { useLanguage } from "@/app/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";

const WhatsAppBtn = () => {
  const { language, setLanguage } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false); // Manage dropdown visibility
  const translations = language === "en" ? en : ar;

  const handleLanguageChange = (lang: "en" | "ar") => {
    setLanguage(lang);
    setDropdownOpen(false); // Close the dropdown after selecting a language
  };

  return (
    <div className="whatsapp-container">
      <div className="language-circle">
        <div className="custom-dropdown">
          <div
            className="selected"
            onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown visibility
          >
            <Image
              src={language === "en" ? '/uk_4628638_11zon_11zon.webp' : '/circle_12366324_11zon_11zon.webp'}
              alt={language === "en" ? "English" : "Arabic"}
              width= {30}
              height={30}
              className="dropdown-icon"
            />
          </div>
          {dropdownOpen && (
            <div className="dropdown-options">
              <div
                className="option"
                onClick={() => handleLanguageChange("en")}
              >
                <Image src='/uk_4628638_11zon_11zon.webp' alt="English" className="dropdown-icon" width= {30}
              height={30} />
                {translations.English}
              </div>
              <div
                className="option"
                onClick={() => handleLanguageChange("ar")}
              >
                <Image src='/circle_12366324_11zon_11zon.webp' alt="Arabic" className="dropdown-icon"width= {30}
              height={30} />
                {translations.Arabic}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="whatsapp-btn">
        <Link
          href="https://wa.me/971553206022"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="whatsapp-icon"/>
        </Link>
      </div>
    </div>
  );
};

export default WhatsAppBtn;
