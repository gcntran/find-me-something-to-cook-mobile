import { Stack } from 'expo-router';
import { ThemeProvider } from '../src/theme/theme';
import { SavedRecipesProvider } from '../src/context/SavedRecipesContext';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <SavedRecipesProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </SavedRecipesProvider>
    </ThemeProvider>
  );
}
