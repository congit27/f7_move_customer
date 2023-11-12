import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './OTPVerifyStyles';

const OtpVerify = ({ route, navigation }) => {
    return (
        <View style={styles.verifyContainer}>
            <Text style={styles.title}>OTP Verification</Text>

            <View style={styles.verifyContent}>
                <View style={styles.otpInputContainer}>
                    <TextInput
                        placeholder="Nhập OTP"
                        keyboardType="number-pad"
                        autoCompleteType="tel"
                        style={styles.otpInput}
                    />
                </View>
            </View>
            <View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.btnVerify}
                    onPress={() => navigation.navigate('Navigation')}
                >
                    <Text style={styles.btnText}>Verify</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default OtpVerify;
