import React, { useEffect, useState } from 'react';
import './Switch.style.scss';
import { useAppTheme } from 'hooks';

interface SwitchProps {
  label?: string;
  onChange: (checked: boolean) => void;
  defaultValue?: boolean;
  isSwitchLeft?: boolean;
  isJustifyBetween?: boolean;
  knobColor?: string;
  trackColor?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  label,
  onChange,
  trackColor,
  defaultValue = false,
  isSwitchLeft = false,
  isJustifyBetween = false,
  // knobColor = '#fff',
}) => {
  const { theme } = useAppTheme();
  const knobColor = '#FFF';

  const [checked, setChecked] = useState(defaultValue);

  useEffect(() => {
    setChecked(defaultValue);
  }, [defaultValue]);

  const toggleSwitch = ():void => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange(newChecked);
  };

  return (
    <div className={`switch-container flex ${isSwitchLeft ? 'flex-row-reverse' : 'flex-row'} ${isJustifyBetween ? 'justify-between' : ''}`}>
      {label && <label className={`switch-label ${isSwitchLeft ? 'ml-4' : 'mr-4'}`}>{label}</label>}
      <div className={`switch ${checked ? 'on' : 'off'}`} onClick={toggleSwitch}>
        <div
          className="switch-track"
          style={{
            // backgroundColor: trackColor,
            backgroundColor: checked ? trackColor || theme?.PRIMARY : theme?.TEXT_LIGHT
          }}
        />
        <div
          className={`switch-handle ${checked ? 'on' : 'off'}`}
          style={{
            backgroundColor: knobColor,
          }}
        />
      </div>
    </div>
  );
};

export default Switch;
