import React from 'react';
import { View, Image } from 'react-native';

import styles from './ItemStyles';
import Images from '../../../../assets/Images';

const ServiceItem = ({ navigation }) => {
    return (
        <View style={styles.service}>
            <Image style={styles.image} source={Images.favicon} />
        </View>
    );
};

export default ServiceItem;
