import { useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import BottomNav from "../components/BottomNav";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

const PRENDAS = [
  { id: 1, titulo: "WEIRD-KULT Blusa negra", dueno: "Alejandra Duarte" },
  { id: 2, titulo: "WEIRD-KULT Blusa negra", dueno: "Alejandra Duarte" },
  { id: 3, titulo: "WEIRD-KULT Blusa negra", dueno: "Alejandra Duarte" },
  { id: 4, titulo: "WEIRD-KULT Blusa negra", dueno: "Alejandra Duarte" },
];

export default function Closet() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#0D0D0D" }}>
      <Header title="Prepara tu prenda" showMenu titleColor="#fff" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={{
          color: "#ff61ca",
          fontSize: 15,
          fontWeight: "800",
          letterSpacing: 1,
          paddingHorizontal: 16,
          marginVertical: 14,
        }}>
          SUBIDOS
        </Text>
        <View style={{
          flexDirection: "row",
          flexWrap: "wrap",
          paddingHorizontal: 4,
          gap: 10,
          justifyContent: "center",
        }}>
          {PRENDAS.map((p) => (
            <View key={p.id} style={{ marginBottom: 12 }}>
              <ProductCard
                title={p.titulo}
                author={p.dueno}
                matchLabel="Tips chimbas"
                onMatch={() => router.push("/tipsChimbas")}
              />
            </View>
          ))}
        </View>
        <View style={{ height: 80 }} />
      </ScrollView>
      <BottomNav />
    </View>
  );
}