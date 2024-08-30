import { useAppTheme } from 'hooks';
import React from 'react';
import Select, { ActionMeta, StylesConfig } from 'react-select';

interface DropdownProps {
  isMulti?: boolean;
  options: {
    value: string;
    label: any;
  }[];
  value: any;
  onChange: (newValue: any, actionMeta: ActionMeta<any>) => void;
  style?: React.CSSProperties;
  label?: string;
  placeholder?: string;
  id?: string,
}

export const Dropdown: React.FC<DropdownProps> = ({
  isMulti = false,
  options,
  value,
  onChange,
  label,
  placeholder = 'Select...',
  id,
  ...rest
}) => {
  const { theme } = useAppTheme();

  // const defaultStyle: React.CSSProperties = {
  //   color: theme?.ERROR,
  //   backgroundColor: theme?.BACKGROUND,
  // };

  const customStyles: StylesConfig<any, boolean> = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: theme?.BACKGROUND,
      border: state.isFocused ? `1px solid ${theme?.PRIMARY}` : '1px solid #ccc',
      boxShadow: state.isFocused ? `0 0 0 1px ${theme.PRIMARY}` : 'none',
      color: theme?.TEXT,
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: theme?.BACKGROUND,
      border: `1px solid ${theme?.TEXT_LIGHT}`,
      borderRadius: '4px',
      color: theme?.TEXT,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? theme?.SECONDARY : state.isFocused ? theme?.PRIMARY : theme?.BACKGROUND,
      color: state.isSelected ? theme?.PRIMARY : theme?.TEXT,
      cursor: 'pointer',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#88888888',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: theme?.TEXT,
    }),
  };

  return (
    <div className="my-2">
      {label && <div>{label}</div>}
      <Select
        id={id || label}
        options={options}
        value={value}
        isMulti={isMulti}
        closeMenuOnSelect={!isMulti}
        onChange={onChange}
        styles={customStyles}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default Dropdown;
