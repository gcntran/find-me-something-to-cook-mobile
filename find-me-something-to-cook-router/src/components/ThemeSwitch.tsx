import { TouchableOpacity } from 'react-native';
import React from 'react';
import { useTheme } from "../theme/theme";
import { Switch } from 'react-native-paper';

// A simple component to switch between light and dark themes
export const ThemeSwitch = () => {
    const { theme, isDark, toggleTheme } = useTheme();

    // A switch to toggle between light and dark themes
    return (
        <TouchableOpacity onPress={toggleTheme}>
            <Switch
                value={isDark}
                onValueChange={toggleTheme}
                color={theme.colors.primary}
            />
        </TouchableOpacity>
    );
};

