import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { leagueService } from '../services/leagueService'
import type { League } from '../types'

export const useLeagueStore = defineStore('league', () => {
  // State
  const leagues = ref<League[]>([])
  const searchQuery = ref('')
  const selectedSport = ref('')
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // Cache for badges: { [leagueId]: badgeImageUrl }
  const badgeCache = ref<Record<string, string>>({})

  // Actions

  // Fetching all leagues from the API
  async function fetchAllLeagues() {
    if (leagues.value.length > 0) return // Prevent re-fetching if data exists
    isLoading.value = true
    try {
      const data = await leagueService.getAllLeagues()
      leagues.value = data.leagues || []
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'An error occurred'
    } finally {
      isLoading.value = false
    }
  }

  // Fetching badge for a specific league, with caching
  async function fetchBadge(id: string) {
    // Check if badge is already in cache
    if (badgeCache.value[id]) return badgeCache.value[id]

    try {
      const data = await leagueService.getLeagueBadge(id)
      // Use the first season's badge available
      const badgeUrl = data.seasons?.[0]?.strBadge || ''

      // Save to cache to avoid repeat calls
      if (badgeUrl) badgeCache.value[id] = badgeUrl
      return badgeUrl
    } catch (err) {
      console.error(`Error fetching badge for ${id}:`, err)
      return ''
    }
  }

  // Getters (Computed)
  const filteredLeagues = computed(() => {
    return leagues.value.filter((league) => {
      const matchesSearch = league.strLeague.toLowerCase().includes(searchQuery.value.toLowerCase())
      const matchesSport = selectedSport.value === '' || league.strSport === selectedSport.value
      return matchesSearch && matchesSport
    })
  })

  const uniqueSports = computed(() => {
    const sports = leagues.value.map((l) => l.strSport)
    return [...new Set(sports)].sort()
  })

  return {
    leagues,
    searchQuery,
    selectedSport,
    isLoading,
    error,
    filteredLeagues,
    uniqueSports,
    fetchAllLeagues,
    fetchBadge,
    badgeCache,
  }
})
