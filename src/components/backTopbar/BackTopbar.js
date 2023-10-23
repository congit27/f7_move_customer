import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from './BacktopBarStyles';

const BackTopbar = ({ editBackToInfo }) => {
    const handleBack = () => {
        editBackToInfo();
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity style={styles.titleCont} onPress={handleBack}>
                    <AntDesign name="left" size={24} color="black" />
                    <Text>Back</Text>
                </TouchableOpacity>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />
            </View>
        </View>
    );
};

export default BackTopbar;
