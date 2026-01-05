import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { PaperProvider, adaptNavigationTheme } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { paperTheme } from '@/constants/paperTheme';

const { DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDarkTheme = {
  ...DarkTheme,
  ...paperTheme,
  colors: {
    ...DarkTheme.colors,
    ...paperTheme.colors,
  },
};

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider theme={CombinedDarkTheme}>
        <ThemeProvider value={CombinedDarkTheme}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(drawer)" />
            <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
          </Stack>
          <StatusBar style="light" />
        </ThemeProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}
