import { FlatList, StyleSheet, Text, View } from "react-native";
import { notices } from "../data/campusData";
import { useTheme } from "../theme/ThemeContext";

export default function NoticeBoardScreen() {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Notice Board</Text>
      {/* FlatList renders notice cards from demo data */}
      <FlatList
        data={notices}
        keyExtractor={(notice) => notice.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item: notice }) => (
          <View style={styles.card}>
            {/* Title + tag are grouped in one row */}
            <View style={styles.headerRow}>
              <Text style={styles.title}>{notice.title}</Text>
              <Text style={styles.tag}>{notice.tag}</Text>
            </View>
            <Text style={styles.message}>{notice.message}</Text>
            <Text style={styles.date}>Posted: {notice.date}</Text>
          </View>
        )}
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
      borderColor: theme.colors.border,
      borderWidth: 1,
      borderRadius: 12,
      padding: 14,
    },
    headerRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 6,
      gap: 10,
    },
    title: {
      color: theme.colors.text,
      fontSize: 17,
      fontWeight: "700",
      flex: 1,
    },
    tag: {
      color: theme.colors.primary,
      fontSize: 12,
      fontWeight: "700",
    },
    message: {
      color: theme.colors.subText,
      fontSize: 14,
      lineHeight: 20,
      marginBottom: 8,
    },
    date: {
      color: theme.colors.success,
      fontSize: 13,
      fontWeight: "700",
    },
  });
}
