import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import FontAwesome from 'react-fontawesome';
import 'styles/components/Accordion.scss';
import { useAppTheme, useHover } from 'hooks';

interface AccordionProps {
  children?: React.ReactNode;
  className?: string;
  closedIcon?: string;
  hasHeaderColor?: boolean;
  hasPadding?: boolean;
  isControlled?: boolean;
  isIconLeft?: boolean;
  isOpenDefault?: boolean;
  onChange?: (isOpen: boolean) => void;
  onToggle?: (isOpen: boolean) => void;
  openIcon?: string;
  title?: React.ReactNode;
  value?: boolean;
  hasOverflow?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  onToggle,
  onChange,
  className,
  closedIcon = 'chevron-down',
  hasPadding = true,
  hasHeaderColor = false,
  hasOverflow = false,
  isControlled = false,
  isIconLeft = false,
  isOpenDefault = false,
  openIcon = 'chevron-up',
  title = 'title',
  value,
}) => {
  const { theme } = useAppTheme();
  const { isHovered, onHoverStart, onHoverEnd } = useHover();
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  const buttonStyle = {
    color: theme?.PRIMARY,
    marginRight: '0.3rem',
    marginTop: '0.3rem',
  };

  const toggleAccordion = (): void => {
    if (!isControlled) {
      setIsOpen(!isOpen);
      onToggle && onToggle(!isOpen);
    } else {
      onChange && onChange(!value);
      onToggle?.(!value);
    }
  };

  useEffect(() => {
    if (!isControlled) {
      setIsOpen(isOpenDefault);
    }
  }, [isOpenDefault, isControlled]);

  useEffect(() => {
    if (isControlled) {
      setIsOpen(!!value);
    }
  }, [value, isControlled]);

  return (
    <div className={`accordion ${className ? className : ''}`}>
      <div className="accordion-header"
        onClick={toggleAccordion}
        style={hasPadding ? {
          backgroundColor: isHovered ? `${theme?.PRIMARY}33` : hasHeaderColor ? `${theme?.PRIMARY}11` : 'transparent',
        } : {
            backgroundColor: isHovered
              ? `${theme?.PRIMARY}33`
              : hasHeaderColor
                ? `${theme?.PRIMARY}11`
                : 'transparent',
          padding: '0'
        }}
        onMouseEnter={onHoverStart}
        onMouseLeave={onHoverEnd}
      >
        {isIconLeft ? (
          <span className="accordion-icon">
            {isOpen
              ? (
                <FontAwesome name={openIcon} style={buttonStyle} />
              )
              : (
                <FontAwesome name={closedIcon} style={buttonStyle} />
              )}
          </span>
        ) : null}
        <span
          className="accordion-title"
        >
          {title}
        </span>
        {!isIconLeft ? (
          <span className="accordion-icon">
            {isOpen
              ? (
                <FontAwesome name={openIcon} style={buttonStyle} />
              )
              : (
                <FontAwesome name={closedIcon} style={buttonStyle} />
              )}
          </span>
        ) : null}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="accordion-content"
            style={{
              overflow: hasOverflow ? 'visible' : 'hidden'
            }}
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: 'auto',
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{ duration: 0.1 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
