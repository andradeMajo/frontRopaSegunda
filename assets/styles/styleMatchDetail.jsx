import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 14,
    paddingTop: 48,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  title: {
    color: "#F369D6",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 20,
    marginBottom: 6,
  },

  subtitle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 20,
  },

  subtitleBold: {
    color: "#fff",
    fontWeight: "800",
  },

  matchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    marginBottom: 24,
  },

  card: {
    width: "44%",
    backgroundColor: "#000",
    borderRadius: 18,
    overflow: "hidden",
    height:240,
    borderWidth: 2,
    borderColor: "#fff",
  },

  image: {
    width: "100%",
    height: 185,
    resizeMode: "stretch",
  },

  cardTitle: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",
    paddingHorizontal: 10,
    paddingTop: 10,
    lineHeight: 18,
  },

  cardUser: {
    color: "#8B8B8B",
    fontSize: 11,
    paddingHorizontal: 10,
    marginTop: 4,
    marginBottom: 10,
  },

  heart: {
    position: "absolute",
    left: "41%",
    top: 60,
    zIndex: 999,
  },

  heartImage: {
    width: 90,
    height: 90,
    resizeMode: "contain",
  },

  desc: {
    color: "#fff",
    textAlign: "center",
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 14,
    borderTopWidth: 1,
    borderTopColor: "#2B2B2B",
    paddingTop: 16,
  },

  section: {
    marginBottom: 15,
  },

  labelPink: {
    color: "#F369D6",
    fontWeight: "800",
    fontSize: 14,
    marginBottom: 8,
    marginTop: 6,
    textTransform: "uppercase",
  },

  labelPinkCenter: {
    color: "#F369D6",
    fontWeight: "800",
    fontSize: 14,
    marginBottom: 8,
    marginTop: 6,
    textTransform: "uppercase",
    textAlign: "center",
  },

  selector: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    borderBottomWidth: 1,
    borderBottomColor: "#3A3A3A",
    paddingBottom: 14,
    paddingTop: 6,
    gap: 10,
    marginBottom: 15,
  },

  selectorText: {
    color: "#fff",
    flex: 1,
    fontSize: 15,
  },

  change: {
    color: "#8B8B8B",
    fontSize: 14,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#3A3A3A",
    paddingBottom: 14,
  },

  timeBox: {
    width: "40%",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.75)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    width: "80%",
    maxHeight: 500,
    backgroundColor: "#111",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#333",
  },

  optionButton: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#222",
  },

  optionText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },

  text: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "400",
    marginTop: 4,
  },

  mainButton: {
    marginTop: 24,
    backgroundColor: "#2F80FF",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  mainButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },

  ratingButton: {
    marginTop: 20,
    backgroundColor: "#F369D6",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  ratingButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  input: {
    backgroundColor: "#1a1a1a",
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: "#333",
  },

  webInput: {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#333",
  },

  ratingInput: {
    backgroundColor: "#0f0f0f",
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: "#F369D6",
    color: "#fff",
    minHeight: 100,
    textAlignVertical: "top",
  },

  placeholder: {
    color: "#666",
  },

  link: {
    color: "#3B82F6",
    marginTop: 4,
  },

  calendarBox: {
    backgroundColor: "#1a1a1a",
    borderRadius: 16,
    padding: 10,
    width: "90%",
  },

  close: {
    color: "#3B82F6",
    textAlign: "center",
    marginTop: 10,
  },

  avatarContainer: {
    alignItems: "center",
    marginTop: 10,
  },

  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },

  likeButton: {
    position: "absolute",
    right: 10,
    bottom: 10,
    backgroundColor: "#F369D6",
    padding: 10,
    borderRadius: 50,
    elevation: 5,
    shadowColor: "#F369D6",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },

  starsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    gap: 8,
  },

  commentTitle: {
    color: "#F369D6",
    fontSize: 16,
    marginTop: 25,
    marginBottom: 10,
    fontWeight: "600",
  },

  infoContainer: {
    marginTop: 20,
    alignItems: "center",
  },

  infoText: {
    color: "#aaa",
    fontSize: 12,
  },

  heartIcon: {
    width: 18,
    height: 18,
    marginLeft: 8,
    resizeMode: "contain",
  },

  // ── NUEVOS ──────────────────────────────────────

  placeDisplay: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
    marginTop: 6,
    marginBottom: 4,
  },

  locationIcon: {
    marginTop: 2,
  },

  placeDisplayInfo: {
    marginLeft: 8,
  },

  placeDisplayName: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
  },

  placeDisplayAddress: {
    color: "#4A90D9",
    fontSize: 14,
    marginTop: 2,
    textAlign: "center",
  },

  separator: {
    height: 1,
    backgroundColor: "#2e2e3e",
    marginTop: 16,
    marginBottom: 4,
    marginHorizontal: 4,
  },

  extraSection: {
    marginTop: 20,
    gap: 12,
  },

  reminderRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 4,
  },

  reminderInfo: {
    marginLeft: 10,
  },

  reminderIcon: {
    width: 24,
    height: 24,
  },

  reminderTitle: {
    color: "#F369D6",
    fontWeight: "700",
    fontSize: 14,
  },

  reminderText: {
    color: "#aaa",
    fontSize: 13,
    marginTop: 2,
  },

  extraBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: "#ffffff",
  },

  extraBtnInfo: {
    marginLeft: 10,
  },

  extraBtnIcon: {
    width: 24,
    height: 24,
  },

  extraBtnTitle: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },

  extraBtnSubtitle: {
    color: "#aaa",
    fontSize: 13,
    marginTop: 2,
  },

  btnAccept: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#F369D6",
    paddingVertical: 16,
    borderRadius: 14,
  },

  btnPropose: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#257CFF",
    paddingVertical: 16,
    borderRadius: 14,
    marginTop: 10,
    marginBottom: 30,
  },
});