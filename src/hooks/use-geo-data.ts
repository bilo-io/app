import { useEffect, useState } from 'react';
import axios from 'axios';

interface GeoData {
  lat: string;
  lon: string;
  country: string;
  region: string;
  city: string;
  [key: string]: any;
}

const useGeoData = () => {
  const [geoData, setGeoData] = useState<GeoData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGeoData = async (): Promise<void> => {
      try {
        const response = await axios.get('https://api.ipgeolocation.io/ipgeo', {
          params: {
            apiKey: 'e8d918865f8e465a8bfcba9fe67bc588',
          },
        });
        const data = response.data;
        setGeoData({
          city: data.city,
          country: data.country_name,
          district: data.district,
          languages: data.languages,
          lat: data.latitude,
          lon: data.longitude,
          region: data.state_prov,
          timezone: {
            name: data.time_zone?.name,
            offset: data.time_zone?.offset,
          }
        });
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGeoData();
  }, []);

  return { error, geoData, loading };
};

export default useGeoData;
