# Find Me Something to Cook - Mobile App

## Overview
**Find Me Something to Cook** is an Android application built with React Native and Expo Router. It helps users discover recipes based on the ingredients they have at home. The app aims to reduce food waste and make cooking more accessible and enjoyable.

## Features
- **Ingredient-Based Recipe Search**: Enter ingredients you have, and the app suggests recipes.
- **Recipe Details**: View step-by-step instructions, preparation time, and nutritional information.
- **Random Recipes**: Load random recipes for suggested recipes.
- **Recently Viewed**: Store history recipes that you already viewed.
- **Notebook**: Save your favorite recipes for quick access.
- **User Profiles**: Customize preferences and dietary restrictions.

## App Layout
- Screens
  - Home (index) — Search bar, random recipes, recently viewed.
  - Notebook — Displays saved recipes with delete modal.
  - Recipe — Dynamic route /recipe/[id] showing full recipe details.
  - Profile — User profile and entry point to settings.
  - Settings Section — Dynamic route `/settings/[section with toggles].
- Components
  - SearchBar — Handles user input and triggers API calls.
  - RecipeCard — Displays recipe image, title, and save/delete actions.
  - SearchResultsSection — Shows search results.
  - RandomRecipesSection — Fetches and displays random recipes.
  - RecentlyViewedSection — Shows previously opened recipes.
- Navigation
  - Expo Router with:
    - Tab Navigator (Home, Notebook, Profile)
    - Dynamic routes using global URL parameters (/recipe/[id], `/settings/[section])
    - Modal routes (`/delete-recipe)
    - Stack headers enabled per screen
## Theme
**Custom Theme Provider**
- theme (current theme object)
- isDark (boolean)
- toggleTheme() (switches mode)
## Theme Tokens
- Each theme defines:
  - background
  - header
  - primary
  - text
  - textDark
  - textMuted
  - icon
- React Native Paper uses:
  - onSurface → text color
  - primary → accent color
  - background → screen background
- React Navigation uses:
  - colors.text
  - colors.background
  - colors.primary
  - colors.card (header)

## Data Mapping (type.ts)
{
  id: string,
  title: string,
  image: string,
  saved: boolean
}

## API integration
- Search Endpoint: https://www.themealdb.com/api/json/v1/1/search.php?s={query}
- Random Recipe Endpoint: https://www.themealdb.com/api/json/v1/1/random.php
- Recipe Details Endpoint: https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}

## Third-Party Modules Used
**React Native Paper**
**React Navigation**
**Expo Vector Icons - MaterialCommunityIcons**
**Expo Router**

## User Flows
1. User opens the app → random recipes load.
2. User searches → results appear instantly.
3. User taps a recipe → navigates to RecipeScreen.
4. RecipeScreen fetches full details by ID.
5. The viewed recipe is added to Recently Viewed.
6. Users can save/unsave recipes anywhere.
7. Notebook tab shows saved recipes.
8. User can delete the saved recipe (not functional yet).
9. Profile tab shows settings to switch on/off.

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/find-me-something-to-cook-mobile.git
    ```
2. Navigate to the project directory:
    ```bash
    cd find-me-something-to-cook-mobile
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Run the app via Expo:
    ```bash
    npx expo start
    ```

## Technologies Used
- **Frontend**: React Native
- **Backend**: Node.js, Express.js
- **Database**: Async to store data
- **API Integration**: TheMealDB API for recipes

## License
No
