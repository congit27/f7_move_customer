import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';

import styles from './PricePageStyles';
import Images from '../../../assets/Images';
import PriceItem from '../../components/PriceItem/PriceItem';

const PricePage = () => {
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
                <View style={styles.section}>
                    <Text style={styles.cateTitle}>
                        Hạng mục cần sửa<Text style={styles.colorRed}>*</Text>
                    </Text>
                    <View style={styles.cateItemContainer}>
                        <PriceItem title={'Thay Bugi(gồm 6-8 bánh)'} price={'800.000đ'} />
                        <PriceItem title={'Thay Bugi(gồm 6-8 bánh)'} price={'800.000đ'} />
                        <PriceItem title={'Thay Bugi(gồm 6-8 bánh)'} price={'800.000đ'} />
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.cateTitle}>
                        Hạng mục cần sửa<Text style={styles.colorRed}>*</Text>
                    </Text>
                    <View style={styles.cateItemContainer}>
                        <PriceItem title={'Thay Bugi(gồm 6-8 bánh)'} price={'800.000đ'} />
                        <PriceItem title={'Thay Bugi(gồm 6-8 bánh)'} price={'800.000đ'} />
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.cateTitle}>Chi tiết</Text>
                    <View style={styles.detailsContainer}>
                        <View style={styles.detailItem}>
                            <Text>Số hạng mục</Text>
                            <Text>2</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Text>Giá phụ kiện</Text>
                            <Text>2</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Text>Phí sửa</Text>
                            <Text>2</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Text>Thuế</Text>
                            <Text>2</Text>
                        </View>
                    </View>

                    <View style={styles.totalPriceContainer}>
                        <Text style={styles.cateTitle}>Tổng chi phí</Text>
                        <Text style={styles.totalPrice}>1.080.000đ</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.btnTextContainerDenied}>
                            <Text style={styles.btnText}>Từ chối</Text>
                        </TouchableOpacity>
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
