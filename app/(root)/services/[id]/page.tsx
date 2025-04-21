'use client';
import { useParams } from "next/navigation";
import "./serviceProfile.css";
import { useServiceDetails } from "@/app/DB/service";
import { useLanguage } from "@/app/context/LanguageContext";
import en from "@/app/locales/en";
import ar from "@/app/locales/ar";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  const { id } = useParams() as { id: string };
  const services = useServiceDetails();
  const { language } = useLanguage();
  const translations = language === "en" ? en : ar;

  const selectedService = services.find(
    (service) => service.id === parseInt(id || "0")
  );

  if (!selectedService) {
    return <div>{translations.ServiceNotFound}</div>;
  }
console.log(selectedService);

  return (
    <div className="service-profile">
      <h1>{selectedService.category}</h1>
      <div className="service-profile-container">
        {selectedService.services.map((subService) => (
          <div key={subService.id} className="service-profile-box">
            <div className="service-profile-box-image">
              <Image src={subService.img.src} alt={subService.name} width={40} height={40} />
              <Link href="/contact">{translations.bookVisit}</Link>
            </div>
            <div className="service-profile-box-content">
              <h2>{subService.name}</h2>
              <p>{subService.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
