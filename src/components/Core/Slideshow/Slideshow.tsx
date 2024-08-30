import React, { useEffect, useRef, useState } from 'react';
import './Slideshow.scss';

export const Slideshow = ({ slides, interval = 3000 }: { slides: any[], interval?: number}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // @ts-ignore
    timerRef.current = setInterval(goToNextSlide, interval);

    return () => {
      // @ts-ignore
      clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interval]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slideshow" style={{ zIndex: 20 }}>
      <div className="slideshow-content">
        {slides.slice(currentIndex, currentIndex + 1).map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? '' : ''}`}
          >
            {slide}
          </div>
        ))}
      </div>
      <div className="dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
