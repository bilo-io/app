import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
// eslint-disable-next-line import/no-extraneous-dependencies
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import FontAwesome from 'react-fontawesome';
import markers from './Markers';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// let DefaultIcon = L.icon({
//     iconUrl: markerIcon,
//     shadowUrl: markerShadow,
// });

// L.Marker.prototype.options.icon = DefaultIcon;

interface MapProps {
    theme: 'light' | 'dark';
    positions?: { lat: number, lng: number }[];
}

const customIcon = L.icon({
    iconUrl: 'path/to/your/custom-icon.png', // Replace with your icon path
    iconSize: [32, 32], // size of the icon
    iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -32], // point from which the popup should open relative to the iconAnchor
});

export const Map: React.FC<MapProps> = ({ theme = 'light', positions }) => {

    const { position } = useMap();

    const mapboxToken = 'pk.eyJ1IjoiYmlsb2x3YWJvbmEiLCJhIjoiY20wOW9nYTQ3MXBqMjJrcjBxbDZjb3dtMCJ9.OOpH-zvb91nI2dsq4_I01w';

    const isDark = theme?.toLowerCase()?.includes('dark');
    console.log({ isDark });
    const mapStyle = isDark
        ? `https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${mapboxToken}`
        : `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${mapboxToken}`;

    return (
        <div className="relative w-full" style={{
            height: 'calc(100vh - 3rem)'
        }} >
            <MapContainer
                center={position}
                zoom={2.5}
                scrollWheelZoom
                style={{ minHeight: '100vh', minWidth: '100vw' }}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url={mapStyle}
                />
                {/* <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
             */}
                {positions?.map((position, index) => (
                    // @ts-ignore
                    <Marker
                        key={index}
                        position={position}
                        icon={markers.iconPerson}>
                        <Popup>
                            Latitude: {position.lat}, Longitude: {position.lng}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default Map;

export const useMap = () => {
    const [position, setPosition] = useState({
        lat: 47.21725,
        lng: -1.55336,
    });
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                setPosition({ lat: coords.latitude, lng: coords.longitude });
            },
            (blocked) => {
                if (blocked) {
                    const fetch = async () => {
                        try {
                            const { data } = await axios.get('https://ipapi.co/json');
                            setPosition({ lat: data.latitude, lng: data.longitude });
                        } catch (err) {
                            console.error(err);
                        }
                    };
                    fetch();
                }
            }
        );
    }, []);
    return { position };
};