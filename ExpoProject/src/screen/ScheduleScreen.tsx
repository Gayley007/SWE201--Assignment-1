import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { weeklySchedule } from "../data/campusData";
import { useTheme } from "../theme/ThemeContext";

export default function ScheduleScreen() {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    // ScrollView allows vertical scrolling if schedule content becomes longer.
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Weekly Timetable</Text>
      {/* Outer loop: each day card */}
      {weeklySchedule.map((daySchedule) => (
        <View key={daySchedule.day} style={styles.dayCard}>
          <Text style={styles.dayTitle}>{daySchedule.day}</Text>
          {/* Inner loop: classes inside a day */}
          {daySchedule.classes.map((classItem, index) => (
            <View key={`${classItem.course}-${index}`} style={styles.classRow}>
              <View style={styles.timeBadge}>
                <Text style={styles.timeText}>{classItem.time}</Text>
              </View>
              <View style={styles.classInfo}>
                <Text style={styles.courseText}>{classItem.course}</Text>
                <Text style={styles.roomText}>Room: {classItem.room}</Text>
              </View>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

function createStyles(theme: ReturnType<typeof useTheme>["theme"]) {
  return StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: theme.colors.background,
      paddingHorizontal: 16,
      paddingVertical: 14,
      gap: 12,
    },
    heading: {
      fontSize: 24,
      fontWeight: "800",
      color: theme.colors.text,
    },
    dayCard: {
      backgroundColor: theme.colors.card,
      borderColor: theme.colors.border,
      borderWidth: 1,
      borderRadius: 12,
      padding: 12,
      // Platform.select keeps visual depth similar on Android and iOS.
      ...Platform.select({
        android: { elevation: 2 },
        ios: {
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 3,
          shadowOffset: { width: 0, height: 2 },
        },
      }),
    },
    dayTitle: {
      fontSize: 18,
      fontWeight: "800",
      color: theme.colors.primary,
      marginBottom: 10,
    },
    classRow: {
      flexDirection: "row",
      marginBottom: 8,
      gap: 10,
    },
    timeBadge: {
      minWidth: 104,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 8,
      backgroundColor: theme.colors.background,
      borderColor: theme.colors.border,
      borderWidth: 1,
      paddingHorizontal: 8,
      paddingVertical: 6,
    },
    timeText: {
      fontSize: 12,
      fontWeight: "700",
      color: theme.colors.subText,
      textAlign: "center",
    },
    classInfo: {
      flex: 1,
      justifyContent: "center",
    },
    courseText: {
      fontSize: 15,
      fontWeight: "700",
      color: theme.colors.text,
    },
    roomText: {
      fontSize: 13,
      color: theme.colors.subText,
      marginTop: 2,
    },
  });
}
