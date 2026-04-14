import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { contacts } from "../data/campusData";
import type { RootStackParamList } from "../types/navigation";
import { useState } from "react";
import { useTheme } from "../theme/ThemeContext";

export default function ContactsScreen() {
  // Local state used only for visual highlight of selected card.
  const [selectedContactId, setSelectedContactId] = useState<string | null>(
    null,
  );
  const { theme } = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Important Contacts</Text>
      {/* FlatList is efficient for rendering list data in React Native */}
      <FlatList
        data={contacts}
        keyExtractor={(contact) => contact.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item: contact }) => {
          // We keep the last tapped card highlighted so user sees current selection.
          const isSelected = selectedContactId === contact.id;

          return (
            <Pressable
              style={[styles.card, isSelected && styles.selectedCard]}
              onPress={() => {
                setSelectedContactId(contact.id);
                navigation.navigate("ContactDetails", {
                  contactId: contact.id,
                });
              }}
            >
              <Text style={styles.cardTitle}>{contact.name}</Text>
              <Text style={styles.cardRole}>{contact.role}</Text>
              <Text style={styles.cardAction}>Tap to view full details</Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
}

function createStyles(theme: ReturnType<typeof useTheme>["theme"]) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingHorizontal: 16,
      paddingVertical: 14,
    },
    heading: {
      fontSize: 24,
      fontWeight: "800",
      color: theme.colors.text,
      marginBottom: 12,
    },
    listContent: {
      gap: 10,
      paddingBottom: 20,
    },
    card: {
      backgroundColor: theme.colors.card,
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: 12,
      padding: 14,
    },
    selectedCard: {
      borderColor: theme.colors.primary,
      borderWidth: 2,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: "700",
      color: theme.colors.text,
      marginBottom: 4,
    },
    cardRole: {
      fontSize: 14,
      color: theme.colors.subText,
      marginBottom: 8,
    },
    cardAction: {
      fontSize: 13,
      fontWeight: "600",
      color: theme.colors.primary,
    },
  });
}
