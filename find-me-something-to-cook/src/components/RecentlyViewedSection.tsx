import { RecentlyViewedSectionProps } from '../types';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';


export function RecentlyViewedSection({
    history,
    onPressRecipe,
    onClearHistory,
}: RecentlyViewedSectionProps) {
    if (!history || history.length === 0) return null;

    return (
        <View style={{ marginBottom: 24 }}>
            <View style={styles.headerRow}>
                <Text variant="titleMedium">Recently Viewed</Text>

                <TouchableOpacity onPress={onClearHistory}>
                    <Text style={styles.clearText}>Clear</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.grid}>
                {history.slice(0, 4).map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={styles.smallCard}
                        onPress={() => onPressRecipe(item)}
                    >
                        <Image source={{ uri: item.image }} style={styles.smallImage} />

                        {item.saved && (
                            <Feather
                                name="heart"
                                size={16}
                                color="#C0392B"
                                style={styles.smallHeart}
                            />
                        )}
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
    clearText: {
        fontSize: 12,
        opacity: 0.7,
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
        backgroundColor: '#ddd',
    },
    smallImage: {
        width: '100%',
        height: '100%',
    },
    smallHeart: {
        position: 'absolute',
        top: 6,
        right: 6,
    },
});