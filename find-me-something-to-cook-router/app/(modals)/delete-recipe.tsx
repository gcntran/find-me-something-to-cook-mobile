import { View, Text, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSavedRecipes } from '../../src/context/SavedRecipesContext';

export default function DeleteRecipeModal() {
    const router = useRouter();
    const { id } = useLocalSearchParams();
    const { savedRecipes, setSavedRecipes } = useSavedRecipes();

    const recipeId = String(id);

    const handleDelete = () => {
        setSavedRecipes(savedRecipes.filter(r => String(r.id) !== recipeId));
        router.back();
    };

    return (
        <View style={{ flex: 1, padding: 30, justifyContent: 'center' }}>
            <Text style={{ fontSize: 22, marginBottom: 20 }}>
                Delete this recipe?
            </Text>

            <Button title="Delete" color="red" onPress={handleDelete} />
            <View style={{ height: 10 }} />
            <Button title="Cancel" onPress={() => router.back()} />
        </View>
    );
}
