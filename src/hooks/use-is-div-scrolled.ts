import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

// Custom hook to check if a specific div is scrolled into view
const useIsDivScrolled = (ref: RefObject<HTMLDivElement>) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        // Check if the div is in the viewport
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        setIsScrolled(isVisible);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', checkScroll);

    // Initial check when the component mounts
    checkScroll();

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener('scroll', checkScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isScrolled;
};

export function useScroll() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [bodyOffset, setBodyOffset] = useState(
    document.body.getBoundingClientRect()
  );
  const [scrollY, setScrollY] = useState(bodyOffset.top);
  const [scrollX, setScrollX] = useState(bodyOffset.left);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>();

  const listener = (e: any) => {
    setBodyOffset(document.body.getBoundingClientRect());
    setScrollY(-bodyOffset.top);
    setScrollX(bodyOffset.left);
    setScrollDirection(lastScrollTop > -bodyOffset.top ? 'down' : 'up');
    setLastScrollTop(-bodyOffset.top);
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  });

  return {
    scrollDirection,
    scrollX,
    scrollY
  };
}

export function useScrollDirection() {
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (prevScrollY.current < currentScrollY && goingUp) {
      setGoingUp(false);
    }
    if (prevScrollY.current > currentScrollY && !goingUp) {
      setGoingUp(true);
    }
    prevScrollY.current = currentScrollY;
  }, [goingUp]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [goingUp, handleScroll]);

  return goingUp ? 'up' : 'down';
}

export default useIsDivScrolled;
