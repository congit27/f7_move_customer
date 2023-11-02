import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

import Carousel1 from '../../../assets/ItemCarousel/carousel1.jpg'
import Carousel2 from '../../../assets/ItemCarousel/carousel2.jpg'
import Carousel3 from '../../../assets/ItemCarousel/carousel3.jpg'

const Carousel = () => {
  const images = [
    Carousel1,
    Carousel2,
    Carousel3,
  ];

  return (
    <View>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor="#13274F"
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{
            borderRadius:6,
            width:"100%"
        }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});