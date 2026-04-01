import { View, Text, StyleSheet, Image } from 'react-native';
import { router } from 'expo-router';
import HomeCard from '../components/HomeCard';

export default function Home() {
  return (
    <View style={styles.container}>
      
      <Image
        source={require('../assets/images/fiap_capa.png')}
        style={styles.image}
      />

      <Text style={styles.title}>FIAP Spaces</Text>
      <Text style={styles.slogan}>Let’s Rock the Future</Text>
      <Text style={styles.subtitle}>Escolha uma opção para continuar</Text>

      <HomeCard
        title="Laboratórios"
        description="Visualize e agende laboratórios disponíveis"
        onPress={() => router.push('/laboratorios')}
      />

      <HomeCard
        title="Salas de estudo"
        description="Encontre espaços de estudo disponíveis"
        onPress={() => router.push('/agendamento')}
      />

      <HomeCard
        title="Perfil"
        description="Acesse suas informações e reservas"
        onPress={() => router.push('/perfil')}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0F',
    padding: 24,
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 16,
    marginBottom: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 6,
  },
  slogan: {
    fontSize: 16,
    color: '#FF005C',
    fontWeight: '600',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#B3B3B3',
    marginBottom: 30,
  },
});