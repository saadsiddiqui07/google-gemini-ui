import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#7cacf8',
    onPrimary: '#003355',
    primaryContainer: '#004a77',
    onPrimaryContainer: '#cce5ff',
    secondary: '#bbc7db',
    onSecondary: '#253140',
    secondaryContainer: '#3b4858',
    onSecondaryContainer: '#d7e3f7',
    tertiary: '#5c46e6',
    onTertiary: '#ffffff',
    tertiaryContainer: '#523f5f',
    onTertiaryContainer: '#f2daff',
    background: '#000000',
    surface: '#1E1F20',
    surfaceVariant: '#2C2C2C',
    onSurface: '#E3E3E3',
    onSurfaceVariant: '#C4C7C5',
    outline: '#8E918F',
    outlineVariant: '#444746',
  },
};

export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#0b57d0', // Google Blue
    onPrimary: '#ffffff',
    primaryContainer: '#d3e3fd',
    onPrimaryContainer: '#041e49',
    secondary: '#00639b',
    onSecondary: '#ffffff',
    secondaryContainer: '#c2e7ff',
    onSecondaryContainer: '#001d35',
    tertiary: '#6552FF', // Purple pill
    onTertiary: '#ffffff',
    tertiaryContainer: '#e8def8',
    onTertiaryContainer: '#1d192b',
    background: '#f0f4f9', // Light blue-ish grey background
    surface: '#ffffff', // White for cards/bottom sheet
    surfaceVariant: '#ffffff', // White for chips
    onSurface: '#1f1f1f',
    onSurfaceVariant: '#444746',
    outline: '#747775',
    outlineVariant: '#c4c7c5',
  },
};
