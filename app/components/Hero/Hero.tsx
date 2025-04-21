'use client'; // if needed

import ArrowBTN from "../shared/ArrowBTN/ArrowBTN";


import './Hero.css';

import en from '../../locales/en';
import ar from '../../locales/ar';
import { useLanguage } from "@/app/context/LanguageContext";
import Image from 'next/image';

const Hero = () => {
  const { language } = useLanguage();
  const translations = language === "en" ? en : ar;

  return (
    <div className="HeroSlider">
      <div className="Hero">
        <div className="MainTitle">
          <h1>
            {translations.ClinicName}
            <br />
            {translations.MainTitleHero} <br />
            <span>{translations.MainTitleHero2}</span>
          </h1>
          <ArrowBTN BTN_Name={translations.GetYourFreeConsultation} URL="/contact-us" />
        </div>
        <div className="Subtitle">
          <span>{translations.subtitleHero}</span>
          <p>
            {translations.subtitleHero2} <br />
            {translations.subtitleHero3}
          </p>
        </div>

      </div>
    </div>
  );
};

export default Hero;
