import { useRouter } from 'expo-router';
import NotebookScreen from '../../src/screens/NotebookScreen';
import { useSavedRecipes } from '../../src/context/SavedRecipesContext';

export default function NotebookTab() {
  const router = useRouter();
  const { savedRecipes } = useSavedRecipes();

  return (
    <NotebookScreen
      savedRecipes={savedRecipes}
      onPressRecipe={(recipe) => router.push(`/recipe/${recipe.id}`)}
    />
  );
}
