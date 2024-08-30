import React, { useEffect, useState } from 'react';

import Typography from '../Typography/Typography';

interface ClockProps {
    displayCity?: boolean;
    selectedCity?: string;
}

const cities: { name: string; timezone: string }[] = [
  { name: 'New York', timezone: 'America/New_York' },
  { name: 'London', timezone: 'Europe/London' },
  { name: 'Tokyo', timezone: 'Asia/Tokyo' }
  // ... add more cities
];

export const Clock: React.FC<ClockProps> = ({ displayCity, selectedCity }) => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour: '2-digit', hour12: false, minute: '2-digit' }));
    };

    const intervalId = setInterval(updateTime, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const selectedCityInfo = selectedCity ? cities.find((city) => city.name === selectedCity) : null;

  return (
    <div className="m-2">
      <div>{displayCity && selectedCityInfo ? `City: ${selectedCityInfo.name}` : null}</div>
      <Typography weight="600">{currentTime}</Typography>
      {selectedCity && selectedCityInfo ? <div>Timezone: {selectedCityInfo.timezone}</div> : null}
      {displayCity && (
        <select>
          <option value="">Select a City</option>
          {cities.map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Clock;
