import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../theme/theme';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
    const { theme } = useTheme();
    const router = useRouter();

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.header, { color: theme.colors.textBlack }]}>
                Your Profile
            </Text>

            <Text style={[styles.subtext, { color: theme.colors.textMuted }]}>
                Here you can change your settings.
            </Text>

            <View style={styles.section}>
                <Text style={[styles.sectionTitle, { color: theme.colors.textBlack }]}>
                    Settings
                </Text>

                <TouchableOpacity
                    style={[styles.button, { borderColor: theme.colors.textMuted }]}
                    onPress={() => router.push('/settings/account')}
                >
                    <Text style={[styles.buttonText, { color: theme.colors.textBlack }]}>
                        Account Settings
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, { borderColor: theme.colors.textMuted }]}
                    onPress={() => router.push('/settings/theme')}
                >
                    <Text style={[styles.buttonText, { color: theme.colors.textBlack }]}>
                        Theme Settings
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, { borderColor: theme.colors.textMuted }]}
                    onPress={() => router.push('/settings/notifications')}
                >
                    <Text style={[styles.buttonText, { color: theme.colors.textBlack }]}>
                        Notification Settings
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        fontSize: 28,
        marginBottom: 8,
    },
    subtext: {
        fontSize: 16,
        marginBottom: 24,
    },
    section: {
        marginTop: 12,
    },
    sectionTitle: {
        fontSize: 20,
        marginBottom: 12,
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 12,
    },
    buttonText: {
        fontSize: 16,
    },
});
