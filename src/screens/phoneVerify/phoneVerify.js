import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Alert, TextInput } from 'react-native';
import styles from './phoneVerifyStyles';

import handleCustomerLogin from '../../services/CustomerService';

const PhoneVerify = ({ navigation }) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async () => {
        try {
            if (!userName || !password) {
                Alert.alert('Missing parameter!!');
                return;
            }
            const response = await handleCustomerLogin({ userName: userName, password: password });
            if (response.data && response.data.EC === 0) {
                navigation.navigate('Navigation');
            } else {
                Alert.alert('Error: Your UserName or password is incorrect!');
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Something went wrong.');
        }
    };
    return (
        <View style={styles.loginContainer}>
            <Text style={styles.title}>LOGIN</Text>
            <Text>Nhập User và Password của bạn:</Text>
            <View style={styles.loginContent}>
                <TextInput placeholder="UserName..." onChangeText={setUserName} style={styles.inputContent} />
                <TextInput placeholder="Password..." onChangeText={setPassword} style={styles.inputContent} />
            </View>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btnSignUp}
                onPress={() => navigation.navigate('RegisterUser')}
            >
                <Text style={styles.btnTextSignUp}>Create new account ???</Text>
            </TouchableOpacity>
            <View style={styles.loginBtn}>
                <TouchableOpacity activeOpacity={0.8} style={styles.btnContinue} onPress={() => handleLogin()}>
                    <Text style={styles.btnTextLogin}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PhoneVerify;
