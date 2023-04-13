const query = `SELECT 
teams.team_name AS name,
SUM(
  CASE 
    WHEN home_team_goals > away_team_goals THEN 3 
    WHEN home_team_goals = away_team_goals THEN 1 
    ELSE 0 
  END
) AS totalPoints,
COUNT(team_name) AS totalGames,
SUM(CASE WHEN home_team_goals > away_team_goals THEN 1 ELSE 0 END) AS totalVictories,
SUM(CASE WHEN home_team_goals = away_team_goals THEN 1 ELSE 0 END) AS totalDraws,
SUM(CASE WHEN home_team_goals < away_team_goals THEN 1 ELSE 0 END) AS totalLosses,
SUM(home_team_goals) AS goalsFavor, 
SUM(away_team_goals) AS goalsOwn
FROM 
TRYBE_FUTEBOL_CLUBE.matches AS matches 
INNER JOIN TRYBE_FUTEBOL_CLUBE.teams AS teams ON matches.home_team_id = teams.id
WHERE 
in_progress = false
GROUP BY 
name
`;
export default query;
