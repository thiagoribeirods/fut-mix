export const drawTeams = (players, playersPerTeam) => {

    if(playersPerTeam <= 0) return [];

    const shuffledPlayers = [...players].sort(() => 0.5 - Math.random());
    const teams = [];

    for (let i = 0; i < shuffledPlayers.length; i += playersPerTeam) {
        teams.push(shuffledPlayers.slice(i, i + playersPerTeam));
    }

    for(let i = 0; i < teams.length; i++) {

        let randomCaptainIndex = Math.floor(Math.random() * teams[i].length);

        teams[i] = teams[i].map((player, j) => ({
            ...player,
            isCaptain: j === randomCaptainIndex
        }));
    }

    return teams;

}