import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './MapViewComponentStyles';

const MapViewComponent = ({ handleShowHelpInfo }) => {
    const socket = io('https://railwaytest-production-a531.up.railway.app/');
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

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

    return (
        <>
            {location && (
                <>
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

                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.btnTextContainer}
                        onPress={() => handleShowHelpInfo()}
                    >
                        <Text style={styles.btnText}>Yêu cầu cứu hộ</Text>
                    </TouchableOpacity>
                </>
            )}
        </>
    );
};

export default MapViewComponent;
