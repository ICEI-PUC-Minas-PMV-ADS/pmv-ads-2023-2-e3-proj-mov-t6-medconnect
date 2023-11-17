import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';

const RemedioPage = () => {
  const [remedios, setRemedios] = useState([
    { id: '1', nome: 'Paracetamol', tempo: 'A cada 6 horas' },
    { id: '2', nome: 'Ibuprofeno', tempo: 'A cada 8 horas' },
    { id: '3', nome: 'Dipirona', tempo: 'A cada 4 horas' },
    { id: '4', nome: 'Amoxicilina', tempo: 'A cada 12 horas' },
    { id: '5', nome: 'Omeprazol', tempo: 'Antes das refeições' },
    { id: '6', nome: 'Cetirizina', tempo: 'A cada 24 horas' },
    // Adicione mais remédios conforme necessário
  ]);

  const outrosRemedios = [
    { nome: 'Centrum', quantidade: '1 capsule', horarios: ['9:00', '13:00', '20:00'] },
    { nome: 'Sinupret', quantidade: '2 pills' },
    { nome: 'Mixture', quantidade: '1 dotting sp.' },
    // Adicione mais remédios conforme necessário
  ];

  /*return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Lista de Remédios</Text>
      <FlatList
        data={remedios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.tempo}>{item.tempo}</Text>
          </View>
        )}
      />

      <Text style={styles.header}>Outros Remédios</Text>
      {outrosRemedios.map((remedio, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text style={styles.nome}>{remedio.nome}</Text>
          <Text style={styles.item}>{remedio.quantidade}</Text>
          {remedio.horarios && remedio.horarios.map((horario, idx) => (
            <Text key={idx} style={styles.item}>{horario}</Text>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}; */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    marginBottom: 16,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tempo: {
    fontSize: 16,
    color: '#555',
  },
  item: {
    fontSize: 16,
    color: '#333',
  },
});

export default RemedioPage;
