import { useColorScheme } from '@/hooks/use-color-scheme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import React, { useCallback, useRef, useState } from 'react';
import { Dimensions, Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Avatar, IconButton, Surface, Text, useTheme } from 'react-native-paper';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [inputText, setInputText] = useState('');
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const insets = useSafeAreaInsets();

  // Bottom Sheet Logic
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const handlePresentModalPress = useCallback(() => {
    Keyboard.dismiss(); 
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top', 'left', 'right']}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={{ flex: 1 }}
      >
        {/* Header */}
        <View style={styles.header}>
          <IconButton
            icon="menu"
            size={28}
            iconColor={theme.colors.onSurface}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          />
          <Text variant="titleLarge" style={[styles.headerTitle, { color: theme.colors.onSurface }]}>Gemini</Text>
          <Avatar.Text 
              size={36} 
              label="S" 
              style={{ backgroundColor: isDark ? '#7cacf8' : '#AF52DE' }} 
              labelStyle={{ color: '#000', fontWeight: 'bold' }}
          />
        </View>

        <ScrollView 
          contentContainerStyle={styles.content} 
          showsVerticalScrollIndicator={false} 
          keyboardShouldPersistTaps="handled"
          style={{ flex: 1 }}
        >
          <View style={styles.greetingContainer}>
            <Text variant="headlineLarge" style={[styles.greetingText, { color: theme.colors.onSurface }]}>
              I can help write, plan, research and more. What should we do?
            </Text>
          </View>

          {/* Action Chips */}
          <View style={styles.chipsContainer}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ overflow: 'visible' }}>
                  <View style={styles.chipsColumn}>
                      <ActionChip icon="image-outline" label="Create image" iconColor="#90caf9" />
                      <ActionChip icon="pencil-outline" label="Write anything" iconColor="#81d4fa" />
                      <ActionChip icon="school-outline" label="Help me learn" iconColor="#ffcc80" />
                      <ActionChip icon="star-four-points-outline" label="Boost my day" iconColor="#fff59d" />
                  </View>
              </ScrollView>
          </View>

        </ScrollView>

        {/* Bottom Input Area - Keyboard Aware */}
        <Surface style={[styles.bottomPanel, { backgroundColor: theme.colors.surface, paddingBottom: Math.max(16, insets.bottom) }]} elevation={0}>
          <TextInput
              style={[styles.textInput, { color: theme.colors.onSurface }]}
              placeholder="Ask Gemini"
              placeholderTextColor={theme.colors.onSurfaceVariant}
              value={inputText}
              onChangeText={setInputText}
              multiline
          />
          <View style={styles.bottomActions}>
              <View style={styles.leftActions}>
                  <IconButton icon="plus" size={24} iconColor={theme.colors.onSurface} style={styles.actionIcon} onPress={handlePresentModalPress} />
                  <IconButton icon="image-outline" size={24} iconColor={theme.colors.onSurface} style={styles.actionIcon} />
              </View>
              <View style={styles.rightActions}>
                   <Surface style={[styles.fastBadge, { borderColor: theme.colors.outline }]} elevation={0}>
                       <Text style={[styles.fastBadgeText, { color: theme.colors.onSurface }]}>Fast</Text>
                   </Surface>
                   <IconButton icon="microphone" size={24} iconColor={theme.colors.onSurface} style={styles.actionIcon} />
                   <IconButton icon="creation" size={24} iconColor={theme.colors.onSurface} style={styles.actionIcon} />
              </View>
          </View>
        </Surface>
      </KeyboardAvoidingView>

      {/* Bottom Sheet Modal */}
      <BottomSheetModal
      ref={bottomSheetModalRef}
        enableDynamicSizing={true}
        backgroundStyle={{ backgroundColor: theme.colors.elevation.level3 }}
        handleIndicatorStyle={{ backgroundColor: theme.colors.onSurfaceVariant }}
        backdropComponent={(props) => (
            <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} opacity={0.5} />
        )}
      >
        <BottomSheetView style={styles.bottomSheetContent}>
            <BottomSheetItem icon="snowman" label="Create images" />
            <BottomSheetItem icon="web" label="Deep Research" />
            <BottomSheetItem icon="plus-box-outline" label="Canvas" />
            <BottomSheetItem icon="school-outline" label="Guided Learning" />
        </BottomSheetView>
      </BottomSheetModal>
    </SafeAreaView>
  );
}

function BottomSheetItem({ icon, label }: { icon: any; label: string }) {
    const theme = useTheme();
    return (
        <TouchableOpacity style={styles.bottomSheetItem}>
            <View style={styles.bottomSheetIconWrapper}>
               <MaterialCommunityIcons name={icon} size={24} color={theme.colors.onSurface} />
            </View>
            <Text style={[styles.bottomSheetLabel, { color: theme.colors.onSurface }]}>{label}</Text>
        </TouchableOpacity>
    )
}

function ActionChip({ icon, label, iconColor }: { icon: any; label: string; iconColor: string }) {
    const theme = useTheme();
    return (
        <Surface style={[styles.chip, { backgroundColor: theme.colors.surface }]} elevation={1}>
             <View style={styles.chipContent}>
                 <View style={styles.iconWrapper}>
                    <MaterialCommunityIcons name={icon} size={20} color={iconColor} />
                 </View>
                 <Text style={[styles.chipLabel, {color: theme.colors.onSurface}]}>{label}</Text>
             </View>
        </Surface>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    position: 'relative',
  },
  headerTitle: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 22,
    zIndex: -1,
  },
  content: {
    padding: 20,
    paddingBottom: 20, // Reduced padding as panel is now separate
  },
  greetingContainer: {
    marginTop: 10,
    marginBottom: 40,
  },
  greetingText: {
    fontWeight: '400',
    lineHeight: 44,
  },
  suggestions: {
    gap: 12,
    marginBottom: 30,
  },
  card: {
    paddingVertical: 8,
    paddingHorizontal: 0,
    marginBottom: 4,
  },
  cardContent: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  pill: {
      width: 16,
      height: 40,
      borderRadius: 20,
      marginRight: 16,
  },
  cardText: {
      flex: 1,
      fontSize: 18,
      lineHeight: 26,
  },
  chipsContainer: {
      marginTop: 10,
  },
  chipsColumn: {
      flexDirection: 'column',
      gap: 12,
      width: width - 40, 
  },
  chip: {
      paddingVertical: 14,
      paddingHorizontal: 20,
      borderRadius: 50,
      alignSelf: 'flex-start',
  },
  chipContent: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  iconWrapper: {
      marginRight: 12,
  },
  chipLabel: {
      fontSize: 16,
      fontWeight: '500',
  },
  bottomPanel: {
    borderTopLeftRadius: 24, 
    borderTopRightRadius: 24,
    padding: 16,
    paddingBottom: 16, // Reduced padding bottom as SafeArea handles the rest or KeyboardAvoidingView
    // Shadow for light mode
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  textInput: {
      fontSize: 18,
      paddingHorizontal: 8,
      marginBottom: 16,
      minHeight: 24, 
  },
  bottomActions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  },
  leftActions: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  rightActions: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  actionIcon: {
      margin: 0,
      marginRight: 8,
  },
  fastBadge: {
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 16,
      borderWidth: 1,
      marginRight: 8,
      backgroundColor: 'transparent',
  },
  fastBadgeText: {
      fontSize: 12,
      fontWeight: '600',
  },
  bottomSheetContent: {
      padding: 16,
      paddingTop: 8,
      paddingBottom: 20
  },
  bottomSheetItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 16,
  },
  bottomSheetIconWrapper: {
      marginRight: 16,
  },
  bottomSheetLabel: {
      fontSize: 18,
      fontWeight: '400',
  }
});
