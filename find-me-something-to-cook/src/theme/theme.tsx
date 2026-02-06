// Themes  for the app
import { createContext, useContext, useState, ReactNode } from "react";
import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";
import {
    DefaultTheme as NavLight,
    DarkTheme as NavDark,
    Theme as NavigationTheme,
} from "@react-navigation/native";

// Custom theme type definition
// string for colors because we are using hex codes for all colors
export type Theme = {
    colors: {
        background: string;
        header: string;
        toast: string;

        primary: string;

        text: string,
        textBlack: string;
        textDark: string;
        textMuted: string;

        hover: string;
        border: string;
        icon: string;

        spinnerTrack: string;
        spinnerHighlight: string;
    };
};

// Light and dark theme definitions with specific color values for each theme
export const lightTheme: Theme = {
    colors: {
        background: "#F6F3EE",
        header: "#FFFFFF",
        toast: "#FFE565",

        primary: "#805436",

        text: "#805436",
        textBlack: "#000000",
        textDark: "#333333",
        textMuted: "#555555",

        hover: "#888888",
        border: "#000000",
        icon: "#C0392B",

        spinnerTrack: "#F3F3F3",
        spinnerHighlight: "#805436",
    },
};

export const darkTheme: Theme = {
    colors: {
        background: "#1E1B18",
        header: "#26221E",
        toast: "#A88C3A",

        primary: "#C08A5F",

        text: "#C08A5F",
        textBlack: "#F6F3EE",
        textDark: "#C9C3BC",
        textMuted: "#A79F96",

        hover: "#4A423A",
        border: "#3A342E",
        icon: "#E74C3C",

        spinnerTrack: "#3A342E",
        spinnerHighlight: "#C08A5F",
    },
};

// Paper theme (from react-native-paper)
export const paperLightTheme = {
    ...MD3LightTheme, 
    // Why is MD3? 
    // By Copilot: Because react-native-paper v5 uses Material Design 3 by default
    colors: {
        ...MD3LightTheme.colors,
        primary: lightTheme.colors.primary,
        background: lightTheme.colors.background,
        surface: lightTheme.colors.header,
        onPrimary: "#FFFFFF",
        onSurface: lightTheme.colors.textBlack,
    },
};

export const paperDarkTheme = {
    ...MD3DarkTheme,
    colors: {
        ...MD3DarkTheme.colors,
        primary: darkTheme.colors.primary,
        background: darkTheme.colors.background,
        surface: darkTheme.colors.header,
        onPrimary: "#000000",
        onSurface: darkTheme.colors.textBlack,
    },
};

// Extend navigation theme to include "header"
type ExtendedNavTheme = NavigationTheme & {
    colors: NavigationTheme["colors"] & {
        header: string;
    };
};

// Navigation Themes (use custom theme colors)
// Why do we need to extend the navigation theme?
// By Copilot: Because the default navigation theme does not include a "header" color, and we want to use our custom header color in the navigation components. By extending the theme, we can add the header color to the navigation theme and use it throughout our app.  
export const navigationLightTheme: ExtendedNavTheme = {
    ...NavLight,
    colors: {
        ...NavLight.colors,
        background: lightTheme.colors.background,
        card: lightTheme.colors.header,
        text: lightTheme.colors.textBlack,
        border: lightTheme.colors.border,
        primary: lightTheme.colors.primary,
        notification: lightTheme.colors.primary,
        header: lightTheme.colors.header,
    },
};

export const navigationDarkTheme: ExtendedNavTheme = {
    ...NavDark,
    colors: {
        ...NavDark.colors,
        background: darkTheme.colors.background,
        card: darkTheme.colors.header,
        text: darkTheme.colors.textBlack,
        border: darkTheme.colors.border,
        primary: darkTheme.colors.primary,
        notification: darkTheme.colors.primary,
        header: darkTheme.colors.header,
    },
};

// Define Theme Context to allows toggling between light and dark themes
// Why is types here? 
// By Copilot: Because we need to define the shape of the context value
// Why can't I put type in my type.ts file? 
// By Copilot again: Because the context is defined in the same file as the provider
type ThemeContextType = {
    theme: Theme;
    isDark: boolean;
    toggleTheme: () => void;
};

// Create context
// Why undefined?
// By Copilot: Because we want to allow the context to be undefined initially
// This helps to catch errors when the context is used outside of a provider
// Can you explain for me as I am 5? (Sorry Jesse, I really don't understand this part)
// Sure! Imagine you have a box (the context) that can hold a toy (the theme). When you first create the box, it's empty (undefined). Later, when you put a toy in it (provide the theme), you can take it out and play with it. But if you try to take a toy out of an empty box, you'll get confused (an error). So, we make sure to only take toys out of boxes that have toys in them!
// In other words, we want to make sure that when we use the theme context, it has a value and is not undefined. This helps us avoid errors in our app.
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ThemeProvider component to wrap the app and provide the theme context
// Why do we need a provider?
// By Copilot: Because the provider is what allows us to pass the theme value down through the component tree. Without it, we wouldn't be able to access the theme in our components.
// The provider is like a parent that gives its children (the components) access to the theme. It holds the state of whether the theme is dark or light and provides a function to toggle between them. When we wrap our app with the ThemeProvider, all of our components can access the theme context and use the current theme values.
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDark, setIsDark] = useState(false);
    const toggleTheme = () => setIsDark(prev => !prev); // Toggle between light and dark themes, prev for preventing potential issues with stale state when toggling multiple times quickly

    return (
        <ThemeContext.Provider
            value={{
                theme: isDark ? darkTheme : lightTheme,
                isDark,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    // What is ctx?
    // By Copilot: The ctx variable is the value of the theme context that we get from the useContext hook. It contains the current theme, whether it's dark or light, and the function to toggle the theme.
    // How do I know if I need to use it next time? Explain like I am 5 again
    // By Copilot: The useTheme hook is like a special key that lets you open the toy box and get the toy you want to play with. If you try to use the key when the box is empty (undefined), you'll get an error because there's no toy to play with. So, we check if the box has a toy before trying to use it, and if it doesn't, we throw an error to let you know that you need to be inside the toy box (the provider) to use the key (the theme).
    // That toy box example again!
    if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
    return ctx;
};
