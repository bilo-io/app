import React, { useEffect, useState } from 'react';

interface TypingAnimationProps {
  texts: string[];
  delay?: number;
  hasCaret?: boolean;
  caretColor?: string;
  speed?: number,
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ texts, speed, hasCaret, caretColor, delay = 1000 }) => {
  const [typedText, setTypedText] = useState<string>('');
  const [showCaret, setShowCaret] = useState<boolean>(true);

  useEffect(() => {
    let currentIndex = 0;
    let currentText = '';

    const startTyping = () => {
      currentText = texts[currentIndex];

      let characterIndex = 0;

      const typeNextCharacter = () => {
        if (characterIndex <= currentText?.length) {
          setTypedText(prevTypedText => currentText?.substring(0, characterIndex + 1));
          characterIndex++;
          const typingSpeed = speed || 50 || delay / Math.sqrt(currentText?.length);
          setTimeout(typeNextCharacter, typingSpeed);
        } else {
          setTimeout(() => {
            setShowCaret(false);
            setTimeout(() => {
              if (texts?.length > 1) {
                setShowCaret(true);
                setTypedText('');
                currentIndex = (currentIndex + 1) % texts.length;
                startTyping();
              }
            }, 500); // Blinking duration
          }, delay * 3); // Delay before backspacing (3 times the typing delay)
        }
      };

      typeNextCharacter();
    };

    startTyping();

    return () => {
      // Cleanup if needed
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [texts, delay]);

  useEffect(() => {
    const caretInterval = setInterval(() => {
      setShowCaret(prevShowCaret => !prevShowCaret);
    }, 500); // Caret blinking interval

    return () => {
      clearInterval(caretInterval);
    };
  }, []);

  return (
    <span className="flex flex-row flex-wrap">
      <span>{typedText}</span>
      {hasCaret && <div
        className="caret"
        style={{
          color: caretColor || 'inherit',
          marginLeft: '-0.9rem',
          marginTop: '-0.1rem',
          // marginBottom: '10rem',
          opacity: showCaret ? 1 : 0
        }}>│</div>}
    </span>
  );
};

export default TypingAnimation;
