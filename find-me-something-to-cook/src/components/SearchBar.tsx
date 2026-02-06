import { View, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';
import { IconButton } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
            <MaterialCommunityIcons
                name="magnify"
                size={20}
                color={theme.colors.textMuted}
                style={styles.icon}
            />

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
        borderRadius: 50,
        paddingHorizontal: 14,
        paddingVertical: 10,
        marginBottom: 20,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
});
