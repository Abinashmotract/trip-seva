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
import { MaterialIcons, FontAwesome, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import Logo from "../assets/splash_logo.png";
import footerImage from "../assets/spash_bottom.png";

const CreateAccount = ({ navigation }) => {
    const [formData, setFormData] = useState({
        emailOrPhone: '',
        dateOfBirth: '',
        password: '',
        confirmPassword: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleInputChange = (name, value) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={Logo} style={styles.footerImage} resizeMode="contain" />
                <Text style={styles.loginNow}>CREATE ACCOUNT</Text>
                <Text style={styles.subText}>Let us know about yourself</Text>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email or Phone</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email or phone"
                    value={formData.emailOrPhone}
                    onChangeText={(text) => handleInputChange('emailOrPhone', text)}
                />

                <Text style={styles.label}>Date of Birth</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.inputPassword}
                        placeholder="DD/MM/YYYY"
                        value={formData.dateOfBirth}
                        onChangeText={(text) => handleInputChange('dateOfBirth', text)}
                    />
                    <FontAwesome5 name="calendar-alt" size={20} color="gray" />
                </View>

                <Text style={styles.label}>Password</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.inputPassword}
                        placeholder="Enter your password"
                        secureTextEntry={!showPassword}
                        value={formData.password}
                        onChangeText={(text) => handleInputChange('password', text)}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <MaterialIcons name={showPassword ? 'visibility' : 'visibility-off'} size={20} color="gray" />
                    </TouchableOpacity>
                </View>


                <Text style={styles.label}>Confirm Password</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.inputPassword}
                        placeholder="Confirm your password"
                        secureTextEntry={!showConfirmPassword}
                        value={formData.confirmPassword}
                        onChangeText={(text) => handleInputChange('confirmPassword', text)}
                    />
                    <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                        <MaterialIcons name={showConfirmPassword ? 'visibility' : 'visibility-off'} size={20} color="gray" />
                    </TouchableOpacity>
                </View>

            </View>

            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('VerificationCode')}>
                <Text style={styles.loginText}>SEND CODE</Text>
            </TouchableOpacity>

            <View style={styles.createAccountContainer}>
                <Text style={styles.createAccountText}>You have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.createLink}>Login now</Text>
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
    )
};

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
        // marginTop: 10,
    },
    loginNow: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#b5854a',
    },
    subText: {
        fontSize: 12,
        color: 'green',
        // marginTop: 5,
    },
    inputContainer: {
        width: '100%',
    },
    label: {
        marginTop: 8,
        color: '#555',
        fontWeight: '500',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginTop: 4,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: 4,
    },
    inputPassword: {
        flex: 1,
        paddingVertical: 10,
    },
    forgotPassword: {
        alignItems: 'flex-end',
        marginTop: 4,
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
        marginTop: 15,
    },
    loginText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    createAccountText: {
        textAlign: 'center',
    },
    createLink: {
        color: '#e07c3d',
    },
    separatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
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
    createAccountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
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
    footerImage: {
        height: 100,
        marginTop: 70,
    },
});

export default CreateAccount;