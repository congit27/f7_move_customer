import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Alert, TextInput } from 'react-native';
import styles from './phoneVerifyStyles';

import handleCustomerLogin from '../../services/CustomerService';

const PhoneVerify = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const handleLogin = async () => {
        try {
            const response = await handleCustomerLogin({ phone: phoneNumber });
            if (response.data && response.data.EC === 0) {
                navigation.navigate('OTPVerify', { otp: response.data.DT.otp });
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Something went wrong.');
        }
    };
    return (
        <View style={styles.loginContainer}>
            <Text style={styles.title}>Đăng nhập & đăng ký</Text>
            <Text>Điền số điện thoại của bạn:</Text>
            <View style={styles.loginContent}>
                <TextInput
                    placeholder="Phone Number with Country code..."
                    keyboardType="phone-pad"
                    autoCompleteType="tel"
                    onChangeText={setPhoneNumber}
                    style={styles.inputContent}
                />
            </View>
            <View style={styles.loginBtn}>
                <TouchableOpacity activeOpacity={0.8} style={styles.btnContinue} onPress={() => handleLogin()}>
                    <Text style={styles.btnText}>Send Otp</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PhoneVerify;
