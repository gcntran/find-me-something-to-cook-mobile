import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useTheme } from '../theme/theme';
import { Recipe } from '../types';
import { RecipeCard } from '../components/RecipeCard';

type NotebookProps = {
    savedRecipes: Recipe[];
    onPressRecipe: (recipe: Recipe) => void;
};

export default function NotebookScreen({ savedRecipes, onPressRecipe }: NotebookProps) {
    const { theme } = useTheme();

    return (
        <ScrollView
            style={[styles.container, { backgroundColor: theme.colors.background }]}
            contentContainerStyle={{ padding: 20 }}
        >
            <Text style={[styles.header, { color: theme.colors.textBlack }]}>
                Your Saved Recipes
            </Text>

            {savedRecipes.length === 0 && (
                <Text style={{ color: theme.colors.textMuted, marginTop: 10 }}>
                    You haven’t saved any recipes yet.
                </Text>
            )}

            {savedRecipes.map((recipe) => (
                <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    isSaved={true}
                    onPress={() => onPressRecipe(recipe)}
                    onToggleSave={() => {}}
                />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        fontSize: 28,
        marginBottom: 16,
    },
});
