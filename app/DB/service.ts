import Hydrofacial from '../../public/facelift_15151185.svg';
import laser from '../../public/laser.webp';
import BridalPackages from '../../public/ring_16432234.svg';
import RFMicroneedling from '../../public/repair_16663378.svg';
import exosome from '../../public/shampoo_11847152.svg';
import Gcell from '../../public/pills_10679590.svg';
import HairPackage from '../../public/cleansing_5388850.svg';
import IVDrips from '../../public/hospital_11786534.svg'
import Bodyfiller from '../../public/gluteoplasty_18864915.svg'
import body from '../../public/side-view-woman-with-marker-traces-leg_11zon_11zon.webp'
import hairremoval from '../../public/hair-removal_1005676.svg'
import tatto from '../../public/liposuction_5688650.svg'
import HairTreatment from '../../public/caucasian-man-after-hair-transplantation(1)_11zon.webp'

import skinTreatment from '../../public/Hydrofacial.webp'

import en from '../locales/en';
import ar from '../locales/ar';
import { useLanguage } from '../context/LanguageContext';

export const useServiceDetails = () => {
   const { language } = useLanguage();
   const translations = language === "en" ? en : ar;

  return [
    {
      id: 1,
      category: translations.SkinTreatments,
      img: skinTreatment, 
      services: [
        {
          id: 1,
          name: translations.HydraFacialDeepCleansing,
          img: Hydrofacial,
          description: translations.HydraFacialDeepCleansingDesc,
        },
        {
          id: 2,
          name: translations.RFMicroneedling,
          img: RFMicroneedling,
          description: translations.RFMicroneedlingDesc,
        },
        {
          id: 4,
          name: translations.BridalPackages,
          img: BridalPackages,
          description: translations.BridalPackagesDesc,
        },
        {
          id: 5,
          name: translations.SkinBoostersMesotherapy,
          img: Hydrofacial,
          description: translations.SkinBoostersMesotherapyDesc,
        },
        {
          id: 6,
          name: translations.ScarPigmentationSolutions,
          img: tatto,
          description: translations.ScarPigmentationSolutionsDesc,
        },
        {
          id: 7,
          name: translations.SkinBoostersMesotherapy,
          img: RFMicroneedling,
          description: translations.SkinBoostersMesotherapyDesc,
        },
      ],
    },
    {
      id: 2,
      category: translations.Laser,
      img: laser,
      services: [
        {
          id: 1,
          name: translations.LaserHairRemoval,
          img: hairremoval,
          description: translations.LaserHairRemovalDesc,
        },
        {
          id: 2,
          name: translations.LaserTattooRemoval,
          img: tatto,
          description: translations.LaserTattooRemovalDesc,
        },
      ],
    },
    {
      id: 3,
      category: translations.HairRestoration,
      img: HairTreatment, // صورة عامة لفئة Hair Treatment

      services: [
        {
          id: 7,
          name: translations.PlasmaPRPTherapy,
          img: IVDrips,
          description: translations.PlasmaPRPTherapyDesc,
        },
        {
          id: 8,
          name: translations.ExosomeHairRegeneration,
          img: exosome,
          description: translations.ExosomeHairRegenerationDesc,
        },
        {
          id: 9,
          name: translations.GCellTherapy,
          img: Gcell,
          description: translations.GCellTherapyDesc,
        },
        {
          id: 10,
          name: translations.SignatureHairPackage,
          img: HairPackage,
          description: translations.SignatureHairPackageDesc,
        },
      ],
    },
    {
      id:4,
      category:translations.BodyTreatments,
      img:body,
      services:[
        {
          id: 1,
          name: translations.Bodyfiller,
          img: Bodyfiller,
          description: translations.BodyfillerDesc,
        },
        {
          id: 2,
          name: translations.IVDrips,
          img: IVDrips,
          description: translations.IVDripsDesc,
        },
      ]
    }
  ];
};