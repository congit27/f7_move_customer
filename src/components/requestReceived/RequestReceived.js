import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from './RequestReceivedStyles';

const RequestReceived = ({ handleDirectToPrice }) => {
    const handleDirection = () => {
        handleDirectToPrice();
    };

    return (
        <View style={styles.container}>
            <View>
                <AntDesign name="checksquare" size={24} color="green" />
            </View>
            <Text style={styles.title}>Yêu cầu của bạn đã được nhận!</Text>

            <TouchableOpacity activeOpacity={0.8} style={styles.btnTextContainer} onPress={handleDirection}>
                <Text style={styles.btnText}>Xem lộ trình chi tiết</Text>
            </TouchableOpacity>
        </View>
    );
};

export default RequestReceived;
