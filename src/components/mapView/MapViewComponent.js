import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import WebSocketManager from '../../services/WebSocketManager';
import axios from 'axios';

import styles from './MapViewComponentStyles';

const MapViewComponent = ({ handleShowHelpInfo, showBtn }) => {
    const [customerLocation, setCustomerLocation] = useState(null);
    const [partnerLocation, setPartnerLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [routeData, setRouteData] = useState(null);

    const webSocketManager = new WebSocketManager();

    webSocketManager.receiveAcceptanceNotification((data) => {
        setPartnerLocation(data.location);
    });

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setCustomerLocation(location);
        })();
    }, []);

    // useEffect(() => {
    //     const fetchRoute = async () => {
    //         if (partnerLocation && customerLocation) {
    //             const apiKey = 'dXXxyyQIZRgRawqHkPHk6OTjHQVDJmHxLA2VZK4d';
    //             try {
    //                 const response = await axios.get(
    //                     // `https://rsapi.goong.io/Direction?${customerLocation.coords.longitude},${customerLocation.coords.latitude};${partnerLocation.coords.longitude},${partnerLocation.coords.latitude}?key=${apiKey}`,
    //                     'https://rsapi.goong.io/DistanceMatrix?origins=20.981971,105.864323&destinations=21.031011,105.783206%7C21.022328,105.790480%7C21.016665,105.788774&vehicle=car&api_key={dXXxyyQIZRgRawqHkPHk6OTjHQVDJmHxLA2VZK4d}',
    //                 );

    //                 if (response.data.code === 'Ok') {
    //                     setRouteData(response.data);
    //                 } else {
    //                     console.error('Error fetching directions API:', response.data.message);
    //                 }
    //             } catch (error) {
    //                 console.error('Error fetching directions API:', error.message);
    //             }
    //         }
    //     };

    //     fetchRoute();
    // }, [partnerLocation, customerLocation]);

    return (
        <>
            {customerLocation && (
                <>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: customerLocation.coords.latitude,
                            longitude: customerLocation.coords.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                        <Marker
                            coordinate={{
                                latitude: customerLocation.coords.latitude,
                                longitude: customerLocation.coords.longitude,
                            }}
                            title="Your Location"
                            description="You are here!"
                        ></Marker>
                        {partnerLocation && (
                            <Marker
                                coordinate={{
                                    latitude: 16.08166, //partnerLocation.coords.latitude
                                    longitude: 108.21615, //partnerLocation.coords.longitude,
                                }}
                                title="Partner's Location"
                                description="Partner is here!"
                            ></Marker>
                        )}
                        {/* {routeData && (
                            <MapView.Polyline
                                coordinates={routeData.routes[0].geometry.coordinates.map((coord) => ({
                                    latitude: coord[1],
                                    longitude: coord[0],
                                }))}
                                strokeWidth={4}
                                strokeColor="#4285F4" // Màu của lộ trình
                            />
                        )} */}
                    </MapView>

                    {showBtn && (
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.btnTextContainer}
                            onPress={() => handleShowHelpInfo()}
                        >
                            <Text style={styles.btnText}>Yêu cầu cứu hộ</Text>
                        </TouchableOpacity>
                    )}
                </>
            )}
        </>
    );
};

export default MapViewComponent;
