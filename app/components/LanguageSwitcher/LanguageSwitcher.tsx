  // Import the language context

import { useLanguage } from "@/app/context/LanguageContext";
import "./LanguageSwitcher.css";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();  // Get language and setLanguage from context

  const toggleLanguage = () => {
    const newLang = language === "ar" ? "en" : "ar";
    setLanguage(newLang);  // Update language in context
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";  // Change text direction
  };

  return (
    <div className="lang-toggle-container" onClick={toggleLanguage}>
      <div className={`lang-toggle-switch ${language === "ar" ? "rtl" : "ltr"}`}>
        {language === "ar" ? "العربية" : "English"}
      </div>
      <div className="lang-toggle-labels">
        <span>English</span>
        <span>العربية</span>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
