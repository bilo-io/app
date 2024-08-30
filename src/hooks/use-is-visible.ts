import React, { useEffect, useState } from 'react';

const OPTIONS = {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: 0
};

export const useIsVisible = (elementRef: React.RefObject<HTMLElement>): boolean => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (elementRef.current) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(elementRef.current!);
          }
        });
      }, OPTIONS);
      observer.observe(elementRef.current!);

      return () => {
        observer.disconnect();
      };
    }
  }, [elementRef]);

  return isVisible;
};

export default useIsVisible;
