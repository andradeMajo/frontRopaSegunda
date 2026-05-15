import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  username: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  myMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#3B82F6",
    padding: 10,
    borderRadius: 12,
    marginVertical: 5,
    maxWidth: "75%",
  },
  myText: {
    color: "#fff",
  },
  otherMessageContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginVertical: 5,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 6,
  },
  otherMessage: {
    backgroundColor: "#2A2A2A",
    padding: 10,
    borderRadius: 12,
    maxWidth: "75%",
  },
  otherText: {
    color: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#1f1f1f",
  },
  input: {
    flex: 1,
    color: "#fff",
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 20,
    paddingHorizontal: 12,
    marginRight: 8,
  },
});
export default styles;