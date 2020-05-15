import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Colors from "../../constants/Colors";
import { Container, Header, Content, Card, CardItem, Body } from "native-base";
import { SecondaryTitle, AddressText, TagsText } from "../atoms/StyledText";
import { TouchableOpacity } from "react-native-gesture-handler";
import { PriceIcon, WheelchairIcon, SuggestionIcon } from "../atoms/CardIcons";

export const CardList = (props) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Card style={{ position: "relative" }}>
        <View style={styles.greenscore}>
          <Image
            source={require("../../assets/images/greenscore.png")}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: "contain",
            }}
          />
          <SecondaryTitle style={{ textAlign: "center" }}>
            {props.greenscore}%
          </SecondaryTitle>
        </View>
        <CardItem cardBody>
          <Image
            source={require("../../assets/images/image_test.png")}
            style={{ height: 100, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Body>
            <SecondaryTitle>{props.name}</SecondaryTitle>
            <AddressText>{props.address}</AddressText>
            <View style={{ flexDirection: "row" }}>
              {props.tags.map((tag, i) => (
                <TagsText key={i} style={{ marginRight: 8 }}>
                  #{tag}
                </TagsText>
              ))}
            </View>
            <View style={styles.infosContainer}>
              <View style={styles.infos}>
                <PriceIcon focused={props.price >= 1} />
                <PriceIcon focused={props.price >= 2} />
                <PriceIcon focused={props.price >= 3} />
              </View>
              <View style={styles.infos}>
                <WheelchairIcon focused={props.accessibility} />
              </View>
              {props.suggestionRate && (
                <View style={styles.infos}>
                  <SuggestionIcon suggestionRate={props.suggestionRate} />
                </View>
              )}
            </View>
          </Body>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  contentContainer: {
    justifyContent: "center",
    paddingTop: 30,
  },
  infosContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  infos: {
    flexDirection: "row",
    marginRight: 30,
  },
  greenscore: {
    width: 70,
    height: 70,
    position: "absolute",
    zIndex: 2,
    top: -10,
    left: -10,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    justifyContent: "center",
  },
});