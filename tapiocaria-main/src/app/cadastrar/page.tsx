import { ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styless";


export default function CadastrarScreen() {
    return (

        <ImageBackground
            source={require('@/assets/images/fundo2.jpeg')}
            style={styles.background}
            resizeMode="cover"
        >



            <View style={styles.overlay}>
                <Text style={styles.title}>Cadastrar</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Seu Nome"
                    placeholderTextColor="#999"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Sua data de nascimento"
                    placeholderTextColor="#999"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Seu Cpf"
                    placeholderTextColor="#999"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Seu e-mail"
                    placeholderTextColor="#999"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Sua senha"
                    placeholderTextColor="#999"
                />

                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>


        </ImageBackground>

    );
}