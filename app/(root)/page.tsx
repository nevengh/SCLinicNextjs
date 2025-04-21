"use client";
import Hero from "../components/Hero/Hero";
import ArrowBTN from "../components/shared/ArrowBTN/ArrowBTN";
import Slider from "../components/shared/Slider/Slider";

import ar from "../locales/ar";
import en from "../locales/en";
import "./home.css";
import { useServiceDetails } from "../DB/service";
import ServiceBox from "../components/shared/ServiceBox/ServiceBox";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import DoctorBox from "../components/shared/DoctorBox/DoctorBox";
import { doctors } from "../DB/Doctors";
import CustomerReview from "../components/CustomerReview/CustomerReview";
import BFAfter from "../components/shared/BFAfter/BFAfter";
import Form from "../components/shared/Form/Form";
import { useLanguage } from "../context/LanguageContext";
export default function Home() {
  const services = useServiceDetails();
  const { language } = useLanguage();
  const translations = language === "en" ? en : ar;
  const beforeandafter = [
    { id: 6, image: "/BeforeAndAfter/6048412975225751953_11zon.jpg", name: "" },
    {
      id: 7,
      image: "/BeforeAndAfter/WhatsApp Image 2025-04-14 at 22.16.27_11zon.webp",
      name: "",
    },
    {
      id: 1,
      image: "/BeforeAndAfter/antiaging-beauty-treatment(1)_11zon.webp",
      name: "",
    },
    {
      id: 2,
      image: "/BeforeAndAfter/antiaging-beauty-treatment_11zon.webp",
      name: "",
    },
    {
      id: 3,
      image:
        "/BeforeAndAfter/high-angle-view-25yearold-womans-dark-hair-before-after-hair-growth-treatment-portrait-st_11zon.webp",
      name: "",
    },
    {
      id: 4,
      image:
        "/BeforeAndAfter/man-is-revealing-remarkable-progress-his-hair-regrowth-journey_11zon.webp",
      name: "",
    },
    {
      id: 8,
      image: "/BeforeAndAfter/WhatsApp Image 2025-04-14 at 22.15.13_11zon.webp",
      name: "",
    },
    {
      id: 5,
      image:
        "/BeforeAndAfter/woman-face-before-after-cosmetic-procedure-cleaning-face_11zon.webp",
      name: "",
    },
    {
      id: 9,
      image: "/BeforeAndAfter/WhatsApp Image 2025-04-14 at 22.15.12_11zon.webp",
      name: "",
    },
  ];

  return (
    <>
      <Hero />
      {/* About Home */}
      <div className="aboutUs-Home">
        <p className="about-title">
          {translations.WelcometoOurClinic}
          <br />
        </p>

        <p className="about-text">{translations.WelcometoOurClinic_text}</p>
      </div>

      {/* Services Home */}
      <div className="PopularTreatment">
        <div className="popularTreatment_Head">
          <h1>{translations.Service}</h1>
          <ArrowBTN BTN_Name={translations.ViewAllServices} URL="/services" />
        </div>
        <Slider
          items={services}
          renderItem={(service) => (
            <ServiceBox
              key={service.id}
              ServiceName={service.category}
              imageUrl={service.img}
              serviceCategory={service.category}
              imgAlt={service.category}
              link={`/services/${service.id}`} // الرابط الصحيح للصفحة
            />
          )}
        />
      </div>
      {/* Enhance Your Natural Glow */}
      <div className="Home-Section">
        <div className="HomeSection-Container">
          <div className="content-holder">
            <p className="miny-title">{translations.About}</p>
            <h1>{translations.ANewChapterinSkinHairCare}</h1>
            <p className="miny-text">{translations.OurStory}</p>

            <div className="treatment-list">
              <h2>{translations.WhyUS}</h2> {/* Changed to h2 */}
              <div className="List">
                <p>
                  <span>
                    <FaCheck />
                  </span>{" "}
                  {translations.whyus_1}
                </p>
                <p>
                  <span>
                    <FaCheck />
                  </span>{" "}
                  {translations.whyus_2}
                </p>
                <p>
                  <span>
                    <FaCheck />
                  </span>{" "}
                  {translations.whyus_3}
                </p>
              </div>
            </div>

            <ArrowBTN BTN_Name={translations.FindOurMore} URL="/about-us" />
          </div>

          <div className="image-holder">
            <Image src="/Women.webp" alt="" width={100} height={100} />
          </div>
        </div>
      </div>
      {/* Doctors */}
      <div className="PopularTreatment">
        <div className="popularTreatment_Head">
          <h1>{translations.OurTeam}</h1>
          <ArrowBTN URL="" BTN_Name={translations.ViewAllDoctors} />
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
      {/* Customer Review */}
      <div className="PopularTreatment">
        <div className="popularTreatment_Head">
          <h1>{translations.CustomerReview}</h1>
        </div>
        <CustomerReview />
      </div>
      {/* Before And After */}
      <div className="BeforeAndAfter">
        <div className="PopularTreatment">
          <h1>{translations.BeforeAndAfter}</h1>
          <Slider
            items={beforeandafter}
            renderItem={(ele) => (
              <BFAfter image={ele.image} imageAlt={ele.name} />
            )}
          />
        </div>
      </div>
      {/* Contact Form */}
      <div className="home-contact">
        <Form />
      </div>
    </>
  );
}
