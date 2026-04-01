import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, TextInput } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';

export default function Agendamento() {
  const [salas] = useState([
    { id: 1, nome: 'Sala 201', local: '2º andar - Unidade Paulista', horarios: ['07:00–09:00', '09:00–11:00', '11:00–13:00', '13:00–15:00', '15:00–17:00', '17:00–19:00', '19:00–21:00', '21:00–23:00'] },
    { id: 2, nome: 'Sala 202', local: '2º andar - Unidade Paulista', horarios: ['07:00–09:00', '09:00–11:00', '11:00–13:00', '13:00–15:00', '15:00–17:00', '17:00–19:00', '19:00–21:00', '21:00–23:00'] },
    { id: 3, nome: 'Sala 401', local: '4º andar - Unidade Paulista', horarios: ['07:00–09:00', '09:00–11:00', '11:00–13:00', '13:00–15:00', '15:00–17:00', '17:00–19:00', '19:00–21:00', '21:00–23:00'] },
    { id: 4, nome: 'Sala 601', local: '6º andar - Unidade Paulista', horarios: ['07:00–09:00', '09:00–11:00', '11:00–13:00', '13:00–15:00', '15:00–17:00', '17:00–19:00', '19:00–21:00', '21:00–23:00'] },
    { id: 5, nome: 'Sala 801', local: '8º andar - Unidade Paulista', horarios: ['07:00–09:00', '09:00–11:00', '11:00–13:00', '13:00–15:00', '15:00–17:00', '17:00–19:00', '19:00–21:00', '21:00–23:00'] },
    { id: 6, nome: 'Sala 1001', local: '10º andar - Unidade Paulista', horarios: ['07:00–09:00', '09:00–11:00', '11:00–13:00', '13:00–15:00', '15:00–17:00', '17:00–19:00', '19:00–21:00', '21:00–23:00'] },
  ]);

  const [salaSelecionada, setSalaSelecionada] = useState(null);
  const [horarioSelecionado, setHorarioSelecionado] = useState('');
  const [nomeAluno, setNomeAluno] = useState('');
  const [rmAluno, setRmAluno] = useState('');
  const [agendamentos, setAgendamentos] = useState([]);

  const abrirFormulario = (sala) => {
    setSalaSelecionada(sala.id);
    setHorarioSelecionado('');
    setNomeAluno('');
    setRmAluno('');
  };

  const confirmarAgendamento = (sala) => {
    if (!nomeAluno || !rmAluno) {
      Alert.alert('Campos obrigatórios', 'Preencha seu nome e RM para continuar.');
      return;
    }
    if (!horarioSelecionado) {
      Alert.alert('Selecione um horário', 'Escolha um horário disponível antes de confirmar.');
      return;
    }

    const jaAgendado = agendamentos.find(
      (a) => a.salaId === sala.id && a.horario === horarioSelecionado
    );
    if (jaAgendado) {
      Alert.alert('Horário indisponível', 'Este horário já foi reservado.');
      return;
    }

    setAgendamentos((prev) => [
      ...prev,
      { salaId: sala.id, salaNome: sala.nome, horario: horarioSelecionado, nome: nomeAluno, rm: rmAluno },
    ]);

    Alert.alert(
      'Agendamento realizado',
      `${sala.nome} reservada para ${nomeAluno} (RM: ${rmAluno})\nHorário: ${horarioSelecionado}`
    );

    setSalaSelecionada(null);
    setHorarioSelecionado('');
    setNomeAluno('');
    setRmAluno('');
  };

  const cancelarAgendamento = (salaId, horario) => {
    Alert.alert(
      'Cancelar agendamento',
      'Deseja cancelar este horário?',
      [
        { text: 'Não', style: 'cancel' },
        {
          text: 'Sim, cancelar',
          style: 'destructive',
          onPress: () =>
            setAgendamentos((prev) =>
              prev.filter((a) => !(a.salaId === salaId && a.horario === horario))
            ),
        },
      ]
    );
  };

  const horarioOcupado = (salaId, horario) =>
    agendamentos.some((a) => a.salaId === salaId && a.horario === horario);

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.back}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Salas de Estudo</Text>
      <Text style={styles.subtitle}>Disponíveis para agendamento</Text>

      {/* Resumo */}
      <View style={styles.resumo}>
        <View style={styles.resumoItem}>
          <Text style={styles.resumoNum}>{salas.length}</Text>
          <Text style={styles.resumoLabel}>Salas</Text>
        </View>
        <View style={styles.resumoDivider} />
        <View style={styles.resumoItem}>
          <Text style={[styles.resumoNum, { color: '#3DAA60' }]}>{agendamentos.length}</Text>
          <Text style={styles.resumoLabel}>Meus agendamentos</Text>
        </View>
      </View>

      {/* Meus agendamentos */}
      {agendamentos.length > 0 && (
        <View style={styles.minhasSessao}>
          <Text style={styles.minhasTitle}>Meus Agendamentos</Text>
          {agendamentos.map((a, i) => (
            <View key={i} style={styles.minhasCard}>
              <View style={{ flex: 1 }}>
                <Text style={styles.minhasNome}>{a.salaNome}</Text>
                <Text style={styles.minhasHor}>{a.horario}</Text>
              </View>
              <TouchableOpacity
                style={styles.btnCancelar}
                onPress={() => cancelarAgendamento(a.salaId, a.horario)}
              >
                <Text style={styles.btnCancelarTxt}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}

      {/* Lista de salas */}
      {salas.length === 0 ? (
        <Text style={styles.empty}>Nenhuma sala disponível no momento</Text>
      ) : (
        salas.map((sala) => (
          <View key={sala.id} style={styles.card}>
            <Text style={styles.salaNome}>{sala.nome}</Text>
            <Text style={styles.salaInfo}>{sala.local}</Text>
            <Text style={styles.salaStatus}>Disponível</Text>

            {salaSelecionada === sala.id ? (
              <View style={styles.formContainer}>

                <Text style={styles.formLabel}>Selecione o horário:</Text>
                <View style={styles.horariosGrid}>
                  {sala.horarios.map((h) => {
                    const ocupado = horarioOcupado(sala.id, h);
                    const selecionado = horarioSelecionado === h;
                    return (
                      <TouchableOpacity
                        key={h}
                        style={[
                          styles.horarioBtn,
                          selecionado && styles.horarioBtnSelecionado,
                          ocupado && styles.horarioBtnOcupado,
                        ]}
                        onPress={() => !ocupado && setHorarioSelecionado(h)}
                        disabled={ocupado}
                      >
                        <Text
                          style={[
                            styles.horarioBtnTxt,
                            selecionado && styles.horarioBtnTxtSelecionado,
                            ocupado && styles.horarioBtnTxtOcupado,
                          ]}
                        >
                          {h}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>

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
                  onPress={() => confirmarAgendamento(sala)}
                >
                  <Text style={styles.buttonText}>Confirmar agendamento</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.buttonOutline}
                  onPress={() => setSalaSelecionada(null)}
                >
                  <Text style={styles.buttonOutlineTxt}>Cancelar</Text>
                </TouchableOpacity>

              </View>
            ) : (
              <TouchableOpacity
                style={styles.button}
                onPress={() => abrirFormulario(sala)}
              >
                <Text style={styles.buttonText}>Agendar sala</Text>
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
  resumo: {
    flexDirection: 'row',
    backgroundColor: '#15151D',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#2A2A35',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  resumoItem: {
    alignItems: 'center',
  },
  resumoNum: {
    fontSize: 26,
    fontWeight: '800',
    color: '#FF005C',
  },
  resumoLabel: {
    fontSize: 12,
    color: '#B3B3B3',
    marginTop: 2,
  },
  resumoDivider: {
    width: 1,
    height: 36,
    backgroundColor: '#2A2A35',
  },
  minhasSessao: {
    marginBottom: 20,
  },
  minhasTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FF005C',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  minhasCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0D1F15',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#3DAA6044',
  },
  minhasNome: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  minhasHor: {
    fontSize: 12,
    color: '#3DAA60',
    marginTop: 2,
  },
  btnCancelar: {
    backgroundColor: '#1F0A10',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#FF005C44',
  },
  btnCancelarTxt: {
    fontSize: 12,
    color: '#FF005C',
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#15151D',
    padding: 18,
    borderRadius: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#2A2A35',
  },
  salaNome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 6,
  },
  salaInfo: {
    fontSize: 14,
    color: '#B3B3B3',
    marginBottom: 8,
  },
  salaStatus: {
    fontSize: 14,
    color: '#FF005C',
    fontWeight: '600',
    marginBottom: 12,
  },
  formContainer: {
    marginTop: 10,
  },
  formLabel: {
    fontSize: 13,
    color: '#B3B3B3',
    marginBottom: 10,
    fontWeight: '600',
  },
  horariosGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  horarioBtn: {
    backgroundColor: '#1E1E28',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#2A2A35',
  },
  horarioBtnSelecionado: {
    backgroundColor: '#FF005C',
    borderColor: '#FF005C',
  },
  horarioBtnOcupado: {
    opacity: 0.3,
  },
  horarioBtnTxt: {
    fontSize: 12,
    color: '#B3B3B3',
  },
  horarioBtnTxtSelecionado: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  horarioBtnTxtOcupado: {
    color: '#555560',
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
    marginBottom: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  buttonOutline: {
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2A2A35',
  },
  buttonOutlineTxt: {
    color: '#B3B3B3',
    fontWeight: '600',
  },
});