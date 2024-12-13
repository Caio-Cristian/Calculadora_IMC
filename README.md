# Calculadora de IMC - React + TypeScript + Vite

Este projeto é uma **calculadora de IMC** (Índice de Massa Corporal) desenvolvida com **React** e **TypeScript** usando o **Vite** como bundler. A aplicação permite ao usuário inserir sua **altura** (em centímetros) e **peso** (em quilos), e calcula o IMC com base nessas informações. O resultado é exibido junto com a classificação da tabela de IMC (Abaixo do peso, Peso normal, Sobrepeso, Obesidade).

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **Vite**: Ferramenta de build moderna que oferece uma experiência de desenvolvimento extremamente rápida, com suporte nativo para **Hot Module Replacement (HMR)**.
- **CSS**: Estilização simples para a aplicação.

## Funcionalidade

O projeto contém:

1. **Formulário de Entrada**: Campos para inserir **peso** (em kg) e **altura** (em cm).
2. **Cálculo do IMC**: O IMC é calculado usando a fórmula:
   \[
   \text{IMC} = \frac{\text{peso (kg)}}{\text{altura (m)}^2}
   \]
3. **Classificação do IMC**: O valor do IMC é comparado com a tabela para exibir uma classificação:
   - **Abaixo do peso**: IMC abaixo de 18.5
   - **Peso normal**: IMC entre 18.5 e 24.9
   - **Sobrepeso**: IMC entre 25 e 29.9
   - **Obesidade**: IMC igual ou superior a 30

## Instruções de Instalação

1. **Clonando o repositório**

   ```bash
   git clone <URL-do-repositório>
   cd calculadora-imc-react-ts
  ```

2. **Instalando as dependências**

Se você ainda não tiver as dependências instaladas, rode o comando abaixo:

   ```bash
   npm install
  ```

3. **Iniciando o servidor de desenvolvimento**

Após a instalação, inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
  ```
Isso abrirá o projeto no seu navegador, normalmente acessível em http://localhost:3000

# Estrutura de Pastas

A estrutura básica do projeto é a seguinte:

calculadora-imc-react-ts/
├── public/
│   └── index.html       # Arquivo HTML principal
├── src/
│   ├── App.tsx          # Componente principal da aplicação
│   ├── App.css          # Estilos da aplicação
│   └── main.tsx         # Ponto de entrada do React
├── tsconfig.json        # Configurações do TypeScript
├── package.json         # Dependências do projeto
└── vite.config.ts       # Configurações do Vite

# Como Funciona
1. **O usuário insere peso e altura nos campos correspondentes.**
2. **O IMC é calculado ao clicar no botão Calcular.**
3. **O valor do IMC é exibido com a classificação de acordo com a tabela oficial.**

# Print do Projeto

Aqui está um print da aplicação em funcionamento:
![Calculadora de IMC](<src/assets/Captura de tela.png>)

Exemplo de como a aplicação exibe o cálculo do IMC e a classificação.

# Tecnologias e Bibliotecas

- React: Para a criação de componentes reutilizáveis e interativos.
- TypeScript: Para garantir que o código seja mais seguro e fácil de entender, com verificação de tipos em tempo de desenvolvimento.
- Vite: Ferramenta moderna de build e desenvolvimento rápido.
- CSS: Para a estilização básica e responsiva da aplicação.

# Contribuição

**Se você quiser contribuir com este projeto, sinta-se à vontade para abrir uma issue ou criar um pull request com suas melhorias ou correções.**

# Licença
- *Este projeto está licenciado sob a MIT License.*
