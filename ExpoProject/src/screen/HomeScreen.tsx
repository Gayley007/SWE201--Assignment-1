import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { CampusTabParamList } from "../types/navigation";
import { useTheme } from "../theme/ThemeContext";

// This type connects the Home screen with typed tab navigation.
type HomeProps = BottomTabScreenProps<CampusTabParamList, "Home">;

// Home shortcuts are rendered as cards and navigate to tab routes.
const homeShortcuts = [
  { label: "Important Contacts", target: "Contacts" as const },
  { label: "Weekly Timetable", target: "Schedule" as const },
  { label: "Notice Board", target: "NoticeBoard" as const },
];

export default function HomeScreen({ navigation }: HomeProps) {
  const { theme, isDark, toggleTheme } = useTheme();
  const { width, height } = useWindowDimensions();
  const isWideScreen = width >= 600;
  const isLandscape = width > height;
  const styles = createStyles(theme, isWideScreen, isLandscape);

  return (
    // ScrollView prevents overflow on smaller devices.
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../../assets/icon.png")}
        style={styles.heroImage}
      />
      <Text style={styles.title}>Campus Companion</Text>
      <Text style={styles.subtitle}>
        A simple guide for new students to find support, schedules, and
        notice board updates.
      </Text>

      <Pressable style={styles.themeButton} onPress={toggleTheme}>
        <Text style={styles.themeButtonText}>
          {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </Text>
      </Pressable>

      {/* Render each shortcut card from the array above */}
      <View style={styles.quickAccessContainer}>
        {homeShortcuts.map((shortcut) => (
          <Pressable
            key={shortcut.target}
            style={styles.quickCard}
            onPress={() => navigation.navigate(shortcut.target)}
          >
            <Text style={styles.quickCardTitle}>{shortcut.label}</Text>
            <Text style={styles.quickCardAction}>Open</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

function createStyles(
  theme: ReturnType<typeof useTheme>["theme"],
  isWideScreen: boolean,
  isLandscape: boolean,
) {
  return StyleSheet.create({
    container: {
      flexGrow: 1,
      paddingHorizontal: isWideScreen ? 28 : 16,
      paddingVertical: isLandscape ? 14 : 20,
      backgroundColor: theme.colors.background,
      alignItems: "center",
    },
    heroImage: {
      width: isWideScreen ? 120 : 94,
      height: isWideScreen ? 120 : 94,
      borderRadius: 20,
      marginBottom: 12,
    },
    title: {
      fontSize: isWideScreen ? 30 : 24,
      fontWeight: "800",
      color: theme.colors.text,
      textAlign: "center",
      marginBottom: 10,
    },
    subtitle: {
      fontSize: isWideScreen ? 17 : 15,
      lineHeight: 22,
      textAlign: "center",
      color: theme.colors.subText,
      maxWidth: 760,
      marginBottom: 18,
    },
    themeButton: {
      backgroundColor: theme.colors.primary,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 16,
      marginBottom: 20,
    },
    themeButtonText: {
      color: "#ffffff",
      fontWeight: "700",
      fontSize: 14,
    },
    quickAccessContainer: {
      width: "100%",
      flexDirection: isWideScreen ? "row" : "column",
      gap: 12,
      justifyContent: "center",
      maxWidth: 900,
    },
    quickCard: {
      flex: 1,
      minHeight: isLandscape ? 92 : 108,
      backgroundColor: theme.colors.card,
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: 14,
      padding: 14,
      justifyContent: "space-between",
    },
    quickCardTitle: {
      color: theme.colors.text,
      fontSize: 16,
      fontWeight: "700",
    },
    quickCardAction: {
      color: theme.colors.primary,
      fontSize: 14,
      fontWeight: "600",
    },
  });
}
