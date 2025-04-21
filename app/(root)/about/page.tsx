'use client'
import "./about.css";
import { doctors } from "../../DB/Doctors";
import en from "../../locales/en";
import ar from "../../locales/ar";
import { useLanguage } from "@/app/context/LanguageContext";
import PageHero from "@/app/components/shared/PageHero/PageHero";
import Slider from "@/app/components/shared/Slider/Slider";
import DoctorBox from "@/app/components/shared/DoctorBox/DoctorBox";

const About = () => {
  const { language } = useLanguage();
  const translations = language === "en" ? en : ar;
  return (
    <div>
      <PageHero
        BookUrl="/contact-us"
        Image={'/clinic3_11zon.webp'}
        PageName={translations.About}
        pageSubhead={translations.AboutUssubhead}
      />
      <div className="aboutUs-Home">
        <p className="about-title">
          {translations.WelcometoOurClinic}
          <br />
          <span>{translations.ClinicName}</span>
        </p>

        <p className="about-text">{translations.WelcometoOurClinic_text}</p>
      </div>
      <div className="PopularTreatment">
        <div className="popularTreatment_Head">
          <h1>{translations.OurTeam}</h1>
        </div>

        <Slider
          items={doctors}
          renderItem={(doc) => (
            <DoctorBox
              key={doc.id}
              DoctorName={doc.name}
              DoctorSpec={doc.spec}
              image={doc.img}
              imgAlt={doc.name}
            />
          )}
        />
      </div>
    </div>
  );
};

export default About;
