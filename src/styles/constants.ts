import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

export const SPACING_HORIZONTAL = {
  extra_small: scale(4),
  small: scale(8),
  medium: scale(16),
  large: scale(24),
  extra_large: scale(32),
};

export const SPACING_VERTICAL = {
  extra_small: verticalScale(4),
  small: verticalScale(8),
  medium: verticalScale(16),
  large: verticalScale(24),
  extra_large: verticalScale(32),
};

export const BORDER_RADIUS = {
  extra_small: scale(8),
  small: scale(16),
  medium: scale(24),
  large: scale(32),
};

export const FONT_SIZE = {
  small: moderateScale(12, 0.3),
  medium: moderateScale(16, 0.3),
  large: moderateScale(20, 0.3),
  extraLarge: moderateScale(24, 0.3),
};

export const FONT_WEIGHT = {
  regular: '400' as const,
  bold: '700' as const,
};

export const COLORS = {
  white: '#FFFFFF',
  yellow: '#ffff00',
  blue: '#0000ff',
  dark_blue: '#00008b',
  grey: '#dcdcdc',
  red: '#b22222'
};