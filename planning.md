Part A: Ideation & Planning
----------------------------------------------------------
Step 1:
- Theme: Recipe Finder Application.
- Purpose: To create a user-friendly application that allows users to browse, search, and view recipes.
- Platform: Android.
- Target Audience: Home cooks, food enthusiasts, and anyone interested in cooking.
- Name: Find Me Something to Cook.
- Wireframe developed: Figma.
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
- Continue after assignment 1: For multiple pages
  1. A tab to navigate between Home and Favorites/Notebook, Profile -> (tabs)
  2. Add stack screens for viewing the recipe detail with parameters -> another component -> RecipeScreen
  3. Users navigate to the Notebook tab -> View recipe/Delete recipe from Notebook
  4. Add a Profile screen for setting with turn on/off -> switch
  5. Add parameters to some screens
----------------------------------------------------------
- User flows:
  - Open the app -> Home screen -> random recipes appear -> users can select any recipe -> View recipe -> Add to Notebook (if users like the recipes)
    - Viewed recipe -> recently viewed -> clear
  - Open the app -> Home screen -> random recipes appear -> users search ingredients for recipes -> press enter
    - View recipe -> Add to Notebook (if users like the recipes) -> view recipe screen -> delete recipe
----------------------------------------------------------
- Navigation:
  Ensure that app uses Expo Router to support navigation. (DONE)
  - Router - Expo Documentation
  All of the following Expo Router features must be used:
  - Tabs - Expo Documentation (minimum two tabs) (DONE - I have two)
  - Stack - Expo Documentation (minimum six unique screens) (DONE - recipe and settings screens)
  - Modals - Expo Documentation (minimum one modal screen) (DONE - Delete modal)
  - Using URL parameters - Expo Documentation (minimum three screens that support parameters) (DONE - I have some)

!important: copy and paste folder src from assignment 1 to link the tabs and stacks instead of starting from fresh to keep the same application. 

----------------------------------------------------------
Part B: Development
----------------------------------------------------------
Create expo
npx create-expo-app --template blank command

Git Version Control:
- Add Git Repo
- Upload to GitHub

Components checklist:
- View (DONE)
- Text (DONE)
- Image (the api images) (DONE)
- TextInput (for search bar) (DONE)
- ScrollView (scrolling the results and random recipes from api) (DONE)
- StyleSheet (DONE)
- Button (refresh button for the random recipes) (DONE)
- Switch (theme modes toggle) (DONE)

Third-Party Modules: (DONE)
  - React Native Paper
  - Expo Router

Code Quality: (DONE)
- let and const keywords (DONE)
- Template literals for string interpolation
    - Used string for the hex codes in themes (DONE)
- Function expressions and arrow functions (DONE)

Styling: (DONE)
- Apply styles to create a visually appealing layout.
- MaterialCommunityIcons

