export interface IMatches {
  homeTeamId: number,
  homeTeamGoals: number,
  awayTeamId: number,
  awayTeamGoals: number,
  inProgress: boolean,
}

export interface IUpdateMatch {
  homeTeamGoals: number,
  awayTeamGoals: number,
}
