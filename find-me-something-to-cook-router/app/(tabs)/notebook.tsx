import NotebookScreen from '../../src/screens/NotebookScreen';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function NotebookTab() {
  const router = useRouter();
  const { savedRecipes } = useLocalSearchParams();

  return (
    <NotebookScreen
      savedRecipes={savedRecipes}
      onPressRecipe={(recipe) => router.push(`/recipe/${recipe.id}`)}
    />
  );
}
