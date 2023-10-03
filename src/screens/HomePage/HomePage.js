import React from 'react';
import io from 'socket.io-client';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import Images from '../../../assets/Images';
import styles from './HomePageStyles';

const HomePage = () => {
    const socket = io('https://railwaytest-production-a531.up.railway.app/');
    const handleSendRequest = () => {
        console.log('Send request');
        socket.emit('rescue-request', { message: 'Yêu cầu cứu hộ từ Cong!' });
    };
    return (
        <>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logoBoard} source={Images.onBoarding2} />
                    <Text style={styles.boardSlogan}>Home Page</Text>
                    <TouchableOpacity activeOpacity={0.8} style={styles.btnTextContainer} onPress={handleSendRequest}>
                        <Text style={styles.btnText}>Gửi yêu cầu cứu hộ</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomContainer}></View>
            </View>
        </>
    );
};

export default HomePage;
