import { MD3DarkTheme as DefaultTheme } from 'react-native-paper';

export const paperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#7cacf8', // Light Blue for text/accents
    onPrimary: '#003355',
    primaryContainer: '#004a77',
    onPrimaryContainer: '#cce5ff',
    secondary: '#bbc7db',
    onSecondary: '#253140',
    secondaryContainer: '#3b4858',
    onSecondaryContainer: '#d7e3f7',
    tertiary: '#5c46e6', // The vibrant purple from the pill
    onTertiary: '#ffffff',
    tertiaryContainer: '#523f5f',
    onTertiaryContainer: '#f2daff',
    background: '#000000', // True Black
    surface: '#1E1F20', // Dark Gray for bottom bar
    surfaceVariant: '#2C2C2C', // Slightly lighter for chips
    onSurface: '#E3E3E3',
    onSurfaceVariant: '#C4C7C5',
    outline: '#8E918F',
    outlineVariant: '#444746',
  },
};
