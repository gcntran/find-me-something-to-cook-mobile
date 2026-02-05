import { useState, useCallback } from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import { useTheme } from "../theme/theme";
import { lightTheme, darkTheme } from "../theme/theme";
import { ThemeSwitch } from '../components/ThemeSwitch';
import SearchBar from '../components/SearchBar';

import { SearchResultsSection } from '../components/SearchResultsSection';
import { RandomRecipesSection } from '../components/RandomRecipesSection';
import { RecentlyViewedSection } from '../components/RecentlyViewedSection';

import { Recipe } from '../types';

const HomeScreen = () => {
    const { theme } = useTheme();


    // State variables for recipes
    const [searchResults, setSearchResults] = useState<Recipe[]>([]);
    const [randomRecipes, setRandomRecipes] = useState<Recipe[]>([]);
    const [recentlyViewed, setRecentlyViewed] = useState<Recipe[]>([]);
    const [refreshing, setRefreshing] = useState(false);

    // Search handler
    const handleSearch = (results: Recipe[]) => {
        setSearchResults(results);
    };

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
    const refreshRandom = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            const newRandom: Recipe[] = [
                {
                    id: Math.random(),
                    title: "Random Recipe 1",
                    image: "https://picsum.photos/300?1",
                },
                {
                    id: Math.random(),
                    title: "Random Recipe 2",
                    image: "https://picsum.photos/300?2",
                },
                {
                    id: Math.random(),
                    title: "Random Recipe 3",
                    image: "https://picsum.photos/300?3",
                },
            ];
            setRandomRecipes(newRandom);
            setRefreshing(false);
        }, 800);
    }, []);


    return (
        <View
            style={{
                flex: 1,
                backgroundColor: theme.colors.background,
                padding: 20,
            }}
        >

            {/* Other components */}
            {/* Search Bar */}
            <SearchBar />

            {/* Search Results */}

            {/* Random Recipes */}
            {/* Recently Viewed */}

        </View>
    );
};

export default HomeScreen;



