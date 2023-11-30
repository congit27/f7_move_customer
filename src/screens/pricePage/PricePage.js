import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';

import styles from './PricePageStyles';
import Images from '../../../assets/Images';
import PriceItem from '../../components/priceItem/PriceItem';
import { io } from 'socket.io-client';

const socket = io('https://f7movebackend-production.up.railway.app/');

const PricePage = () => {
    const [costData, setCostData] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        try {
            socket.on('cost-notice-partner', (data) => setCostData(data));
        } catch (error) {
            console.log('socket error: ', error);
        }
    }, [socket]);

    useEffect(() => {
        let totaLabel = 0;
        if (costData) {
            costData.map((item) => {
                let keyss = Object.keys(item)[0];
                item[keyss].map((val) => {
                    totaLabel += val.price;
                });
            });
            setTotalCost(totaLabel);
        }
    });

    console.log('>>>>>Check data', costData);

    const config = { style: 'currency', currency: 'VND', maximumFractionDigits: 9 };
    const formated = new Intl.NumberFormat('vi-VN', config).format(totalCost);

    return (
        <View style={styles.container}>
            <View style={styles.partnerContainer}>
                <View style={styles.sectionLeft}>
                    <View style={styles.avatarContainer}>
                        <Image style={styles.avartarPartner} source={Images.favicon} />
                    </View>

                    <View style={styles.partnerInfoContainer}>
                        <Text style={styles.partnerName}>Trung Anh</Text>
                        <Text style={styles.compType}>Công ty lưu động</Text>
                        <Text style={styles.phoneNumb}>0705123456</Text>
                    </View>
                </View>
                <View style={styles.sectionRight}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.iconContainer}>
                        <AntDesign name="message1" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.iconContainer}>
                        <Entypo name="phone" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView style={styles.pricePageContainer}>
                {costData &&
                    costData.map((item) => (
                        <View key={Object.keys(item)[0]} style={styles.section}>
                            <Text style={styles.cateTitle}>
                                {Object.keys(item)[0]}
                                <Text style={styles.colorRed}>*</Text>
                            </Text>
                            <View style={styles.cateItemContainer}>
                                {item[Object.keys(item)[0]].map((val) => (
                                    <PriceItem title={val.value} price={val.price} />
                                ))}
                            </View>
                        </View>
                    ))}

                <View style={styles.section}>
                    <View style={styles.totalPriceContainer}>
                        <Text style={styles.cateTitle}>Tổng chi phí</Text>
                        <Text style={styles.totalPrice}>{formated}</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.btnTextContainer}>
                            <Text style={styles.btnText}>Chấp nhận</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default PricePage;
