import { hexToRgb } from '../colors';

describe('utils/colors', () => {
  test('hexToRGB :=> #FF0000 (red)', () => {
    expect(hexToRgb('#FF0000')).toStrictEqual({ b: 0, g: 0, r: 255 });
  });

  test('hexToRGB :=> #00FF00 (green)', () => {
    expect(hexToRgb('#00FF00')).toStrictEqual({ b: 0, g: 255, r: 0 });
  });

  test('hexToRGB :=> #0000FF (blue)', () => {
    expect(hexToRgb('#0000FF')).toStrictEqual({ b: 255, g: 0, r: 0 });
  });

  test('hexToRGB :=> #00FFFF (cyan)', () => {
    expect(hexToRgb('#00FFFF')).toStrictEqual({ b: 255, g: 255, r: 0 });
  });

  test('hexToRGB :=> #FF00FF (magenta)', () => {
    expect(hexToRgb('#FF00FF')).toStrictEqual({ b: 255, g: 0, r: 255 });
  });

  test('hexToRGB :=> #FFFF00 (yellow)', () => {
    expect(hexToRgb('#FFFF00')).toStrictEqual({ b: 0, g: 255, r: 255 });
  });
});
