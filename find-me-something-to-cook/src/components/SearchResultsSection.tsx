import { SearchResultsSectionProps } from '../types';
import { View, FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import { RecipeCard } from './RecipeCard';
import { useTheme } from '../theme/theme';

export function SearchResultsSection({
  results,
  onPressRecipe,
  onToggleSave,
}: SearchResultsSectionProps) {
  const { theme } = useTheme();

  if (!results || results.length === 0) return null;

  return (
    <View style={{ marginBottom: 24 }}>
      <Text
        variant="titleMedium"
        style={{
          marginBottom: 8,
          color: theme.colors.text,   // ← dark mode now works
        }}
      >
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
