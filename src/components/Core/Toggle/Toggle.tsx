import React from 'react';
import './Toggle.scss';

export const Toggle: React.FC = ({ checked, onChange, isRound = true }: any) => (
    <label className="toggle">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className={`slider ${isRound ? 'round' : ''}`} />
    </label>
);

export default Toggle;
