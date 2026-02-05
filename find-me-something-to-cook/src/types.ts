// src/types.ts

export type Recipe = {
    id: string | number;
    title: string;
    image: string;
    saved?: boolean;        // whether the user saved it to Notebook
    viewedAt?: number;      // timestamp for recently viewed sorting
  };
  
  // Props for a single recipe card
  export type RecipeCardProps = {
    recipe: Recipe;
    onPress: () => void;
    onToggleSave: () => void;
    isSaved: boolean;
  };
  
  // Props for search results section
  export type SearchResultsSectionProps = {
    results: Recipe[];
    onPressRecipe: (recipe: Recipe) => void;
    onToggleSave: (recipe: Recipe) => void;
  };
  
  // Props for random recipes section
  export type RandomRecipesSectionProps = {
    randomRecipes: Recipe[];
    refreshing: boolean;
    onRefresh: () => void;
    onPressRecipe: (recipe: Recipe) => void;
    onToggleSave: (recipe: Recipe) => void;
  };
  
  // Props for recently viewed section
  export type RecentlyViewedSectionProps = {
    history: Recipe[];
    onPressRecipe: (recipe: Recipe) => void;
    onClearHistory: () => void;
  };
  