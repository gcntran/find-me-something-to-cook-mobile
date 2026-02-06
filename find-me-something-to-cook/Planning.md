Part A: Ideation & Planning
Step 1:
- Theme: Recipe Viewer Application
- Purpose: To create a user-friendly application that allows users to browse, search, and view recipes.
- Target Audience: Home cooks, food enthusiasts, and anyone interested in cooking.
- Name: Find Me Something to Cook 
Step 2: 
- Platform: Android with React Native, using TheMealDB API
- Features:
  1. Search recipes by ingredients.
  2. Read full recipe.
  3. Add recipe to favorites.
  4. Randomize recipe.
- Single screen layout:
  1. Header -> StatusBar
  2. Search bar -> TextInput, SearchBar.tsx
  3. Place for the search results -> ScrollView.tsx, RecipeCard.tsx
  4. Random recipes -> ScrollView, RecipeCard.tsx
  5. A tab for favorite recipes (feature will be developed on next assignment)
  6. Dark mode switch -> Switch, ThemeSwitch.tsx
  7. A bottom tab to navigate between Home and Favorites/Notebook (for multi screen assignment)
- User flows:
  - Open the app -> Home screen -> random recipes appear -> users can select any recipe -> View recipe -> Add to Notebook (if users like the recipes)
  - Open the app -> Home screen -> random recipes appear -> users search ingredients for recipes 
  True -> View recipe -> Add to Notebook (if users like the recipes)
  False -> loading -> no recipe found -> search again

  For next assignment (multi-page screen)
  - Users navigate to the Notebook tab -> View recipe/Delete recipe from Notebook

Part B: Development

npx create-expo-app --template blank command

Git Version Control:
- Add Git Repo
- Upload to GitHub

Components:
  View (DONE)
  Text (DONE)
  Image (DONE)
  TextInput
  ScrollView (DONE)
  StyleSheet (DONE)
  Button (DONE)
  Switch (DONE)

Third-Party Modules:
Install and use at least one third-party module from either:
npm | Node Package Manager
Expo | Reference

Code Quality:
- let and const keywords
- Template literals for string interpolation
- Function expressions and arrow functions

Styling:
- Apply styles to create a visually appealing layout.
- Follow Material Design Guidelines (Android) where possible.


theme.ts