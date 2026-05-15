import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../components/Header";
export default function FollowListScreen() {
  const router = useRouter();
  const { type } = useLocalSearchParams();
  const currentType = type === "seguidores" ? "seguidores" : "siguiendo";
  const title = currentType === "seguidores" ? "Seguidores" : "Siguiendo";
  const data = Array(10).fill({
    name: "Sofia Rodriguez",
    username: "@sofiCool",
  });
  return (
    <View style={{ flex: 1, backgroundColor: "#000", padding: 15 }}>
      <Header title={title} showBack={true} showMenu={false} />
      <FlatList
        data={data}
        keyExtractor={(_, i) => i.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
          }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../assets/images/userg.png")}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  marginRight: 10,
                }}
              />
              <View>
                <Text style={{ color: "#fff", fontWeight: "bold" }}>
                  {item.name}
                </Text>
                <Text style={{ color: "#aaa" }}>
                  {item.username}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                paddingHorizontal: 14,
                paddingVertical: 6,
                borderRadius: 20,
                backgroundColor:
                  currentType === "seguidores" ? "#F369D6" : "#3B82F6",
              }}
            >
              <Text style={{
                color: "#fff",
                fontSize: 12,
                fontWeight: "bold",
              }}>
                {currentType === "seguidores"
                  ? "Seguir también"
                  : "Amigos"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}