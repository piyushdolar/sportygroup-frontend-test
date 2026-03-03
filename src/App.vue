<script setup lang="ts">
import { onMounted } from 'vue'
import { useLeagueStore } from './stores/useLeagueStore'

// Global variable
const appVersion = __APP_VERSION__

// Initialize the store
const leagueStore = useLeagueStore()

// Fetch data as soon as the app loads
onMounted(() => {
  leagueStore.fetchAllLeagues()
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 font-sans text-gray-900">
    <header class="bg-white shadow-sm sticky top-0 z-20">
      <div class="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <RouterLink to="/" class="inline-block hover:opacity-80 transition-opacity">
          <h1 class="text-3xl font-bold text-blue-800">Sports Leagues Explorer</h1>
        </RouterLink>
        <p class="text-sm text-gray-500 mt-1">Discover and track your favorite sports leagues</p>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <RouterView />
    </main>

    <footer class="bg-white border-t mt-auto py-6">
      <div class="text-center text-gray-400 text-sm">
        &copy; 2026 Sporty Leagues Assignment | v{{ appVersion }}
      </div>
    </footer>
  </div>
</template>