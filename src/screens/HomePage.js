import React from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { FontAwesome, EvilIcons } from '@expo/vector-icons';

import ServiceSection from '../components/navigation/item/ServiceSection';
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
                <ServiceSection />
                <ServiceSection />
            </ScrollView>
        </View>
    );
};

export default HomePage;
