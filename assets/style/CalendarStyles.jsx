import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  month: {
    color: "#F369D6",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },
  dayBox: {
    width: "13%",
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedDate: {
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
    fontWeight: "bold",
  },
});