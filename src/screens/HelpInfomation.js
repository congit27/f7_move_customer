import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, BackHandler, TouchableOpacity, Alert } from 'react-native';
import io from 'socket.io-client';
import * as Location from 'expo-location';
import styles from './ScreensStyles';
import HeaderButton from '../components/headerButton/HeaderButton';
import { Dropdown } from 'react-native-element-dropdown';

//data dropdown test
const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];
const HelpInfomation = ({ handleCloseHelpInfo, handleSearch }) => {
    const socket = io('https://railwaytest-production-a531.up.railway.app/');
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);
    //value dropdown
    const [value, setValue] = useState(null);

    useEffect(() => {
        const backAction = () => {
            Alert.alert('Quay lại!', 'Bạn có chắc chắn. (toàn bộ dữ liệu bạn nhập sẽ mất)', [
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel',
                },
                { text: 'YES', onPress: () => handleCloseHelpInfo() },
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

        return () => backHandler.remove();
    }, []);


    const handleSendRequest = () => {
        console.log('Send request, location: ', location);
        socket.emit('rescue-request', { message: 'Yêu cầu cứu hộ từ Cong!', location: location });
        handleCloseHelpInfo();
        handleSearch();
    };

    return (
        <>
            <HeaderButton title="Nhập thông tin" handleClose={handleCloseHelpInfo} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={styles.helpInfoContainer}
            >
                <Text style={styles.helpInfoTitleSection}>Thông tin cá nhân</Text>
                <View style={styles.helpInfoInputContainer}>
                    <Text style={styles.helpInfoInputLabel}>
                        Họ và tên<Text style={styles.colorRed}>*</Text>
                    </Text>
                    <TextInput style={styles.helpInfoInput} placeholder="Nhập họ tên..." />
                </View>

                <View style={styles.helpInfoInputContainer}>
                    <Text style={styles.helpInfoInputLabel}>
                        Số điện thoại<Text style={styles.colorRed}>*</Text>
                    </Text>
                    <TextInput style={styles.helpInfoInput} placeholder="Số điện thoại..." />
                </View>

                <View style={styles.helpInfoInputContainer}>
                    <Text style={styles.helpInfoInputLabel}>
                        Địa chỉ<Text style={styles.colorRed}>*</Text>
                    </Text>
                    <TextInput style={styles.helpInfoInput} placeholder="Địa chỉ..." />
                </View>

                <View style={styles.helpInfoInputContainer}>
                    <Text style={styles.helpInfoInputLabel}>
                        Nội dung tình trạng<Text style={styles.colorRed}>*</Text>
                    </Text>
                    <View style={styles.helpInfoTextAreaContainer}>
                        <TextInput
                            style={styles.helpInfoTextArea}
                            underlineColorAndroid="transparent"
                            placeholder="Nhập lý do tình trạng"
                            placeholderTextColor="grey"
                            numberOfLines={10}
                            multiline={true}
                        />
                    </View>
                </View>
                <Text style={styles.helpInfoTitleSection}>Thông tin xe</Text>
                <View style={styles.helpInfoInputContainer}>
                    <Text style={styles.helpInfoInputLabel}>
                        Hãng xe<Text style={styles.colorRed}>*</Text>
                    </Text>
                    <Dropdown
                        style={styles.dropdown}
                        data={data}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Chọn hãng xe"
                        // value={value}
                        onChange={(item) => {
                            setValue(item.value);
                        }}
                    />
                </View>

                <View style={styles.doubleFieldInput}>
                    <View style={styles.helpInfoInputContainer}>
                        <Text style={styles.helpInfoInputLabel}>
                            Loại xe<Text style={styles.colorRed}>*</Text>
                        </Text>
                        <Dropdown
                            style={styles.dropdown}
                            data={data}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder="Loại xe"
                            // value={value}
                            onChange={(item) => {
                                setValue(item.value);
                            }}
                        />
                    </View>
                    <View style={styles.helpInfoInputContainer}>
                        <Text style={styles.helpInfoInputLabel}>
                            Màu sắc<Text style={styles.colorRed}>*</Text>
                        </Text>
                        <Dropdown
                            style={styles.dropdown}
                            data={data}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder="Màu sắc"
                            // value={value}
                            onChange={(item) => {
                                setValue(item.value);
                            }}
                        />
                    </View>
                </View>

                <View style={styles.helpInfoInputContainer}>
                    <Text style={styles.helpInfoInputLabel}>
                        Biển số<Text style={styles.colorRed}>*</Text>
                    </Text>
                    <TextInput style={styles.helpInfoInput} placeholder="vd: 43A-15385..." />

                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.btnTextSendReqHelpContainer}
                        onPress={handleSendRequest}
                    >
                        <Text style={styles.btnText}>Gửi</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    );
};

export default HelpInfomation;
