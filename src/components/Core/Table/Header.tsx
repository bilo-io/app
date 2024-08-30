import React from 'react';
// import arrowUp from './icon-arrow-up.svg'
// import arrowDown from './icon-arrow-down.svg'
import FontAwesome from 'react-fontawesome';

export const Header = ({
  label,
  value,
  order,
  orderByColumn,
  onToggle
}: {
    label: string;
    value: string;
    order: string;
    orderByColumn: string;
    onToggle?: Function;
}) => {
  const isActive = value === orderByColumn;

  return (
    <div className="hollow focus:outline-none" onClick={() => onToggle?.(value)} style={{ textAlign: 'left' }}>
      <div className="flex flex-row">
        <div>{label}</div>
        {isActive && (
          <div>
            <FontAwesome name={order === 'asc' ? 'chevron-up' : 'chevron-down'} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
