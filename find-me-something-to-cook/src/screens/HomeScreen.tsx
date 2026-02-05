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

    const handleSearch = (results: Recipe[]) => {
        setSearchResults(results);
    };

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



