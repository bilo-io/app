import { useAppTheme } from 'hooks';
import React from 'react';

interface AdminMarketingProps {

}

export const AdminMarketing: React.FC<AdminMarketingProps> = () => {
  const { name: themeName } = useAppTheme();

  return (
    <div className={`page ${themeName} text-center pt-12`} style={{}}>
      <div>Admin Marketing</div>
      <br />
      <ul>
        <li>Blog</li>
        <li>Social Media</li>
        <li>YouTube</li>
        <li>Ad Networks</li>
        <li>API: ???</li>
      </ul>

    </div>
  );
};

export default AdminMarketing;