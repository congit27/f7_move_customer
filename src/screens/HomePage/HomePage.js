import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import * as Location from 'expo-location';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

import Images from '../../../assets/Images';
import styles from './HomePageStyles';

const HomePage = () => {
    const socket = io('http://192.168.0.102:3000');
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [address, setAddress] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            let address = await Location.reverseGeocodeAsync(location.coords);
            setLocation(location);

            // convert location => desc address
            if (location.coords) {
                let add = await Location.reverseGeocodeAsync(location.coords);
                setAddress(add[0]);
            }
        })();
    }, []);

    // Xử lý sự kiện khi người dùng click vào nút
    const handleSendRequest = () => {
        console.log('Send request, location: ', address);
        socket.emit('rescue-request', { message: 'Yêu cầu cứu hộ từ Cong!', position: address });
    };

    return (
        <View style={styles.container}>
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
            <TouchableOpacity activeOpacity={0.8} style={styles.btnTextContainer} onPress={handleSendRequest}>
                <Text style={styles.btnText}>Gửi yêu cầu cứu hộ</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomePage;
