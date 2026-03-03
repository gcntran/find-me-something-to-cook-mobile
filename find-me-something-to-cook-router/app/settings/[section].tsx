import { useLocalSearchParams, Stack } from 'expo-router';
import { View, Text } from 'react-native';
import { useTheme } from '../../src/theme/theme';

export default function SettingsSection() {
    const { section } = useLocalSearchParams<{ section: string }>();
    const { theme } = useTheme();

    const title =
        section && section.length > 0
            ? section.charAt(0).toUpperCase() + section.slice(1)
            : 'Settings';

    return (
        <>
            <Stack.Screen
                options={{
                    headerShown: true,
                    title: `${title} Settings`,
                }}
            />

            <View
                style={{
                    flex: 1,
                    padding: 20,
                    backgroundColor: theme.colors.background,
                }}
            >
                <Text
                    style={{
                        fontSize: 28,
                        marginBottom: 16,
                        color: theme.colors.textBlack,
                    }}
                >
                    {title} Settings
                </Text>

                <Text
                    style={{
                        fontSize: 16,
                        color: theme.colors.textMuted,
                    }}
                >
                    This is the settings page for: {section}
                </Text>
            </View>
        </>
    );
}
