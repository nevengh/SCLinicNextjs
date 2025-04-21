import { FaStar } from "react-icons/fa";
import "./CustomerReviewBox.css";
import Image, { StaticImageData } from "next/image";

interface CustomerProps {
  image: string | StaticImageData;
  name: string;
  star?: number;
  review: string;
  altImage: string;
}

const CustomerReviewBox = ({ image, name, review, star = 0, altImage }: CustomerProps) => {
  return (
    <div className="CustomerReviewBox">
      <div className="stars">
        {[...Array(star)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>
      <p className="review">{review}</p>
      <div className="CustomerImage">
        <Image src={image} alt={altImage}  loading='lazy' />
        <h4>{name}</h4>
      </div>
    </div>
  );
};

export default CustomerReviewBox;
