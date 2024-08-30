/* eslint-disable jsx-a11y/anchor-is-valid */
import { useAppTheme } from 'hooks';
import React from 'react';
import { Link } from 'react-router-dom';

import { AppLogo } from '../AppLogo';

export const Footer: React.FC = () => {
  const { theme } = useAppTheme();

  return (
    <div className="flex flex-col items-center">

      <div className="p-4 mt-4">
        <AppLogo size={36} />
      </div>

      <div className="w-full flex flex-row space-around py-4">
        <div className="flex flex-col items-end w-1/2">
          {/* <a href='#'>Privacy Policy</a> */}
          <Link to="/docs">
            Docs
          </Link>
          <Link to="/pricing">
            Pricing
          </Link>
          <Link to="/features">
            Features
          </Link>
        </div>

        <div className="mx-4 h-auto" style={{
          backgroundColor: theme?.TEXT,
          width: '2px',
        }}
        />

        <div className="flex flex-col items-start w-1/2">
          <Link to="/legal/eula">EULA</Link>
          <Link to="/legal/privacy-policy">Privacy Policy</Link>
          <Link to="/legal/tos">Terms of Service</Link>
          {/* <a href='#'>Terms of Service</a> */}
        </div>
      </div>

      <div className="p-4 mt-4">
        <Link to="/changelog">Changelog</Link>
        <div className="opacity-30 mt-0">Vision Studio © 2023</div>
      </div>
    </div>
  );
};