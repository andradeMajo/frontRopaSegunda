import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#2A2A2A",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: "#FF4FCB",
    fontSize: 15,
    fontWeight: "600",
  },
  description: {
    color: "#aaa",
    fontSize: 13,
    marginTop: 2,
  },
  rightContainer: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 30,
  },
  badge: {
    backgroundColor: "#FF4FCB",
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
  },
  badgeText: {
    color: "#000",
    fontSize: 10,
    fontWeight: "bold",
  },
  divider: {
    height: 1,
    backgroundColor: "#2A2A2A",
    marginLeft: 70,
  },
});
export default styles;