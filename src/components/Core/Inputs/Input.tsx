import { useAppTheme } from 'hooks';
import React, { ChangeEvent, useEffect, useState } from 'react';

interface InputProps {
  id?: string,
  name?: string,
  label?: string;
  value: string | number;
  onChange: ((value: string) => void) | ((e: ChangeEvent<HTMLInputElement>) => void);
  variant?: 'light' | 'dark';
  className?: string;
  style?: any;
  type?: 'number' | 'text' | 'email' | 'range' | 'date' | 'time' | 'datetime';
  placeholder?: string;
  ref?: any;
  wFull?: boolean;
  limit?: number;
  min?: string | number | undefined;
  max?: string | number | undefined;
}

export const Input: React.FC<InputProps> = ({
  id,
  name,
  label,
  value,
  onChange,
  style,
  className,
  type,
  limit,
  min,
  max,
  wFull,
  ...rest
}: any) => {
  const { theme } = useAppTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [isLabelLifted, setIsLabelLifted] = useState(false);


  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newText: string = event.target.value;

    if (limit) {
      if (newText.length <= limit) {
        onChange(newText);
      }
    } else {
      onChange(newText);
    }
  };

  useEffect(() => {
    const isLifted = isFocused || value?.length > 0 || true;

    setIsLabelLifted(isLifted);
  }, [isFocused, value]);

  return (
    <div className={`relative ${wFull ? 'w-full' : ''}`}>
      <label
        onClick={(e) => e.stopPropagation()}
        className={`absolute transition-all opacity-60 ${isLabelLifted ? 'top-2 text-xs' : 'top-5 text-md'
        }`}
      >
        {label}
      </label>

      <input
        id={id || label}
        name={name}
        type={type}
        value={value}
        onChange={handleTextChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{ ...style, color: theme?.TEXT }}
        min={min}
        max={max}
        className={`py-4 my-4 ${wFull ? 'w-full' : 'w-auto'} border-b border-gray-300 focus:border-blue-500 ${className || ''
        }`}
        {...rest}
      />

      {limit && (
        <div className="absolute bottom-0 right-0 -mb-2 text-sm text-gray-400">
          {value?.length || 0} / {limit}
        </div>
      )
      }
    </div>
  );
};

export default Input;
