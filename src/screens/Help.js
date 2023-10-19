import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

import { View, Text, TouchableOpacity, Alert, Modal, Pressable } from 'react-native';
import styles from './ScreensStyles';
import HelpInfomation from './HelpInfomation';
import SearchingHelp from '../components/searchingHelp/SearchingHelp';

const Help = ({ navigation }) => {
    const socket = io('https://railwaytest-production-a531.up.railway.app/');
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [modalHelpInfoVisible, setModalHelpInfoVisible] = useState(false);
    const [searchHelp, setSearchHelp] = useState(false);

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
        setModalHelpInfoVisible(false);
    };

    const handleOpenHelpInfo = () => {
        setModalHelpInfoVisible(true);
    };
    const setSearchHelpTrue = () => {
        setSearchHelp(true);
    };

    const setSearchHelpfalse = () => {
        setSearchHelp(false);
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
                visible={modalHelpInfoVisible}
                onRequestClose={() => {
                    Alert.alert(
                        'Huỷ nhập thông tin!',
                        'Bạn có chắc muốn nhập.(toàn bộ thông tin bạn vừa nhập sẽ mất.)?',
                        [
                            {
                                text: 'Quay lại',
                                onPress: () => null,
                                style: 'cancel',
                            },
                            { text: 'Xác nhận huỷ', onPress: () => handleCloseHelpinfo() },
                        ],
                    );
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <HelpInfomation
                            handleCloseHelpinfo={handleCloseHelpinfo}
                            setSearchHelpTrue={setSearchHelpTrue}
                        />
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                onPress={() => setModalHelpInfoVisible(true)}
                activeOpacity={0.8}
                style={styles.btnTextContainer}
            >
                <Text style={styles.btnText}>Yêu cầu cứu hộ</Text>
            </TouchableOpacity>

            {/* modal searching help */}
            <Modal
                style={styles.abs}
                animationType="slide"
                transparent={true}
                visible={searchHelp}
                onRequestClose={() => {
                    Alert.alert('Huỷ tìm kiếm!', 'Bạn có chắc muốn huỷ tìm kiếm?', [
                        {
                            text: 'Quay lại',
                            onPress: () => null,
                            style: 'cancel',
                        },
                        { text: 'Xác nhận huỷ', onPress: () => setSearchHelpfalse() },
                    ]);
                }}
            >
                <SearchingHelp handleOpenHelpInfo={handleOpenHelpInfo} setSearchHelpfalse={setSearchHelpfalse} />
            </Modal>
        </View>
    );
};

export default Help;
