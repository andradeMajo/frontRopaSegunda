import { Image, Text, View } from "react-native";
import layout from "../assets/styles/layoutStyles";
import text from "../assets/styles/TextStyles";
import BottomNav from "../components/BottomNav";
import Header from "../components/Header";

export default function Chat() {
  return (
    <View style={layout.container}>
     <Header
  title="Tus chats"
  titleColor="#fff"
  rightComponent={
    <Image
      source={require("../assets/images/caneca.png")}
      style={{ width: 24, height: 24 }}
    />
  }
/>
      <View style={layout.emptyContainer}>
        <Image
          source={require("../assets/images/cora.png")}
          style={layout.emptyImage}
        />
        <Text style={text.emptyTitle}>¡UPSI!</Text>
        <Text style={text.emptySubtitle}>
          Parece que aún no tienes ningún chat.{"\n"}Haz un match y planea tu parche
        </Text>
      </View>
      <BottomNav active="chats" />
    </View>
  );
}