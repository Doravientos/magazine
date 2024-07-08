import React from "react";
import { Text, Dimensions, Image, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";

const { width: screenWidth } = Dimensions.get("window");

const ImageCarousel = ({ data }) => {
  const renderItem = ({ item }) => (
    // <View style={styles.itemContainer}>
    <>
      <Image source={{ uri: item.url }} style={styles.image} />
      <Text style={styles.caption}>{item.caption}</Text>
    </>
    // </View>
  );

  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={screenWidth}
      itemWidth={screenWidth - 60}
      layout={"default"}
      autoplay={true}
      loop={true}
      autoplayDelay={1000}
      autoplayInterval={3000}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    height: 250,
    padding: 10,
    marginLeft: 25,
    marginRight: 25,
  },
  image: {
    width: "100%",
    height: "80%",
    borderRadius: 8,
  },
  caption: {
    textAlign: "center",
    marginTop: 10,
  },
});

export default ImageCarousel;
