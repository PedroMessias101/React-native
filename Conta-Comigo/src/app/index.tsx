import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from "react-native"

export default function App() {
    return(
        <View style={styles.container}>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Conta Comigo</Text>
                    <Text style={styles.subtitle}>Estude  matematica básica com a gente!</Text>
                </View>

                <Image style={styles.headerImage} resizeMode="cover"   source={require("../../assets/images/banner.png")} />

                <Text style={styles.quizTitle}>Quizzes</Text>


                <TouchableOpacity style={styles.quizCard}>
                    <View style={styles.iconBox}>
                        <Image style={styles.iconImage} source={require("../../assets/images/adicao.png")}/>
                    </View>

                    <View style={styles.quizContent}>
                        <Text style={styles.quizCardTitle}>Adição</Text>
                        <Text style={styles.quizDescription}>Um desafio divertido para treinar sua mente!</Text>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity style={styles.quizCard}>
                    <View style={styles.iconBox}>
                        <Image style={styles.iconImage} source={require("../../assets/images/subtracao.png")}/>
                    </View>

                    <View style={styles.quizContent}>
                        <Text style={styles.quizCardTitle}>Subtração</Text>
                        <Text style={styles.quizDescription}>Descubra o resultado das subtrações!</Text>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity style={styles.quizCard}>
                    <View style={styles.iconBox}>
                        <Image style={styles.iconImage} source={require("../../assets/images/mutiplicacao.png")}/>
                    </View>

                    <View style={styles.quizContent}>
                        <Text style={styles.quizCardTitle}>Multiplicação</Text>
                        <Text style={styles.quizDescription}>resolva as continhas e prove que você manda bem!</Text>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity style={styles.quizCard}>
                    <View style={styles.iconBox}>
                        <Image style={styles.iconImage} source={require("../../assets/images/divisao.png")}/>
                    </View>

                    <View style={styles.quizContent}>
                        <Text style={styles.quizCardTitle}>Divisão</Text>
                        <Text style={styles.quizDescription}>Um jeito legal de praticar com diversão</Text>
                    </View>

                </TouchableOpacity>

            </ScrollView>
        </View>

    )
}


const styles = StyleSheet.create({
    header: {
        padding: 20,
        paddingTop: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#000"
    },
    subtitle: {
        fontSize: 16,
        color: "666666"
    },
    headerImage: {
        height: 190,
        borderRadius: 16,
        marginHorizontal: 20,
        marginVertical: 10, 
        width: "90%"
    },
    quizTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000000",
        marginVertical: 10,
        marginHorizontal: 20
    },
    container: {
        flex: 1, // ele ocupa todo os espaço disponivel na tela parecido com o height: 100%
    },

    quizCard: {
        borderRadius: 16,
        marginHorizontal: 20,
        marginVertical: 10,
        flexDirection: "row",
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: "#F5F5F5",
        alignItems: "center"
    },
    iconImage: {
        width: 45,
        height: 45
    },
    iconBox: {
        width: 70,
        height: 70,
        borderRadius: 8,
        backgroundColor: "#E6D8FA",
        alignItems: "center",
        justifyContent: "center"
    },

    quizContent: {
        padding: 15,
        flex: 1
    },
    quizCardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000"
    },
    quizDescription: {
        fontSize: 14,
        color: "#666",
        flexWrap: "wrap" // Quebra o texto para a linha de baixo caso o texto for muito grande
    }

})