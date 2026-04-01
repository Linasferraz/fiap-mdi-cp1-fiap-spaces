# FIAP Spaces

O **FIAP Spaces** é um aplicativo mobile desenvolvido em **React Native com Expo**, criado com a proposta de melhorar a organização e a visualização dos espaços acadêmicos da **FIAP – Unidade Paulista**.

A ideia do projeto surgiu a partir de uma situação muito presente no cotidiano universitário: a falta de uma forma prática, centralizada e acessível para consultar e, futuramente, organizar o uso de ambientes como laboratórios, salas de estudo e outros espaços acadêmicos. Pensando nisso, o grupo propôs um aplicativo com foco em mobilidade, clareza visual e facilidade de navegação, oferecendo uma experiência simples e intuitiva para o aluno.

O app foi pensado como um **MVP funcional**, desenvolvido com base nos conteúdos apresentados até a **Aula 05**, priorizando uma estrutura bem organizada, componentização, navegação entre telas e construção de interface com identidade visual alinhada à proposta da FIAP.

---

## O que o aplicativo faz

Atualmente, o **FIAP Spaces** permite ao usuário navegar por diferentes áreas do aplicativo e visualizar uma proposta inicial de organização dos espaços da faculdade.

A **tela inicial (Home)** foi desenvolvida como um ponto central de navegação, trazendo uma interface visual inspirada na identidade da FIAP, com destaque para o slogan **“Let’s Rock the Future”**, banner de capa e acesso rápido às principais seções do app.

Na área de **Laboratórios**, o aplicativo apresenta os laboratórios da unidade Paulista organizados de forma lógica por andar, respeitando a estrutura do prédio. Como há apenas um prédio principal, os laboratórios foram distribuídos do **2º ao 7º andar**, seguindo a numeração correspondente de cada piso, como por exemplo **201, 202, 203** no segundo andar, **301, 302, 303** no terceiro, e assim sucessivamente.

Além da visualização, essa área também conta com uma proposta inicial de **agendamento**, permitindo ao usuário preencher informações como **nome** e **RM**, simulando a reserva de um laboratório.

A tela de **Perfil** foi incluída como parte da navegação principal e representa um espaço preparado para futuras expansões, como exibição de dados do aluno, preferências de uso e informações acadêmicas.

Já a área de **Salas de Estudo** foi planejada dentro da estrutura do aplicativo e faz parte da proposta geral do projeto, servindo como continuação natural da ideia de organização dos espaços acadêmicos da FIAP. Essa funcionalidade está em desenvolvimento dentro do grupo.

---

## Estrutura e desenvolvimento

O projeto foi desenvolvido utilizando **React Native com Expo**, com navegação implementada através do **Expo Router**, permitindo a criação de múltiplas telas de forma organizada e funcional.

A estrutura do código foi pensada para manter o projeto limpo e escalável, separando responsabilidades entre telas, componentes reutilizáveis, imagens e arquivos auxiliares. Isso permitiu trabalhar com uma organização mais próxima de um projeto real, evitando a concentração de toda a lógica em um único arquivo.

Entre os principais conceitos aplicados no desenvolvimento estão:

- uso de **componentes core do React Native**, como `View`, `Text`, `Image` e `TouchableOpacity`
- **componentização**, com separação de elementos reutilizáveis da interface
- uso de **hooks**, especialmente o `useState`, para controle de interações e estados da interface
- estilização com **StyleSheet**
- navegação funcional entre telas
- organização de estrutura com **Expo Router**

Além disso, o projeto também buscou trazer um cuidado visual maior, adotando uma identidade inspirada nas cores da **FIAP**, com predominância de **preto** e **rosa/magenta**, reforçando a proposta visual do aplicativo e tornando a experiência mais coerente com o contexto da faculdade.

---

## Tecnologias utilizadas

As principais tecnologias e ferramentas utilizadas no projeto foram:

- **React Native**
- **Expo**
- **Expo Router**
- **JavaScript / JSX**
- **StyleSheet**

---

## Como executar o projeto

Para rodar o projeto localmente, é necessário ter instalado:

- **Node.js**
- **Expo Go** no celular  
ou
- um emulador configurado no computador

Depois disso, basta clonar o repositório e executar os seguintes comandos no terminal:
npm install
npx expo start


Após iniciar o projeto, o Expo exibirá um **QR Code**, que pode ser escaneado pelo aplicativo **Expo Go** para abrir o app no celular.

---

## Estrutura de pastas

A organização principal do projeto foi feita da seguinte forma:
app/
components/
assets/
constants/
hooks/


Essa estrutura foi adotada para facilitar tanto a manutenção quanto a expansão futura do aplicativo.

---

## Demonstração

### Telas desenvolvidas

O aplicativo atualmente conta com as seguintes telas:

- **Home**
- **Laboratórios**
- **Perfil**
- **Salas de Estudo** 

### Prints do aplicativo

> Adicionar aqui os prints de cada tela do app.

### Vídeo ou GIF de demonstração

> Adicionar aqui o link do vídeo ou GIF.


---

## Integrantes do grupo

- **Carolina Santana   RM: 86833** 
- **Evellyn Valencia Choque  RM: 557929**
- **Milena Codinhoto  RM: 554682**

---

## Próximos passos

Caso o projeto fosse expandido além do MVP atual, algumas evoluções planejadas seriam:

- sistema de agendamento mais completo  
- persistência de dados  
- organização por horários disponíveis  
- filtros por tipo de espaço  
- melhoria de feedback visual para o usuário  
- integração com dados acadêmicos  
- refinamento da experiência de uso em diferentes perfis de usuário  

---

## Considerações finais

O **FIAP Spaces** foi desenvolvido com a proposta de transformar uma necessidade real do cotidiano acadêmico em uma solução mobile funcional, visualmente organizada e coerente com a proposta da FIAP.

Mais do que apenas cumprir os requisitos técnicos do Checkpoint, o projeto buscou construir uma base sólida para uma ideia que poderia evoluir para uma aplicação ainda mais útil e completa dentro do ambiente universitário.

