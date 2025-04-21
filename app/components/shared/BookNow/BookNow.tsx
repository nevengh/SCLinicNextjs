
import Link from 'next/link';

import ar from '../../../locales/ar';
import en from '../../../locales/en';
import './BookNow.css'
import { useLanguage } from '@/app/context/LanguageContext';


const BookNow = () => {
  const { language } = useLanguage();
  const translations = language === "en" ? en : ar;
  return (
    <Link href='/contact'  className="Btn">
    {translations.bookVisit} {/* الترجمة هنا */}
    </Link>
  )
}

export default BookNow