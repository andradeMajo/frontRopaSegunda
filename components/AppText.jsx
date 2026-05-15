import { Text } from "react-native";
import { fuentes } from "../assets/styles/StyleManager";

export default function AppText({ style, children, ...props }) {
  return (
    <Text
      style={[
        {
          fontFamily: fuentes.poppins,
          fontWeight: fuentes.textFontWeight,
          textAlign: fuentes.textAlign,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}
