import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { useTheme } from "../theme/theme";

const SearchBar = () => {
    const { theme } = useTheme();
    const [query, setQuery] = useState("");

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: theme.colors.header, borderColor: theme.colors.border }
            ]}
        >
            <TextInput
                value={query}
                onChangeText={setQuery}
                placeholder="Search..."
                placeholderTextColor={theme.colors.textMuted}
                style={[styles.input, { color: theme.colors.textBlack }]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 16,
    },
    input: {
        fontSize: 16,
    },
});

export default SearchBar;
