import Image, { StaticImageData } from 'next/image';
import ar from '../../../locales/ar';
import en from '../../../locales/en';
import './ServiceBox.css';
import { useLanguage } from '@/app/context/LanguageContext';
import Link from 'next/link';

interface ServiceBoxProps {
  imageUrl: string | StaticImageData;
  serviceCategory: string;
  ServiceName: string;
  imgAlt: string;
  ServiceDescription?: string;
  link: string; // هذا رابط الخدمة المفصل
}

const ServiceBox = ({
  imageUrl,
  serviceCategory,
  ServiceName,
  imgAlt,
  link,
}: ServiceBoxProps) => {
  const { language } = useLanguage();
  const translations = language === "en" ? en : ar;

  return (
    <Link href={link} className="serviceBox-Link">
      <div className="serviceBox">
        <Image src={imageUrl} alt={imgAlt} loading="lazy"  />
        <div className="box-container">
          <div className="serviceTitle">
            <p className="category">{serviceCategory}</p>
            <p className="serviceName">{ServiceName}</p>
          </div>
          <div className="viewDetails-BTN">
            <span>{translations.ViewDetails}</span> {/* زر بدون <a> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceBox;
