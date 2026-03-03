import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useLeagueStore } from './useLeagueStore'
import { leagueService } from '../services/leagueService'
import type { League } from '../types'

// Mock the service
vi.mock('../services/leagueService', () => ({
  leagueService: {
    getAllLeagues: vi.fn(),
    getLeagueBadge: vi.fn(),
  },
}))

describe('League Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.clearAllMocks()
  })

  it('correctly filters leagues by searchQuery', () => {
    const store = useLeagueStore()

    // Use Partial to satisfy ESLint and cast to League[]
    const mockData: Partial<League>[] = [
      { idLeague: '1', strLeague: 'Premier League', strSport: 'Soccer' },
      { idLeague: '2', strLeague: 'NBA', strSport: 'Basketball' },
    ]
    store.leagues = mockData as League[]

    store.searchQuery = 'NBA'

    expect(store.filteredLeagues).toHaveLength(1)
    // Use non-null assertion or optional chaining for TS safety
    expect(store.filteredLeagues[0]?.strLeague).toBe('NBA')
  })

  it('generates a unique, sorted list of sports', () => {
    const store = useLeagueStore()
    const mockData: Partial<League>[] = [
      { strSport: 'Soccer' },
      { strSport: 'Basketball' },
      { strSport: 'Soccer' },
    ]
    store.leagues = mockData as League[]

    expect(store.uniqueSports).toEqual(['Basketball', 'Soccer'])
  })

  it('retrieves badge from cache to avoid repeat service calls', async () => {
    const store = useLeagueStore()
    const leagueId = '123'

    // Safe state update via $patch
    store.$patch({
      badgeCache: { [leagueId]: 'cached_url.png' },
    })

    const result = await store.fetchBadge(leagueId)

    expect(result).toBe('cached_url.png')
    // Verify the mock service was NOT called
    expect(leagueService.getLeagueBadge).not.toHaveBeenCalled()
  })
})
