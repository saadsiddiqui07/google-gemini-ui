import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Searchbar, useTheme, TouchableRipple } from 'react-native-paper';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function CustomDrawerContent(props) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.surface }}>
       {/* Custom Header / Search Area */}
       <View style={{ paddingTop: insets.top + 10, paddingHorizontal: 16, paddingBottom: 10 }}>
           <Searchbar 
              placeholder="Search for chats" 
              onChangeText={setSearchQuery}
              value={searchQuery}
              style={{ backgroundColor: theme.colors.elevation.level2, height: 48, borderRadius: 24 }}
              inputStyle={{ minHeight: 0, alignSelf: 'center', marginLeft: -8 }}
              iconColor={theme.colors.onSurfaceVariant}
              placeholderTextColor={theme.colors.onSurfaceVariant}
           />
       </View>
       
       <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 10 }}>
          {/* New Chat Row */}
          <TouchableRipple onPress={() => {}} style={styles.menuItem}>
             <View style={styles.menuItemContent}>
                <View style={styles.leftContent}>
                   <MaterialCommunityIcons name="square-edit-outline" size={24} color={theme.colors.onSurface} />
                   <Text style={[styles.menuText, { color: theme.colors.onSurface }]}>New chat</Text>
                </View>
                <MaterialCommunityIcons name="message-text-outline" size={24} color={theme.colors.onSurfaceVariant} /> 
             </View>
          </TouchableRipple>

          {/* My Stuff */}
           <TouchableRipple onPress={() => {}} style={styles.menuItem}>
             <View style={styles.menuItemContent}>
                   <Text style={[styles.menuText, { color: theme.colors.onSurface, marginLeft: 0 }]}>My Stuff</Text>
                   <MaterialCommunityIcons name="chevron-right" size={24} color={theme.colors.onSurfaceVariant} /> 
             </View>
          </TouchableRipple>

           {/* Gems */}
           <TouchableRipple onPress={() => {}} style={styles.menuItem}>
             <View style={styles.menuItemContent}>
                   <Text style={[styles.menuText, { color: theme.colors.onSurface, marginLeft: 0 }]}>Gems</Text>
                   <MaterialCommunityIcons name="chevron-right" size={24} color={theme.colors.onSurfaceVariant} /> 
             </View>
          </TouchableRipple>

          {/* Error Message */}
          <View style={styles.errorContainer}>
             <MaterialCommunityIcons name="information-outline" size={20} color={theme.colors.onSurfaceVariant} style={{marginTop: 2}} />
             <Text style={[styles.errorText, { color: theme.colors.onSurfaceVariant }]}>
                Sorry, couldn't connect to the server. <Text style={{textDecorationLine: 'underline'}}>Please try again</Text>
             </Text>
          </View>

       </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    menuItem: {
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    menuItemContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leftContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    menuText: {
        fontSize: 16,
        fontWeight: '500',
    },
    errorContainer: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 24,
        gap: 12,
        marginTop: 10,
        paddingRight: 30,
    },
    errorText: {
        flex: 1,
        fontSize: 14,
        lineHeight: 20,
    }
});
