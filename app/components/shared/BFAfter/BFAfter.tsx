import Image, { StaticImageData } from 'next/image';
import './BFAfter.css'
interface BFAfterProps{
    image:string | StaticImageData;
    imageAlt:string;
}
const BFAfter = ({image,imageAlt}:BFAfterProps) => {
  return (
    <div className='BFAfter'>
        <Image src={image} alt={imageAlt}  loading='lazy' width={100} height={100} />
    </div>
  )
}

export default BFAfter