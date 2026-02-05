import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useTheme } from "../theme/theme";
import { Feather } from '@expo/vector-icons';


export const ThemeSwitch = () => {
    const { theme, isDark, toggleTheme } = useTheme();

    return (
        <TouchableOpacity onPress={toggleTheme}>
            <Feather
                name={isDark ? "sun" : "moon"}
                size={28}
                color={theme.colors.textBlack}
            />
        </TouchableOpacity>
    );
};

