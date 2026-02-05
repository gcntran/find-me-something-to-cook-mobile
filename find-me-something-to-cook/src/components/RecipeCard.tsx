import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { RecipeCardProps } from '../types';


export function RecipeCard({ recipe, onPress, onToggleSave, isSaved }: RecipeCardProps) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <View style={styles.imageWrapper}>
                <Image source={{ uri: recipe.image }} style={styles.image} />

                <TouchableOpacity style={styles.heart} onPress={onToggleSave}>
                    <Feather
                        name="heart"
                        size={20}
                        color={isSaved ? "#C0392B" : "#FFFFFF"}
                        style={{ opacity: isSaved ? 1 : 0.6 }}
                    />
                </TouchableOpacity>
            </View>

            <Text numberOfLines={2} style={styles.title}>
                {recipe.title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 160,
        marginRight: 12,
    },
    imageWrapper: {
        width: "100%",
        height: 120,
        borderRadius: 12,
        overflow: "hidden",
        backgroundColor: "#ddd",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    heart: {
        position: "absolute",
        top: 8,
        right: 8,
        padding: 4,
    },
    title: {
        marginTop: 6,
        fontSize: 14,
        fontWeight: "600",
    },
});
