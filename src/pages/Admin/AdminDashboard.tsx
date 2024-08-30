import { useAppTheme } from 'hooks';
import React from 'react';

interface AdminDashboardProps {

}

export const AdminDashboard: React.FC<AdminDashboardProps> = () => {
  const { name: themeName } = useAppTheme();

  return (
    <div className={`page ${themeName} text-center pt-12`} style={{}}>
      <div>AdminDashboard</div>

    </div>
  );
};

export default AdminDashboard;