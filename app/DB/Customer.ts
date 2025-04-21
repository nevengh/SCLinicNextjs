
import shayna from '../../public/customer/testimonials-3.webp'
import Nora from '../../public/customer/testimonials-5.webp'
import sara from '../../public/customer/sara.png'
import Maithah from '../../public/customer/unnamed.png'

import en from '../locales/en'
import ar from '../locales/ar'
import { useLanguage } from '../context/LanguageContext'

export const Customer = ()=>{
        const { language } = useLanguage();
        const translations = language === "en" ? en : ar;
    return[
    {
        id:1,
        stars:5,
        name:translations.ShayneGarcia,
        image:shayna,
        review:translations.ShayneGarciaReview
        
    },
    {
        id:2,
        stars:4,
        name:translations.NoranKhalil,
        image:Nora,
        review:translations.NoranKhalilReview
    },
    {
        id:3,
        stars:5,
        name:translations.Sara,
        image:sara,
        review:translations.SaraReview
    },
    {
        id:4,
        stars:5,
        name:translations.MaithahSalem,
        image:Maithah,
        review:translations.MaithahSalemReview
    }
]}