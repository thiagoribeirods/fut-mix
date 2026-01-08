# FutMix

FutMix é uma aplicação web simples e responsiva para organizar, filtrar e sortear times de futebol de forma rápida e justa, diretamente no navegador, sem uso de banco de dados.

Ideal para peladas, futsal, society ou qualquer jogo entre amigos.

---

## Funcionalidades

- Importação de lista de jogadores via texto
- Marcação de goleiros
- Marcação de jogadores ausentes
- Sorteio automático de times
- Definição dinâmica de capitão por time
- Layout mobile first e responsivo
- Alertas e feedbacks visuais com SweetAlert2

---

## Tecnologias Utilizadas

- React JS
- Vite JS
- Material UI (MUI)
- SweetAlert2
- JavaScript (ES6+)

---

## Instalação e Execução

### 1. Clone o repositório
```bash
git clone git@github.com:thiagoribeirods/fut-mix.git
``` 

### 2. Acesse a pasta do projeto:
```bash
cd fut-mix
```

### 3. Instale as dependências:
```bash
npm install
```

### 4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

### 5. A aplicação ficará disponível em:
```bash
http://localhost:5173
```

## Estrutura básica do projeto
```txt
src/
├── components/
│   ├── Header.jsx
│   ├── Form.jsx
│   ├── PlayersList.jsx
│   └── ShuffledTeams.jsx
│
├── utils/
│   ├── ExtractPlayers.js
│   └── DrawTeams.js
│
├── App.jsx
``` 
