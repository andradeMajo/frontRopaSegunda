import { useRouter } from "expo-router";
import { Image, SafeAreaView, Text, View } from "react-native";
import styles from "../assets/styles/NotificationsStyles";
import Header from "../components/Header";

export default function NotificationsScreen() {
  const router = useRouter();
  const notifications = [
    {
      id: 1,
      title: "Nuevo match",
      desc: "¡Hiciste match!",
      leftImage: require("../assets/images/megafono.png"),
    },
    {
      id: 2,
      title: "Recordatorio evento",
      desc: "Polas y Rolas - 13 de Mayo",
      leftImage: require("../assets/images/megafono.png"),
      badge: "1",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Notificaciones" showBack={true} showMenu={false} />
      {notifications.map((item) => (
        <View key={item.id}>
          <View style={styles.item}>
            <Image source={item.leftImage} style={styles.iconImage} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.desc}</Text>
            </View>
            {item.badge && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{item.badge}</Text>
              </View>
            )}
          </View>
          <View style={styles.divider} />
        </View>
      ))}
    </SafeAreaView>
  );
}