import { StyleSheet, Text, View, ScrollView, Pressable, ImageBackground } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import BrandImage1 from '../../../assets/ItemBrand/oto1.png';
import BrandImage2 from '../../../assets/ItemBrand/oto2.jpg';
import BrandImage3 from '../../../assets/ItemBrand/oto3.png';
import BrandImage4 from '../../../assets/ItemBrand/oto4.png';

const BrandSale = () => {
    const data = [
        {
            id: '0',
            image: BrandImage1,
            name: 'LANHA auto',
            rating: "5.0",
            role: 'ĐỐI TÁC CỦA F7',
            far: '15',
        },
        {
            id: '1',
            image: BrandImage2,
            name: 'Xế Cưng SHOP',
            rating: "5.0",
            role: 'ĐỐI TÁC CỦA F7',
            far: '20',
        },
        {
            id: '2',
            image: BrandImage3,
            name: 'Thủ đô Garage',
            rating: "5.0",
            role: 'ĐỐI TÁC CỦA F7',
            far: '25',
        },
        {
            id: '3',
            image: BrandImage4,
            name: 'Hiệp Cường Auto',
            rating: "5.0",
            role: 'ĐỐI TÁC CỦA F7',
            far: '15',
        },
    ];
    return (
        <View style={{ margin: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: '500' }}>Thương hiệu ưu đãi</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {data.map((item, index) => (
                    <Pressable style={{ marginTop: 10, marginRight: 15, borderRadius: 20 }} key={index}>
                        <ImageBackground
                            imageStyle={{ borderRadius: 6 }}
                            style={{ aspectRatio: 7 / 7, height: 150 }}
                            source={item.image}
                        ></ImageBackground>
                        <Text style={{ marginTop: 10, fontSize: 13, fontWeight: '500', color: '#3A4D39' }}>
                            {item.role}
                        </Text>
                        <Text style={{ marginTop: 3, fontSize: 16, fontWeight: '900' }}>{item.name}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 3 }}>
                            <MaterialIcons name="stars" size={24} color="green" />
                            <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: '400' }}>{item.rating}</Text>
                            <Text style={{ marginLeft: 'auto', fontSize: 15, fontWeight: '400' }}>{item.far} km</Text>
                        </View>
                    </Pressable>
                ))}
            </ScrollView>
        </View>
    );
};

export default BrandSale;

const styles = StyleSheet.create({});
