// theme.ts
import { createContext, useContext, useState, ReactNode } from "react";
import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";
import {
    DefaultTheme as NavLight,
    DarkTheme as NavDark,
    Theme as NavigationTheme,
} from "@react-navigation/native";

// Custom App Theme

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

// Paper Themes (patched to use your custom colors)

export const paperLightTheme = {
    ...MD3LightTheme,
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

// Extend Navigation Theme to include "header"

type ExtendedNavTheme = NavigationTheme & {
    colors: NavigationTheme["colors"] & {
        header: string;
    };
};

// Navigation Themes (use your custom theme colors)

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

// Theme Context + Provider

type ThemeContextType = {
    theme: Theme;
    isDark: boolean;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => setIsDark(prev => !prev);

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
    if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
    return ctx;
};
