<script setup lang="ts">
import { useLeagueStore } from '../stores/useLeagueStore';
import LeagueCard from './LeagueCard.vue';
const store = useLeagueStore();
</script>

<template>
  <div v-if="store.filteredLeagues.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <LeagueCard v-for="league in store.filteredLeagues" :key="league.idLeague" :league="league" />
  </div>
  <div v-else class="text-center py-20 bg-white rounded-xl border border-dashed border-gray-200">
    <p class="text-gray-500">No leagues found matching your criteria.</p>
    <button @click="store.searchQuery = ''; store.selectedSport = ''" class="mt-4 text-blue-600 font-semibold hover:underline">
      Clear all filters
    </button>
  </div>
</template>