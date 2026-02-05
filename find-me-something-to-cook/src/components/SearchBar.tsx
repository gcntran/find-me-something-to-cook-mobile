import { View, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useTheme } from '../theme/theme';

type SearchBarProps = {
    onSearch: (query: string) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
    const { theme } = useTheme();
    const [query, setQuery] = useState('');

    const handleSubmit = () => {
        onSearch(query);
    };

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: theme.colors.header, borderColor: theme.colors.border },
            ]}
        >
            <TextInput
                value={query}
                onChangeText={setQuery}
                placeholder="Type your ingredient..."
                placeholderTextColor={theme.colors.textMuted}
                onSubmitEditing={handleSubmit}
                style={[styles.input, { color: theme.colors.textBlack }]}
            />
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 10,
        marginBottom: 20,
        borderWidth: 1,
    },
    input: {
        fontSize: 16,
    },
});
