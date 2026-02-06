import { useState, useEffect, useCallback } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
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
        // I asked AI for this (Copilot)
        try {
            const res = await fetch(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
            );
            const data = await res.json();

            // TheMealDB returns an object with a "meals" array, or null if no results
            if (!data.meals) {
                setSearchResults([]);
                return;
            }

            // Map the API response to our Recipe type instead of using loops
            const mapped = data.meals.map((m: any) => ({
                id: m.idMeal,
                title: m.strMeal,
                image: m.strMealThumb,
                saved: false,
            }));

            // If there is already a recipe in random or recently viewed with the same ID, we should mark it as saved in search results too
            setSearchResults(mapped);
        } catch (err) {
            console.log("Search error:", err);
        }
    };

    // Press handler for recipes (both search results and random recipes)
    const handlePressRecipe = (recipe: Recipe) => {

        // When a recipe is pressed, we want to add it to the recently viewed section as planned
        setRecentlyViewed(prev => {
            const filtered = prev.filter(r => r.id !== recipe.id); // Use filter to remove the recipe if it already exists to avoid duplicates
            return [{ ...recipe, viewedAt: Date.now() }, ...filtered].slice(0, 4); // Add the new recipe at the beginning and keep only the latest 4 items as planned in the wireframe
        });
    };

    // Toggle save handler (for the save to Notebook feature)
    // The saved state should be synced across all sections
    // i.e., if a recipe is saved in search results, it should also appear as saved in random recipes and recently viewed
    const handleToggleSave = (recipe: Recipe) => {
        setSearchResults(prev =>
            prev.map(r => r.id === recipe.id ? { ...r, saved: !r.saved } : r) // Use map to update the saved state of the recipe in search results
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
            // Why is ONE?
            // By Copilot: Because the API endpoint for random meals is designed to return a single random meal each time it is called. To get multiple random meals, we need to call the endpoint multiple times. In this case, we are calling it 3 times to get 3 random meals for the random recipes section.
            // We use loops here because we need to make multiple API calls to get multiple random recipes, and we want to wait for each call to complete before making the next one to ensure we get the correct data. 
            // Using loops allows us to handle this sequentially and manage the asynchronous nature of the API calls effectively.
            // Why not map?
            // By Copilot: We could use map if we had an array of some sort to iterate over, but in this case, we just want to make a certain number of API calls (3) without having an existing array to map over. 
            // Using a simple for loop is more straightforward for this purpose since we just need to repeat the same action a specific number of times without needing to transform an existing array.
            for (let i = 0; i < 3; i++) {
                const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
                const data = await res.json();

                // TheMealDB returns an object with a "meals" array containing one meal, or null if there was an error (which is unlikely for random.php but we should still check)
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

        // Set refreshing to false after all API calls are done
        // This ensures that the loading indicator stops only after we have received all the random recipes, providing a better user experience by accurately reflecting the loading state.
        setRefreshing(false);
    }, []);

    // Initial load of random recipes when open the app
    useEffect(() => {
        refreshRandom();
    }, []);

    // Add recently viewed clear handler
    const clearHistory = () => setRecentlyViewed([]);

    // The main return of the HomeScreen component, which includes the search bar, search results section, random recipes section, and recently viewed section. 
    // The ScrollView allows for vertical scrolling of the content, and the RefreshControl is used to handle pull-to-refresh for the random recipes section.
    return (
        <ScrollView
            style={{
                flex: 1,
                backgroundColor: theme.colors.background,
                padding: 20,
            }}

            // The RefreshControl allows users to pull down to refresh the random recipes section, it helps user experience better and works well on any mobile app
            // Even though I already have a refresh button in the RandomRecipesSection, I think adding pull-to-refresh is a nice touch for better user experience, and it also demonstrates how to use RefreshControl in a ScrollView.
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



