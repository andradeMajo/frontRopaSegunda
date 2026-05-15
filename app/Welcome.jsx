import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useEffect, useRef } from 'react';
import { Animated, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import global from '../assets/styles/StyleManager';
import styles from '../assets/styles/WelcomeStyles';
import Botones from '../components/botones';
import Title from '../components/title';

export default function Welcome() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const fade = useRef(new Animated.Value(0)).current;
  const translate = useRef(new Animated.Value(60)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, { toValue: 1, duration: 700, useNativeDriver: true }),
      Animated.spring(translate, { toValue: 0, friction: 7, tension: 70, useNativeDriver: true }),
    ]).start();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <ImageBackground
        source={require('../assets/images/bg.png')}
        style={styles.image}
        resizeMode="cover"
      >
        <LinearGradient
          colors={[
            'transparent',
            'rgba(0,0,0,0.5)',
            'rgba(0,0,0,0.95)',
            '#000',
          ]}
          locations={[0.3, 0.55, 0.75, 0.9]}
          style={styles.gradient}
        />
      </ImageBackground>

      <Animated.View
        style={[
          styles.content,
          {
            opacity: fade,
            transform: [{ translateY: translate }],
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            paddingBottom: Math.max(insets.bottom + 16, 36), // respeta home indicator
          }
        ]}
      >
        <Title
          title="BIENVENIDX"
          subtitle="¿Listx para encontrar tu parche y cazar esa joyita que nadie más tiene?"
        />

    
        <View style={{ height: 12 }} />

        <Botones
          styleBoton={[global.primaryButton, styles.pillButton]}
          botonText="Iniciar sesión"
          onPress={() => router.push("/Login")}
          styleTextBoton={global.primaryText}
        />
        <Botones
          styleBoton={[global.secondaryButton, styles.pillButton]}
          botonText="Unirse de una"
          onPress={() => router.push("/register")}
          styleTextBoton={global.primaryText}
        />

        <TouchableOpacity
          onPress={() => router.push("/home")}
          style={{ marginTop: 4 }}
        >
          <Text style={global.underlineWhiteText}>
            Omitir y entrar en modo invitado
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}