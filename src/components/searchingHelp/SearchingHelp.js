import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, Alert, View } from 'react-native';

import styles from './SearchingHelpStyles';
import LoadingDots from 'react-native-loading-dots';

const SearchingHelp = ({ handleOpenHelpInfo, setSearchHelpfalse }) => {
    const handleClickCancel = () => {
        Alert.alert('Huỷ tìm kiếm!', 'Bạn có chắc muốn huỷ tìm kiếm?', [
            {
                text: 'Quay lại',
                onPress: () => null,
                style: 'cancel',
            },
            {
                text: 'Xác nhận huỷ',
                onPress: () => {
                    handleOpenHelpInfo();
                    setSearchHelpfalse();
                },
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
