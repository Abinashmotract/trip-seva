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
import { MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons';
import Logo from "../assets/splash_logo.png";
import footerImage from "../assets/spash_bottom.png";

export default function LoginScreen({ navigation }) {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={Logo} style={styles.footerImage} resizeMode="contain" />
                <Text style={styles.loginNow}>LOGIN NOW</Text>
                <Text style={styles.subText}>Please enter email and password.</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email or Phone</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email or Phone"
                    value={emailOrPhone}
                    onChangeText={setEmailOrPhone}
                />

                <Text style={styles.label}>Password</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.inputPassword}
                        placeholder="Enter your password"
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <MaterialIcons
                            name={showPassword ? 'visibility' : 'visibility-off'}
                            size={20}
                            color="gray"
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.forgotPassword}>
                    <Text style={styles.forgotText}>Forgot password</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>

            <View style={styles.createAccountContainer}>
                <Text style={styles.createAccountText}>Don’t have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
                    <Text style={styles.createLink}>Create Account</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.separatorContainer}>
                <View style={styles.separator} />
                <Text style={styles.orText}>OR</Text>
                <View style={styles.separator} />
            </View>

            <View style={styles.socialContainer}>
                <TouchableOpacity style={styles.socialButton}>
                    <AntDesign name="google" size={24} color="#DB4437" />
                    <Text style={styles.socialText}>Google</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.socialButton}>
                    <FontAwesome name="facebook" size={24} color="#3b5998" />
                    <Text style={styles.socialText}>Facebook</Text>
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
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
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
    },
    inputContainer: {
        width: '100%',
    },
    label: {
        marginTop: 10,
        color: '#555',
        fontWeight: '500',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginTop: 5,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: 5,
    },
    inputPassword: {
        flex: 1,
        paddingVertical: 10,
    },
    forgotPassword: {
        alignItems: 'flex-end',
        marginTop: 5,
    },
    forgotText: {
        color: '#CC6B49',
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
    },
    createAccountText: {
        // marginTop: 10,
        textAlign: 'center',
    },
    createLink: {
        color: '#e07c3d',
    },
    separatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginVertical: 20,
    },
    separator: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
    },
    orText: {
        marginHorizontal: 10,
        color: '#999',
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingVertical: 6,
        paddingHorizontal: 30,
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 20,
        backgroundColor: '#fffce8',
    },
    socialText: {
        marginLeft: 5,
    },
    footerImage: {
        height: 100,
        marginTop: 70,
    },
    createAccountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      createAccountText: {
        color: '#000',
        fontSize: 14,
      },
      createLink: {
        color: '#CC6B49',
        fontSize: 14,
        marginLeft: 5,
      },
});