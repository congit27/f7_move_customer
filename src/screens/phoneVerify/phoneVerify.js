import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Alert, TextInput } from 'react-native';
import styles from './phoneVerifyStyles';

const PhoneVerify = ({ navigation }) => {
    return (
        <View style={styles.loginContainer}>
            <Text style={styles.title}>Đăng nhập & đăng ký</Text>
            <Text>Điền số điện thoại của bạn:</Text>
            <View style={styles.loginContent}>
                <TextInput
                    placeholder="Phone Number with Country code..."
                    keyboardType="phone-pad"
                    autoCompleteType="tel"
                    style={styles.inputContent}
                />
            </View>
            <View style={styles.loginBtn}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.btnContinue}
                    onPress={() => navigation.navigate('OTPVerify')}
                >
                    <Text style={styles.btnText}>Send Otp</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PhoneVerify;
