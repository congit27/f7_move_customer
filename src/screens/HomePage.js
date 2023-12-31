import React from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { FontAwesome, EvilIcons } from '@expo/vector-icons';

import Carousel from '../components/Carousel/Carousel';
import CarTypes from '../components/RepairType/CarTypes';
import BrandSale from '../components/BrandSale/BrandSale';
import styles from './ScreensStyles';

const HomePage = ({ navigation }) => {
    return (
        <View style={styles.homeContainer}>
            <View style={styles.locationContainer}>
                <FontAwesome style={styles.locationIcon} name="map-marker" size={24} color="black" />
                <Text>23 Nguyễn Văn Linh</Text>
            </View>
            <View style={styles.inputContainer}>
                <EvilIcons name="search" size={24} color="black" />
                <TextInput style={styles.searchInput} placeholder="Tìm kiếm..." keyboardType="numeric" />
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={styles.serviceContainer}
            >
                {/* Phần carousel */}
                <Carousel />
                {/* Phần CarTypes */}
                <CarTypes />
                <BrandSale />
            </ScrollView>
        </View>
    );
};

export default HomePage;
