import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

export default function App() {
  const dimensions = Dimensions.get("window");
  const imageWidth = dimensions.width;
  const imageHeight = dimensions.height;

  let theColor = "yellow";

  return (
    <View
      style={styles.container}
      onLongPress={() => {
        theColor = "white";
      }}
    >
      <Image
        source={{
          uri: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWpnNTE0ZnpuemZpZXU4Nnd6ZnV0aGx6bzVtbG9qY2Q2a3Bkd3UzdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jnQYWZ0T4mkhCmkzcn/giphy.gif",
        }}
        style={{ width: imageWidth, height: imageWidth }}
      />
      <Text style={{ color: theColor, fontWeight: "bold", fontSize: 20, paddingTop: 50 }}>
        This is a million dollar app
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
