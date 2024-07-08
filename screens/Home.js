import React from "react";
import Article from "../components/Article";
// import ImageCarousel from "../components/ImageCarousel";
import { StyleSheet } from "react-native";
class Home extends React.Component {
  render() {
    const data = [
      {
        url: "https://via.placeholder.com/300.png/09f/fff",
        caption: "Image 1",
      },
      {
        url: "https://via.placeholder.com/300.png/021/fff",
        caption: "Image 2",
      },
      {
        url: "https://via.placeholder.com/300.png/321/fff",
        caption: "Image 3",
      },
    ];

    const { navigation, scene } = this.props;
    return (
      // <View style={styles.container}>
      <>
        {/* <ImageCarousel data={data} /> */}
        <Article navigation={navigation} scene={scene} />
      </>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
