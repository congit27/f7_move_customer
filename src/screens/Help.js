import React, { useState } from 'react';
import { View } from 'react-native';

import styles from './ScreensStyles';
import MapViewComponent from '../components/mapView/MapViewComponent';
import HelpInformation from './HelpInformation';
import SearchingHelp from '../components/searchingHelp/SearchingHelp';
import NotificationAlert from '../components/notificationAlert/NotificationAlert';
import RequestReceived from '../components/requestReceived/RequestReceived';
import PricePage from './pricePage/PricePage';
import WebSocketManager from '../services/WebSocketManager';
import { io } from 'socket.io-client';

const socket = io('https://railwaytest-production-1ca0.up.railway.app/');

const Help = ({ navigation }) => {
    const [showMap, setShowMap] = useState(true);
    const [showHelpInfo, setShowHelpInfo] = useState(false);
    const [showSearching, setShowSearching] = useState(false);
    const [showReceived, setShowReceived] = useState(false);
    const [showPrice, setShowPrice] = useState(false);
    const [showNotificationAlert, setShowNotificationAlert] = useState(false);

    const webSocketManager = new WebSocketManager();

    webSocketManager.receiveComingNotification((data) => {
        if (data.isCome) {
            setShowNotificationAlert(true);
            setShowSearching(false);
        }
    });

    webSocketManager.receiveCostNotice((data) => {
        if (true) {
            setShowPrice(true);
        }
    });

    const handleShowHelpInfo = () => {
        setShowMap(false);
        setShowHelpInfo(true);
    };

    const handleCloseHelpInfo = () => {
        setShowMap(true);
        setShowHelpInfo(false);
    };

    const handleSearch = () => {
        setShowSearching(true);
    };

    // Xử lí hủy tìm kiếm
    const handleCancelSearch = () => {
        socket.emit('cancel_help', { message: 'Cancel from Customer!' });

        setShowHelpInfo(true);
        setShowMap(false);
        setShowSearching(false);
    };

    const handleAccept = () => {
        setShowHelpInfo(false);
        setShowMap(true);
        setShowSearching(false);
    };

    const handleShowNotificationAlert = () => {
        setShowNotificationAlert(true);
        setShowSearching(false);
    };

    const handleDirectToPrice = () => {
        setShowPrice(true);
        setShowMap(false);
        setShowReceived(false);
    };

    return (
        <View style={styles.helpContainer}>
            {/* >>> screen map */}

            {showMap && <MapViewComponent handleShowHelpInfo={handleShowHelpInfo} showBtn={true} />}

            {showHelpInfo && <HelpInformation handleCloseHelpInfo={handleCloseHelpInfo} handleSearch={handleSearch} />}

            {showNotificationAlert && <NotificationAlert handleShowNotificationAlert={handleShowNotificationAlert} />}

            {showSearching && <SearchingHelp handleAccept={handleAccept} handleCancelSearch={handleCancelSearch} />}

            {showReceived && <RequestReceived handleDirectToPrice={handleDirectToPrice} />}

            {showPrice && <PricePage />}
        </View>
    );
};

export default Help;
