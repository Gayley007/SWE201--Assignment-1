import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screen/HomeScreen";
import ContactsScreen from "../screen/ContactsScreen";
import ScheduleScreen from "../screen/ScheduleScreen";
import NoticeBoardScreen from "../screen/NoticeBoardScreen";
import AntDesign from "@expo/vector-icons/AntDesign";
import type { CampusTabParamList } from "../types/navigation";
import { useTheme } from "../theme/ThemeContext";

// Generic type gives compile-time safety for tab names and params.
const Tab = createBottomTabNavigator<CampusTabParamList>();

export default function BottomTabs() {
  // Theme values are used to style tab/header colors consistently.
  const { theme } = useTheme();

  return (
    // Bottom tabs provide quick access to core app sections.
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.card },
        headerTintColor: theme.colors.text,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.subText,
        tabBarStyle: {
          backgroundColor: theme.colors.card,
          borderTopColor: theme.colors.border,
        },
      }}
    >
      <Tab.Screen
        options={{
          // Icon function receives current color/size from tab state.
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="phone" size={size} color={color} />
          ),
        }}
        name="Contacts"
        component={ContactsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="calendar" size={size} color={color} />
          ),
        }}
        name="Schedule"
        component={ScheduleScreen}
      />
      <Tab.Screen
        options={{
          title: "Notice Board",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="notification" size={size} color={color} />
          ),
        }}
        name="NoticeBoard"
        component={NoticeBoardScreen}
      />
    </Tab.Navigator>
  );
}
