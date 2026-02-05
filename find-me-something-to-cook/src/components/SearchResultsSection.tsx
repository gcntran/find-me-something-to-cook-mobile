import { SearchResultsSectionProps } from '../types';
import { View, FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import { RecipeCard } from './RecipeCard';

export function SearchResultsSection({
    results,
    onPressRecipe,
    onToggleSave,
}: SearchResultsSectionProps) {
    if (!results || results.length === 0) return null;

    return (
        <View style={{ marginBottom: 24 }}>
            <Text variant="titleMedium" style={{ marginBottom: 8 }}>
                Results
            </Text>

            <FlatList
                data={results}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <RecipeCard
                        recipe={item}
                        onPress={() => onPressRecipe(item)}
                        onToggleSave={() => onToggleSave(item)}
                        isSaved={!!item.saved}
                    />
                )}
            />
        </View>
    );
}