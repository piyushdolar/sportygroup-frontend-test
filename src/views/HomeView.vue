<script setup lang="ts">
import { onMounted } from 'vue'
import { useLeagueStore } from '../stores/useLeagueStore'
import SearchBar from '../components/SearchBar.vue'
import LeagueList from '../components/LeagueList.vue'

const leagueStore = useLeagueStore()

onMounted(() => {
  leagueStore.fetchAllLeagues()
})
</script>

<template>
  <div>
    <section class="mb-8">
      <SearchBar />
    </section>

    <section>
      <div v-if="leagueStore.isLoading" class="flex justify-center py-20">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-800"></div>
      </div>

      <div v-else-if="leagueStore.error" class="bg-red-50 p-4 rounded-md text-red-700 border border-red-200">
        {{ leagueStore.error }}
      </div>

      <LeagueList v-else />
    </section>
  </div>
</template>