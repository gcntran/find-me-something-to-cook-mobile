import { useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider, MD3DarkTheme, MD3LightTheme } from 'react-native-paper';

import HomeScreen from './src/screens/HomeScreen';
import NotebookScreen from './src/screens/NotebookScreen';
import { ThemeSwitch } from './src/components/ThemeSwitch';
import { ThemeProvider } from './src/theme/theme';
import { navigationLightTheme, navigationDarkTheme } from './src/theme/theme';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isDark, setIsDark] = useState(false);

  const paperTheme = isDark ? MD3DarkTheme : MD3LightTheme;
  const navTheme = isDark ? navigationDarkTheme : navigationLightTheme;

  return (
    <ThemeProvider>
    <PaperProvider theme={paperTheme}>
      <NavigationContainer theme={navTheme}>
        <Tab.Navigator id="main.tabs">
          <Tab.Screen
            name="Search"
            component={HomeScreen}
            options={{
              headerTitle: 'Search',
              tabBarIcon: ({ color, size }) => (
                <Feather name="search" color={color} size={size} />
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
              <Feather name="book" color={color} size={size} />
              ),
          }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
    </ThemeProvider>
  );
}
