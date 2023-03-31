export default interface ITeam {
  id: number,
  teamName: string,
}

export interface ITeamsService {
  getAllTeams(): Promise<ITeam[]>
  teamById(id: number): Promise<ITeam | null>
}
