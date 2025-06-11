import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Frame from "../assets/lalkila.png";
import shadow from "../assets/lalkila1.png";
import { useNavigation } from '@react-navigation/native';

const Onboarding2 = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={Frame} style={styles.image} />
            <Image source={shadow} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>Get Started</Text>
                <Text style={styles.subtitle}>
                    Let's Get Started! Now that you've learned a little more about us, let's get started on your journey through cultural heritage.
                </Text>
            </View>

            {/* Bottom Button Container */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={styles.skipText}>« PREVIOUS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.skipText}>START »</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Onboarding2;

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
