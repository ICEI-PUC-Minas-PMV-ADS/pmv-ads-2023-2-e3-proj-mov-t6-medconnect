import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";

export default function Exames() {
  const navigate = useNavigation()
  const handlePdfClick = () => {
    navigate.navigate("PDFFile")
  };

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

        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <View style={styles.body}>
            <Text style={styles.textoInicial}>Documentos Enviados</Text>
            <Text style={styles.dataDocumentos}>25/09/2023, 10:55AM</Text>

            <View style={styles.pdfContainer}>
              <TouchableOpacity onPress={() => handlePdfClick()}>
                <Image
                  source={require("../../assets/images/pdfIcone.jpg")}
                  style={styles.pdf}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handlePdfClick()}>
                <Image
                  source={require("../../assets/images/pdfIcone.jpg")}
                  style={styles.pdf}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handlePdfClick()}>
                <Image
                  source={require("../../assets/images/pdfIcone.jpg")}
                  style={styles.pdf}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.tipoExames}>Exame de sangue</Text>
          </View>

          <View style={styles.body}>
            <Text style={styles.textoInicial}>Documentos Enviados</Text>
            <Text style={styles.dataDocumentos}>25/09/2023, 10:55AM</Text>

            <View style={styles.pdfContainer}>
              <TouchableOpacity onPress={handlePdfClick}>
                <Image
                  source={require("../../assets/images/pdfIcone.jpg")}
                  style={styles.pdf}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/images/pdfIcone.jpg")}
                  style={styles.pdf}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/images/pdfIcone.jpg")}
                  style={styles.pdf}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.tipoExames}>Exame de sangue</Text>
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  fundo: {
    flex: 1,
    resizeMode: "cover",
    opacity: 0.1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  header: {
    zIndex: 2,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#f0f0f0",
    paddingTop: 48,
    paddingLeft: 12,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "flex-start",
    paddingTop: 50,
    paddingRight: 10,
  },
  body: {
    zIndex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    margin: 20,
  },
  footer: {
    zIndex: 2,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#f0f0f0",
    paddingBottom: 24,
  },
  footerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  pdfContainer: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "row-reverse",
    flexWrap: "wrap",
  },
  pdf: {
    zIndex: 3,
    width: 70,
    height: 70,
    marginTop: 12,
  },
  textoInicial: {
    marginTop: 24,
  },
  dataDocumentos: {
    marginTop: 24,
    color: "lightblue",
  },
  tipoExames: {
    marginTop: 12,
  },
});
