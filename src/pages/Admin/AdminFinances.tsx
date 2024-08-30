import { useAppTheme } from 'hooks';
import React from 'react';

interface AdminFinancesProps {

}

export const AdminFinances: React.FC<AdminFinancesProps> = () => {
  const { name: themeName } = useAppTheme();

  return (
    <div className={`page ${themeName} text-center pt-12`} style={{}}>
      <div>Admin Finances</div>
      <br />
      <ul>
        <li>Revenue</li>
        <li>Payment providers</li>
      </ul>

    </div>
  );
};

export default AdminFinances;