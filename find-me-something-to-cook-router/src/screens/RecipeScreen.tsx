import { View, Text } from 'react-native';

export default function RecipeScreen({ id }: { id: string }) {
    return (
        <View style={{ padding: 20 }}>
            <Text>Recipe Screen</Text>
            <Text>Recipe ID: {id}</Text>
        </View>
    );
}
