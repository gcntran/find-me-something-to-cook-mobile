import { TouchableOpacity } from 'react-native';
import React from 'react';
import { useTheme } from "../theme/theme";
import { Switch } from 'react-native-paper';

export const ThemeSwitch = () => {
    const { theme, isDark, toggleTheme } = useTheme();

    // A simple switch to toggle between light and dark themes
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

