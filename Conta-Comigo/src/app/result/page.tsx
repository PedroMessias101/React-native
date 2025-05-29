import { Link } from "expo-router";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function ResultPage(){
    return(
    <View style={styles.container}>
       <View style={styles.content}>
          <Text style={styles.title}>Mandou bem!</Text>

          <Text style={styles.subtitle}>Você é um verdadeiro gênio da matemática!  <br />Continue assim</Text>

          <Text style={styles.score}>10/10</Text>

          <Link href={"/"} asChild>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Voltar para o início</Text>
            </TouchableOpacity>
          </Link>
       </View>

    </View>
    )
}

const styles = StyleSheet.create({
        container: {
            flex: 1
        },
        content: {
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            paddingHorizontal: 32
        },
        title: {
            fontSize: 20,
            fontWeight: "bold",
            color: "#1a1a1a",
            marginBottom: 16,
            textAlign: "center"
        },
        subtitle: {
            fontSize: 16,
            color: "#666666",
            textAlign: "center",
            marginBottom: 48,
            paddingHorizontal: 16

        },
        score: {
            fontSize: 48,
            fontWeight: "bold",
            color: "#6366f1",
            marginBottom: 64
        },
        button: {
            backgroundColor: "#8b5cf6",
            paddingVertical: 16,
            paddingHorizontal: 12,
            borderRadius: 12,
            width: "100%",
            maxWidth: 200
        },
        buttonText: {
            color: "#fff",
            fontSize: 16,
            fontWeight: "semibold",
            textAlign: "center"
        }
})