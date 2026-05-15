import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useRef, useState } from "react";
import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../assets/styles/chatDetailStyles";
import AppText from "../components/AppText";

const MY_PRODUCTS = [
  {
    id: "1",
    title: "Chaqueta Roja con peluche talla M",
    author: "Hace 2 dias",
    image: require("../assets/images/producto.png"),
  },
  {
    id: "2",
    title: "Botas Demonia Swing 815 originales",
    author: "Hace 2 dias",
    image: require("../assets/images/producto.png"),
  },
];

const MATCH_PRODUCTS = [
  {
    id: "1",
    title: "Chaqueta Roja con peluche talla M",
    author: "Alejandra Duarte",
    image: require("../assets/images/producto.png"),
  },
  {
    id: "2",
    title: "Bolso Vivienne Westwood en perfe...",
    author: "Diana Valderrama",
    image: require("../assets/images/producto.png"),
  },
];

export default function ChatDetail() {
  const router = useRouter();
  const scrollRef = useRef(null);
  const [input, setInput] = useState("");
  const [showClipSheet, setShowClipSheet] = useState(false);
  const [showMatchSheet, setShowMatchSheet] = useState(false);

  const [messages, setMessages] = useState([
    { id: "1", type: "text", fromMe: true, text: "¡Hola! me interesa tu bolso." },
    { id: "2", type: "text", fromMe: true, text: "yo tengo una chaqueta de cuero ¿te interesa?" },
    { id: "3", type: "text", fromMe: false, text: "Holaaa ¿me la dejas ver?" },
  ]);

  // ─── Se activa en true justo antes de ir a ProposeMatchScreen ───
  const matchProposedRef = useRef(false);

  // ─── Cuando la pantalla vuelve a estar en foco (router.back desde MatchDetail) ───
  useFocusEffect(
    useCallback(() => {
      if (matchProposedRef.current) {
        addMessage({ type: "matchProposal" });
        matchProposedRef.current = false;
      }
    }, [])
  );
  // ────────────────────────────────────────────────────────────────────────────────

  const addMessage = (msg) => {
    setMessages((prev) => [...prev, { id: Date.now().toString(), ...msg }]);
    setTimeout(
      () => scrollRef.current?.scrollToEnd({ animated: true }),
      100
    );
  };

  const sendText = () => {
    if (!input.trim()) return;
    addMessage({ type: "text", fromMe: true, text: input });
    setInput("");
  };

  const sendProduct = (product) => {
    setShowClipSheet(false);
    addMessage({ type: "product", product });
    setTimeout(
      () =>
        addMessage({
          type: "text",
          fromMe: false,
          text: "¿te sirve mañana a las 2 en chapi?",
        }),
      800
    );
    setTimeout(
      () =>
        addMessage({
          type: "text",
          fromMe: true,
          text: "Siii, agendemos el match",
        }),
      1600
    );
  };

  const proposeMatch = () => {
    setShowMatchSheet(false);
    matchProposedRef.current = true; // <-- marca que viene match propuesto
    router.push("/ProposeMatchScreen");
  };

  const acceptMatch = () => {
    addMessage({
      type: "matchAccepted",
      text: "Alejandra ha aceptado tu Match",
    });
  };

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
        >
          <Ionicons name="chevron-back" size={24} color="#fff" />
          <AppText style={styles.headerName}>Alejandra Duarte</AppText>
        </TouchableOpacity>
        <Ionicons name="ellipsis-horizontal" size={22} color="#fff" />
      </View>

      {/* MENSAJES */}
      <ScrollView
        ref={scrollRef}
        style={styles.scroll}
        contentContainerStyle={{ paddingVertical: 10 }}
        onContentSizeChange={() =>
          scrollRef.current?.scrollToEnd({ animated: false })
        }
      >
        {messages.map((msg) => {

          // MENSAJES MIOS
          if (msg.type === "text" && msg.fromMe)
            return (
              <View key={msg.id} style={styles.bubbleMe}>
                <AppText style={styles.bubbleMeText}>{msg.text}</AppText>
              </View>
            );

          // MENSAJES OTRO USUARIO
          if (msg.type === "text" && !msg.fromMe)
            return (
              <View key={msg.id} style={styles.bubbleRow}>
                <Image
                  source={require("../assets/images/userg.png")}
                  style={styles.avatar}
                />
                <View style={styles.bubbleOther}>
                  <AppText style={styles.bubbleOtherText}>{msg.text}</AppText>
                </View>
              </View>
            );

          // PRODUCT CARD
          if (msg.type === "product")
            return (
              <View key={msg.id} style={styles.productCard}>
                <AppText style={styles.productSharedLabel}>
                  Se compartio:{"\n"}{msg.product.title.slice(0, 20)}...
                </AppText>
                <View style={styles.productImageContainer}>
                  <Image
                    source={msg.product.image}
                    style={styles.productImage}
                    resizeMode="cover"
                  />
                </View>
                <TouchableOpacity
                  style={styles.productBtn}
                  activeOpacity={0.85}
                  onPress={() => router.push("/productDetail")}
                >
                  <AppText style={styles.productBtnText}>Ver publicación</AppText>
                  <Ionicons name="eye-outline" size={18} color="#fff" />
                </TouchableOpacity>
              </View>
            );

          // MATCH PROPOSAL
          if (msg.type === "matchProposal")
            return (
              <View key={msg.id} style={styles.matchBubble}>
                <AppText style={styles.matchBubbleTitle}>¡Hagamos match!</AppText>
                <View style={styles.matchImagesRow}>
                  <Image
                    source={require("../assets/images/producto.png")}
                    style={styles.matchImageHalf}
                    resizeMode="cover"
                  />
                  <Image
                    source={require("../assets/images/producto.png")}
                    style={styles.matchImageHalf}
                    resizeMode="cover"
                  />
                  <View style={styles.matchHeartOverlay}>
                    <Image
                      source={require("../assets/images/cos.png")}
                      style={styles.matchHeartImage}
                      resizeMode="contain"
                    />
                  </View>
                </View>
                <View style={styles.matchActions}>
                  <TouchableOpacity
                    style={styles.matchBtnOutline}
                  onPress={() => router.push("/AcceptMatchScreen")}
                  >
                    <AppText style={styles.matchBtnOutlineText}>
                      Ver detalles
                    </AppText>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.matchBtnFill}
                    onPress={acceptMatch}
                  >
                    <AppText style={styles.matchBtnFillText}>
                      Aceptar Match
                    </AppText>
                  </TouchableOpacity>
                </View>
              </View>
            );

          // MATCH ACEPTADO
          if (msg.type === "matchAccepted")
            return (
              <View key={msg.id}>
                <View style={styles.bubbleRow}>
                  <Image
                    source={require("../assets/images/userg.png")}
                    style={styles.avatar}
                  />
                  <View style={styles.matchAcceptedBubble}>
                    <AppText style={styles.matchAcceptedText}>
                      {msg.text}
                    </AppText>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.rateBtn}
                  onPress={() => router.push("/RateMatchScreen")}
                >
                  <AppText style={styles.rateBtnText}>Calificar Match</AppText>
                  <Image
                    source={require("../assets/images/Vector.png")}
                    style={{ width: 16, height: 16 }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            );

          return null;
        })}
      </ScrollView>

      {/* INPUT BAR */}
      <View style={styles.inputBar}>
        <TextInput
          placeholder="Mensaje"
          placeholderTextColor="#666"
          style={styles.input}
          value={input}
          onChangeText={setInput}
          onSubmitEditing={sendText}
          returnKeyType="send"
        />
        <View style={styles.inputIcons}>
          <TouchableOpacity onPress={() => setShowMatchSheet(true)}>
            <Ionicons name="heart" size={24} color="#F369D6" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowClipSheet(true)}>
            <Ionicons name="attach-outline" size={24} color="#aaa" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.sendBtn} onPress={sendText}>
          <Ionicons name="arrow-up" size={18} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* CLIP SHEET */}
      <Modal visible={showClipSheet} transparent animationType="slide">
        <Pressable
          style={styles.overlay}
          onPress={() => setShowClipSheet(false)}
        >
          <Pressable onPress={() => {}}>
            <View style={styles.sheetBlue}>
              <View style={styles.sheetHeader}>
                <AppText style={styles.sheetTitle}>Tus publicaciones</AppText>
                <TouchableOpacity
                  style={styles.sheetCloseBtn}
                  onPress={() => setShowClipSheet(false)}
                >
                  <Ionicons name="close" size={26} color="#fff" />
                </TouchableOpacity>
              </View>
              <View style={styles.sheetGrid}>
                {MY_PRODUCTS.map((p) => (
                  <View key={p.id} style={styles.sheetCard}>
                    <Image
                      source={p.image}
                      style={styles.sheetCardImage}
                      resizeMode="cover"
                    />
                    <AppText style={styles.sheetCardTitle} numberOfLines={2}>
                      {p.title}
                    </AppText>
                    <AppText style={styles.sheetCardAuthor}>{p.author}</AppText>
                    <TouchableOpacity
                      style={styles.sheetCardBtn}
                      onPress={() => sendProduct(p)}
                      activeOpacity={0.8}
                    >
                      <AppText style={styles.sheetCardBtnText}>
                        Seleccionar prenda
                      </AppText>
                      <Image
                        source={require("../assets/images/shirt.png")}
                        style={{ width: 16, height: 16 }}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>
          </Pressable>
        </Pressable>
      </Modal>

      {/* MATCH SHEET */}
      <Modal visible={showMatchSheet} transparent animationType="slide">
        <Pressable
          style={styles.overlay}
          onPress={() => setShowMatchSheet(false)}
        >
          <Pressable onPress={() => {}}>
            <View style={styles.sheetPink}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 16,
                }}
              >
                <AppText style={styles.sheetPinkTitle}>
                  ¿Pinta Match con Alejandra?
                </AppText>
                <TouchableOpacity onPress={() => setShowMatchSheet(false)}>
                  <Ionicons name="close" size={22} color="#fff" />
                </TouchableOpacity>
              </View>
              <View style={styles.matchRow}>
                {MATCH_PRODUCTS.map((p) => (
                  <View key={p.id} style={styles.matchItemCard}>
                    <Image
                      source={p.image}
                      style={styles.matchItemImage}
                      resizeMode="cover"
                    />
                    <AppText style={styles.matchItemTitle} numberOfLines={2}>
                      {p.title}
                    </AppText>
                    <AppText style={styles.matchItemAuthor}>{p.author}</AppText>
                  </View>
                ))}
                <View style={styles.matchHeartCenter}>
                  <Image
                    source={require("../assets/images/cos.png")}
                    resizeMode="contain"
                  />
                </View>
              </View>
              <TouchableOpacity style={styles.proposeBtn} onPress={proposeMatch}>
                <AppText style={styles.proposeBtnText}>Proponer Match</AppText>
                <Image
                  source={require("../assets/images/cos.png")}
                  style={{ width: 20, height: 20 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </Pressable>
        </Pressable>
      </Modal>

    </View>
  );
}