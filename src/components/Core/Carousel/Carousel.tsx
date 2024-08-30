import { SwipeDirection, SwipePosition, useAppTheme, useSwipe, useSwipeV3 } from 'hooks'; // Import the custom hook
import { isMobile } from 'hooks/use-device';
import React, { useEffect, useState } from 'react';
import FontAwesome from 'react-fontawesome';

import Typography from '../Typography/Typography';
import PaginationDots from '../Pagination/PaginationDots';

export interface CarouselItem {
  id: number;
  [key: string]: any; // Additional properties based on your data structure
}

interface CarouselProps {
  title?: string;
  items: CarouselItem[];
  renderItem: (item: CarouselItem, isActive: boolean) => React.ReactNode;
  onChange: (activeItem: CarouselItem) => void;
  defaultIndex?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  title,
  items,
  renderItem,
  onChange,
  defaultIndex = 0,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(defaultIndex);
  const isDeviceMobile: boolean = isMobile();
  const { theme } = useAppTheme();

  const handleSwipeLeft = () => {
    const newIndex = (activeIndex + 1 + items.length) % items.length;
    setActiveIndex(newIndex);
    onChange(items[newIndex]);
  };

  const handleSwipeRight = () => {
    const newIndex = (activeIndex - 1 + items.length) % items.length;
    setActiveIndex(newIndex);
    onChange(items[newIndex]);
  };

  const onSwipe = (direction: SwipeDirection, position: SwipePosition) => {
    if (direction === 'left') {
      handleSwipeLeft();
    }

    if (direction === 'right') {
      handleSwipeRight();
    }
  };

  useSwipeV3({ onSwipe });

  const handleClick = (index: number) => {
    setActiveIndex(index);
    onChange(items[index]);
  };

  useEffect(() => {
    setActiveIndex(defaultIndex);
  }, [defaultIndex]);

  const renderItems = () => {
    if (isDeviceMobile) {
      return items.map((item, index) => (
        <div
          key={item.id}
          className={'flex-shrink-0 w-full md:w-1/4 lg:w-1/4 px-2'}
          onClick={() => handleClick(index)}
        >
          {renderItem(item, index === activeIndex)}
        </div>
      ));
    }

    const extendedItems = [
      ...items.slice(items.length - 4), // Last 4 items
      ...items,
      ...items.slice(0, 4) // First 4 items
    ];

    return extendedItems.map((item, index) => {
      const actualIndex = (index - 4 + items.length) % items.length;
      return (
        <div
          key={`${item.id}-${index}`}
          className={'flex-shrink-0 w-full md:w-1/4 lg:w-1/4 px-2'}
          onClick={() => handleClick(actualIndex)}
        >
          {renderItem(item, actualIndex === activeIndex)}
        </div>
      );
    });
  };

  return (
    <div className="relative overflow-hidden w-full">
      <div className="flex flex-row justify-between mb-2">
        <div
          className="transform mx-2 cursor-pointer z-10 p-2 px-3.5 border rounded-full"
          style={{
            borderColor: theme?.PRIMARY,
          }}
          onClick={handleSwipeRight}
        >
          <FontAwesome
            name="chevron-left"
            style={{
              color: theme?.PRIMARY,
            }}
          />
        </div>
        {title && (
          <Typography size="xl" className="mx-auto">
            {title}
          </Typography>
        )}
        <div
          className="transform mx-2 cursor-pointer z-10 p-2 px-3.5 border rounded-full"
          style={{
            borderColor: theme?.PRIMARY,
          }}
          onClick={handleSwipeLeft}
        >
          <FontAwesome
            name="chevron-right"
            style={{
              color: theme?.PRIMARY,
            }}
          />
        </div>
      </div>
      <div className="-mt-4">
        <PaginationDots
          limit={13}
          totalPages={items?.length}
          activeIndex={activeIndex}
          activeColor={theme?.PRIMARY}
          backgroundColor={`${theme?.PRIMARY}66`}
          onClick={function (index: number): void {
            setActiveIndex(index);
          }}
        />
      </div>
      <div
        className={'flex transition-transform duration-300'}
        style={{
          transform: `translateX(${isDeviceMobile
            ? -activeIndex * 100
            : (activeIndex + 4) * -25
          }%)`,
        }}
      >
        {renderItems()}
      </div>
    </div>
  );
};

export default Carousel;
