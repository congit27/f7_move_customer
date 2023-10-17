import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';

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
const HelpInfomation = ({ handleCloseHelpinfo }) => {
    //value dropdown
    const [value, setValue] = useState(null);

    return (
        <>
            <HeaderButton title="Nhập thông tin" handleCloseHelpinfo={handleCloseHelpinfo} />
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

                    <TouchableOpacity activeOpacity={0.8} style={styles.btnTextSendReqHelpContainer}>
                        <Text style={styles.btnText}>Gửi yêu cầu cứu hộ</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    );
};

export default HelpInfomation;
