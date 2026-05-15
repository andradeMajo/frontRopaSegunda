import { StyleSheet } from "react-native";
import { colores, fuentes, radius } from "./StyleManager";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colores.black, 
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
  },
  iconContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    opacity: 10,
  },
  title: {
    textAlign: fuentes.textAlign,
    color: colores.secundary,
    fontSize: fuentes.TitleFontSize,
    fontFamily: fuentes.poppins,
    fontWeight: fuentes.titleFontWeight,
    marginBottom: radius.marginBottom,
  },
  button: {
    backgroundColor: colores.primary,
    paddingVertical: 16,
    borderRadius: radius.borderRadius,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 25,
  },
  buttonText: {
    color: colores.text,
    fontFamily: fuentes.poppins,
    fontWeight: fuentes.titleFontWeight,
    fontSize: 16,
  },
  separator: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colores.grey,
  },
  or: {
    color: colores.lightGrey,
    marginHorizontal: 10,
  },
 googleButton: {
  flexDirection: "row",        
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: colores.text,   
  borderRadius: radius.borderRadius,
  paddingVertical: 16,
  paddingHorizontal: 20,
  marginBottom: 20,
},
googleTextTop: {
  color: colores.black,              
  fontSize: 14,
  fontFamily: fuentes.poppins,
  fontWeight: fuentes.textFontWeight,
},
googleIcon: {
  width: 20,
  height: 20,
  marginLeft: 10,             
},
  footer: {
    textAlign: "center",
    color: colores.lightGrey,
    fontSize: 13,
  },
  link: {
    color: colores.lightGrey,
    fontFamily: fuentes.poppins,
    fontWeight: fuentes.titleFontWeight,
  },
});