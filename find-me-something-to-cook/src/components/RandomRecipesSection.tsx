import { FlatList, View, RefreshControl } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { RecipeCard } from './RecipeCard';
import { RecipeCardProps } from '../types';
import { RandomRecipesSectionProps } from '../types';

export function RandomRecipesSection({
    randomRecipes,
    refreshing,
    onRefresh,
    onPressRecipe,
    onToggleSave,
}: RandomRecipesSectionProps) {

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
                mode="text"
                onPress={onRefresh}
                style={{ marginTop: 8, alignSelf: "flex-start" }}
            >
                Refresh
            </Button>
        </View>
    );
}
