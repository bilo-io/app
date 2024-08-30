import { useAppTheme } from 'hooks';
import React from 'react';

interface AdminFeaturesProps {

}

export const AdminFeatures: React.FC<AdminFeaturesProps> = () => {
  const { name: themeName } = useAppTheme();
  return (
    <div className={`page ${themeName} text-center pt-12`} style={{}}>
      <div>AdminFeatures</div>
      <ul>
        <li>Custom feature enabling/disabling</li>
        <li>Including Login & SignUp</li>
        <li>Maintenance Message for each feature</li>
        <li>API: Custom</li>
      </ul>
    </div>
  );
};

export default AdminFeatures;