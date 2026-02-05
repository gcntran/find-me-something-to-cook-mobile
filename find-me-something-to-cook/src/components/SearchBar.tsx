import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { useTheme } from "../theme/theme";
import { Recipe } from "../types";

type SearchBarProps = {
    onSearch: (results: Recipe[]) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
    const { theme } = useTheme();
    const [query, setQuery] = useState("");
    const handleSubmit = () => {
        const fakeResults: Recipe[] = [
            {
                id: 1,
                title: 'Sample Recipe',
                image: 'https://picsum.photos/300',
            },
        ];

        onSearch(fakeResults);
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <TextInput
                value={query}
                onChangeText={setQuery}
                placeholder="Type ingredient..."
                placeholderTextColor={theme.colors.textMuted}
                onSubmitEditing={handleSubmit}
                style={[
                    styles.input,
                    {
                        color: theme.colors.textBlack,
                    },
                ]}
            />
        </View>
    );
};

export default SearchBar;

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


