
'use client'
import "./ContactUs.css";
import en from "../../locales/en";
import ar from "../../locales/ar";
import { useLanguage } from "@/app/context/LanguageContext";
import PageHero from "@/app/components/shared/PageHero/PageHero";
import Form from "@/app/components/shared/Form/Form";



const Page = () => {
  const { language } = useLanguage();
  const translations = language === "en" ? en : ar;
  return (
    <div className="ContactUs">
      <PageHero
        BookUrl="#contact"
        Image={'/contacts-1.webp'}
        PageName="Contact Us"
        pageSubhead={translations.ContactUsSubhead}
      />

      <div id="contact" className="contact-form">
        <Form />
      </div>

      <div
        className="contact-information-container"
      >
        <div className="contact-information">
          <h1>{translations.ContactInformation}</h1>

          <div className="contact-details-container">
            <div className="contact-address">
              <h3>{translations.Address}:</h3>
              <p>{translations.location}</p>
            </div>
            <div className="contact-address">
              <h3>{translations.ServiceTimes}:</h3>
              <p>{translations.daily}</p>
            </div>
          </div>
        </div>

        <div
          className="map-container"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.848487508625!2d56.34998147513652!3d25.140812733982596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef4f99dcdc03ca1%3A0xfd38bda07c13a79!2sSignature%20clinic!5e0!3m2!1sen!2sae!4v1743595281751!5m2!1sen!2sae"
            width="100%"
            height="400"
            style={{ border: "0" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Page;
