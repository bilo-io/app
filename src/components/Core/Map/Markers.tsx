import L from 'leaflet';

import locationMarkerIcon from '../Icon/CustomIcon/assets/icon-location.svg';

const iconPerson = new L.Icon({
    iconUrl: locationMarkerIcon,
    // iconRetinaUrl: require('../Icon/CustomIcon/assets/icon-location-2.svg'),
    // iconAnchor: null,
    // popupAnchor: null,
    // shadowUrl: null,
    // shadowSize: null,
    // shadowAnchor: null,
    iconSize: [35, 35], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    // iconSize: new L.Point(60, 75),
    // className: 'leaflet-div-icon'
});

const legalIcon = new L.Icon({
    iconUrl: 'https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/external-legal-business-and-finance-icongeek26-linear-colour-icongeek26.png',
    iconSize: [35, 35], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

const foodIcon = new L.Icon({
    iconUrl: 'https://img.icons8.com/doodle/48/apple.png',
    iconSize: [35, 35], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

const healthIcon = new L.Icon({
    iconUrl: 'https://img.icons8.com/doodle/48/heart-with-pulse.png',
    iconSize: [35, 35], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

const housingIcon = new L.Icon({
    iconUrl: 'https://img.icons8.com/plasticine/100/exterior.png',
    iconSize: [38, 45], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

export default {
    iconPerson,
    legalIcon,
    foodIcon,
    healthIcon,
    housingIcon
};