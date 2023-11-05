import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, Alert, View, BackHandler } from 'react-native';
import io from 'socket.io-client';
import styles from './SearchingHelpStyles';
import LoadingDots from 'react-native-loading-dots';

const SearchingHelp = ({ handleCancelSearch }) => {
    const socket = io('http://192.168.0.102:3000');

    socket.on('new-rescue-request', (data) => {
        console.log('Thông tin đã được nhận từ partner: ', data);
    });
    //listen event user back
    useEffect(() => {
        const backAction = () => {
            Alert.alert('Huỷ tìm kiếm!', 'Bạn có chắc muốn huỷ.', [
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel',
                },
                { text: 'YES', onPress: () => handleCancelSearch() },
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

        return () => backHandler.remove();
    }, []);

    const handleClickCancel = () => {
        Alert.alert('Huỷ tìm kiếm!', 'Bạn có chắc muốn huỷ tìm kiếm?', [
            {
                text: 'Quay lại',
                onPress: () => null,
                style: 'cancel',
            },
            {
                text: 'Xác nhận huỷ',
                onPress: () => handleCancelSearch(),
            },
        ]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Đang tìm kiếm hỗ trợ</Text>
            <LoadingDots />

            <TouchableOpacity onPress={handleClickCancel} activeOpacity={0.8} style={styles.btnTextContainer}>
                <Text style={styles.btnText}>Huỷ tìm kiếm</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SearchingHelp;
