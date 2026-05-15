import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 70,
    backgroundColor: "#0D0D0D",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#1f1f1f",
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "#aaa",
    fontSize: 11,
    marginTop: 2,
  },
  activeLabel: {
    color: "#fff",
  },
});