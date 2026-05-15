import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../assets/styles/styleMatchDetail";
export default function RateMatchScreen() {
  const [rating, setRating] = useState(0);
  const router = useRouter(); 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
     <TouchableOpacity onPress={() => router.back()}>
  <Text style={styles.headerTitle}>← Calificar Match</Text>
</TouchableOpacity>
        <Ionicons name="ellipsis-horizontal" size={20} color="#fff" />
      </View>
      <View style={styles.avatarContainer}>
        <View>
          <Image
            source={require("../assets/images/userg.png")}
            style={styles.avatar}
          />
    <TouchableOpacity
  style={styles.likeButton}
  onPress={() => router.replace("/SellerProfileScreen")}
>
  <Ionicons name="heart" size={18} color="#fff" />
</TouchableOpacity>
        </View>
      </View>
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => setRating(star)}>
            <Ionicons
              name={star <= rating ? "star" : "star-outline"}
              size={26}
              color="#fff"
            />
          </TouchableOpacity>
        ))}
      </View>
       <Text style={styles.commentTitle}>
        Deja tus comentarios
      </Text>
      <TextInput
        placeholder="Nos encantaría saber cómo fue tu experiencia con tu Match durante tu cita"
        placeholderTextColor="#777"
        multiline
        style={styles.ratingInput}
      />
      <TouchableOpacity
        style={styles.ratingButton}
        onPress={() => router.replace("/SellerProfileScreen")} 
      >
        <Text style={styles.ratingButtonText}>
          Enviar comentarios
        </Text>
      </TouchableOpacity>
    </View>
  );
}