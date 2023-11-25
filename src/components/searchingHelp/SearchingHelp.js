import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, Alert, View, BackHandler } from 'react-native';
import styles from './SearchingHelpStyles';
import LoadingDots from 'react-native-loading-dots';
import WebSocketManager from '../../services/WebSocketManager';

const SearchingHelp = ({ handleCancelSearch }) => {
    const [isRequestAccepted, setIsRequestAccepted] = useState(false);
    const webSocketManager = new WebSocketManager();

    webSocketManager.receiveAcceptanceNotification((data) => {
        setIsRequestAccepted(data.acceptedState);
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
        <>
            {isRequestAccepted ? (
                <View style={styles.container}>
                    <Text style={styles.title}>Yêu cầu cứu hộ đã được tiếp nhận!</Text>

                    <TouchableOpacity activeOpacity={0.8} style={styles.btnTextContainer}>
                        <Text style={styles.btnText}>Đối tác đang tới..!</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.container}>
                    <Text style={styles.title}>Đang tìm kiếm hỗ trợ</Text>
                    <LoadingDots />

                    <TouchableOpacity onPress={handleClickCancel} activeOpacity={0.8} style={styles.btnTextContainer}>
                        <Text style={styles.btnText}>Huỷ tìm kiếm</Text>
                    </TouchableOpacity>
                </View>
            )}
        </>
    );
};

export default SearchingHelp;
