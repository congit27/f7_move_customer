import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import WebSocketManager from '../../services/WebSocketManager';
import axios from 'axios';

import styles from './MapViewComponentStyles';

const MapViewComponent = ({ handleShowHelpInfo, showBtn }) => {
    const [customerLocation, setCustomerLocation] = useState(null);
    const [partnerLocation, setPartnerLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [routeData, setRouteData] = useState(null);
    const [loading, setLoading] = useState(true);

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

    useEffect(() => {
        const fetchRoute = async () => {
            if (partnerLocation && customerLocation) {
                const apiKey = '14W0x2W1ZCBpiFYpaedfKpDE70o91iKxslLyEfw2';
                try {
                    console.log(customerLocation.coords.longitude);
                    const response = await axios.get(
                        // `https://rsapi.goong.io/Direction?${customerLocation.coords.longitude},${customerLocation.coords.latitude};${partnerLocation.coords.longitude},${partnerLocation.coords.latitude}?key=${apiKey}`,
                        `https://rsapi.goong.io/Direction?origin=${customerLocation.coords.latitude},${customerLocation.coords.longitude}&destination=16.08166,108.21615&vehicle=car&api_key=${apiKey}`,
                    );

                    if (response.status === 200) {
                        setRouteData(response.data);
                    } else {
                        console.error('Error fetching directions API:', response.data.message);
                    }
                } catch (error) {
                    console.error('Error fetching directions API!:', error.message);
                }
            }
        };

        fetchRoute();
    }, [partnerLocation, customerLocation]);

    console.log(routeData);

    function decodePolyline(polyline) {
        var points = [];
        var index = 0,
            len = polyline.length;
        var lat = 0,
            lng = 0;

        while (index < len) {
            var b,
                shift = 0,
                result = 0;
            do {
                b = polyline.charCodeAt(index++) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);
            var dlat = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
            lat += dlat;

            shift = 0;
            result = 0;
            do {
                b = polyline.charCodeAt(index++) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);
            var dlng = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
            lng += dlng;

            points.push({
                latitude: lat / 1e5,
                longitude: lng / 1e5,
            });
        }
        return points;
    }

    return (
        <>
            {customerLocation ? (
                <>
                    <MapView
                        style={{ flex: 1 }}
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
                        />

                        {partnerLocation && (
                            <Marker
                                coordinate={{
                                    latitude: 16.08166, // partnerLocation.coords.latitude,
                                    longitude: 108.21615, //partnerLocation.coords.longitude,
                                }}
                                title="Partner's Location"
                            />
                        )}

                        {routeData && (
                            <Polyline
                                coordinates={decodePolyline(routeData.routes[0].overview_polyline.points)}
                                strokeWidth={4}
                                strokeColor="#4285F4" // Màu của lộ trình
                            />
                        )}
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
            ) : (
                <ActivityIndicator size="large" />
            )}
        </>
    );
};

export default MapViewComponent;
