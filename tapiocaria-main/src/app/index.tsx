import { Text, TextInput, TouchableOpacity, StyleSheet, View } from "react-native";
import { Link, router } from "expo-router";
import { styles } from "./style";
import { ImageBackground } from "react-native";
 
export default function LoginScreen() {
    function handleLogin(){
        router.replace("/home/page")
    }
 
return (
  <ImageBackground
    source={require('@/assets/images/IMG_0860.png')}
    style={styles.background}
    resizeMode="cover"
  >
    <View style={styles.overlay}>
      <Text style={styles.title}>Bem-vindo de volta</Text>
 
      <TextInput
        style={styles.input}
        placeholder="Seu e-mail"
        placeholderTextColor="#999"
      />
 
      <TextInput
        style={styles.input}
        placeholder="Sua senha"
        placeholderTextColor="#999"
        secureTextEntry
      />
 
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
 
      <Link href="/cadastrar/page" style={styles.link}>Crie uma conta</Link>
   
    </View>
  </ImageBackground>
);
}