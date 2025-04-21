import { useState } from "react";

import { useServiceDetails } from "../../../DB/service";
import "./Form.css";

import en from "../../../locales/en";
import ar from "../../../locales/ar";
import { useLanguage } from "@/app/context/LanguageContext";

const Form = () => {
      const { language } = useLanguage();
      const translations = language === "en" ? en : ar;
  const services = useServiceDetails();
  
  // الحالة لتخزين الفئة والعلاج المختار
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // دالة للتعامل مع تغيير الفئة المختارة
  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
    setSelectedService(null); // إعادة تعيين العلاج عند تغيير الفئة
  };

  // دالة للتعامل مع تغيير العلاج المختار
  const handleServiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedService(event.target.value);
  };

  // البحث عن الفئة التي تم اختيارها
  const selectedCategoryDetails = services.find(
    (service) => service.category === selectedCategory
  );

  return (
    <div className="Form">
      <form>
        <p className="form-subtitle">{translations.FormSubTitle}</p>
        <h1 className="form-Maintitle">{translations.FormMainTitle}</h1>

        <div className="FORMcontainer">
          {/* اسم ورقم الهاتف */}
          <div className="FORMrow">
            <div className="inputGroup">
              <label htmlFor="name">{translations.Name}</label>
              <input type="text" id="name" required />
            </div>
            <div className="inputGroup">
              <label htmlFor="phone">{translations.Phone}</label>
              <input type="text" id="phone" required />
            </div>
          </div>

          {/* البريد الإلكتروني واختيار الفئة */}
          <div className="FORMrow">
            <div className="inputGroup">
              <label htmlFor="email">{translations.EMAIL}</label>
              <input type="email" id="email" required />
            </div>
            <div className="inputGroup">
              <label htmlFor="category">{translations.Treatment}</label>
              <select id="category" onChange={handleCategoryChange} required>
                <option value="">{translations.SelectService}</option>
                {services.map((category) => (
                  <option key={category.id} value={category.category}>
                    {category.category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* اختيار العلاج بناءً على الفئة المختارة */}
          {selectedCategory && selectedCategoryDetails && (
            <div className="FORMrow">
              <div className="inputGroup">
                <label htmlFor="service">{translations.SelectService}</label>
                <select
                  id="service"
                  value={selectedService || ""}
                  onChange={handleServiceChange}
                  required
                >
                  <option value="">{translations.SelectService}</option>
                  {selectedCategoryDetails.services.map((service) => (
                    <option key={service.id} value={service.name}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* الوقت والتاريخ */}
          <div className="FORMrow">
            <div className="inputGroup">
              <label htmlFor="time">{translations.Time}</label>
              <input type="time" id="time" required />
            </div>
            <div className="inputGroup">
              <label htmlFor="date">{translations.Date}</label>
              <input type="date" id="date" />
            </div>
          </div>

          {/* زر إرسال */}
          <button className="submit" type="submit">
            {translations.MakeanAppointment}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
