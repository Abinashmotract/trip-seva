import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import splash from "../assets/splash_logo.png";
import bottom from "../assets/spash_bottom.png";

function SplashScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Onboarding');
        }, 1000);
    }, [navigation]);

    return (
        <View style={styles.splashContainer}>
            <Image source={splash} style={styles.logo} />
            <Image source={bottom} style={styles.bottomImage} />

            <Text style={styles.skipText}>The Heritage</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    bottomImage: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        resizeMode: 'contain',
    },
    skipText: {
        fontSize: 30,
        marginTop: 20,
        fontWeight: 'bold',
        fontFamily: 'serif',
      },
});

export default SplashScreen;
