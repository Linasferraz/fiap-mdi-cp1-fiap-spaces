import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function Agendamento() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.back}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Salas de Estudo</Text>
      <Text style={styles.subtitle}>
        Esta tela será destinada ao agendamento de salas de estudo distribuídas pelos andares da unidade Paulista.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Em desenvolvimento</Text>
        <Text style={styles.cardText}>
          Funcionalidade reservada para implementação da integrante responsável.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0F',
    padding: 24,
  },
  back: {
    color: '#FF005C',
    marginTop: 50,
    marginBottom: 20,
    fontWeight: '600',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: '#B3B3B3',
    marginBottom: 30,
    lineHeight: 22,
  },
  card: {
    backgroundColor: '#15151D',
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: '#2A2A35',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: '#B3B3B3',
    lineHeight: 20,
  },
});