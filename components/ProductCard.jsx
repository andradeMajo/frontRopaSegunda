import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function ProductCard({
  title = "Bolso Vivienne Westwood en perfe...",
  author = "Alejandra Duarte",
  image = require("../assets/images/producto.png"),
  onVerPrenda,
  onMatch,
  matchLabel = "Proponer Match",
}) {
  const router = useRouter();

  return (
    <View style={styles.card}>
      <Image
        source={image}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>

        <View style={styles.authorRow}>
          <View style={styles.dot} />
          <Text style={styles.author} numberOfLines={1}>
            {author}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.viewBtn}
          activeOpacity={0.7}
          onPress={onVerPrenda ?? (() => router.push("/productDetail"))}
        >
          <Text style={styles.viewText}>Ver prenda</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.matchBtn}
          activeOpacity={0.85}
          onPress={onMatch ?? (() => router.push("/chatDetail"))}
        >
          <Text style={styles.matchText}>{matchLabel}</Text>
          <Image
            source={require("../assets/images/cos.png")}
            style={{ width: 16, height: 16, marginLeft: 5 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  card: {
    width: 160,
    backgroundColor: "#111111",
    borderRadius: 14,
    overflow: "hidden",
    borderWidth: 1.5,
    borderColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 150,
  },
  content: {
    paddingTop: 10,
    paddingHorizontal: 12,
    paddingBottom: 10,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Poppins_400Regular",
    lineHeight: 20,
    marginBottom: 8,
  },
  authorRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: "#EC4899",
    marginRight: 6,
  },
  author: {
    color: "#EC4899",
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Poppins_400Regular",
  },
  viewBtn: {
    alignItems: "center",
    marginBottom: 10,
  },
  viewText: {
    color: "#BDBDBD",
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Poppins_400Regular",
  },
  matchBtn: {
    backgroundColor: "#2563EB",
    marginHorizontal: -12,
    marginBottom: -10,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  matchText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
    fontFamily: "Poppins_400Regular",
  },
};