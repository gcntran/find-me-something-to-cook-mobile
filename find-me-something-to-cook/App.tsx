import { useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider, MD3DarkTheme, MD3LightTheme } from 'react-native-paper';

import HomeScreen from './src/screens/HomeScreen';
import NotebookScreen from './src/screens/NotebookScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { ThemeSwitch } from './src/components/ThemeSwitch';
import { ThemeProvider } from './src/theme/theme';
import { navigationLightTheme, navigationDarkTheme } from './src/theme/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isDark, setIsDark] = useState(false);

  const paperTheme = isDark ? MD3DarkTheme : MD3LightTheme;
  const navTheme = isDark ? navigationDarkTheme : navigationLightTheme;

  return (
    <ThemeProvider>
      <PaperProvider theme={paperTheme}>
        <NavigationContainer theme={navTheme}>
          <Tab.Navigator
            id="main.tabs"
            screenOptions={{
              tabBarActiveTintColor: navTheme.colors.primary,
              tabBarInactiveTintColor: navTheme.colors.text,
              tabBarStyle: {
                backgroundColor: navTheme.colors.header,
                borderTopColor: navTheme.colors.header,
              },
              tabBarLabelStyle: {
                fontSize: 14,
                fontWeight: '600',
              },
            }}
          >
            <Tab.Screen
              name="Search"
              component={HomeScreen}
              options={{
                headerTitle: 'Search',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="magnify"
                    color={color}
                    size={24} />
                ),
                headerRight: () => (
                  <View style={{ marginRight: 16 }}>
                    <ThemeSwitch />
                  </View>
                ),
              }}
            />
            <Tab.Screen name="Notebook"
              component={NotebookScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="book"
                    color={color}
                    size={24} />
                ),
              }}
            />
            <Tab.Screen name="Profile"
              component={ProfileScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="account"
                    color={color}
                    size={24} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ThemeProvider>
  );
}
