import { ThemeName } from 'hooks';
import React from 'react';
import { themes } from 'styles/themes';

interface ThemePaletteProps {
  size: number,
  themeName: ThemeName
}

export const ThemePalette: React.FC<ThemePaletteProps> = ({
  size = 24,
  themeName
}) => {

  const theme = themes[themeName as ThemeName];

  return (
    <div style={{ height: `${size}px`, width: `${size}px` }}>
      <svg width="100%" height="100%" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1024 512C1024 794.77 794.77 1024 512 1024C229.23 1024 0 794.77 0 512C0 229.23 229.23 0 512 0C794.77 0 1024 229.23 1024 512Z"
          fill={theme?.APP_BACKGROUND} />
        <path
          d="M996.5 540.001C996.5 257.231 767.27 28.0002 484.5 28.0002C304 48.0002 291 78.0002 177 127.5C177 410.27 396.5 457.001 686 467.001C968.77 467.001 948 879.001 996.5 540.001Z"
          fill={theme?.BACKGROUND} />
        <path
          d="M1023.5 500.82C1023.5 783.59 794.27 1012.82 511.5 1012.82C331 992.82 318 962.82 204 913.32C204 630.55 423.5 583.82 713 573.82C995.77 573.82 975 161.82 1023.5 500.82Z"
          fill={theme?.PANEL_BACKGROUND} />
        <path
          d="M930 511.5C930 741.494 743.112 928 512.5 928C281.888 928 95 741.494 95 511.5C95 281.506 281.888 95 512.5 95C743.112 95 930 281.506 930 511.5Z"
          stroke={theme?.SECONDARY} strokeWidth="30" />
        <path d="M688 424.319L597 373V684L688 631.805V424.319Z" fill={theme?.TERTIARY} />
        <path d="M688 424.319L597 373V684L688 631.805V424.319Z" stroke={theme?.TEXT} />
        <circle cx="512" cy="512" r="487" stroke={theme?.PRIMARY} strokeWidth="50" />
        <ellipse cx="512.5" cy="495.5" rx="237.5" ry="238.5" fill={theme?.PRIMARY} />
        <path
          d="M669 715C669 715 586.088 779.366 516.5 779.366C446.912 779.366 356 715 356 715C356 715 446.912 752.366 516.5 752.366C586.088 752.366 669 715 669 715Z"
          fill="#23AA55" />
        <path
          d="M242.742 524.249C242.742 524.249 228.456 420.262 263.25 359.997C298.044 299.732 399.242 253.183 399.242 253.183C399.242 253.183 321.426 313.232 286.633 373.497C251.839 433.762 242.742 524.249 242.742 524.249Z"
          fill="#FB8C00" />
        <path
          d="M619 247.183C619 247.183 716.199 286.804 750.992 347.069C785.786 407.334 775.5 518.249 775.5 518.249C775.5 518.249 762.404 420.834 727.61 360.569C692.816 300.304 619 247.183 619 247.183Z"
          fill="#C62828" />
        <circle cx="512.5" cy="495.5" r="106.5" fill="#5533AA" />
        <circle cx="512" cy="496" r="64" fill="black" />
      </svg>
    </div>
  );
};

export default ThemePalette;