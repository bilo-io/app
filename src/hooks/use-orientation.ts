import { useEffect } from 'react';


export const useOrientation = ({ portrait }: { portrait?: boolean }) => {

  useEffect(() => {
    window.addEventListener('orientationchange', () => {
      if (window.innerHeight > window.innerWidth) {
        if (portrait) {
          document.getElementsByTagName('body')[0].style.transform = 'rotate(90deg)';
        }
      } else if (window.innerWidth > window.innerHeight) {
        document.getElementsByTagName('body')[0].style.transform = 'rotate(0deg)';
      }
    });
  }, [portrait]);
};