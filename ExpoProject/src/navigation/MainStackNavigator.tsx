import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import ContactDetailsScreen from "../screen/ContactDetailsScreen";
import type { RootStackParamList } from "../types/navigation";
import { useTheme } from "../theme/ThemeContext";

// Root stack controls app-level navigation: tabs + contact details page.
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function MainStackNavigator() {
  const { theme } = useTheme();

  return (
    // CampusTabs is the main entry; ContactDetails is pushed on top when needed.
    <Stack.Navigator
      initialRouteName="CampusTabs"
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.card },
        headerTintColor: theme.colors.text,
        headerTitleStyle: { fontWeight: "700" },
        contentStyle: { backgroundColor: theme.colors.background },
      }}
    >
      <Stack.Screen
        name="CampusTabs"
        component={BottomTabs}
        // Hide stack header here because each tab screen already has its own header.
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ContactDetails"
        component={ContactDetailsScreen}
        options={{ title: "Contact Details" }}
      />
    </Stack.Navigator>
  );
}
