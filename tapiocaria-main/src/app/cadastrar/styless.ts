import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    overlay: {
        width: '80%',
        borderRadius: 12,
        padding: 25,
        marginBottom: 50, // sobe a div
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 5,
        backgroundColor: '#fff',
    },

    input: {
        width: '100%',
        height: 65,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        marginBottom: 15,
        borderColor: '#ffd700',
        borderWidth: 1,
    },

    inputs: {
        width: '100%',
        height: "90%",
        backgroundColor: '#fff',
        marginBottom: 90,
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        borderColor: '#ffd700',
        borderWidth: 1,
    },

    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#ff8c00',
        textAlign: 'center',
        marginBottom: 30,
    },

    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#006400',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },

    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

})