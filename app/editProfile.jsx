import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../assets/styles/styleEditProfile";
import DropDow from "../components/DropDow";

const FONDOS = [
  { id: 1, imagen: require("../assets/images/fondo1.png") },
  { id: 2, imagen: require("../assets/images/fondo2.png") },
  { id: 3, imagen: require("../assets/images/fondo3.png") },
  { id: 4, imagen: require("../assets/images/fondo4.png") },
];

const CAMPOS = [
  {
    key: "name",
    label: "Nombre",
    desc: "Este es el nombre que quieres que las personas usen cuando se refieran a ti.",
    placeholder: "Diana Valderrama",
    tipo: "input",
  },
  {
    key: "email",
    label: "Correo electrónico",
    desc: "Este correo electrónico será utilizado para recibir mensajes, iniciar sesión y recuperar tu cuenta.",
    placeholder: "thaldiva123@ejemplo.com",
    tipo: "input",
    keyboardType: "email-address",
  },
  {
    key: "gender",
    label: "Género",
    desc: "Selecciona la opción que mejor represente tu identidad de género.",
    tipo: "dropdown",
    opciones: [
      { label: "Seleciona una opcion", value: "" },
      { label: "Femenino", value: "f" },
      { label: "Masculino", value: "m" },
      { label: "Otro", value: "o" },
    ],
  },
  {
    key: "address",
    label: "Dirección",
    desc: "La dirección es clave para poder localizar los puntos de encuentro a tu al rededor.",
    placeholder: "cra 1 #23 - 45",
    tipo: "input",
  },
  {
    key: "style",
    label: "Estilos",
    desc: "Selecciona los estilos que mejor te definan.",
    tipo: "dropdown",
    opciones: [
      { label: "Seleciona una opcion", value: "" },
      { label: "Punk", value: "punk" },
      { label: "Vintage", value: "vintage" },
      { label: "Streetwear", value: "street" },
      { label: "Gótico", value: "goth" },
    ],
  },
];

export default function EditProfile() {
  const router = useRouter();
  const [active, setActive] = useState(null);
  const [valores, setValores] = useState({
    name: "",
    email: "",
    gender: "",
    address: "",
    style: "",
  });
  const [fondoSeleccionado, setFondoSeleccionado] = useState(null);

  const toggle = (key) => setActive(active === key ? null : key);
  const setValue = (key, val) => setValores((v) => ({ ...v, [key]: val }));

  const mostrandoFondo = active === "fondo";

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>Editar Perfil</Text>
          <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: "auto" }}>
            <Ionicons name="checkmark" size={24} color="#F369D6" />
          </TouchableOpacity>
        </View>

        {/* Cover + Avatar */}
        <View style={styles.cover}>
          <Image
            source={
              fondoSeleccionado !== null
                ? FONDOS[fondoSeleccionado].imagen
                : require("../assets/images/fo.png")
            }
            style={styles.coverImage}
            resizeMode="cover"
          />

          {/* Lápiz portada */}
          <TouchableOpacity
            style={styles.editCoverBtn}
            onPress={() => toggle("fondo")}
          >
            <Ionicons name="pencil" size={14} color="#fff" />
          </TouchableOpacity>

          {/* Avatar — se oculta al ver fondos */}
          {!mostrandoFondo && (
            <View style={styles.avatarWrapper}>
              <Image
                source={require("../assets/images/imag.png")}
                style={styles.avatar}
                resizeMode="cover"
              />
              {/* Lápiz pegado a la foto ↓ */}
              <TouchableOpacity style={[styles.editAvatarBtn, {
                bottom: 50,
                right: -10,
                padding: 12,
              }]}>
                <Ionicons name="pencil" size={14} color="#fff" />
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Selector de fondos — oculta TODO lo demás */}
        {mostrandoFondo && (
          <View style={{ paddingHorizontal: 20, marginTop: 16 }}>
            <Text style={styles.sectionDesc}>
              Selecciona la imagen de portada ideal para tu perfil, según tu estilo
            </Text>
            <View style={styles.fondoGrid}>
              {FONDOS.map((f, index) => (
                <TouchableOpacity
                  key={f.id}
                  onPress={() => setFondoSeleccionado(index)}
                  style={[
                    styles.fondoItem,
                    fondoSeleccionado === index && styles.fondoItemSelected,
                  ]}
                >
                  <Image
                    source={f.imagen}
                    style={styles.fondoImage}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* Formulario — solo visible si NO estamos en fondos */}
        {!mostrandoFondo && (
          <View style={styles.form}>
            {CAMPOS.map((campo) => {
              const isActive = active === campo.key;
              return (
                <View key={campo.key}>
                  <TouchableOpacity onPress={() => toggle(campo.key)}>
                    <Text style={isActive ? styles.labelPink : styles.label}>
                      {campo.label}
                    </Text>
                  </TouchableOpacity>

                  {isActive && (
                    <View>
                      <Text style={styles.sectionDesc}>{campo.desc}</Text>
                      {campo.tipo === "input" ? (
                        <TextInput
                          style={styles.input}
                          value={valores[campo.key]}
                          onChangeText={(val) => setValue(campo.key, val)}
                          placeholder={campo.placeholder}
                          placeholderTextColor="#444"
                          keyboardType={campo.keyboardType || "default"}
                        />
                      ) : (
                        <DropDow
                          label=""
                          selectedValue={valores[campo.key]}
                          onValueChange={(val) => setValue(campo.key, val)}
                          options={campo.opciones}
                        />
                      )}
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        )}

        <View style={{ height: 60 }} />
      </ScrollView>
    </View>
  );
}