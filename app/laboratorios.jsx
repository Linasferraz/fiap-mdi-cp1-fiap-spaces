import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, TextInput } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';

export default function Laboratorios() {
  const [laboratorios] = useState([
    { id: 1, nome: 'Lab 201', local: '2º andar - Unidade Paulista', status: 'Disponível' },
    { id: 2, nome: 'Lab 202', local: '2º andar - Unidade Paulista', status: 'Disponível' },
    { id: 3, nome: 'Lab 301', local: '3º andar - Unidade Paulista', status: 'Disponível' },
    { id: 4, nome: 'Lab 302', local: '3º andar - Unidade Paulista', status: 'Disponível' },
    { id: 5, nome: 'Lab 401', local: '4º andar - Unidade Paulista', status: 'Disponível' },
    { id: 6, nome: 'Lab 501', local: '5º andar - Unidade Paulista', status: 'Disponível' },
  ]);

  const [labSelecionado, setLabSelecionado] = useState(null);
  const [nomeAluno, setNomeAluno] = useState('');
  const [rmAluno, setRmAluno] = useState('');

  const abrirFormulario = (lab) => {
    setLabSelecionado(lab.id);
    setNomeAluno('');
    setRmAluno('');
  };

  const confirmarAgendamento = (lab) => {
    if (!nomeAluno || !rmAluno) {
      Alert.alert('Campos obrigatórios', 'Preencha seu nome e RM para continuar.');
      return;
    }

    Alert.alert(
      'Agendamento realizado',
      `${lab.nome} reservado para ${nomeAluno} (RM: ${rmAluno})`
    );

    setLabSelecionado(null);
    setNomeAluno('');
    setRmAluno('');
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.back}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Laboratórios</Text>
      <Text style={styles.subtitle}>Disponíveis para agendamento</Text>

      {laboratorios.length === 0 ? (
        <Text style={styles.empty}>Nenhum laboratório disponível no momento</Text>
      ) : (
        laboratorios.map((lab) => (
          <View key={lab.id} style={styles.card}>
            <Text style={styles.labName}>{lab.nome}</Text>
            <Text style={styles.labInfo}>{lab.local}</Text>
            <Text style={styles.labStatus}>Disponível</Text>

            {labSelecionado === lab.id ? (
              <View style={styles.formContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Digite seu nome"
                  placeholderTextColor="#888"
                  value={nomeAluno}
                  onChangeText={setNomeAluno}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Digite seu RM"
                  placeholderTextColor="#888"
                  value={rmAluno}
                  onChangeText={setRmAluno}
                  keyboardType="numeric"
                />

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => confirmarAgendamento(lab)}
                >
                  <Text style={styles.buttonText}>Confirmar agendamento</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                style={styles.button}
                onPress={() => abrirFormulario(lab)}
              >
                <Text style={styles.buttonText}>Agendar laboratório</Text>
              </TouchableOpacity>
            )}
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0F',
    padding: 20,
  },
  back: {
    color: '#FF005C',
    marginTop: 50,
    marginBottom: 10,
    fontWeight: '600',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#B3B3B3',
    marginBottom: 24,
  },
  empty: {
    color: '#B3B3B3',
    textAlign: 'center',
    marginTop: 40,
  },
  card: {
    backgroundColor: '#15151D',
    padding: 18,
    borderRadius: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#2A2A35',
  },
  labName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 6,
  },
  labInfo: {
    fontSize: 14,
    color: '#B3B3B3',
    marginBottom: 8,
  },
  labStatus: {
    fontSize: 14,
    color: '#FF005C',
    fontWeight: '600',
    marginBottom: 12,
  },
  formContainer: {
    marginTop: 10,
  },
  input: {
    backgroundColor: '#1E1E28',
    color: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#2A2A35',
  },
  button: {
    backgroundColor: '#FF005C',
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});