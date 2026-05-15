import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    gap: 12,
  },
  iconImage: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "600",
  },
  description: {
    color: "#ffffff",
    fontSize: 13,
  },
  badge: {
    backgroundColor: "#257CFF",
    borderRadius: 999,
    minWidth: 22,
    height: 22,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 6,
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },
  divider: {
    height: 1,
    backgroundColor: "#222",
    marginHorizontal: 16,
  },
});