import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useTheme } from "../theme/theme";

export const ThemeSwitch = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <Button
            title={isDark ? "Light Mode" : "Dark Mode"}
            onPress={toggleTheme}
        />
    );
};

