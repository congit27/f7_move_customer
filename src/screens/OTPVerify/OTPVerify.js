import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import styles from './OTPVerifyStyles';

const OtpVerify = ({ route, navigation }) => {
    const [code, setCode] = useState('');

    const handleVerify = () => {
        const otp = route.params.otp;

        if (code === otp) {
            navigation.navigate('HomePage');
        } else {
            Alert.alert('Error', 'Invalid OTP. Please try again.');
        }
    };
    return (
        <View style={styles.verifyContainer}>
            <Text style={styles.title}>OTP Verification</Text>

            <View style={styles.verifyContent}>
                <View style={styles.otpInputContainer}>
                    <TextInput
                        placeholder="Nhập OTP"
                        keyboardType="number-pad"
                        autoCompleteType="tel"
                        onChangeText={setCode}
                        style={styles.otpInput}
                    />
                </View>
            </View>
            <View>
                <TouchableOpacity activeOpacity={0.8} style={styles.btnVerify} onPress={() => handleVerify()}>
                    <Text style={styles.btnText}>Verify</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default OtpVerify;
