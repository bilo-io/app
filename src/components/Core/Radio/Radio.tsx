/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react';
import './Radio.scss';

function Radio ({ label }: any) {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <label className="container">{label}
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <span className="radiomark" />
    </label>

  );
}

export default Radio;
