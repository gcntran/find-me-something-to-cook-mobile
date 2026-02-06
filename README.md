# Find Me Something to Cook - Mobile App

## Overview
**Find Me Something to Cook** is a mobile application designed to help users discover recipes based on the ingredients they have at home. The app aims to reduce food waste and make cooking more accessible and enjoyable.

## Features
- **Ingredient-Based Recipe Search**: Enter ingredients you have, and the app suggests recipes.
- **Recipe Details**: View step-by-step instructions, preparation time, and nutritional information.
- **Random Recipes**: Load random recipes for suggested recipes.
- **Recently Viewed**: Store history recipes that you already viewed.
- **Notebook**: Save your favorite recipes for quick access.
- **User Profiles**: Customize preferences and dietary restrictions.
- **Light/Dark mode**: Can switch between dark and light mode.

## App Layout
**Screens**
- HomeScreen: Search, random recipes, recently viewed.
- NotebookScreen: Saved recipes.
- RecipeScreen: Full recipe details fetched by ID.
- ProfileScreen: For settings, backup/restore and dietary information (in future development).
**Components**
- SearchBar: Handles user input and triggers API search.
- RecipeCard: Displays image, title, and save button.
- SearchResultsSection: Shows search results.
- RandomRecipesSection: Shows random recipes with refresh.
- RecentlyViewedSection: Shows last viewed items.
- ThemeSwitch: Toggles light/dark mode.
**Navigation**
- Bottom Tab Navigator for Home + Notebook.

## Theme
**Custom Theme Provider**
- theme (current theme object)
- isDark (boolean)
- toggleTheme() (switches mode)
**Theme Tokens**
Each theme defines:
- background
- header
- primary
- text
- textDark
- textMuted
- icon
React Native Paper uses:
- onSurface → text color
- primary → accent color
- background → screen background
React Navigation uses:
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

## User Flows
1. User opens the app → random recipes load.
2. User searches → results appear instantly.
3. User taps a recipe → navigates to RecipeScreen.
4. RecipeScreen fetches full details by ID.
5. Viewed recipe is added to Recently Viewed.
6. User can save/unsave recipes anywhere.
7. Notebook tab shows saved recipes.
8. ThemeSwitch toggles light/dark mode globally.
9. Profile tab shows settings and dietary information.

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
4. Run the app via expo:
    ```bash
    npx expo start
    ```

## Technologies Used
- **Frontend**: React Native
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (in the future development)
- **API Integration**: TheMealDB API for recipes

## Contributing
1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add your message"
    ```
4. Push to the branch:
    ```bash
    git push origin feature/your-feature-name
    ```
5. Open a pull request.

## License
No
