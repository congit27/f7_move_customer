import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import io from 'socket.io-client';
import styles from './EditProfileStyles';
import Images from '../../../assets/Images';
import BackTopbar from '../../components/backTopbar/BackTopbar';

const EditProfile = ({ editBackToInfo }) => {
    const socket = io('http://192.168.0.102:3000');
    const HandleTest = () => {
        console.log('Test thông báo');
        socket.emit('new-notification', { message: 'Lưu profile thành công' });
    };
    return (
        <View style={styles.container}>
            <BackTopbar editBackToInfo={editBackToInfo} />
            <ScrollView automaticallyAdjustKeyboardInsets={true}>
                <View style={styles.profContainer}>
                    <View style={styles.avatarCont}>
                        <Image style={styles.profAvatar} source={Images.favicon} />
                        <TouchableOpacity activeOpacity={0.8} style={styles.iconChangeContainer}>
                            <MaterialIcons name="published-with-changes" size={24} color="black" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inputContainer}>
                        <Text>Name</Text>
                        <TextInput style={styles.input} placeholder="Name..." />
                        <Text>Email</Text>
                        <TextInput style={styles.input} placeholder="Email..." />
                        <Text>Phone number</Text>
                        <TextInput style={styles.input} placeholder="Phone number..." keyboardType="numeric" />
                    </View>

                    <TouchableOpacity onPress={HandleTest} activeOpacity={0.3} style={styles.btnTextContainer}>
                        <Text style={styles.btnText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default EditProfile;
