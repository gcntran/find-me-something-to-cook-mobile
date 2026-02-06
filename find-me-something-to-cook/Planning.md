Part A: Ideation & Planning
----------------------------------------------------------
Step 1:
- Theme: Recipe Viewer Application
- Purpose: To create a user-friendly application that allows users to browse, search, and view recipes.
- Target Audience: Home cooks, food enthusiasts, and anyone interested in cooking.
- Name: Find Me Something to Cook 
----------------------------------------------------------
Step 2: 
- Platform: Android with React Native, using TheMealDB API
- Features:
  1. Search recipes by ingredients.
  2. Read full recipe.
  3. Add recipe to favorites.
  4. Randomize recipe.
- Single screen layout:
  1. Header -> StatusBar, screen titles
  2. Search bar -> TextInput, SearchBar.tsx
  3. Place for the search results -> ScrollView, SearchResultsSection.tsx
  4. Random recipes - Suggested Recipes -> ScrollView, RandomRecipesSection.tsx
  5. Recently viewed for history viewed recipes -> Grid of 4 recipes with a clear button, RecentlyViewedSection.tsx
  6. A tab for favorite recipes -> Notebook (feature will be developed on next assignment)
  7. Dark mode switch -> Switch, ThemeSwitch.tsx
  8. A bottom tab to navigate between Home and Favorites/Notebook (for multi screen assignment)
----------------------------------------------------------
- User flows:
  - Open the app -> Home screen -> random recipes appear -> users can select any recipe -> View recipe -> Add to Notebook (if users like the recipes)
    - Viewed recipe -> recently viewed -> clear
  - Open the app -> Home screen -> random recipes appear -> users search ingredients for recipes -> press enter
    - True -> View recipe -> Add to Notebook (if users like the recipes)
    - False -> loading -> no recipe found -> search again (Haven't done this)
- Wireframe developed with Figma
----------------------------------------------------------
For next assignment (multi-page screen)
  - Add a screen for viewing the recipe detail, another component -> RecipeScreen
  - Users navigate to the Notebook tab -> View recipe/Delete recipe from Notebook
  - Add a profile screen for setting, backup/restore and dietary information
  - Add MongoDB for database to store favorite recipes in Notebook

Part B: Development

Create expo
npx create-expo-app --template blank command

Git Version Control:
- Add Git Repo
- Upload to GitHub

Components checklist:
  View (DONE)
  Text (DONE)
  Image (the api images) (DONE)
  TextInput (for search bar) (DONE)
  ScrollView (scrolling the results and random recipes from api) (DONE)
  StyleSheet (DONE)
  Button (refresh button for the random recipes) (DONE)
  Switch (theme modes toggle) (DONE)

Third-Party Modules: (DONE)
  - React Native Paper
  - React Navigation for bottom tab

Code Quality: (DONE)
- let and const keywords (DONE)
- Template literals for string interpolation
    - Used string for the hex codes in themes (DONE)
- Function expressions and arrow functions (DONE)

Styling: (DONE)
- Apply styles to create a visually appealing layout.
- MaterialCommunityIcons
