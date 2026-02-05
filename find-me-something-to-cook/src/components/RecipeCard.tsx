import { StyleSheet, View } from 'react-native';
import { Card, Text, IconButton } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { useTheme } from '../theme/theme';
import { RecipeCardProps } from '../types';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export function RecipeCard({ recipe, onPress, onToggleSave, isSaved }: RecipeCardProps) {
    const { theme } = useTheme();

    return (
        <Card
            onPress={onPress}
            style={[
                styles.card,
                { backgroundColor: theme.colors.header }
            ]}
            mode="contained"
        >
            <View style={styles.imageWrapper}>
                <Card.Cover
                    source={{ uri: recipe.image }}
                    style={styles.image}
                />

                <IconButton
                    icon={() => (
                        <MaterialCommunityIcons
                            name={isSaved ? "heart" : "heart-outline"}
                            size={18}
                            color={isSaved ? theme.colors.primary : theme.colors.textBlack}
                        />
                    )}
                    onPress={onToggleSave}
                    style={styles.heart}
                    containerColor="rgba(255,255,255,0.85)"
                />
            </View>

            <Card.Content style={styles.content}>
                <Text
                    numberOfLines={2}
                    style={[styles.title, { color: theme.colors.textBlack }]}
                >
                    {recipe.title}
                </Text>
            </Card.Content>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 200,
        marginRight: 12,
        borderRadius: 10,
        overflow: 'hidden',
    },

    shadowWrapper: {
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.10,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 5 },
        elevation: 4,
    },

    imageWrapper: {
        width: '100%',
        height: 120,
        borderRadius: 10,
        overflow: 'hidden',
    },

    image: {
        height: '100%',
        width: '100%',
    },

    heart: {
        position: 'absolute',
        top: 6,
        right: 6,
        zIndex: 10,
    },

    content: {
        paddingTop: 8,
    },

    title: {
        fontSize: 14,
        fontWeight: '600',
    },
});
