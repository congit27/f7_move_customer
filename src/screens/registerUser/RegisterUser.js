import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import { handleCustomerRegister } from '../../services/CustomerService';
import styles from './RegisterUserStyle';

const RegisterUser = ({ navigation }) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleRegister = async () => {
        try {
            if (!userName || !password || !fullName || !phone || !email) {
                Alert.alert('Missing parameter!!');
                return;
            }

            const response = await handleCustomerRegister(email, fullName, password, userName, phone);
            if (response.data.EC === 0) {
                Alert.alert('Register success');
                navigation.navigate('PhoneVerify');
            } else {
                Alert.alert('Register error ', response.data.EM);
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Something went wrong.');
        }
    };
    return (
        <>
            <View style={styles.registerContainer}>
                <Text style={styles.title}>Register</Text>
                <View style={styles.registerContent}>
                    <View style={styles.registerInput}>
                        <Text style={styles.textInfor}>Full Name:</Text>
                        <TextInput style={styles.inputInfor} placeholder="Nhập FullName.." onChangeText={setFullName} />
                    </View>
                    <View style={styles.registerInput}>
                        <Text style={styles.textInfor}>Email:</Text>
                        <TextInput style={styles.inputInfor} placeholder="Nhập email.." onChangeText={setEmail} />
                    </View>
                    <View style={styles.registerInput}>
                        <Text style={styles.textInfor}>UserName:</Text>
                        <TextInput style={styles.inputInfor} placeholder="Nhập UserName.." onChangeText={setUserName} />
                    </View>
                    <View style={styles.registerInput}>
                        <Text style={styles.textInfor}>Password:</Text>
                        <TextInput style={styles.inputInfor} placeholder="Nhập Password.." onChangeText={setPassword} />
                    </View>
                    <View style={styles.registerInput}>
                        <Text style={styles.textInfor}>Phone:</Text>
                        <TextInput style={styles.inputInfor} placeholder="Nhập PhoneNumber.." onChangeText={setPhone} />
                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.registerBtn}
                            onPress={() => handleRegister()}
                        >
                            <Text style={styles.btnText}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
};

export default RegisterUser;
