import HomeScreen from '../../src/screens/HomeScreen';
import { useLocalSearchParams } from 'expo-router';

export default function HomeTab() {
  const { savedRecipes, setSavedRecipes } = useLocalSearchParams();

  return (
    <HomeScreen
      savedRecipes={savedRecipes}
      setSavedRecipes={setSavedRecipes}
    />
  );
}
