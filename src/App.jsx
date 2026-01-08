// MUI
import {
  Container
} from "@mui/material";

// React
import { useEffect, useState } from "react";

// Utils
import {
  extractNonGoalkeepers,
  extractNonAbsentPlayers
} from "./utils/ExtractPlayers";
import { drawTeams } from "./utils/DrawTeams";

// Components
import Form from "./components/Form";
import Header from "./components/Header";
import PlayersList from "./components/PlayersList";
import ShuffledTeams from "./components/ShuffledTeams";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

/***
 * Componente principal da aplicação FutMix
 * Responsável por gerenciar o estado e renderizar os componentes filhos
 * @returns {JSX.Element} Componente App
 */
const App = () => {

  const MySwal = withReactContent(Swal)

  const [names, setNames] = useState("");
  const [players, setPlayers] = useState([]);
  const [playersPerTeam, setPlayersPerTeam] = useState(5);
  const [shuffledTeams, setShuffledTeams] = useState([]);

  const handleDrawTeams = () => {
    const nonGoalkeepers = extractNonGoalkeepers(players);
    const availablePlayers = extractNonAbsentPlayers(nonGoalkeepers);

    if (availablePlayers.length < (playersPerTeam * 2) || players.length < (playersPerTeam * 2 + 2)) {
      MySwal.fire({
        title: "Atenção craque!",
        text: "Número insuficiente de jogadores disponíveis para formar um time.",
        icon: "warning",
        confirmButtonText: "Ok"
      })
      return;
    }

    const result = drawTeams(availablePlayers, playersPerTeam);
    setShuffledTeams(result);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "100vh",
        py: { xs: 2, sm: 4 }
      }}
    >
      {/* Cabeçalho */}
      <Header title="FutMix" />

      {/* Entrada de dados */}
      <Form
        names={names}
        setNames={setNames}
        setPlayers={setPlayers}
        playersPerTeam={playersPerTeam}
        setPlayersPerTeam={setPlayersPerTeam}
        setShuffledTeams={setShuffledTeams}
      />

      {/* Lista de jogadores extraídos, com opção de marcar ausentes e goleiros */}
      <PlayersList
        players={players}
        setPlayers={setPlayers}
        handleDrawTeams={handleDrawTeams}
      />

      {/* Times sorteados */}
      <ShuffledTeams shuffledTeams={shuffledTeams}
        hasTeamsDrawn={shuffledTeams.length > 0} playersPerTeam={playersPerTeam} />

    </Container>
  );
};

export default App;
