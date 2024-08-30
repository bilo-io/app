import { useAppTheme } from 'hooks';
import React from 'react';

interface AdminMaintenanceProps {

}

export const AdminMaintenance: React.FC<AdminMaintenanceProps> = () => {
  const { name: themeName } = useAppTheme();

  return (
    <div className={`page ${themeName} text-center pt-12`} style={{}}>
      <div>Admin Maintenance</div>
      <br />
      <ul>
        <li>Web App version</li>
        <li>Mobile App version</li>
        <li>iOS</li>
        <li>Android</li>
        <li>API: Custom</li>
      </ul>

    </div>
  );
};

export default AdminMaintenance;