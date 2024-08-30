import { useEffect } from 'react';

export const dispatchCustomEvent = (eventName: string): void => {
  const customEvent = new Event(eventName);
  document.dispatchEvent(customEvent);
};

// eslint-disable-next-line no-undef
export const useCustomEvent = (eventName: string, callback: EventListenerOrEventListenerObject): void => {
  useEffect(() => {
    document.addEventListener(eventName, callback);

    return () => {
      document.removeEventListener(eventName, callback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};