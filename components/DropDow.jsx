import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  FlatList,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function DropDow({
  label,
  selectedValue,
  onValueChange,
  options = [],
}) {
  const [open, setOpen] = useState(false);

  const selectedLabel = options.find(o => o.value === selectedValue)?.label;

  return (
    <View style={{ marginBottom: 15 }}>
      <Text style={{ color: "#fff", marginBottom: 6, fontSize: 14 }}>
        {label}
      </Text>

      {/* Campo que parece TextField */}
      <TouchableOpacity
        onPress={() => setOpen(true)}
        style={{
          borderWidth: 2,
          borderColor: "#ffffff",
          borderRadius: 12,
          padding: 14,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: selectedLabel ? "#fff" : "#777", fontSize: 14, flex: 1 }}>
          {selectedLabel ?? "Selecciona una opcion"}
        </Text>
        <Ionicons name="chevron-down" size={18} color="#fff" />
      </TouchableOpacity>

      {/* Modal con opciones */}
      <Modal
        visible={open}
        transparent
        animationType="fade"
        onRequestClose={() => setOpen(false)}
      >
        <TouchableOpacity
          style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.6)" }}
          activeOpacity={1}
          onPress={() => setOpen(false)}
        >
          <View style={{
            margin: 30,
            marginTop: "auto",
            marginBottom: "auto",
            backgroundColor: "#1A1A1A",
            borderRadius: 16,
            borderWidth: 1,
            borderColor: "#333",
            overflow: "hidden",
            maxHeight: 400,
          }}>
            <Text style={{
              color: "#fff",
              fontWeight: "700",
              fontSize: 16,
              padding: 16,
              borderBottomWidth: 1,
              borderBottomColor: "#333",
            }}>
              {label}
            </Text>

            <FlatList
              data={options}
              keyExtractor={(_, i) => String(i)}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    onValueChange(item.value);
                    setOpen(false);
                  }}
                  style={{
                    padding: 16,
                    borderBottomWidth: 1,
                    borderBottomColor: "#2a2a2a",
                    backgroundColor: selectedValue === item.value ? "#2a2a2a" : "transparent",
                  }}
                >
                  <Text style={{
                    color: selectedValue === item.value ? "#FF2D9B" : "#fff",
                    fontSize: 15,
                    fontWeight: selectedValue === item.value ? "700" : "400",
                  }}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}