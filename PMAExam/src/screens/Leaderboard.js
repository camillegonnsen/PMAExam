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
        <Text>Leaderboard</Text>
      </View>
      <View style={styles.view3}>
        <Text>The most green activities you can do in the city</Text>
      </View>
      <View style={styles.view4}>
        <View style={styles.view5}>
          <View style={styles.view6}>
            <Text>
              <ul>
                <li>Kastellet</li>
              </ul>
            </Text>
          </View>
          <View style={styles.view7}>
            <Text>Visit attraction</Text>
          </View>
        </View>
        <View style={styles.view8}>
          <Text> 99 %</Text>
        </View>
      </View>
      <View style={styles.view9} />
      <View style={styles.view10}>
        <View style={styles.view11}>
          <View style={styles.view12}>
            <Text>
              <ul>
                <li>Søerne</li>
              </ul>
            </Text>
          </View>
          <View style={styles.view13}>
            <Text>Visit attraction</Text>
          </View>
        </View>
        <View style={styles.view14}>
          <Text> 99 %</Text>
        </View>
      </View>
      <View style={styles.view15} />
      <View style={styles.view16}>
        <View style={styles.view17}>
          <View style={styles.view18}>
            <Text>
              <ul>
                <li>Biblotekshaven</li>
              </ul>
            </Text>
          </View>
          <View style={styles.view19}>
            <Text>Visit attraction</Text>
          </View>
        </View>
        <View style={styles.view20}>
          <Text> 98 %</Text>
        </View>
      </View>
      <View style={styles.view21} />
      <View style={styles.view22}>
        <View style={styles.view23}>
          <View style={styles.view24}>
            <Text>
              <ul>
                <li>Amager fællede</li>
              </ul>
            </Text>
          </View>
          <View style={styles.view25}>
            <Text>Visit attraction</Text>
          </View>
        </View>
        <View style={styles.view26}>
          <Text> 98 %</Text>
        </View>
      </View>
      <View style={styles.view27} />
      <View style={styles.view28}>
        <View style={styles.view29}>
          <View style={styles.view30}>
            <Text>
              <ul>
                <li>Islands brygge</li>
              </ul>
            </Text>
          </View>
          <View style={styles.view31}>
            <Text>Visit attraction</Text>
          </View>
        </View>
        <View style={styles.view32}>
          <Text> 95 %</Text>
        </View>
      </View>
      <View style={styles.view33} />
      <View style={styles.view34}>
        <View style={styles.view35}>
          <View style={styles.view36}>
            <Text>
              <ul>
                <li>Fælledparken</li>
              </ul>
            </Text>
          </View>
          <View style={styles.view37}>
            <Text>Visit attraction</Text>
          </View>
        </View>
        <View style={styles.view38}>
          <Text> 94 %</Text>
        </View>
      </View>
      <View style={styles.view39} />
      <View style={styles.view40}>
        <View style={styles.view41}>
          <View style={styles.view42}>
            <Text>
              <ul>
                <li>The little mermaid</li>
              </ul>
            </Text>
          </View>
          <View style={styles.view43}>
            <Text>Visit attraction</Text>
          </View>
        </View>
        <View style={styles.view44}>
          <Text> 93 %</Text>
        </View>
      </View>
      <View style={styles.view45} />
      <View style={styles.view46}>
        <View style={styles.view47}>
          <View style={styles.view48}>
            <Text>
              <ul>
                <li>Vor frue kirke</li>
              </ul>
            </Text>
          </View>
          <View style={styles.view49}>
            <Text>Visit attraction</Text>
          </View>
        </View>
        <View style={styles.view50}>
          <Text> 93 %</Text>
        </View>
      </View>
      <View style={styles.view51} />
      <View style={styles.view52}>
        <View style={styles.view53}>
          <View style={styles.view54}>
            <Text>
              <ul>
                <li>Marmorkirken</li>
              </ul>
            </Text>
          </View>
          <View style={styles.view55}>
            <Text>Visit attraction</Text>
          </View>
        </View>
        <View style={styles.view56}>
          <Text> 93 %</Text>
        </View>
      </View>
      <View style={styles.view57} />
      <View style={styles.view58}>
        <View style={styles.view59}>
          <View style={styles.view60}>
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/909771a8-077c-4921-9d74-bc0f60f4a9e4?",
              }}
              style={styles.image1}
            />
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0a657fc0-f644-45f1-a14e-2fd34fecba4e?",
              }}
              style={styles.image2}
            />
          </View>
          <View style={styles.view61}>
            <View style={styles.view62}>
              <Text>Overview</Text>
            </View>
            <View style={styles.view63}>
              <Text>Map</Text>
            </View>
          </View>
        </View>
        <View style={styles.view64}>
          <View style={styles.view65}>
            <Text>+</Text>
          </View>
        </View>
        <View style={styles.view66}>
          <View style={styles.view67}>
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2a02fb54-046a-4f77-ae18-03e970cda8ff?",
              }}
              style={styles.image3}
            />
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/8b80a789-1228-4e67-9e3c-77c78cdf99be?",
              }}
              style={styles.image4}
            />
          </View>
          <View style={styles.view68}>
            <View style={styles.view69}>
              <Text>Leaderboard</Text>
            </View>
            <View style={styles.view70}>
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
    border: "1px solid #000",
    backgroundColor: "#F5F1ED",
    display: "flex",
    flexDirection: "column",
  },
  view2: {
    justifyContent: "center",
    color: "#688A6F",
    textAlign: "center",
    alignItems: "center",
    border: "1px solid #000",
    backgroundColor: "#F5F1ED",
    alignSelf: "stretch",
    width: "100%",
    padding: "42px 20px",
    font: "700 24px/29px Inter, sans-serif ",
  },
  view3: {
    justifyContent: "center",
    color: "#000",
    alignSelf: "center",
    marginTop: 38,
    maxWidth: 354,
    font: "400 14px/17px Inter, sans-serif ",
  },
  view4: {
    alignSelf: "center",
    display: "flex",
    marginTop: 38,
    width: "100%",
    maxWidth: 341,
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 20,
    padding: "0 20px",
  },
  view5: {
    display: "flex",
    flexGrow: "1",
    flexBasis: "0%",
    flexDirection: "column",
    alignItems: "stretch",
  },
  view6: {
    color: "#000",
    whiteSpace: "nowrap",
    font: "700 16px/19px Inter, sans-serif ",
  },
  view7: {
    justifyContent: "center",
    color: "#588157",
    textAlign: "center",
    textDecorationLine: "underline",
    marginTop: 10,
    font: "700 11px/13px Inter, sans-serif ",
  },
  view8: {
    color: "#688A6F",
    alignSelf: "start",
    marginTop: 7,
    flexGrow: "1",
    whiteSpace: "nowrap",
    font: "700 16px/19px Inter, sans-serif ",
  },
  view9: {
    backgroundColor: "#000",
    alignSelf: "center",
    marginTop: 6,
    width: 341,
    flexShrink: 0,
    height: 1,
  },
  view10: {
    alignSelf: "center",
    display: "flex",
    marginTop: 24,
    width: "100%",
    maxWidth: 341,
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 20,
    padding: "0 20px",
  },
  view11: {
    display: "flex",
    flexGrow: "1",
    flexBasis: "0%",
    flexDirection: "column",
    alignItems: "stretch",
  },
  view12: {
    color: "#000",
    whiteSpace: "nowrap",
    font: "700 16px/19px Inter, sans-serif ",
  },
  view13: {
    justifyContent: "center",
    color: "#588157",
    textAlign: "center",
    textDecorationLine: "underline",
    marginTop: 9,
    font: "700 11px/13px Inter, sans-serif ",
  },
  view14: {
    color: "#688A6F",
    alignSelf: "start",
    marginTop: 7,
    flexGrow: "1",
    whiteSpace: "nowrap",
    font: "700 16px/19px Inter, sans-serif ",
  },
  view15: {
    backgroundColor: "#000",
    alignSelf: "center",
    marginTop: 6,
    width: 341,
    flexShrink: 0,
    height: 1,
  },
  view16: {
    alignSelf: "center",
    display: "flex",
    marginTop: 24,
    width: "100%",
    maxWidth: 341,
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 20,
    padding: "0 20px",
  },
  view17: {
    display: "flex",
    flexGrow: "1",
    flexBasis: "0%",
    flexDirection: "column",
    alignItems: "stretch",
  },
  view18: {
    color: "#000",
    whiteSpace: "nowrap",
    font: "700 16px/19px Inter, sans-serif ",
  },
  view19: {
    justifyContent: "center",
    color: "#588157",
    textAlign: "center",
    textDecorationLine: "underline",
    marginTop: 10,
    font: "700 11px/13px Inter, sans-serif ",
  },
  view20: {
    color: "#688A6F",
    alignSelf: "start",
    marginTop: 7,
    flexGrow: "1",
    whiteSpace: "nowrap",
    font: "700 16px/19px Inter, sans-serif ",
  },
  view21: {
    backgroundColor: "#000",
    alignSelf: "center",
    marginTop: 6,
    width: 341,
    flexShrink: 0,
    height: 1,
  },
  view22: {
    alignSelf: "center",
    display: "flex",
    marginTop: 24,
    width: "100%",
    maxWidth: 341,
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 20,
    padding: "0 20px",
  },
  view23: {
    display: "flex",
    flexGrow: "1",
    flexBasis: "0%",
    flexDirection: "column",
    alignItems: "stretch",
  },
  view24: {
    color: "#000",
    whiteSpace: "nowrap",
    font: "700 16px/19px Inter, sans-serif ",
  },
  view25: {
    justifyContent: "center",
    color: "#588157",
    textAlign: "center",
    textDecorationLine: "underline",
    marginTop: 7,
    font: "700 11px/13px Inter, sans-serif ",
  },
  view26: {
    color: "#688A6F",
    alignSelf: "start",
    marginTop: 7,
    flexGrow: "1",
    whiteSpace: "nowrap",
    font: "700 16px/19px Inter, sans-serif ",
  },
  view27: {
    backgroundColor: "#000",
    alignSelf: "center",
    marginTop: 6,
    width: 341,
    flexShrink: 0,
    height: 1,
  },
  view28: {
    alignSelf: "center",
    display: "flex",
    marginTop: 24,
    width: "100%",
    maxWidth: 341,
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 20,
    padding: "0 20px",
  },
  view29: {
    display: "flex",
    flexGrow: "1",
    flexBasis: "0%",
    flexDirection: "column",
    alignItems: "stretch",
  },
  view30: {
    color: "#000",
    whiteSpace: "nowrap",
    font: "700 16px/19px Inter, sans-serif ",
  },
  view31: {
    justifyContent: "center",
    color: "#588157",
    textAlign: "center",
    textDecorationLine: "underline",
    marginTop: 7,
    font: "700 11px/13px Inter, sans-serif ",
  },
  view32: {
    color: "#688A6F",
    alignSelf: "start",
    marginTop: 7,
    flexGrow: "1",
    whiteSpace: "nowrap",
    font: "700 16px/19px Inter, sans-serif ",
  },
  view33: {
    backgroundColor: "#000",
    alignSelf: "center",
    marginTop: 6,
    width: 341,
    flexShrink: 0,
    height: 1,
  },
  view34: {
    alignSelf: "center",
    display: "flex",
    marginTop: 24,
    width: "100%",
    maxWidth: 341,
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 20,
    padding: "0 20px",
  },
  view35: {
    display: "flex",
    flexGrow: "1",
    flexBasis: "0%",
    flexDirection: "column",
    alignItems: "stretch",
  },
  view36: {
    color: "#000",
    whiteSpace: "nowrap",
    font: "700 16px/19px Inter, sans-serif ",
  },
  view37: {
    justifyContent: "center",
    color: "#588157",
    textAlign: "center",
    textDecorationLine: "underline",
    marginTop: 7,
    font: "700 11px/13px Inter, sans-serif ",
  },
  view38: {
    color: "#688A6F",
    alignSelf: "start",
    marginTop: 7,
    flexGrow: "1",
    whiteSpace: "nowrap",
    font: "700 16px/19px Inter, sans-serif ",
  },
  view39: {
    backgroundColor: "#000",
    alignSelf: "center",
    marginTop: 6,
    width: 341,
    flexShrink: 0,
    height: 1,
  },
  view40: {
    alignSelf: "center",
    display: "flex",
    marginTop: 24,
    width: "100%",
    maxWidth: 341,
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 20,
    padding: "0 20px",
  },
  view41: {
    display: "flex",
    flexGrow: "1",
    flexBasis: "0%",
    flexDirection: "column",
    alignItems: "stretch",
  },
  view42: {
    color: "#000",
    whiteSpace: "nowrap",
    font: "700 16px/19px Inter, sans-serif ",
  },
  view43: {
    justifyContent: "center",
    color: "#588157",
    textAlign: "center",
    textDecorationLine: "underline",
    marginTop: 10,
    font: "700 11px/13px Inter, sans-serif ",
  },
  view44: {
    color: "#688A6F",
    alignSelf: "start",
    marginTop: 7,
    flexGrow: "1",
    whiteSpace: "nowrap",
    font: "700 16px/19px Inter, sans-serif ",
  },
  view45: {
    backgroundColor: "#000",
    alignSelf: "center",
    marginTop: 6,
    width: 341,
    flexShrink: 0,
    height: 1,
  },
  view46: {
    alignSelf: "center",
    display: "flex",
    marginTop: 24,
    width: "100%",
    maxWidth: 341,
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 20,
    padding: "0 20px",
  },
  view47: {
    display: "flex",
    flexGrow: "1",
    flexBasis: "0%",
    flexDirection: "column",
    alignItems: "stretch",
  },
  view48: {
    color: "#000",
    whiteSpace: "nowrap",
    font: "700 16px/19px Inter, sans-serif ",
  },
  view49: {
    justifyContent: "center",
    color: "#588157",
    textAlign: "center",
    textDecorationLine: "underline",
    marginTop: 10,
    font: "700 11px/13px Inter, sans-serif ",
  },
  view50: {
    color: "#688A6F",
    alignSelf: "start",
    marginTop: 7,
    flexGrow: "1",
    whiteSpace: "nowrap",
    font: "700 16px/19px Inter, sans-serif ",
  },
  view51: {
    backgroundColor: "#000",
    alignSelf: "center",
    marginTop: 6,
    width: 341,
    flexShrink: 0,
    height: 1,
  },
  view52: {
    alignSelf: "center",
    display: "flex",
    marginTop: 14,
    width: "100%",
    maxWidth: 341,
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 20,
    padding: "0 20px",
  },
  view53: {
    display: "flex",
    flexGrow: "1",
    flexBasis: "0%",
    flexDirection: "column",
    alignItems: "stretch",
  },
  view54: {
    color: "#000",
    whiteSpace: "nowrap",
    font: "700 16px/19px Inter, sans-serif ",
  },
  view55: {
    justifyContent: "center",
    color: "#588157",
    textAlign: "center",
    textDecorationLine: "underline",
    marginTop: 10,
    font: "700 11px/13px Inter, sans-serif ",
  },
  view56: {
    color: "#688A6F",
    alignSelf: "start",
    marginTop: 7,
    flexGrow: "1",
    whiteSpace: "nowrap",
    font: "700 16px/19px Inter, sans-serif ",
  },
  view57: {
    backgroundColor: "#000",
    alignSelf: "center",
    marginTop: 6,
    width: 341,
    flexShrink: 0,
    height: 1,
  },
  view58: {
    backgroundColor: "#E9E9E9",
    alignSelf: "stretch",
    display: "flex",
    marginTop: 94,
    width: "100%",
    alignItems: "start",
    justifyContent: "space-between",
    gap: 13,
    padding: "-37px 22px 10px 17px",
  },
  view59: {
    alignSelf: "end",
    zIndex: "1",
    display: "flex",
    marginTop: 57,
    flexGrow: "1",
    flexBasis: "0%",
    flexDirection: "column",
    alignItems: "stretch",
  },
  view60: {
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 20,
  },
  image1: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 31,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1.07",
  },
  image2: {
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
  view61: {
    display: "flex",
    alignItems: "start",
    justifyContent: "space-between",
    gap: 20,
  },
  view62: {
    justifyContent: "center",
    color: "#000",
    textAlign: "center",
    font: "400 10px/20px Inter, sans-serif ",
  },
  view63: {
    justifyContent: "center",
    color: "#000",
    textAlign: "center",
    alignSelf: "stretch",
    font: "400 10px/20px Inter, sans-serif ",
  },
  view64: {
    borderRadius: "50%",
    display: "flex",
    flexGrow: "1",
    flexBasis: "0%",
    flexDirection: "column",
    alignItems: "stretch",
    padding: 11,
  },
  view65: {
    justifyContent: "center",
    color: "#E9E9E9",
    textAlign: "center",
    borderRadius: "50%",
    aspectRatio: "1",
    alignItems: "stretch",
    padding: "10px 11px 17px",
    font: "400 48px/58px Inter, sans-serif ",
  },
  view66: {
    alignSelf: "end",
    display: "flex",
    marginTop: 56,
    flexGrow: "1",
    flexBasis: "0%",
    flexDirection: "column",
    alignItems: "start",
  },
  view67: {
    display: "flex",
    marginLeft: 16,
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 20,
  },
  image3: {
    fill: "#688A6F",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 28,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1",
  },
  image4: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: 31,
    flexShrink: 0,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1.07",
  },
  view68: {
    alignSelf: "stretch",
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 20,
  },
  view69: {
    justifyContent: "center",
    color: "#688A6F",
    textAlign: "center",
    font: "700 10px/20px Inter, sans-serif ",
  },
  view70: {
    justifyContent: "center",
    color: "#000",
    textAlign: "center",
    font: "400 10px/20px Inter, sans-serif ",
  },
});

