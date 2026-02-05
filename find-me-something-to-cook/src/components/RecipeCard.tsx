import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useTheme } from "../theme/theme";

const RecipeCard = () => {
    const { theme } = useTheme();

    return (
        <View
            style={{
                backgroundColor: theme.colors.header,
                borderColor: theme.colors.border,
            }}
        >
            <Text style={{ color: theme.colors.textDark }}>Recipe</Text>
        </View>
    );
};
