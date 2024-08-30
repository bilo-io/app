import React, { useEffect, useState } from 'react';
import './ItemCarousel.scss';

interface ItemCarouselProps {
  items: React.ReactElement[];
  duration: number;
}

export const ItemCarousel: React.FC<ItemCarouselProps> = ({ items, duration }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        setFade(true);
      }, duration / 2); // Half the duration for fading out and in
    }, duration);

    return () => clearInterval(interval);
  }, [items.length, duration]);

  return (
    <div className="item-carousel">
      <div className={`item-carousel__item ${fade ? 'fade-in' : 'fade-out'}`}>
        {items[currentIndex]}
      </div>
    </div>
  );
};

export default ItemCarousel;
