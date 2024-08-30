import React from 'react';
import './Spinner.scss';

interface SpinnerProps {
  color: string
}
export const Spinner: React.FC<SpinnerProps> = ({ color }) => {
  const loaderColorStyle = { backgroundColor: color };

  return <div className="spinner">
    <div className="double-bounce1" style={loaderColorStyle} />
    <div className="double-bounce2" style={loaderColorStyle} />
  </div>;
};

export default Spinner;
