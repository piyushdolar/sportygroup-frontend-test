export interface League {
  idLeague: string
  strLeague: string
  strSport: string
  strLeagueAlternate: string
}

export interface SeasonBadge {
  idSeason: string
  strSeason: string
  strBadge: string
}

export interface AllLeaguesResponse {
  leagues: League[]
}

export interface SeasonResponse {
  seasons: SeasonBadge[]
}
