import { useState, useEffect, useCallback } from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import { useTheme } from "../theme/theme";
import SearchBar from '../components/SearchBar';
import { SearchResultsSection } from '../components/SearchResultsSection';
import { RandomRecipesSection } from '../components/RandomRecipesSection';
import { RecentlyViewedSection } from '../components/RecentlyViewedSection';
import { Recipe } from '../types';

// HomeScreen is the main screen of the app, I named it Search instead of Home based on the main purpose of the app, which is to search for recipes
const HomeScreen = () => {
    const { theme } = useTheme();

    // State variables for recipes
    const [searchResults, setSearchResults] = useState<Recipe[]>([]);
    const [randomRecipes, setRandomRecipes] = useState<Recipe[]>([]);
    const [recentlyViewed, setRecentlyViewed] = useState<Recipe[]>([]);
    const [refreshing, setRefreshing] = useState(false);

    // Search handler
    const handleSearch = async (query: string) => {
        if (!query.trim()) {
            setSearchResults([]);
            return;
        }

        // Fetch data from TheMealDB API
        // I asked AI for this
        try {
            const res = await fetch(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
            );
            const data = await res.json();

            if (!data.meals) {
                setSearchResults([]);
                return;
            }

            const mapped = data.meals.map((m: any) => ({
                id: m.idMeal,
                title: m.strMeal,
                image: m.strMealThumb,
                saved: false,
            }));

            setSearchResults(mapped);
        } catch (err) {
            console.log("Search error:", err);
        }
    };

    // Press handler for recipes (both search results and random recipes)
    const handlePressRecipe = (recipe: Recipe) => {
        setRecentlyViewed(prev => {
            const filtered = prev.filter(r => r.id !== recipe.id);
            return [{ ...recipe, viewedAt: Date.now() }, ...filtered].slice(0, 4);
        });
    };

    // Toggle save handler (for the save to Notebook feature)
    // The saved state should be synced across all sections
    // i.e., if a recipe is saved in search results, it should also appear as saved in random recipes and recently viewed
    const handleToggleSave = (recipe: Recipe) => {
        setSearchResults(prev =>
            prev.map(r => r.id === recipe.id ? { ...r, saved: !r.saved } : r)
        );
        setRandomRecipes(prev =>
            prev.map(r => r.id === recipe.id ? { ...r, saved: !r.saved } : r)
        );
        setRecentlyViewed(prev =>
            prev.map(r => r.id === recipe.id ? { ...r, saved: !r.saved } : r)
        );
    };

    // Refresh handler for random recipes
    const refreshRandom = useCallback(async () => {
        setRefreshing(true);
        try {
            const results = [];

            // TheMealDB returns ONE random meal per request
            for (let i = 0; i < 3; i++) {
                const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
                const data = await res.json();

                if (data.meals && data.meals[0]) {
                    const m = data.meals[0];
                    results.push({
                        id: m.idMeal,
                        title: m.strMeal,
                        image: m.strMealThumb,
                        saved: false,
                    });
                }
            }

            // Remove duplicates
            const unique = Array.from(new Map(results.map(r => [r.id, r])).values());
            setRandomRecipes(unique);

        } catch (err) {
            console.log("Random fetch error:", err);
        }

        setRefreshing(false);
    }, []);

    // Initial load of random recipes when open the app
    useEffect(() => {
        refreshRandom();
    }, []);

    // Add recently viewed clear handler
    const clearHistory = () => setRecentlyViewed([]);

    return (
        <ScrollView
            style={{
                flex: 1,
                backgroundColor: theme.colors.background,
                padding: 20,
            }}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={refreshRandom} />
            }
        >

            {/* Other components */}
            {/* Search Bar */}
            <SearchBar onSearch={handleSearch} />

            {/* Search Results */}
            <SearchResultsSection
                results={searchResults}
                onPressRecipe={handlePressRecipe}
                onToggleSave={handleToggleSave}
            />

            {/* Random Recipes */}
            <RandomRecipesSection
                randomRecipes={randomRecipes}
                refreshing={refreshing}
                onRefresh={refreshRandom}
                onPressRecipe={handlePressRecipe}
                onToggleSave={handleToggleSave}
            />
            {/* Recently Viewed */}
            <RecentlyViewedSection
                history={recentlyViewed}
                onPressRecipe={handlePressRecipe}
                onClearHistory={clearHistory}
            />
        </ScrollView>
    );
};

export default HomeScreen;



