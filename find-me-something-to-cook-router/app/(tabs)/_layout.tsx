import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SavedRecipesProvider } from '../../src/context/SavedRecipesContext';
import { useTheme } from '../../src/theme/theme';

export default function TabsLayout() {
  const { theme } = useTheme();

  return (
    <SavedRecipesProvider>
      <Tabs
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.colors.header,
          },
          headerTintColor: theme.colors.textBlack,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.textMuted,
          tabBarStyle: {
            backgroundColor: theme.colors.background,
            borderTopColor: theme.colors.header,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Search',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="magnify" size={24} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="notebook"
          options={{
            title: 'Notebook',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="book" size={24} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </SavedRecipesProvider>
  );
}
