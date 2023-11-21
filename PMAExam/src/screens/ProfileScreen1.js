import * as React from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
} from "react-native";

function MyComponent(props) {
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2b6173f8-56e6-44af-bb75-d25b59bbfb37?",
          }}
          style={styles.image1}
        />
        <View style={styles.view3}>
          <Text>Profile</Text>
        </View>
      </View>
      <View style={styles.view4}>
        <View style={styles.view5}>
          <Text>
            Hello My name is Hans Christian, I like to note down every time i
            rub one out!Also I have a thing for sea-creatures
          </Text>
        </View>
        <View style={styles.view6}>
          <View style={styles.view7}>
            <Text>Eco-Level</Text>
          </View>
          <View style={styles.view8}>
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/1d19e79b-cf4d-4ccd-b3f1-4cea3ebe3115?",
              }}
              style={styles.image2}
            />
            <View style={styles.view9}>
              <Text>ECO Overlord</Text>
            </View>
          </View>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/a1218a40-46e8-427d-9b98-fccf794aa811?",
            }}
            style={styles.image3}
          />
        </View>
      </View>
      <View style={styles.view10}>
        <View style={styles.view11}>
          <Text>Visited attraction</Text>
        </View>
        <View style={styles.view12}>
          <Text>The little mermaid</Text>
        </View>
        <View style={styles.view13}>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/65d0815f-bb62-4691-9509-4c0dda405dc0?",
            }}
            style={styles.image4}
          />
          <Image
            resizeMode="contain"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/74fb3256-db1e-4852-b357-66cc7d7bd4fd?",
            }}
            style={styles.image5}
          />
        </View>
        <View style={styles.view14}>
          <Text>See details</Text>
        </View>
      </View>
      <View style={styles.view15}>
        <View style={styles.view16}>
          <View style={styles.view17}>
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c6959b0f-75b6-4e83-99fd-a67dd1885291?",
              }}
              style={styles.image6}
            />
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/8cb4b9fd-aa53-47e2-9942-67d17ffa6bb4?",
              }}
              style={styles.image7}
            />
          </View>
          <View style={styles.view18}>
            <View style={styles.view19}>
              <Text>Overview</Text>
            </View>
            <View style={styles.view20}>
              <Text>Map</Text>
            </View>
          </View>
        </View>
        <View style={styles.view21}>
          <View style={styles.view22}>
            <Text>+</Text>
          </View>
        </View>
        <View style={styles.view23}>
          <View style={styles.view24}>
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/3baeeda4-6fb4-4b90-ac17-501cba0455d2?",
              }}
              style={styles.image8}
            />
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/b910be92-b102-4ff7-be9c-8f3e26fe3c0e?",
              }}
              style={styles.image9}
            />
          </View>
          <View style={styles.view25}>
            <View style={styles.view26}>
              <Text>Leaderboard</Text>
            </View>
            <View style={styles.view27}>
              <Text>Profile </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    backgroundColor: "#F5F1ED",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },
  view2: {
    border: "1px solid #000",
    backgroundColor: "#F5F1ED",
    display: "flex",
    width: "100%",
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 20,
    padding: "8px 80px 8px 16px",
  },
  image1: {
    overflow: "hidden",
    borderRadius: "50%",
    position: "relative",
    display: "flex",
    flexShrink: 0,
    flexDirection: "column",
    flex: "1",
    aspectRatio: "1",
  },
  view3: {
    justifyContent: "center",
    color: "#688A6F",
    textAlign: "center",
    alignSelf: "center",
    flexGrow: "1",
    flexShrink: "1",
    flexBasis: "auto",
    margin: "auto 0",
    font: "700 32px/39px Inter, sans-serif ",
  },
  view4: {
    border: "1px solid #000",
    backgroundColor: "#F5F1ED",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    padding: "35px 42px 50px 43px",
  },
  view5: {
    justifyContent: "center",
    color: "#000",
    textAlign: "center",
    font: "400 16px/20px Inter, sans-serif ",
  },
  view6: {
    alignSelf: "center",
    display: "flex",
    width: 258,
    maxWidth: "100%",
    alignItems: "start",
    gap: 6,
    margin: "136px 0 28px",
  },
  view7: {
    color: "#000",
    textAlign: "center",
    alignSelf: "end",
    marginTop: 109,
    font: "700 16px/19px Inter, sans-serif ",
  },
  view8: {
    display: "flex",
    flexGrow: "1",
    flexBasis: "0%",
    flexDirection: "column",
    alignItems: "center",
  },
  image2: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 96,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1",
  },
  view9: {
    color: "#7EAE80",
    textAlign: "center",
    alignSelf: "stretch",
    marginTop: 12,
    whiteSpace: "nowrap",
    font: "700 20px/24px Inter, sans-serif ",
  },
  image3: {
    fill: "#B3B3B3",
    mixBlendMode: "color-burn",
    overflow: "hidden",
    alignSelf: "end",
    position: "relative",
    display: "flex",
    marginTop: 104,
    width: 24,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1",
  },
  view10: {
    display: "flex",
    marginTop: 55,
    width: "100%",
    flexDirection: "column",
    padding: "0 24px 0 25px",
  },
  view11: {
    color: "#000",
    textAlign: "center",
    alignSelf: "stretch",
    whiteSpace: "nowrap",
    font: "700 20px/24px Inter, sans-serif ",
  },
  view12: {
    color: "#000",
    textAlign: "center",
    alignSelf: "center",
    marginTop: 25,
    whiteSpace: "nowrap",
    font: "400 16px/19px Inter, sans-serif ",
  },
  view13: {
    alignSelf: "start",
    display: "flex",
    alignItems: "stretch",
    gap: 2,
    margin: "11px 0 0 15px",
  },
  image4: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 162,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "0.75",
  },
  image5: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 162,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "0.75",
  },
  view14: {
    color: "#688A6F",
    textAlign: "center",
    whiteSpace: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    border: "4px solid #688A6F",
    alignSelf: "start",
    margin: "9px 0 0 15px",
    padding: "15px 20px",
    font: "700 20px/24px Inter, sans-serif ",
  },
  view15: {
    backgroundColor: "#E9E9E9",
    display: "flex",
    marginTop: 45,
    width: "100%",
    alignItems: "start",
    justifyContent: "space-between",
    gap: 14,
    padding: "-37px 22px 10px 15px",
  },
  view16: {
    alignSelf: "end",
    zIndex: "1",
    display: "flex",
    marginTop: 57,
    flexGrow: "1",
    flexBasis: "0%",
    flexDirection: "column",
    alignItems: "stretch",
  },
  view17: {
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 20,
  },
  image6: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 31,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1.07",
  },
  image7: {
    overflow: "hidden",
    alignSelf: "start",
    position: "relative",
    display: "flex",
    width: 29,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1.12",
  },
  view18: {
    display: "flex",
    alignItems: "start",
    justifyContent: "space-between",
    gap: 20,
  },
  view19: {
    justifyContent: "center",
    color: "#000",
    textAlign: "center",
    font: "400 10px/20px Inter, sans-serif ",
  },
  view20: {
    justifyContent: "center",
    color: "#000",
    textAlign: "center",
    alignSelf: "stretch",
    font: "400 10px/20px Inter, sans-serif ",
  },
  view21: {
    borderRadius: "50%",
    display: "flex",
    flexGrow: "1",
    flexBasis: "0%",
    flexDirection: "column",
    alignItems: "stretch",
    padding: 11,
  },
  view22: {
    justifyContent: "center",
    color: "#E9E9E9",
    textAlign: "center",
    borderRadius: "50%",
    aspectRatio: "1",
    alignItems: "stretch",
    padding: "10px 11px 17px",
    font: "400 48px/58px Inter, sans-serif ",
  },
  view23: {
    alignSelf: "end",
    display: "flex",
    marginTop: 56,
    flexGrow: "1",
    flexBasis: "0%",
    flexDirection: "column",
    alignItems: "start",
  },
  view24: {
    display: "flex",
    marginLeft: 15,
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 20,
  },
  image8: {
    fill: "#111",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 28,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1",
  },
  image9: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 31,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1.07",
  },
  view25: {
    alignSelf: "stretch",
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 20,
  },
  view26: {
    justifyContent: "center",
    color: "#000",
    textAlign: "center",
    font: "400 10px/20px Inter, sans-serif ",
  },
  view27: {
    justifyContent: "center",
    color: "#688A6F",
    textAlign: "center",
    font: "700 10px/20px Inter, sans-serif ",
  },
});

