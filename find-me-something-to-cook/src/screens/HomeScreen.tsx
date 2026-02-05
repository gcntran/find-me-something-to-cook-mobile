import { View, Text, StyleSheet } from 'react-native';
import { useColorScheme } from "react-native";
import { lightTheme, darkTheme } from "../theme/theme";

export const useTheme = () => {
    const scheme = useColorScheme();
    return scheme === "dark" ? darkTheme : lightTheme;
};

export default function HomeScreen() {
    return (
        <View>
            <Text>Welcome to Find Me Something to Cook!</Text>
            <Text>Discover delicious recipes tailored to your preferences.</Text>
        </View>
    );
}

