import { useEffect, useState } from 'react';

const useRandomMessage = (duration: number, messageArray: string[]) => {
  // #region STATE
  const [randomMessage, setRandomMessage] = useState<string>('');
  // #endregion

  // #region FUNCTIONS
  const findRandomMessage = () => {
    const index = Math.floor(Math.random() * messageArray.length);
    setRandomMessage(messageArray[index]);
  };
  // #endregion

  // #region LIFECYCLE
  useEffect(() => {
    findRandomMessage();

    const messageLooperInterval = setInterval(() => {
      findRandomMessage();
    }, duration);

    return () => clearInterval(messageLooperInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return randomMessage;
};

export default useRandomMessage;
