import type { AllLeaguesResponse, SeasonResponse } from '../types'

const BASE_URL = 'https://www.thesportsdb.com/api/v1/json/3'

export const leagueService = {
  /**
   * Fetches all sports leagues from the API
   */
  async getAllLeagues(): Promise<AllLeaguesResponse> {
    const response = await fetch(`${BASE_URL}/all_leagues.php`)
    if (!response.ok) throw new Error('Network response was not ok')
    return response.json()
  },

  /**
   * Fetches the badge for a specific league ID
   * Note: This API returns all seasons; we usually grab the first available badge
   */
  async getLeagueBadge(id: string): Promise<SeasonResponse> {
    const response = await fetch(`${BASE_URL}/search_all_seasons.php?badge=1&id=${id}`)
    if (!response.ok) throw new Error('Failed to fetch badge')
    return response.json()
  },
}
