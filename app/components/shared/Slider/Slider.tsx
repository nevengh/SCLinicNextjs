
'use client'
import { useState, useEffect, ReactNode } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";
import "./Slider.css";

interface SliderProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  itemsPerViewConfig?: {
    desktop: number;
    tablet: number;
    mobile: number;
  };
}

const Slider = <T,>({
  items,
  renderItem,
  itemsPerViewConfig = { desktop: 3, tablet: 2, mobile: 1 },
}: SliderProps<T>) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(itemsPerViewConfig.desktop);

  // Detect if current document direction is RTL
  const isRTL =
    typeof document !== "undefined" &&
    (document.dir === "rtl" || document.documentElement.dir === "rtl");

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsPerView(itemsPerViewConfig.mobile);
      } else if (width < 1024) {
        setItemsPerView(itemsPerViewConfig.tablet);
      } else {
        setItemsPerView(itemsPerViewConfig.desktop);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, [itemsPerViewConfig]);

  const handleNext = () => {
    if (isRTL) {
      if (currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }
    } else {
      if (currentIndex < items.length - itemsPerView) {
        setCurrentIndex((prev) => prev + 1);
      }
    }
  };

  const handlePrev = () => {
    if (isRTL) {
      if (currentIndex < items.length - itemsPerView) {
        setCurrentIndex((prev) => prev + 1);
      }
    } else {
      if (currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: isRTL ? handlePrev : handleNext,
    onSwipedRight: isRTL ? handleNext : handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className="slider-wrapper">
      <div className="arrow-container">
        <div className="icon" onClick={handlePrev}>
          <FaArrowLeft />
        </div>
        <div className="icon" onClick={handleNext}>
          <FaArrowRight />
        </div>
      </div>
      <div className="popularTreatment-Container" {...handlers}>
        <div
          className="slider-track"
          style={{
            transform: `translateX(${isRTL ? '' : '-'}${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {items.map((item, index) => (
            <div key={index} style={{ flex: `0 0 ${100 / itemsPerView}%` }}>
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
