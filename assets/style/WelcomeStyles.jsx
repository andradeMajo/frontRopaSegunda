import { StyleSheet } from "react-native";

export default StyleSheet.create({
  image: {
    width: "100%",
    height: "80%",
  },
 
  content: {
    backgroundColor: "#252525",
    paddingHorizontal: 28,
    paddingBottom: 36,
    paddingTop: 38,
  },
 pillButton: {
  borderRadius: 10,
  paddingVertical: 16,
  width: "100%",
  alignItems: "center",
  justifyContent: "center", // ← faltaba
  marginBottom: 12,
},
});