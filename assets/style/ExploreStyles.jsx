import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  searchBar: {
    marginHorizontal: 16,
    marginTop: 10,
    marginBottom: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#444",
  },
  searchText: {
    color: "#888",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  card: {
    width: "48%",
    backgroundColor: "#1a1a1a",
    borderRadius: 16,
    marginBottom: 14,
  },
  image: {
    width: "100%",
    height: 180,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  info: {
    padding: 12,
  },
  titleCard: {
    color: "#fff",
    fontWeight: "600",
  },
  author: {
    color: "#ff4da6",
    fontSize: 12,
  },
  primaryBtn: {
    backgroundColor: "#2979ff",
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 6,
    alignItems: "center",
  },
  primaryText: {
    color: "white",
    fontWeight: "600",
    fontSize: 12,
  },
});