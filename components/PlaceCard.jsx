import { useRouter } from "expo-router";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";

export default function PlaceCard({ compact = false }) {
  const router = useRouter();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => router.push("/storeProfile")}
      style={compact ? styles.cardCompact : styles.card}
    >
      <ImageBackground
        source={require("../assets/images/lugar.png")}
        style={styles.image}
        imageStyle={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
      >
        <Image
          source={require("../assets/images/calaca.png")}
          style={compact ? styles.stickerTopRightCompact : styles.stickerTopRight}
        />
        <Image
          source={require("../assets/images/cafe.png")}
          style={compact ? styles.stickerBottomLeftCompact : styles.stickerBottomLeft}
        />
      </ImageBackground>

      <View style={styles.info}>
        <Text style={styles.name}>El Cuchitril</Text>
        <Text style={styles.address}>Calle 117 # 5A - 13 · Usaquén</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = {
  card: {
    width: 260,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#C026D3",
    overflow: "hidden",
    backgroundColor: "#111",
    marginRight: 12,
    shadowColor: "#C026D3",
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
cardCompact: {
    width: 340,       // ← antes 320
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#C026D3",
    overflow: "hidden",
    backgroundColor: "#111",
    shadowColor: "#C026D3",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 260,     
    justifyContent: "flex-start",
  },
  image: {
    width: "100%",
    height: 220,
    justifyContent: "flex-start",
  },
  info: {
    padding: 12,
    backgroundColor: "#111",
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  address: {
    color: "#F472D0",
    fontSize: 12,
    marginTop: 2,
  },
  stickerTopRight: {
    width: 90,
    height: 90,
    position: "absolute",
    top: 10,
    right: -10,
    transform: [{ rotate: "10deg" }],
  },
  stickerBottomLeft: {
    width: 70,
    height: 70,
    position: "absolute",
    bottom: 20,
    left: 10,
    transform: [{ rotate: "-8deg" }],
  },
  stickerTopRightCompact: {
    width: 90,
    height: 90,
    position: "absolute",
    top: 10,
    right: -10,
    transform: [{ rotate: "10deg" }],
  },
  stickerBottomLeftCompact: {
    width: 70,
    height: 70,
    position: "absolute",
    bottom: 20,
    left: 10,
    transform: [{ rotate: "-8deg" }],
  },
};