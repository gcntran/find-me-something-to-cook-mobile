import { View, Text, StyleSheet } from 'react-native';
import { lightTheme, darkTheme } from "../theme/theme";
import { useTheme } from "../theme/theme";
import { ThemeSwitch } from '../components/ThemeSwitch';
import SearchBar from '../components/SearchBar';

const HomeScreen = () => {
    const { theme } = useTheme();

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: theme.colors.background,
                padding: 20,
            }}
        >
            <Text style={{ color: theme.colors.textBlack, fontSize: 24 }}>
                Search
            </Text>

            {/* Toggle for switch */}
            <ThemeSwitch />

            {/* Other components */}
            {/* Search Bar */}
            <SearchBar />

        </View>
    );
};

export default HomeScreen;



