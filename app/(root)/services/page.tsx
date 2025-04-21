"use client";

import PageHero from "@/app/components/shared/PageHero/PageHero";
import "./services.css";
import { useLanguage } from "@/app/context/LanguageContext";
import en from "@/app/locales/en";
import ar from "@/app/locales/ar";
import Slider from "@/app/components/shared/Slider/Slider";
import { useServiceDetails } from "@/app/DB/service";
import ServiceBox from "@/app/components/shared/ServiceBox/ServiceBox";

const Page = () => {
  const { language } = useLanguage();
  const translations = language === "en" ? en : ar;
  const services = useServiceDetails();
  return (
    <>
      <PageHero
        BookUrl=""
        Image={"/clinic2_11zon.jpg"}
        PageName={translations.Service}
        pageSubhead={translations.serviceDescription}
      />
       <div className="PopularTreatment">
        <Slider
          items={services}
          renderItem={(service) => (
            <ServiceBox
              key={service.id}
              ServiceName={service.category}
              imageUrl={service.img}
              serviceCategory={service.category}
              imgAlt={service.category}
              link={`/services/${service.id}`}
            />
          )}
        />
      </div>
    </>
  );
};

export default Page;
