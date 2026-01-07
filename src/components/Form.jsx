import { Button, TextField, Typography } from "@mui/material";
import { extractPlayers } from "../utils/ExtractPlayers";

const Form = ({names, setNames, setPlayers, playersPerTeam, setPlayersPerTeam, setShuffledTeams}) => {

    const handleMix = () => {
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