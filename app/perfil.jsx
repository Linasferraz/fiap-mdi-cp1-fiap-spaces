import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { router } from 'expo-router';

export default function Perfil() {
  const usuario = {
    nome: 'Evellyn Valencia',
    rm: '557929',
    curso: 'Engenharia de Software',
    turma: '3ESPH',
    avatar: require('../assets/images/user.png'),
    reservas: 5,
    proximaReserva: 'Sala de Estudos 401 - Hoje, 13:30',
    campus: 'FIAP Paulista',
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={{ width: '100%' }} onPress={() => router.back()}>     
      <Text style={styles.back}>← Voltar</Text>
      </TouchableOpacity>

      <Image source={usuario.avatar} style={styles.avatar} />
      <Text style={styles.nome}>{usuario.nome}</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Dados do Aluno</Text>
        <Text style={styles.cardText}>RM: {usuario.rm}</Text>
        <Text style={styles.cardText}>Curso: {usuario.curso}</Text>
        <Text style={styles.cardText}>Turma: {usuario.turma}</Text>
        <Text style={styles.cardText}>Campus: {usuario.campus}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Histórico de Reservas</Text>
        <Text style={styles.cardText}>Reservas realizadas: {usuario.reservas}</Text>
        <Text style={styles.cardText}>Próxima reserva: {usuario.proximaReserva}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#0B0B0F',
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 30,
  },
  back: {
    alignSelf: 'flex-start',
    width: '100%',
    textAlign: 'left',
    color: '#FF005C',
    marginTop: 10,
    marginBottom: 20,
    fontWeight: '600',
    fontSize: 16,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#FF005C',
    marginBottom: 16,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15,
    textAlign: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: '#15151D',
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: '#2A2A35',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    color: '#B3B3B3',
    lineHeight: 22,
    marginBottom: 4,
  },
});