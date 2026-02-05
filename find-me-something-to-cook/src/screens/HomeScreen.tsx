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



