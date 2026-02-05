import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from './src/theme/theme';

import HomeScreen from './src/screens/HomeScreen';
import NotebookScreen from './src/screens/NotebookScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider>
    <NavigationContainer>
      <Tab.Navigator id="main.tabs">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Notebook" component={NotebookScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    </ThemeProvider>
  );
}

