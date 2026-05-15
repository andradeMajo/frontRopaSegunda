import { Image, StyleSheet, Text, View } from "react-native";

export default function TipCard({ label = "ropa", imageSource }) {
  return (
    <View style={styles.card}>
      <Image
        source={imageSource ?? require("../assets/images/producto.png")}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.overlay}>
        <Text style={styles.text}>Tips de cuidado</Text>
        <Text style={styles.text}>para {label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 200,
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 12,
    borderWidth: 1.5,
    borderColor: "#2D6CDF",
  },
  image: {
    width: "100%",
    height: 160,
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#0D0D0D",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  text: {
    color: "#2D6CDF",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 19,
  },
});