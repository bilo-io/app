import { useAppTheme } from 'hooks';
import React from 'react';

interface AdminLegalProps {

}

export const AdminLegal: React.FC<AdminLegalProps> = () => {
  const { name: themeName } = useAppTheme();

  return (
    <div className={`page ${themeName} text-center pt-12`} style={{}}>
      <div>Admin Legal</div>
      <br />
      <ul />

    </div>
  );
};

export default AdminLegal;