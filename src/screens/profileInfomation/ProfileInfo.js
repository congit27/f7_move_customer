import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, AntDesign, Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons';

import Images from '../../../assets/Images';
import styles from './ProfileInfoStyles';

const ProfileInfo = ({ setShowProfPage, setShowEditPage }) => {
    const handleNavToEdit = () => {
        setShowProfPage(false);
        setShowEditPage(true);
    };

    return (
        <View style={styles.profContainer}>
            <View style={styles.profbody}>
                <Image style={styles.profAvatar} source={Images.favicon} />
                <Text style={styles.profName}>Trung Anh</Text>
                <Text style={styles.profPhone}>034567892</Text>
                <TouchableOpacity onPress={handleNavToEdit} activeOpacity={0.8} style={styles.profBtnCont}>
                    <Text style={styles.profBtnText}>Edit</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.profNav}>
                <TouchableOpacity activeOpacity={0.5} style={styles.profNavItemCont}>
                    <View style={styles.profNavItem}>
                        <View style={styles.profNavItemTitle}>
                            <MaterialCommunityIcons name="garage" size={24} color="black" />
                            <Text style={styles.profNavItemTitleT}>Garage</Text>
                        </View>
                        <AntDesign name="right" size={24} color="black" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} style={styles.profNavItemCont}>
                    <View style={styles.profNavItem}>
                        <View style={styles.profNavItemTitle}>
                            <Ionicons name="notifications-circle" size={24} color="black" />
                            <Text style={styles.profNavItemTitleT}>Notifications</Text>
                        </View>
                        <AntDesign name="right" size={24} color="black" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} style={styles.profNavItemCont}>
                    <View style={styles.profNavItem}>
                        <View style={styles.profNavItemTitle}>
                            <AntDesign name="questioncircle" size={24} color="black" />
                            <Text style={styles.profNavItemTitleT}>FaQs</Text>
                        </View>
                        <AntDesign name="right" size={24} color="black" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} style={styles.profNavItemCont}>
                    <View style={styles.profNavItem}>
                        <View style={styles.profNavItemTitle}>
                            <MaterialIcons name="support-agent" size={24} color="black" />
                            <Text style={styles.profNavItemTitleT}>Support ad Help</Text>
                        </View>
                        <AntDesign name="right" size={24} color="black" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} style={styles.profNavItemCont}>
                    <View style={styles.profNavItem}>
                        <View style={styles.profNavItemTitle}>
                            <Entypo name="log-out" size={24} color="black" />
                            <Text style={styles.profNavItemTitleT}>Log out</Text>
                        </View>
                        <AntDesign name="right" size={24} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ProfileInfo;
