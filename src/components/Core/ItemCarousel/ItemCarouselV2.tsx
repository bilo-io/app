import React, { useEffect, useState } from 'react';
import './ItemCarouselV2.scss';

interface ItemCarouselV2Props {
  items: any[];
  duration: number;
  backgroundItemCount?: number;
}

const ItemCarouselV2: React.FC<ItemCarouselV2Props> = ({
  items,
  duration,
  backgroundItemCount = 3,
}) => {
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

  const getBackgroundItems = () => {
    const itemsToShow = [];
    for (let i = 1; i <= backgroundItemCount; i++) {
      const index = (currentIndex + i) % items.length;
      itemsToShow.push(items[index]);
    }
    return itemsToShow;
  };

  return (
    <div className="item-carousel-v2">
      <div className="item-carousel-v2__current-item">
        <div className={`item-carousel-v2__item ${fade ? 'fade-in' : 'fade-out'}`}>
          {items[currentIndex]}
        </div>
      </div>
      <div className="item-carousel-v2__background-items">
        {getBackgroundItems().map((item, index) => (
          <div key={index} className="item-carousel-v2__background-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemCarouselV2;
