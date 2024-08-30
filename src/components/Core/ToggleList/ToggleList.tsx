import { useAppTheme } from 'hooks';
import React, { useState } from 'react';

interface ToggleItem {
  label: string;
  value: string;
  color: string;
}

interface ToggleListProps {
  value: string | string[];
  options: ToggleItem[];
  orientation?: 'horizontal' | 'vertical';
  onChange: ((selectedValues: string | string[]) => void);
  isMulti?: boolean;
  isDisabled?: boolean;
}

export const ToggleList: React.FC<ToggleListProps> = ({
  options,
  value,
  orientation = 'vertical',
  onChange,
  isMulti = false,
  isDisabled = false,
}) => {
  const { theme } = useAppTheme();
  const [selectedValues, setSelectedValues] = useState<string[]>(Array.isArray(value) ? value : [value]);

  const handleToggle = (itemValue: string) => {
    if (isDisabled) return;

    if (isMulti) {
      setSelectedValues(prevSelectedValues => {
        const newSelectedValues = prevSelectedValues.includes(itemValue)
          ? prevSelectedValues.filter(v => v !== itemValue)
          : [...prevSelectedValues, itemValue];

        onChange(newSelectedValues);
        return newSelectedValues;
      });
    } else {
      setSelectedValues([itemValue]);
      onChange(itemValue);
    }
  };

  return (
    <div className={`flex ${orientation === 'horizontal' ? 'flex-row space-x-2' : 'flex-col space-y-2'} ${isDisabled ? 'cursor-not-allowed' : ''}`}>
      {options.map(item => (
        <div
          key={item.value}
          onClick={() => handleToggle(item.value)}
          className={`cursor-pointer px-3 py-1 rounded-xl text-center border ${isDisabled
            ? `text-${theme?.TEXT_LIGHT} cursor-not-allowed`
            : selectedValues.includes(item.value)
              ? `bg-${item.color} text-white border-${item.color}`
              : `bg-transparent text-${item.color} border-${item.color}`
          }
            ${isDisabled ? 'bg-opacity-50 border-opacity-50 opacity-50' : ''}
            `}
          style={{
            backgroundColor: selectedValues.includes(item.value) ? item.color : 'transparent',
            borderColor: item.color,
            color: selectedValues.includes(item.value) ? 'white' : item.color,
            pointerEvents: isDisabled ? 'none' : 'auto'
          }}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default ToggleList;
