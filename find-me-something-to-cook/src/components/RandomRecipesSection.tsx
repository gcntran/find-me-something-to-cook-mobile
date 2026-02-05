import { FlatList, View, RefreshControl } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { RecipeCard } from './RecipeCard';
import { RandomRecipesSectionProps } from '../types';
import { useTheme } from '../theme/theme';

export function RandomRecipesSection({
    randomRecipes,
    refreshing,
    onRefresh,
    onPressRecipe,
    onToggleSave,
}: RandomRecipesSectionProps) {

    const { theme } = useTheme();

    return (
        <View style={{ marginBottom: 24 }}>
            <Text variant="titleMedium" style={{ marginBottom: 8 }}>
                Random Recipes
            </Text>

            <FlatList
                data={randomRecipes}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                renderItem={({ item }) => (
                    <RecipeCard
                        recipe={item}
                        onPress={() => onPressRecipe(item)}
                        onToggleSave={() => onToggleSave(item)}
                        isSaved={!!item.saved}
                    />
                )}
            />

            <Button
                mode="contained-tonal"
                compact
                onPress={onRefresh}
                style={{ 
                    width: 120,
                    marginTop: 12, 
                    alignSelf: 'center', 
                    backgroundColor: theme.colors.primary,
                    borderRadius: 20 }}
                textColor={theme.colors.background}
            >
                Refresh
            </Button>
        </View>
    );
}
