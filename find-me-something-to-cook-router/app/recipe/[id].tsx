import { useLocalSearchParams } from 'expo-router';
import RecipeScreen from '../../src/screens/RecipeScreen';

export default function RecipeRoute() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return <RecipeScreen id={id} />;
}
