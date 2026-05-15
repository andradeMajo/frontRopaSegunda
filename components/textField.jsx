import { Text, TextInput, View } from "react-native";

export default function TextField({
  label,
  placeholder,
  value,
  onChangeText,
  multiline = false,
  numberOfLines = 1,
  inputRef,
}) {
  return (
    <View style={{ marginBottom: 15 }}>
      <Text style={{ color: "#fff", marginBottom: 6, fontSize: 14 }}>
        {label}
      </Text>
      <TextInput
        ref={inputRef}
        placeholder={placeholder}
        placeholderTextColor="#777"
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={{
          borderWidth: 2,
          borderColor: "#ffffff",       // ← blanco
          borderRadius: 12,
          padding: 14,
          color: "#fff",
          fontSize: 14,
          textAlignVertical: multiline ? "top" : "center",
          minHeight: multiline ? 100 : undefined,
        }}
      />
    </View>
  );
}