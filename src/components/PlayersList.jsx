import { Button, Checkbox, Divider, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useState } from "react";

const PlayersList = ({ players, setPlayers, handleDrawTeams }) => {

    return (
        <>
            {players.length > 0 && (
                <>
                    <Typography variant="h6" mt={3} mb={1}>
                        Jogadores
                    </Typography>

                    <List>
                        {players.map((player, index) => (
                            <div key={player.name}>
                                <ListItem
                                    alignItems="flex-start"
                                    secondaryAction={
                                        <Grid
                                            container
                                            spacing={1}
                                            wrap="nowrap"
                                            alignItems="center"
                                            justifyContent="flex-end"
                                            sx={{
                                                width: "auto",
                                                flexDirection: "row"
                                            }}
                                        >
                                            <Grid item>
                                                <Typography variant="caption">Ausente</Typography>
                                                <Checkbox
                                                    size="small"
                                                    checked={player.isAbsent}
                                                    onChange={() =>
                                                        setPlayers(prev =>
                                                            prev.map((p, i) =>
                                                                i === index
                                                                    ? { ...p, isAbsent: !p.isAbsent }
                                                                    : p
                                                            )
                                                        )
                                                    }
                                                />
                                            </Grid>

                                            <Grid item>
                                                <Typography variant="caption">Goleiro</Typography>
                                                <Checkbox
                                                    size="small"
                                                    checked={player.isGoalkeeper}
                                                    onChange={() =>
                                                        setPlayers(prev =>
                                                            prev.map((p, i) =>
                                                                i === index
                                                                    ? { ...p, isGoalkeeper: !p.isGoalkeeper }
                                                                    : p
                                                            )
                                                        )
                                                    }
                                                />
                                            </Grid>
                                        </Grid>
                                    }
                                >
                                    <ListItemText
                                        alignItems="flex-start"
                                        primary={player.name}
                                        secondary={
                                            player.isAbsent
                                                ? "Ausente"
                                                : player.isGoalkeeper
                                                    ? "Goleiro"
                                                    : null
                                        }
                                        sx={{
                                            opacity: player.isAbsent ? 0.5 : 1,
                                            textDecoration: player.isAbsent
                                                ? "line-through"
                                                : "none",
                                            "& .MuiListItemSecondaryAction-root": {
                                                right: 8
                                            }
                                        }}
                                    />
                                </ListItem>
                                <Divider />
                            </div>
                        ))}
                    </List>

                    <Button
                        variant="contained"
                        fullWidth
                        sx={{ mt: 2 }}
                        onClick={handleDrawTeams}
                    >
                        Sortear Times
                    </Button>

                </>
            )}
        </>
    )

};

export default PlayersList;