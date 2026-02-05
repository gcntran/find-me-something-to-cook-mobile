import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useTheme } from "../theme/theme";

export const SearchBar = () => {
    const { theme } = useTheme();

    return (
        <View style={{ backgroundColor: theme.colors.background }}>
            <TextInput
                style={{
                    color: theme.colors.textBlack,
                    borderColor: theme.colors.border,
                }}
            />
        </View>
    );
};
