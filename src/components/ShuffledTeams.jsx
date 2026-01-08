import {
    Card,
    CardContent,
    Grid,
    List,
    ListItem,
    ListItemText,
    Typography,
    IconButton,
    Avatar,
    Button
} from "@mui/material";
import { useEffect, useState } from "react";
import { getFullTeams } from "../utils/DrawTeams";

const ShuffledTeams = ({ shuffledTeams, setShuffledTeams, hasTeamsDrawn, playersPerTeam }) => {

    const [firstMatch, setFirstMatch] = useState(null);

    const handleSetCaptain = (teamIndex, playerIndex) => {
        setShuffledTeams(prev =>
            prev.map((team, tIdx) =>
                tIdx !== teamIndex
                    ? team
                    : team.map((player, pIdx) => ({
                        ...player,
                        isCaptain: pIdx === playerIndex
                    }))
            )
        );
    };

    const handleFirstMatch = () => {
        if (!hasTeamsDrawn) return;

        const teams = getFullTeams(shuffledTeams, playersPerTeam);

        if (teams.length < 2) return;

        let firstTeamIndex = Math.floor(Math.random() * teams.length);
        let secondTeamIndex;

        do {
            secondTeamIndex = Math.floor(Math.random() * teams.length);
        } while (secondTeamIndex === firstTeamIndex);

        const result = [firstTeamIndex, secondTeamIndex];

        setFirstMatch(result);
    }

    useEffect(() => {
        console.log(firstMatch);
    }, [firstMatch]);

    return (
        <>
            <Button
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
                onClick={handleFirstMatch}
                disabled={!hasTeamsDrawn}
            >
                Sortear Primeira Partida
            </Button>
            {shuffledTeams.length > 0 && (
                <Grid container spacing={2} mt={3}>
                    {shuffledTeams.map((team, teamIndex) => (
                        <Grid item size={{ xs: 12, xl: 12, sm: 6, md: 4, lg: 3 }} key={teamIndex}>
                            <Card sx={{ borderRadius: 3, width: "100%", minWidth: '100%', bgcolor: firstMatch && (firstMatch[0] === teamIndex || firstMatch[1] === teamIndex) ? 'success.light' : 'background.paper' }}>
                                <CardContent>
                                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                                        Time {String.fromCharCode(65 + teamIndex)}
                                    </Typography>

                                    <List dense>
                                        {team.map((player, playerIndex) => (
                                            <ListItem
                                                key={playerIndex}
                                                button
                                                onClick={() =>
                                                    handleSetCaptain(teamIndex, playerIndex)
                                                }
                                                secondaryAction={
                                                    player.isCaptain && (
                                                        <Avatar
                                                            sx={{
                                                                width: 24,
                                                                height: 24,
                                                                fontSize: 12,
                                                                bgcolor: "warning.main"
                                                            }}
                                                        >
                                                            C
                                                        </Avatar>
                                                    )
                                                }
                                            >
                                                <ListItemText
                                                    primary={`${playerIndex + 1}. ${player.name}`}
                                                    secondary={player.isCaptain ? "Capitão" : null}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

            )}
        </>
    );
};

export default ShuffledTeams;
