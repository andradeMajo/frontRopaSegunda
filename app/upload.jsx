import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../assets/styles/styleUploadFlow";
import Header from "../components/Header";
import TipCard from "../components/TipCard";

export default function Upload() {
  const router = useRouter();

  const data = [
    { label: "ropa" },
    { label: "bolsos" },
    { label: "zapatos" },
    { label: "accesorios" },
  ];

  return (
    <View style={styles.container}>
      <Header title="Subir" titleColor="#fff" />
      <View style={styles.divider} />
      <Text style={styles.section}>Categoría de tu producto</Text>
      <View style={styles.categoryGrid}>
        {data.map((item, i) => (
          <TouchableOpacity
            key={i}
            style={{ width: "47%" }}
            onPress={() => router.push("/uploadData")}
          >
            <TipCard label={item.label} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}