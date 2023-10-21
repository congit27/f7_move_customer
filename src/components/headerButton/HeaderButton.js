import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './HeaderButtonStyles';

const HeaderButton = ({ title, handleClose }) => {
    const handleBack = () => {
        handleClose();
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity activeOpacity={0.8} style={styles.btnTextContainer} onPress={handleBack}>
                    <Ionicons name="arrow-back-circle-sharp" size={24} color="white" />
                    <Text style={styles.btnText}>Quay lại</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HeaderButton;
