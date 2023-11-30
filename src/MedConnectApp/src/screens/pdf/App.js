import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";

export default function PDF() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/pdfFundo.jpg")}
        style={styles.fundo}
        resizeMode="contain"
      />

      <View style={styles.overlay}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Aqui é o header!</Text>
        </View>

        <ScrollView>
          <View style={styles.body}>
            <TouchableOpacity
              style={[styles.button, styles.buttonCadastro]}
              onPress={() => {
                // Adicione ação Inserir Exames
              }}
              activeOpacity={0.7}
            >
              <Text
                style={styles.buttonTextCadastro}
              >
                Inserir Exames
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonCadastro]}
              onPress={() => navigation.navigate("Exames")}
              activeOpacity={0.7}
            >
              <Text
                style={styles.buttonTextCadastro}
              >
                Acessar Exames
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Aqui é o footer!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fundo: {
    flex: 1,
    opacity: 0.1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  header: {
    zIndex: 2,
    backgroundColor: "#f0f0f0",
    paddingTop: 48,
    paddingLeft: 12,
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50%",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  footer: {
    zIndex: 2,
    backgroundColor: "#f0f0f0",
    paddingBottom: 24,
  },
  footerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    padding: 10,
    borderRadius: 10,
    margin: 5,
    alignItems: "center",
    zIndex: 5,
    width: 240,
  },
  buttonCadastro: {
    backgroundColor: "#4C4DDC",
  },
  buttonTextCadastro: {
    color: "white",
    fontSize: 18,
  },
});
