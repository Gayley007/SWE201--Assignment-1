import { ScrollView, StyleSheet, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { contacts } from "../data/campusData";
import type { RootStackParamList } from "../types/navigation";
import { useTheme } from "../theme/ThemeContext";

// Route param type for this screen: route.params.contactId
type Props = NativeStackScreenProps<RootStackParamList, "ContactDetails">;

export default function ContactDetailsScreen({ route }: Props) {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  // Find the selected contact using id passed from Contacts screen.
  const contact = contacts.find((item) => item.id === route.params.contactId);

  // Safety fallback in case id is invalid or data changes unexpectedly.
  if (!contact) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Contact not found.</Text>
      </View>
    );
  }

  return (
    // ScrollView keeps layout safe if content grows later.
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.name}>{contact.name}</Text>
      <Text style={styles.role}>{contact.role}</Text>

      <View style={styles.infoCard}>
        <Text style={styles.label}>Phone</Text>
        <Text style={styles.value}>{contact.phone}</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{contact.email}</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.label}>Office</Text>
        <Text style={styles.value}>{contact.office}</Text>
      </View>
    </ScrollView>
  );
}

function createStyles(theme: ReturnType<typeof useTheme>["theme"]) {
  return StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: theme.colors.background,
      paddingHorizontal: 16,
      paddingVertical: 18,
      gap: 10,
    },
    emptyContainer: {
      flex: 1,
      backgroundColor: theme.colors.background,
      justifyContent: "center",
      alignItems: "center",
    },
    emptyText: {
      color: theme.colors.subText,
      fontSize: 16,
    },
    name: {
      color: theme.colors.text,
      fontSize: 28,
      fontWeight: "800",
    },
    role: {
      color: theme.colors.subText,
      fontSize: 16,
      marginBottom: 8,
    },
    infoCard: {
      backgroundColor: theme.colors.card,
      borderColor: theme.colors.border,
      borderWidth: 1,
      borderRadius: 12,
      padding: 14,
    },
    label: {
      color: theme.colors.subText,
      fontWeight: "600",
      marginBottom: 4,
      fontSize: 13,
    },
    value: {
      color: theme.colors.text,
      fontWeight: "700",
      fontSize: 16,
    },
  });
}
