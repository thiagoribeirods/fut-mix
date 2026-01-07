export const extractPlayers = (text) => {
    return text
        .split('\n')
        .map(line => line.trim())
        .filter(line => /^\d+\s*-\s*/.test(line))
        .map(line =>
            line.replace(/^\d+\s*-\s*/, '').trim().toUpperCase()
        );
};

export const extractGoalkeepers = (players) => {
    return players.filter(player => player.isGoalkeeper);
}

export const extractNonGoalkeepers = (players) => {
    return players.filter(player => !player.isGoalkeeper);
}

export const extractNonAbsentPlayers = (players) => {
    return players.filter(player => !player.isAbsent);
}