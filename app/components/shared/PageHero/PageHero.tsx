import Image, { StaticImageData } from 'next/image';
import './PageHero.css'
import { FaPhone } from "react-icons/fa6";

interface PageHeroProps {
  Image: string | StaticImageData;
  PageName: string;
  pageSubhead: string;
  BookUrl: string;
}

const PageHero = ({ Image: heroImage, PageName, pageSubhead, BookUrl }: PageHeroProps) => {
  return (
    <div className="HomeSection-Container">
      <div className="image-holder">
        <Image src={heroImage} alt={PageName} loading="lazy" width={100} height={100} />
      </div>

      <div className="content-holder">
        <p className="contact-subtitle">{PageName}</p>
        <h1 className="contact-Maintitle">{pageSubhead}</h1>

        <div className="contact-btns">
          <a href={BookUrl} className="contact-book">Book Online</a>
          <a className="contact-phone" href="tel:+971501447480">
            <span><FaPhone /></span>
            Call: 0501447480
          </a>
        </div>
      </div>
    </div>
  );
};

export default PageHero;
