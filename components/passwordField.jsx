import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export function PasswordField({ label, value, onChangeText }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={{ marginBottom: 15 }}>
      <Text style={{ color: "#fff", marginBottom: 6, fontSize: 14 }}>
        {label}
      </Text>
      <View style={{
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#ffffff",
        borderRadius: 12,
        paddingHorizontal: 14,
      }}>
        <TextInput
          placeholder="diva123"
          placeholderTextColor="#777"
          secureTextEntry={!showPassword}
          value={value}
          onChangeText={onChangeText}
          style={{
            flex: 1,
            color: "#fff",
            paddingVertical: 14,
            fontSize: 14,
          }}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={20}
            color="#3BA7FF"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}