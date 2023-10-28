import React, { useState } from 'react';

import { View, Text, Modal } from 'react-native';

import styles from './ScreensStyles';
import MapViewComponent from '../components/mapView/MapViewComponent';
import HelpInfomation from './HelpInfomation';
import SearchingHelp from '../components/searchingHelp/SearchingHelp';
import RequestReceived from '../components/requestReceived/RequestReceived';
import PricePage from './pricePage/PricePage';

const Help = ({ navigation }) => {
    const [showMap, setShowMap] = useState(true);
    const [showHelpInfo, setShowHelpInfo] = useState(false);
    const [showSearching, setShowSearching] = useState(false);
    const [showReceived, setShowReceived] = useState(false);
    const [showPrice, setShowPrice] = useState(false);

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

    const handleCancelSearch = () => {
        setShowHelpInfo(true);
        setShowMap(false);
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
            {showMap && <MapViewComponent handleShowHelpInfo={handleShowHelpInfo} />}

            {showHelpInfo && <HelpInfomation handleCloseHelpInfo={handleCloseHelpInfo} handleSearch={handleSearch} />}

            {showSearching && <SearchingHelp handleCancelSearch={handleCancelSearch} />}

            {showReceived && <RequestReceived handleDirectToPrice={handleDirectToPrice} />}

            {showPrice && <PricePage />}
        </View>
    );
};

export default Help;
