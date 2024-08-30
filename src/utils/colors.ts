import { IFeatureStatus } from '@vision/core';
import { ITheme } from 'styles/themes';

export interface ColorInput {
    hex?: string;
    rgba?: [number, number, number, number];
    hsv?: [number, number, number];
}

export interface Color {
    r: number;
    g: number;
    b: number;
    a?: number;
}

export const getColorForStatus = (status: IFeatureStatus, theme: ITheme): string => {
  switch (status) {
  case 'concept':
    return theme?.ERROR;
  case 'pre-alpha':
    return theme?.WARNING;
  case 'alpha':
    return theme?.TERTIARY;
  case 'beta':
    return theme?.SECONDARY;
  case 'ready':
    return theme?.PRIMARY;
  default: return theme?.TEXT;
  }
};

export function hexToRgb(hex: string): Color {
  hex = hex.replace(/^#/, '');

  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((char) => char + char)
      .join('');
  }

  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return { b, g, r };
}

export function calculateLuminance(color: Color): number {
  const { r, g, b } = color;
  const linearR = r / 255;
  const linearG = g / 255;
  const linearB = b / 255;

  const sRGB = [linearR, linearG, linearB].map((c) =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  );

  return (
    0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2] // WCAG luminance coefficients
  );
}

export function getReadableTextColor(
  backgroundColor: ColorInput,
  lightColor = '#FFFFFF',
  darkColor = '#000000',
  // threshold = 4.5,
): string {
  const backgroundRgb =
        backgroundColor.hex && hexToRgb(backgroundColor.hex);
  const backgroundLuminance =
        backgroundRgb && calculateLuminance(backgroundRgb);

  if (backgroundLuminance === undefined) {
    return darkColor; // Fallback to dark color
  }

  const lightLuminance = calculateLuminance(hexToRgb(lightColor));
  const darkLuminance = calculateLuminance(hexToRgb(darkColor));

  const contrastWithLight = Math.abs(
    (backgroundLuminance as number + 0.05) / (lightLuminance + 0.05)
  );

  const contrastWithDark = Math.abs(
    (backgroundLuminance as number + 0.05) / (darkLuminance + 0.05)
  );

  return contrastWithLight >= contrastWithDark ? lightColor : darkColor;
}

// // Example usage:
// const backgroundColor = { hex: '#1E90FF' };
// const textColor = getReadableTextColor(backgroundColor);
// console.log({ backgroundColor, readableTextColor: textColor }); // This will return 'white' or 'black'
