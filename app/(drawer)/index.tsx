import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Dimensions, TextInput, Keyboard } from 'react-native';
import { Text, Surface, IconButton, useTheme, Avatar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [inputText, setInputText] = useState('');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
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
            style={{ backgroundColor: '#7cacf8' }} // Using the light blue/purple from image for Avatar
            labelStyle={{ color: '#000', fontWeight: 'bold' }}
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
            pillColor="#6552FF"
          />
           <SuggestionCard 
            text="Show me at a '20s New Year's celebration" 
            pillColor="#6552FF"
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

      {/* Bottom Input Area */}
      <View style={[styles.bottomBar, { backgroundColor: theme.colors.surface }]}>
        <View style={styles.inputContainer}>
            <IconButton icon="plus" size={26} iconColor={theme.colors.onSurface} style={styles.plusIcon} />
            
            <TextInput
                style={[styles.textInput, { color: theme.colors.onSurface }]}
                placeholder="Ask Gemini"
                placeholderTextColor={theme.colors.onSurfaceVariant}
                value={inputText}
                onChangeText={setInputText}
            />

             <View style={styles.rightIcons}>
                 <IconButton icon="microphone" size={22} iconColor={theme.colors.onSurface} />
                 <IconButton icon="creation" size={22} iconColor={theme.colors.onSurface} />
             </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function SuggestionCard({ text, pillColor }) {
    const theme = useTheme();
    // Using transparent background to match the "text on black" look from the image
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
        <Surface style={[styles.chip, { backgroundColor: theme.colors.surfaceVariant }]} elevation={0}>
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
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  headerTitle: {
    flex: 1,
    marginLeft: 12,
    fontWeight: '500',
    fontSize: 22,
  },
  content: {
    padding: 20,
    paddingBottom: 100, 
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
    borderRadius: 16,
    paddingVertical: 8, // Reduced padding as it's not a card with background anymore
    paddingHorizontal: 0,
    marginBottom: 4,
  },
  cardContent: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  pill: {
      width: 16, // Wider pill
      height: 40, // Shorter height relative to text
      borderRadius: 20, // Fully rounded
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
  bottomBar: {
    padding: 16,
    paddingBottom: 24,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 0, 
    borderTopRightRadius: 0,
  },
  inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#1E1F20', // Input background
      borderRadius: 32,
      paddingHorizontal: 6,
      paddingVertical: 6,
      height: 64,
  },
  plusIcon: {
      backgroundColor: '#2C2C2C',
      marginRight: 8,
  },
  textInput: {
      flex: 1,
      fontSize: 18,
      height: '100%',
      paddingHorizontal: 8,
  },
  rightIcons: {
      flexDirection: 'row',
  }
});
