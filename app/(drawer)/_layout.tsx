import { Drawer } from 'expo-router/drawer';
import { useTheme } from 'react-native-paper';

export default function DrawerLayout() {
  const theme = useTheme();
  return (
    <Drawer screenOptions={{ 
        headerShown: false,
        drawerStyle: { backgroundColor: theme.colors.surface },
        drawerActiveTintColor: theme.colors.primary,
        drawerInactiveTintColor: theme.colors.onSurface,
    }}>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: 'Gemini',
          title: 'Gemini',
        }}
      />
    </Drawer>
  );
}
