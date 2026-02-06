import { View, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../theme/theme';

// Props for the SearchBar component, which includes a callback function to handle search queries
type SearchBarProps = {
    onSearch: (query: string) => void;
};

// Search function
const SearchBar = ({ onSearch }: SearchBarProps) => {
    const { theme } = useTheme();
    const [query, setQuery] = useState('');

    const handleSubmit = () => {
        onSearch(query);
    };

    // Return with a View that contains an icon and a TextInput for the search query
    return (
        <View
            style={[
                styles.container,
                { backgroundColor: theme.colors.header, borderColor: theme.colors.border },
            ]}
        >

            {/* I'm using Material Icons for Android */}
            <MaterialCommunityIcons
                name="magnify"
                size={20}
                color={theme.colors.textMuted}
                style={styles.icon}
            />

            {/* 
            We are using TextInput to create a search bar where users can type their ingredient queries. 
            The onChangeText prop is used to update the query state as the user types, 
            and the onSubmitEditing prop is used to trigger the search function when the user submits their query. 
            */}
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

// Styling for the SearchBar
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
