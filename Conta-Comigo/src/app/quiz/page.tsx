import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function QuizScreen() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Adição</Text>
        <Text style={styles.subtitle}>
          selecione a melhor resposta para completar a continha
        </Text>
      </View>

      <View style={styles.equationContainer}>
        <View style={styles.numberBox}>
          <Text style={styles.numberText}>3</Text>
        </View>

        <Text style={styles.operatotText}>+</Text>

        <View style={styles.numberBox}>
          <Text style={styles.numberText}>3</Text>
        </View>

        <Text style={styles.operatotText}>=</Text>

        <View style={styles.resultBox}>

        </View>
      </View>
      <Text style={styles.progressText}>1 de 10</Text>

      <View style={styles.optionContainer}>
        <View style={styles.optionRow}>
            <TouchableOpacity style={styles.optionBox}>
                <Text style={styles.optionText}>6</Text>
                 </TouchableOpacity>
            <TouchableOpacity style={styles.optionBox}>
                <Text style={styles.optionText}>5</Text>
                 </TouchableOpacity>
            
        </View>
        </View>

        <View style={styles.optionRow}>
             <TouchableOpacity style={styles.optionBox}>
                <Text style={styles.optionText}>7</Text>
                 </TouchableOpacity>
            <TouchableOpacity style={styles.optionBox}>
                <Text style={styles.optionText}>9</Text>
                 </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonColor}>Proxima pergunta</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 50,
    paddingVertical: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#666666",
  },
  equationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 55,
    marginBottom: 30,
  },
  numberBox: {
    width: 60,
    height: 60,
    backgroundColor: "#f0f0ff",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  resultBox: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: "#6750a4",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#6750a4",
  },
  operatotText: {
    fontSize: 28,
    fontWeight: "bold",
    marginHorizontal: 15,
  },
  progressText: {
    fontSize: 16,
    color: "#66666",
    textAlign: "left",
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10
  },
  optionContainer: {
        marginHorizontal: 20,
        marginTop: 20
  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  optionBox:{
    height: 130,
    backgroundColor: "#f0f0fff",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    width: "48%"
  },
  optionText: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#6750a4"
  },
  nextButton: {
    backgroundColor: "#8e6fe1",
    borderRadius: 8,
    paddingVertical: 15,
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: "center"
  },
  nextButtonColor: {
    color: "#fff",
    fontWeight: "bold"
  }

});
