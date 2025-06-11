import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Frame from "../assets/taj.png";
import shadow from "../assets/taj1.png";
import { useNavigation } from '@react-navigation/native';

const Onboarding1 = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={Frame} style={styles.image} />
            <Image source={shadow} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>About Us</Text>
                <Text style={styles.subtitle}>
                    The Heritage was created with the aim of promoting cultural heritage tourism and providing a platform for people to connect with their roots.
                </Text>
            </View>

            {/* Bottom Button Container */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={styles.skipText}>« PREVIOUS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Onboarding2')}>
                    <Text style={styles.skipText}>NEXT »</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Onboarding1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffce8',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    content: {
        marginTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'serif',
    },
    subtitle: {
        fontSize: 18,
        marginTop: 20,
        lineHeight: 24,
        fontFamily: 'serif',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },
    button: {
        paddingVertical: 6,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 20,
        backgroundColor: '#fffce8',
        marginHorizontal: 10,
    },
    skipText: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'serif',
    },
});
