import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  section: {
    color: "#F369D6",
    fontSize: 14,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "600",
  },
  item: {
    borderWidth: 1,
    borderColor: "#4DA3FF",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  itemText: {
    color: "#aaa",
    fontSize: 14,
  },
});