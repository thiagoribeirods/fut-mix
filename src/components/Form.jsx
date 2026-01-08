import { Button, TextField, Typography } from "@mui/material";
import { extractPlayers } from "../utils/ExtractPlayers";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const Form = ({ names, setNames, setPlayers, playersPerTeam, setPlayersPerTeam, setShuffledTeams }) => {

    const MySwal = withReactContent(Swal)


    const handleMix = () => {

        if (names.trim() === "") {
            MySwal.fire({
                title: "Atenção craque!",
                text: "Por favor, insira a lista de jogadores antes de processar.",
                icon: "warning",
                confirmButtonText: "Ok"
            }).then(() => { 
                MySwal.fire({
                    title: "Dica de Ouro",
                    html:  `A lista deverá estar no formato: <br> 1 - nome1 <br> 2- Nome2 <br> 3- Nome3 \n ...`,
                    icon: "info",
                    confirmButtonText: "Valeu!"
                })
            });
            return;
        }

        const namesList = extractPlayers(names);
        setPlayers(
            namesList.map(name => ({
                name,
                isGoalkeeper: false,
                isAbsent: false,
                isCaptain: false
            }))
        );
        setShuffledTeams([]);
    };

    return (
        <>
            <Typography
                variant="body2"
                textAlign="center"
                color="text.secondary"
                mb={2}
            >
                Cole a lista de GOATs abaixo
            </Typography>

            <TextField
                label="Craques confirmados"
                placeholder="Cole a lista do grupo aqui"
                multiline
                rows={6}
                fullWidth
                value={names}
                onChange={(e) => setNames(e.target.value)}
            />

            <TextField
                label="Craques por time"
                type="number"
                fullWidth
                sx={{ mt: 2 }}
                value={playersPerTeam}
                onChange={(e) => setPlayersPerTeam(Number(e.target.value))}
            />

            <Button
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
                onClick={handleMix}
            >
                Processar Lista
            </Button>

        </>
    );
};

export default Form;