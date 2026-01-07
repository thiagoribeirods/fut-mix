import { Card, CardContent, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";

const ShuffledTeams = ({ shuffledTeams }) => {
    return (
        <>
            {shuffledTeams.length > 0 && (
                <Grid container spacing={2} mt={3}>
                    {shuffledTeams.map((team, teamIndex) => (
                        <Grid item xs={12} sm={6} md={4} key={teamIndex}>
                            <Card sx={{ borderRadius: 3 }}>
                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        gutterBottom
                                    >
                                        Time {String.fromCharCode(65 + teamIndex)}
                                    </Typography>

                                    <List dense>
                                        {team.map((player, index) => (
                                            <ListItem key={index}>
                                                <ListItemText primary={player.name} />
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

    )
}

export default ShuffledTeams;