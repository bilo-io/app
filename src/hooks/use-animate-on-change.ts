import { useEffect } from 'react';

export const useAnimateOnChange = (dependencies: any[]) => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-change');

    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('fade-in');
      }, index * 200); // Staggering effect
    });

    return () => {
      elements.forEach((element) => {
        element.classList.remove('fade-in');
      });
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};

export default useAnimateOnChange;
