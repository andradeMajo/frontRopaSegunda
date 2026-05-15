import { useRouter } from 'expo-router';
import { Text, TouchableOpacity } from "react-native";
export default function Botones({ styleBoton, routerRut, botonText, styleTextBoton,onPress }) {
     const router = useRouter();
     function handlePress(){
        if (onPress) return onPress();
        if(routerRut)  return router.push(routerRut);
     }
    return (
<TouchableOpacity
  style={[{ width: "100%" }, styleBoton]}
  onPress={handlePress}
>
  <Text style={styleTextBoton}>{botonText}</Text>
</TouchableOpacity>
    )
}