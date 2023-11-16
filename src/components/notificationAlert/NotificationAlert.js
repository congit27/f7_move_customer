import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, Alert, View, BackHandler } from 'react-native';
import styles from './NotificationAlertStyles';
import LoadingDots from 'react-native-loading-dots';

const NotificationAlert = ({ handleCancelSearch }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Đối tác đã đến</Text>
            <LoadingDots />

            <TouchableOpacity activeOpacity={0.8} style={styles.btnTextContainer}>
                <Text style={styles.btnText}>Đợi báo giá</Text>
            </TouchableOpacity>
        </View>
    );
};

export default NotificationAlert;
