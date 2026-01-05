import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Dimensions, TextInput, Keyboard } from 'react-native';
import { Text, Surface, IconButton, useTheme, Avatar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/use-color-scheme';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [inputText, setInputText] = useState('');
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top', 'left', 'right']}>
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
            labelStyle={{ color: '#fff', fontWeight: 'bold' }}
        />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        <View style={styles.greetingContainer}>
          <Text variant="headlineMedium" style={[styles.greetingText, { color: theme.colors.onSurface }]}>
            Hi Saad
          </Text>
          <Text variant="headlineLarge" style={[styles.greetingText, { color: theme.colors.onSurface }]}>
            Happy New Year! Let’s make it your best yet
          </Text>
        </View>

        {/* Suggestion Cards */}
        <View style={styles.suggestions}>
          <SuggestionCard 
            text="Make me a 2025 year-in-review worksheet" 
            pillColor={isDark ? "#6552FF" : "#AF52DE"} // Adjust pill color for light mode visibility if needed, or keep same
          />
           <SuggestionCard 
            text="Show me at a '20s New Year's celebration" 
            pillColor={isDark ? "#6552FF" : "#AF52DE"}
          />
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

      {/* Bottom Input Area - Resized and Redesigned */}
      <Surface style={[styles.bottomPanel, { backgroundColor: theme.colors.surface }]} elevation={0}>
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
                <IconButton icon="plus" size={24} iconColor={theme.colors.onSurface} style={styles.actionIcon} />
                <IconButton icon="image-outline" size={24} iconColor={theme.colors.onSurface} style={styles.actionIcon} />
            </View>
            <View style={styles.rightActions}>
                 {/* Assuming "Fast" is a small chip/button */}
                 {/* <Surface style={styles.fastBadge} elevation={0}><Text style={{fontSize: 12}}>Fast</Text></Surface> */}
                 <IconButton icon="microphone" size={24} iconColor={theme.colors.onSurface} style={styles.actionIcon} />
                 <IconButton icon="creation" size={24} iconColor={theme.colors.onSurface} style={styles.actionIcon} />
            </View>
        </View>
      </Surface>
    </SafeAreaView>
  );
}

function SuggestionCard({ text, pillColor }) {
    const theme = useTheme();
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';
    
    // In Light mode, we might want a subtle background if it's too plain, 
    // but the screenshot shows text on white/grey. 
    // Let's keep it simple: just text and pill.
    // Actually, looking at the light mode screenshot, there IS a faint background on the cards?
    // No, it looks like just text next to the pill.
    // Wait, looking closer at the cropped images, there is a very faint grey background for the suggestion item?
    // It's hard to tell. Let's stick to the current design but ensure text color is correct.
    
    return (
        <View style={styles.card}>
             <View style={styles.cardContent}>
                 <View style={[styles.pill, { backgroundColor: pillColor }]} />
                <Text style={[styles.cardText, {color: theme.colors.onSurface}]}>{text}</Text>
             </View>
        </View>
    )
}

function ActionChip({ icon, label, iconColor }) {
    const theme = useTheme();
    return (
        <Surface style={[styles.chip, { backgroundColor: theme.colors.surface }]} elevation={1}>
             <View style={styles.chipContent}>
                 <View style={styles.iconWrapper}>
                    {/* In light mode, icon colors might need to be darker or keep them colorful? 
                        Screenshot shows colorful icons on white chips. */}
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
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  headerTitle: {
    flex: 1,
    marginLeft: 12,
    fontWeight: '500',
    fontSize: 22,
    textAlign: 'center', // Center title as per screenshot? No, it's left aligned in the first dark screenshot, but centered in the light one?
    // Light screenshot: "Gemini" is centered. Dark screenshot: "Gemini" is left aligned next to menu?
    // Actually, in the light screenshot, "Gemini" is centered.
    // Let's center it.
  },
  content: {
    padding: 20,
    paddingBottom: 160, // More padding for the larger bottom panel
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 24, 
    borderTopRightRadius: 24,
    padding: 16,
    paddingBottom: 30, // For home indicator
    // Shadow for light mode to separate from background if needed
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
      // Ensure it takes up some space
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
      borderColor: '#e3e3e3',
      marginRight: 8,
      backgroundColor: 'transparent',
  },
  fastBadgeText: {
      fontSize: 12,
      fontWeight: '600',
  }
});
