// #region Modules
import React, {
  MouseEventHandler,
  useEffect,
} from 'react';
import FontAwesome from 'react-fontawesome';
import './InfoPanel.scss';
// #endregion

// #region Components
// #endregion

// #region Assets & Data
// #endregion

interface InfoPanelProps {
  children: any,
  isOpen: boolean,
  isDark: boolean,
    onClose: MouseEventHandler<HTMLButtonElement>,
  theme: any
}

export const InfoPanel: React.FC<InfoPanelProps> = ({
  children,
  isOpen,
  isDark,
  onClose,
  theme,
}) => {
  useEffect(() => {
  }, []);

  return (
    <div className={`info-panel ${isOpen ? 'open' : 'closed'} ${isDark ? 'dark' : 'light'}`} style={{ color: theme?.color }}>
      <div style={{ height: 'calc(100% - 4rem)', overflow: 'hidden', overflowY: 'auto' }}>
        {children}
      </div>
      <div style={{ height: 'calc(100% - 4rem)' }}>
        <button onClick={onClose} style={{
          border: '2px solid red',
          borderColor: theme?.color, borderRadius: '50%',
          color: theme?.color,
        }}>
          <FontAwesome name='times' />
        </button>
      </div>
    </div>
  );
};
