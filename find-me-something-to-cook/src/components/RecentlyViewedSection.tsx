import { RecentlyViewedSectionProps } from '../types';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Text, IconButton } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../theme/theme';

export function RecentlyViewedSection({
    history,
    onPressRecipe,
    onClearHistory,
}: RecentlyViewedSectionProps) {

    const { theme } = useTheme();

    if (!history || history.length === 0) return null;

    return (
        <View style={{ marginBottom: 24 }}>
            <View style={styles.headerRow}>
                <Text
                    variant="titleMedium"
                    style={{ color: theme.colors.text }}
                >
                    Recently Viewed
                </Text>

                <TouchableOpacity onPress={onClearHistory}>
                    <Text
                        style={{
                            fontSize: 12,
                            opacity: 0.7,
                            color: theme.colors.textMuted,
                        }}
                    >
                        Clear
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.grid}>
                {history.slice(0, 4).map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={[
                            styles.smallCard,
                            { backgroundColor: theme.colors.header },
                        ]}
                        onPress={() => onPressRecipe(item)}
                    >
                        <Image source={{ uri: item.image }} style={styles.smallImage} />

                        <IconButton
                            icon={() => (
                                <MaterialCommunityIcons
                                    name={item.saved ? "heart" : "heart-outline"}
                                    size={18}
                                    color={item.saved ? theme.colors.icon : theme.colors.textBlack}
                                />
                            )}
                            onPress={() => onPressRecipe(item)}
                            style={styles.smallHeart}
                            containerColor={theme.colors.background}
                            rippleColor="transparent"
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    smallCard: {
        width: '48%',
        height: 100,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 10,
    },
    smallImage: {
        width: '100%',
        height: '100%',
    },
    smallHeart: {
        position: 'absolute',
        top: 6,
        right: 6,
        zIndex: 10,
        padding: 0,
    },
});
