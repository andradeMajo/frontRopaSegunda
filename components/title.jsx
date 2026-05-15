import { Text, View } from "react-native";

export default function Title({ title, subtitle }) {
  return (
    <View style={{ marginBottom: 24 }}>
      <Text style={{
        color: "#F369D6",
        fontSize: 28,
        fontWeight: "800",
        textAlign: "left",          
        marginBottom: 8,
      }}>
        {title}
      </Text>
      <Text style={{
        color: "#ffffff",         
        fontSize: 15,
        textAlign: "left",          
        lineHeight: 22,
      }}>
        {subtitle}
      </Text>
    </View>
  );
}