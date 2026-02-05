// theme.ts
import { createContext, useContext, useState, ReactNode } from "react";

export type Theme = {
    colors: {
        background: string;
        header: string;
        toast: string;

        primary: string;
        primaryLight: string;

        textBlack: string;
        textDark: string;
        textMuted: string;

        hover: string;
        border: string;

        spinnerTrack: string;
        spinnerHighlight: string;
    };
};

// Light mode
export const lightTheme: Theme = {
    colors: {
        background: "#F6F3EE",
        header: "#FFFFFF",
        toast: "#FFE565",

        primary: "#805436",
        primaryLight: "#B8794F",

        textBlack: "#000000",
        textDark: "#333333",
        textMuted: "#555555",

        hover: "#888888",
        border: "#000000",

        spinnerTrack: "#F3F3F3",
        spinnerHighlight: "#805436",
    },
};

// Dark mode
export const darkTheme: Theme = {
    colors: {
        background: "#1E1B18",
        header: "#26221E",
        toast: "#A88C3A",

        primary: "#C08A5F",
        primaryLight: "#A06E4A",

        textBlack: "#F6F3EE",
        textDark: "#C9C3BC",
        textMuted: "#A79F96",

        hover: "#4A423A",
        border: "#3A342E",

        spinnerTrack: "#3A342E",
        spinnerHighlight: "#C08A5F",
    },
};

// Theme context and provider
type ThemeContextType = {
    theme: Theme;
    isDark: boolean;
    toggleTheme: () => void;
};

// Create context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme provider component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDark, setIsDark] = useState(false);

    // Function to toggle theme (switch)
    const toggleTheme = () => setIsDark(prev => !prev);

    // Provide theme context to children
    return (
        <ThemeContext.Provider
            value={{
                theme: isDark ? darkTheme : lightTheme,
                isDark,
                toggleTheme,
            }
            }
        >
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use the theme
export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
    return ctx;
};