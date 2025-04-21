import Image, { StaticImageData } from "next/image";
// import ArrowBTN from "../ArrowBTN/ArrowBTN";
import "./DoctorBox.css";
interface DoctorBoxProps{
    DoctorName:string;
    DoctorSpec:string;
    image:string | StaticImageData;
    imgAlt:string;

}
const DoctorBox = ({DoctorName,DoctorSpec,image,imgAlt}:DoctorBoxProps) => {
  return (
    <div className="doctor-box">
      <div className="doctor-box-head">
        <p className="DoctorName">{DoctorName}</p>
        <p className="DoctorSpec">{DoctorSpec}</p>
      </div>
      <div className="doctor-img">
        <Image src={image} alt={imgAlt}  loading='lazy' />
      </div>
      {/* <div className="doctor-btn">
        <ArrowBTN URL="" BTN_Name="Open Profile" />
      </div> */}
    </div>
  );
};

export default DoctorBox;
