import React, { useState } from 'react';
import './Tooltip.scss'; // Import your CSS file for styling

interface TooltipProps {
    content: React.ReactNode;
    trigger: 'hover' | 'click';
    children: React.ReactElement;
    customStyle?: React.CSSProperties;
    direction: 'top' | 'right' | 'bottom' | 'left';
    themeName: 'dark' | 'light';
}

export const Tooltip: React.FC<TooltipProps> = ({ content, trigger, children, customStyle, direction, themeName }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = (): void => {
    if (trigger === 'click') {
      setIsVisible((prev) => !prev);
    }
  };

  const handleMouseEnter = (): void => {
    if (trigger === 'hover') {
      setIsVisible(true);
    }
  };

  const handleMouseLeave = (): void => {
    if (trigger === 'hover') {
      setIsVisible(false);
    }
  };

  return (
    <div className="tooltip-container" style={customStyle}>
      <div
        className={`tooltip-trigger ${trigger === 'click' ? 'clickable' : ''}`}
        onClick={handleToggle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {isVisible && (
        <div className={`p-4 tooltip-content ${direction} ${themeName} ${trigger === 'click' ? 'clickable' : ''}`}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
