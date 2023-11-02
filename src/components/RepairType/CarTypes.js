import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

import SuaChuaImage from '../../../assets/ItemService/car.png'
import BaoDuongImage from '../../../assets/ItemService/carService.png'
import PhuTungImage from '../../../assets/ItemService/timing-belt.png'
import BaoHiemImage from '../../../assets/ItemService/protection.png'
import MamLopImage from '../../../assets/ItemService/racing.png'


const CarTypes = () => {
  const types = [
    {
      id: "0",
      image: SuaChuaImage,
      name: "Sửa chữa",
    },
    {
      id: "1",
      image: BaoDuongImage,
      name: "Bảo dưỡng"
    },
    {
      id: "2",
      image: PhuTungImage,
      name: "Phụ tùng"
    },
    {
      id: "3",
      image: BaoHiemImage,
      name: "Bảo hiểm",
    },
    {
      id: "4",
      image: MamLopImage,
      name: "Mâm lốp"
    }
  ]

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {types.map((item, index) => (
          <View style={styles.itemContainer} key={index}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    margin: 15,
    alignItems: "center", // Căn giữa theo chiều ngang
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  text: {
    fontSize: 12,
    marginTop: 6,
    textAlign: "center",
  },
})

export default CarTypes
