import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
    SafeAreaView
} from 'react-native';
import Logo from "../assets/splash_logo.png";
import footerImage from "../assets/spash_bottom.png";

export default function VerificationCode({ navigation }) {
    const [code, setCode] = useState(['', '', '', '']);

    const handleChange = (text, index) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);
        if (text && index < 3) {
            const nextInput = `codeInput${index + 1}`;
            const next = inputs[nextInput];
            if (next) next.focus();
        }
    };

    const inputs = {};

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={Logo} style={styles.footerImage} resizeMode="contain" />
                <Text style={styles.loginNow}>VERIFICATION CODE</Text>
                <Text style={styles.subText}>Enter the verification code that we sent to your email or phone.</Text>
                <Text style={styles.subTextTime}>Code will expire in 02 : 34 min</Text>
            </View>

            <View style={styles.inputContainer}>
                <View style={styles.codeInputContainer}>
                    {code.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={(ref) => inputs[`codeInput${index}`] = ref}
                            style={styles.codeInput}
                            keyboardType="number-pad"
                            maxLength={1}
                            value={digit}
                            onChangeText={(text) => handleChange(text, index)}
                        />
                    ))}
                </View>
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginText}>Submit</Text>
            </TouchableOpacity>

            <View style={styles.createAccountContainer}>
                <Text style={styles.createAccountText}>Didn’t receive code? </Text>
                <TouchableOpacity>
                    <Text style={styles.createLink}>Resend me</Text>
                </TouchableOpacity>
            </View>

            <Image source={footerImage} resizeMode="cover" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    footerImage: {
        height: 100,
        marginTop: 70,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 40,
    },
    loginNow: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#b5854a',
    },
    subText: {
        fontSize: 12,
        color: 'green',
        marginTop: 5,
        textAlign: 'center',
    },
    subTextTime: {
        fontSize: 15,
        color: 'red',
        marginTop: 20,
    },
    inputContainer: {
        alignItems: 'center',
    },
    codeInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    codeInput: {
        borderBottomWidth: 2,
        borderColor: '#6a4d38',
        width: 50,
        height: 50,
        textAlign: 'center',
        fontSize: 20,
        marginHorizontal: 5,
    },
    loginButton: {
        backgroundColor: '#6a4d38',
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
    },
    loginText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    createAccountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    createAccountText: {
        fontSize: 13,
    },
    createLink: {
        color: '#e07c3d',
        fontSize: 13,
        marginLeft: 5,
    },
});