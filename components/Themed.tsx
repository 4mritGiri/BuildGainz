/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */
import React from 'react';
import { Text as DefaultText, useColorScheme, View as DefaultView } from 'react-native';

import Colors from '@/constants/Colors';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}


// const scheme = useColorScheme();
export const ligntColors = {
  background: '#FFFFFF',
  icon: '#8E8E93',
  red: "#EF3939",
  sky:'#16D4D4',
  blue: '#3939EF',
  darkGray: '#8E8E93',
  lightGray: '#D1D1D6',
  light: '#EFEFF4',
};

export const darkColor = {
  blackground: '#000000',
  black: '#121212',
  darkGray: '#7A7A7A',
  lightGray: '#B3B3B3',
  white: '#E9E9E9',
  red: "#FF5252",
  grayDark: '#252525',
}