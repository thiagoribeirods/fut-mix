export const drawTeams = (players, playersPerTeam) => {

    if(playersPerTeam <= 0) return [];

    const shuffledPlayers = [...players].sort(() => 0.5 - Math.random());
    const teams = [];

    for (let i = 0; i < shuffledPlayers.length; i += playersPerTeam) {
        teams.push(shuffledPlayers.slice(i, i + playersPerTeam));
    }

    return teams;

}