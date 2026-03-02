import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';
import { SearchResultsSection } from '../../src/components/SearchResultsSection';
import { useTheme } from '../../src/theme/theme';
import { useEffect, useState } from 'react';
import { Recipe } from '../../src/types';

export default function SearchResultsRoute() {
    const { query } = useLocalSearchParams<{ query: string }>();
    const { theme } = useTheme();
    const [results, setResults] = useState<Recipe[]>([]);

    useEffect(() => {
        const fetchResults = async () => {
            if (!query) return;

            try {
                const res = await fetch(
                    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
                );
                const data = await res.json();

                if (!data.meals) {
                    setResults([]);
                    return;
                }

                const mapped = data.meals.map((m: any) => ({
                    id: m.idMeal,
                    title: m.strMeal,
                    image: m.strMealThumb,
                    saved: false,
                }));

                setResults(mapped);
            } catch (err) {
                console.log("Search results error:", err);
            }
        };

        fetchResults();
    }, [query]);

    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background, padding: 20 }}>
            <Text style={{ fontSize: 24, marginBottom: 16 }}>
                Results for: {query}
            </Text>

            <SearchResultsSection
                results={results}
                onPressRecipe={(recipe) => {
                    // Navigate to recipe detail
                    router.push(`/recipe/${recipe.id}`);
                }}
                onToggleSave={() => { }}
            />
        </View>
    );
}
