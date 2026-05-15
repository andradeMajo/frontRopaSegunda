import { Poppins_400Regular, Poppins_700Bold, Poppins_900Black } from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { Text } from 'react-native';

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_900Black,
  });

  if (!fontsLoaded) {
    return <Text>Cargando fuentes...</Text>;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}