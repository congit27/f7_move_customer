import React from 'react';

import { View, Text } from 'react-native';
import styles from './PriceItemStyles';

const PriceItem = ({ title, price }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
        </View>
    );
};

export default PriceItem;
