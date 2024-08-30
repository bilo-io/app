import { useAppTheme } from 'hooks';
import React from 'react';

interface AdminMarketingProps {

}

export const AdminMarketing: React.FC<AdminMarketingProps> = () => {
  const { name: themeName } = useAppTheme();

  return (
    <div className={`page ${themeName} text-center pt-12`} style={{}}>
      <div>Admin Messaging</div>
      <br />
      <ul>
        <li>Notifications</li>
        <li>News Banners</li>
        <li>API: Custom</li>
      </ul>

    </div>
  );
};

export default AdminMarketing;