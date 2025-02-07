import React from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Block, theme } from "galio-framework";

import { Card, Header } from ".";
import articles from "../constants/articles";
const { width } = Dimensions.get("screen");

class Article extends React.Component {
  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}
      >
        <Block flex center>
          {articles.map((article, index) => {
            return <Card item={article} key={index} />;
          })}
        </Block>
      </ScrollView>
    );
  };

  render() {
    const { navigation, scene, title } = this.props;
    return (
      <>
        <Block flex center style={styles.home}>
          {this.renderArticles()}
        </Block>
      </>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
    // backgroundColor: "#23173F"
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
    // backgroundColor: "#23173F"
  },
});

export default Article;
