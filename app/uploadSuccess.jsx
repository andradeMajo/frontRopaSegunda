import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../assets/styles/styleUploadFlow";
import BottomNav from "../components/BottomNav";

export default function UploadSuccess() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#0c0c0c" }}>
      <View style={styles.uploadSuccessContainer}>
        <Image
          source={require("../assets/images/cora.png")}
          style={styles.uploadSuccessLogo}
          resizeMode="contain"
        />

        <Text style={styles.uploadSuccessTitle}>
          ¡HORA DEL MATCH!
        </Text>

        <Text style={styles.uploadSuccessSubtitle}>
          Ya puedes ver tu publicación{"\n"}y te estaremos avisando si{"\n"}hay algun interesado.
        </Text>

        <TouchableOpacity
          onPress={() => router.push("/productDetail")}
          style={styles.uploadSuccessBtn}
        >
          <Text style={styles.uploadSuccessBtnText}>
            Ver publicación
          </Text>
          <Ionicons name="eye-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <BottomNav />
    </View>
  );
}