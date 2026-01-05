import { Drawer } from 'expo-router/drawer';
import { useTheme } from 'react-native-paper';
import CustomDrawerContent from '@/components/CustomDrawerContent';

export default function DrawerLayout() {
  const theme = useTheme();
  return (
    <Drawer 
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ 
        headerShown: false,
        drawerStyle: { backgroundColor: theme.colors.surface, width: '85%' },
        drawerActiveTintColor: theme.colors.primary,
        drawerInactiveTintColor: theme.colors.onSurface,
        overlayColor: 'rgba(0,0,0,0.6)',
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
