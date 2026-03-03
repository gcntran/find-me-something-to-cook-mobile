import { useLocalSearchParams, Stack } from 'expo-router';
import RecipeScreen from '../../src/screens/RecipeScreen';

export default function RecipeRoute() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'Recipe',
        }}
      />
      <RecipeScreen id={id} />
    </>
  );
}
