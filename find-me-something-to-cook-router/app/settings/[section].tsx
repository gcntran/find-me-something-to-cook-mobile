import { useLocalSearchParams, Stack } from 'expo-router';
import { View, Text, Switch } from 'react-native';
import { useTheme } from '../../src/theme/theme';
import { useState } from 'react';

export default function SettingsSection() {
    const { section } = useLocalSearchParams<{ section: string }>();
    const { theme } = useTheme();

    const [enabled, setEnabled] = useState(false);

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

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingVertical: 12,
                    }}
                >
                    <Text style={{ fontSize: 18, color: theme.colors.textBlack }}>
                        Turn ON/OFF
                    </Text>

                    <Switch
                        value={enabled}
                        onValueChange={setEnabled}
                        thumbColor={enabled ? theme.colors.primary : '#ccc'}
                        trackColor={{ false: '#ddd', true: theme.colors.primaryMuted }}
                    />
                </View>
            </View>
        </>
    );
}
