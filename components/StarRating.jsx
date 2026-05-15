import { Image, View } from "react-native";

export default function StarRating({ value = 5, max = 5, size = 16, style, color = "#257CFF" }) {
  return (
    <View style={[{ flexDirection: "row", gap: 2 }, style]}>
      {Array.from({ length: max }).map((_, i) => (
        <Image
          key={i}
          source={require("../assets/images/stare.png")}
          style={{ width: size, height: size, opacity: i < value ? 1 : 0.3, tintColor: color }}
          resizeMode="contain"
        />
      ))}
    </View>
  );
}