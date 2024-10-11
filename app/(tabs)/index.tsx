import { StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <ThemedText type="title">Hello, World!</ThemedText>
      </View>
      <View style={styles.middleContainer}>
        <ThemedText type="subtitle">Jonathan Herring</ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  middleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
