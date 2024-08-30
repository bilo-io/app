import React from 'react';

const brandColor = '#F48024';
export const StackOverflowIcon = ({
  color,
  size
}: {
    color?: string;
    size: number
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 58 58" width={size} height={size}>
    <circle r="24" fill={brandColor} cx="24" cy="24" />
    <path fill={color || '#FFF'} d="M9 28H12V42H9z" />
    <path fill={color || '#FFF'} d="M9 39H35V42H9z" />
    <path fill={color || '#FFF'} d="M32 28H35V42H32zM15 34H29V37H15z" />
    <path fill={color || '#FFF'} d="M14.88 29H28.880000000000003V32H14.88z" transform="rotate(6.142 21.88 30.5)" />
    <path fill={color || '#FFF'} d="M29.452 11.646H43.451V14.647H29.452z" transform="rotate(81.234 36.453 13.148)" />
    <path fill={color || '#FFF'} d="M23.576 13.578H37.574V16.579H23.576z" transform="rotate(60.79 30.576 15.079)" />
    <path fill={color || '#FFF'} d="M18.395 18.275H32.393V21.276H18.395z" transform="rotate(34.765 25.396 19.777)" />
    <path fill={color || '#FFF'} d="M15.977 23.499H29.976V26.5H15.977z" transform="rotate(19.785 22.978 25.003)" />
  </svg>
);
