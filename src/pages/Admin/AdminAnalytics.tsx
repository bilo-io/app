import { useAppTheme } from 'hooks';
import React from 'react';

interface AdminAnalyticsProps {

}

export const AdminAnalytics: React.FC<AdminAnalyticsProps> = () => {
  const { name: themeName } = useAppTheme();

  return (
    <div className={`page ${themeName} text-center pt-12`} style={{}}>
      <div>Admin Analytics</div>
    </div>
  );
};

export default AdminAnalytics;