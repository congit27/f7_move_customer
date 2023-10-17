import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

import { View, Text, TouchableOpacity, Alert, Modal, Pressable } from 'react-native';
import styles from './ScreensStyles';
import HelpInfomation from './HelpInfomation';

const Help = ({ navigation }) => {
    const socket = io('https://railwaytest-production-a531.up.railway.app/');
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    const handleSendRequest = () => {
        console.log('Send request, location: ', location);
        socket.emit('rescue-request', { message: 'Yêu cầu cứu hộ từ Cong!', location: location });
    };

    const handleCloseHelpinfo = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.helpContainer}>
            {location && (
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                        title="Your Location"
                        description="You are here!"
                    ></Marker>
                </MapView>
            )}
            {/* <TouchableOpacity activeOpacity={0.8} style={styles.btnTextContainer} onPress={handleSendRequest}>
                <Text style={styles.btnText}>Gửi yêu cầu cứu hộ</Text>
            </TouchableOpacity> */}

            {/* Model infomation help */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <HelpInfomation handleCloseHelpinfo={handleCloseHelpinfo} />
                    </View>
                </View>
            </Modal>
            <TouchableOpacity onPress={() => setModalVisible(true)} activeOpacity={0.8} style={styles.btnTextContainer}>
                <Text style={styles.btnText}>Yêu cầu cứu hộ</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Help;
