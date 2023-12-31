import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import Images from '../../../assets/Images';
import styles from './SplashStyles';

const Splash = ({ navigation }) => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logoF7} source={Images.logoF7} />
                    <Text style={styles.appNameLogo}>F7</Text>
                    <Text style={styles.appNameDetail}>Secure Move</Text>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('BoardingPage')}
                        activeOpacity={0.8}
                        style={styles.btnTextContainer}
                    >
                        <Text style={styles.btnText}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

export default Splash;
