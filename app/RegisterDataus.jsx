import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import register from "../assets/styles/RegisterStyles";
import DropDow from "../components/DropDow";
import Header from "../components/Header";
import TextField from "../components/textField";
import Title from "../components/title";

export default function RegisterDataus() {
  const router = useRouter();
  const [estilo, setEstilo]           = useState("");
  const [genero, setGenero]           = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha]             = useState("");
  const [ubicacion, setUbicacion]     = useState("");
  const descripcionRef = useRef();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#0D0D0D" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Header showBack={true} title="" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={register.scrollContent}
      >
        <Title
          title="YA CASI..."
          subtitle="Queremos conocerte mejor, esto nos ayuda a recomendarte prendas que vayan con tu estilo"
        />

        <DropDow
          label="Estilo*"
          selectedValue={estilo}
          onValueChange={setEstilo}
          options={[
            { label: "Punk, Streetwear, Urbano",   value: "Punk" },
            { label: "Coquette, Harajuku, Lolita", value: "Coquette" },
            { label: "Gótico, Rockero, Alterno",   value: "Gótico" },
            { label: "Hipster, Clásico, Elegante", value: "Hipster" },
            { label: "Estandar",                   value: "Estandar" },
          ]}
        />

        <DropDow
          label="Género*"
          selectedValue={genero}
          onValueChange={setGenero}
          options={[
            { label: "Femenino",            value: "fem" },
            { label: "Masculino",           value: "men" },
            { label: "No binario",          value: "nb" },
            { label: "Prefiero no decirlo", value: "NA" },
          ]}
        />

        <TextField
          label="Descripción (Cuéntanos sobre ti)*"
          value={descripcion}
          onChangeText={setDescripcion}
          multiline
          numberOfLines={4}
          inputRef={descripcionRef}
        />

        <View style={{ flexDirection: "row", gap: 10 }}>
          <View style={{ flex: 1 }}>
            <TextField
              label="Cumpleaños"
              value={fecha}
              onChangeText={setFecha}
              placeholder="12/12/2002"
            />
          </View>
          <View style={{ flex: 1 }}>
            <DropDow
              label="Ubicación"
              selectedValue={ubicacion}
              onValueChange={setUbicacion}
              options={[
                { label: "Bogotá",         value: "bog" },
                { label: "Medellín",       value: "med" },
                { label: "Cali",           value: "cal" },
                { label: "Barranquilla",   value: "baq" },
                { label: "Cartagena",      value: "ctg" },
                { label: "Bucaramanga",    value: "buc" },
                { label: "Pereira",        value: "per" },
                { label: "Manizales",      value: "man" },
                { label: "Santa Marta",    value: "smr" },
                { label: "Ibagué",         value: "iba" },
                { label: "Cúcuta",         value: "cuc" },
                { label: "Villavicencio",  value: "vil" },
                { label: "Pasto",          value: "pas" },
                { label: "Montería",       value: "mon" },
                { label: "Neiva",          value: "nei" },
              ]}
            />
          </View>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      <View style={register.bottomBar}>
        <TouchableOpacity
          style={register.button}
          onPress={() => router.replace("/Login")}
        >
          <Text style={register.buttonText}>Enviar y unirme</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}