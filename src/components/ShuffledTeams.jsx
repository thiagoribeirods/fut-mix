import {
    Card,
    CardContent,
    Grid,
    List,
    ListItem,
    ListItemText,
    Typography,
    IconButton,
    Avatar
} from "@mui/material";

const ShuffledTeams = ({ shuffledTeams, setShuffledTeams }) => {

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

    return (
        <>
            {shuffledTeams.length > 0 && (
                <Grid container spacing={2} mt={3}>
                    {shuffledTeams.map((team, teamIndex) => (
                        <Grid item size={{ xs: 12, xl: 12, sm: 6, md: 4, lg: 3 }} key={teamIndex}>
                            <Card sx={{ borderRadius: 3, width: "100%", minWidth: '100%' }}>
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
