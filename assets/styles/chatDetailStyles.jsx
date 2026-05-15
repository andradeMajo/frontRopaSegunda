import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 12,
    backgroundColor: "#000",
  },
  headerName: { color: "#fff", fontWeight: "700", fontSize: 17 },

  scroll: { flex: 1, paddingHorizontal: 14 },

  bubbleMe: {
    alignSelf: "flex-end",
    backgroundColor: "#3B82F6",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderBottomRightRadius: 5,
    marginVertical: 3,
    maxWidth: "72%",
  },
  bubbleMeText: { color: "#fff", fontSize: 15, lineHeight: 21 },

  bubbleRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginVertical: 3,
    gap: 7,
  },
  avatar: { width: 32, height: 32, borderRadius: 16 },
  bubbleOther: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderBottomLeftRadius: 5,
    maxWidth: "72%",
  },
  bubbleOtherText: { color: "#111", fontSize: 15, lineHeight: 21 },

productCard: {
  width: 215,

  backgroundColor: "#2F80FF",

  borderRadius: 32,

  overflow: "hidden",

  alignSelf: "flex-end",

  marginVertical: 8,

  paddingTop: 14,

  paddingBottom: 14,
},

productSharedLabel: {
  color: "#fff",

  fontSize: 15,
  fontWeight: "800",

  lineHeight: 18,

  paddingHorizontal: 14,
  paddingBottom: 12,
},

productImageContainer: {
  paddingHorizontal: 10,
},
productImage: {
  width: 190,
  height: 170,

  alignSelf: "center",

  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
},
productBtn: {
  width: 190,
  height: 56,

  backgroundColor: "#E361D6",

  alignSelf: "center",

  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
borderBottomLeftRadius: 20,
borderBottomRightRadius: 20,

  gap: 7,
},

productBtnText: {
  color: "#fff",

  fontSize: 14,
  fontWeight: "800",
},
matchBubble: {
  backgroundColor: "#2F80FF",

  width: 245,

  borderRadius: 28,

  alignSelf: "flex-end",

  paddingTop: 14,
  paddingHorizontal: 12,
  paddingBottom: 14,

  marginVertical: 8,
},
matchHeartImage: {
  width: 52,
  height: 52,
},
matchBubbleTitle: {
  color: "#fff",

  fontSize: 18,
  fontWeight: "700",

  textAlign: "center",

  marginBottom: 12,
},

matchImagesRow: {
  flexDirection: "row",

  justifyContent: "space-between",

  position: "relative",

  marginBottom: 18,
},

matchImageHalf: {
  width: 104,
  height: 128,

  borderRadius: 16,
},
matchHeartOverlay: {
  position: "absolute",

  top: "50%",
  left: "50%",

  transform: [
    { translateX: -25 },
    { translateY: -25 },
  ],

  width: 50,
  height: 50,

  borderRadius: 25,

  alignItems: "center",
  justifyContent: "center",

  zIndex: 20,
},

matchActions: {
  gap: 14,
},

matchBtnOutline: {
  height: 48,

  borderWidth: 2,
  borderColor: "#fff",

  borderRadius: 16,

  alignItems: "center",
  justifyContent: "center",
},
matchBtnOutlineText: {
  color: "#fff",

  fontSize: 17,
  fontWeight: "600",
},

matchBtnFill: {
  height: 48,

  backgroundColor: "#E361D6",

  borderRadius: 16,

  alignItems: "center",
  justifyContent: "center",
},

matchBtnFillText: {
  color: "#fff",

  fontSize: 17,
  fontWeight: "700",
},

  matchAcceptedBubble: {
    backgroundColor: "#F369D6",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderBottomLeftRadius: 5,
    maxWidth: "72%",
  },
  matchAcceptedText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
    fontStyle: "italic",
  },

  rateBtn: {
    backgroundColor: "#3B82F6",
    marginHorizontal: 14,
    marginTop: 6,
    marginBottom: 10,
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  rateBtnText: { color: "#fff", fontWeight: "700", fontSize: 16 },

  inputBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBottom: 30,
    borderTopWidth: 1,
    borderColor: "#1a1a1a",
    gap: 10,
    backgroundColor: "#000",
  },
  input: {
    flex: 1,
    color: "#fff",
    borderWidth: 1,
    borderColor: "#2a2a2a",
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 15,
    backgroundColor: "#111",
  },
  inputIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  sendBtn: {
    backgroundColor: "#F369D6",
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },

  sheetBlue: {
    backgroundColor: "#3B82F6",
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    paddingTop: 28,
    paddingHorizontal: 20,
    paddingBottom: 40,
    minHeight: "72%",
  },
  sheetHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 26,
    position: "relative",
  },
  sheetTitle: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 22,
    textAlign: "center",
  },
  sheetCloseBtn: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  sheetGrid: {
    flexDirection: "row",
    gap: 14,
  },
  sheetCard: {
    flex: 1,
    backgroundColor: "#111",
    borderRadius: 22,
    overflow: "hidden",
  },
  sheetCardImage: {
    width: "100%",
    height: 230,
  },
  sheetCardTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
    lineHeight: 22,
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 4,
  },
  sheetCardAuthor: {
    color: "#aaa",
    fontSize: 13,
    fontWeight: "500",
    paddingHorizontal: 12,
    paddingBottom: 10,
  },
  sheetCardBtn: {
    backgroundColor: "#F472D0",
    paddingVertical: 13,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
  },
  sheetCardBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },

  sheetPink: {
    backgroundColor: "#F369D6",
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    padding: 20,
    paddingBottom: 40,
  },
  sheetPinkTitle: {
    color: "#ffffff",
    fontWeight: "800",
    fontSize: 17,
    flex: 1,
    right: 20,
    textAlign: "center",
  },
  matchRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 20,
    position: "relative",
  },
  matchItemCard: {
    flex: 1,
    backgroundColor: "#161616",
    borderRadius: 22,
    overflow: "hidden",
  },
  matchItemImage: { width: "100%", height: 200 },
  matchItemTitle: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "800",
    lineHeight: 20,
    padding: 12,
    paddingBottom: 4,
  },
  matchItemAuthor: {
    color: "#666",
    fontSize: 13,
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  matchHeartCenter: {
    position: "absolute",
    top: "38%",
    left: "50%",
    transform: [{ translateX: -30 }, { translateY: -30 }],
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    elevation: 6,
  },
  proposeBtn: {
    backgroundColor: "#3B82F6",
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  proposeBtnText: { color: "#fff", fontWeight: "700", fontSize: 16 },
});