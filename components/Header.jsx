import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // ← este faltaba
import { Text, TouchableOpacity, View } from "react-native";
import { colores, fuentes } from "../assets/styles/StyleManager";

export default function Header({ title, showBack = true, showMenu = false, rightIconName, onRightPress, titleColor, rightComponent }) {
  const router = useRouter();

  return (
    <View style={{
      height: 80,
      paddingTop: 40,
      paddingHorizontal: 16,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colores.black,
    }}>
      {showBack ? (
        <TouchableOpacity onPress={() => router.back()} style={{ marginRight: 10 }}>
          <Ionicons name="arrow-back" size={22} color={colores.text} />
        </TouchableOpacity>
      ) : null}

      <Text style={{
        flex: 1,
        color: titleColor ?? colores.secundary,
        fontSize: 20,
        fontFamily: fuentes.poppins,
        fontWeight: "800",
        letterSpacing: 0.5,
      }}>
        {title}
      </Text>

      <View style={{ alignItems: "flex-end" }}>
        {rightComponent ? (
          rightComponent
        ) : rightIconName ? (
          <TouchableOpacity onPress={onRightPress}>
            <Ionicons name={rightIconName} size={22} color={colores.text} />
          </TouchableOpacity>
        ) : showMenu && (
          <TouchableOpacity onPress={() => router.push("/settings")}>
            <Ionicons name="ellipsis-horizontal" size={20} color={colores.text} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}