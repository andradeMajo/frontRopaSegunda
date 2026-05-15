import { ScrollView, Text, View } from "react-native";
export default function CategoryScroll() {
  const cats = ["Punk", "Street", "Gótico", "Vintage"];
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{ flexDirection: "row", paddingLeft: 16 }}>
        {cats.map((c, i) => (
          <View
            key={i}
            style={{
              backgroundColor: "#1f1f1f",
              padding: 10,
              borderRadius: 20,
              marginRight: 10,
            }}
          >
            <Text style={{ color: "#fff" }}>{c}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}