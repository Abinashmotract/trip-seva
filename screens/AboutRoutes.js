import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export default function AboutRoutes({ navigation, activeChipText }) {
    const [selectedChip, setSelectedChip] = useState('Train');

    const handleSelectActiveChip = (item) => {
        setSelectedChip('Train');
        if (item === 'Train') {
            navigation.navigate('TrainRoutesScreen');
        }
    }


    return (
        <View>
            <View style={styles.section}>
                <Text style={styles.routeTextTitle}>How To Reach Here</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {activeChipText.map((item) => (
                        <TouchableOpacity key={item} onPress={() => handleSelectActiveChip(item)} style={[styles.chip, selectedChip === item && styles.activeChip]}>
                            <Text style={[styles.chipText, selectedChip === item && styles.activeChipText]}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    routeTextTitle: {
        fontSize: 14,
        marginBottom: 10,
        fontWeight: 'bold',
        color: '#6a4d38',
    },
    chip: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: '#e76f51',
        borderRadius: 20,
        marginRight: 10,
    },
    activeChip: {
        backgroundColor: '#6a4d38',
    },
    chipText: {
        color: '#fff',
        fontWeight: '500',
    },
    activeChipText: {
        color: '#fff',
    },
    content: {
        padding: 20,
    },
    contentText: {
        fontSize: 16,
        color: '#333',
    },
    section: {
        marginBottom: 20,
    },
});
