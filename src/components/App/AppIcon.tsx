import React from 'react';

interface AppIconProps {
  size: number,
  color?: string
}

export const AppIcon: React.FC<AppIconProps> = ({
  size = 12,
  color = '#0067FF',
}) => (
  <svg height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.24528 28H26.9686L46.2238 67.3705L34.8176 55.8386L23.7484 32.8456H12.0755L64.805 84.9359V91.5986L0 28H7.24528Z"
      fill={color} />
    <path
      d="M120.956 28H101.434L89.3585 53.2375L94.7924 47.5843L103.245 36.8836L106.465 32.8456H116.327L64.805 84.9359V91.5986L75.2704 81.0998L64.805 102.097L65.5094 100.684L57.3585 90.791L50.5157 84.1283L64.805 113L85.7358 70.601L128 28H120.956Z"
      fill={color} />
  </svg>
);