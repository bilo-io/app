import React from 'react';

import './Checkbox.scss';
import Markdown from '../Markdown/Markdown';

const Checkbox: React.FC<{
  checked: boolean,
  label: string,
  onChange: (checked: boolean) => void,
  isDisabled?: boolean
}> = ({ checked, label, onChange, isDisabled }) => (
  <label className={`container flex flex-row items-center ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
    <div className="pt-1">
      <Markdown content={label} />
    </div>
    <input
      disabled={isDisabled}
      type="checkbox"
      checked={checked}
      onChange={
        (event: React.ChangeEvent<HTMLInputElement>): React.ChangeEventHandler<HTMLInputElement> | undefined | void => isDisabled ? undefined : onChange(event.target.checked)}
    />
    <span className="checkmark" />
  </label>
);

export default Checkbox;
