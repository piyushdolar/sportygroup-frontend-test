<script setup lang="ts">
import { useLeagueStore } from '../stores/useLeagueStore';
const store = useLeagueStore();
</script>

<template>
  <div class="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
    <div class="flex-1">
      <label class="block text-xs font-semibold text-gray-500 uppercase mb-1 ml-1">Search Leagues</label>
      <input v-model="store.searchQuery" type="text" placeholder="e.g. English Premier League"
        class="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
    </div>

    <div class="w-full md:w-64">
      <label class="block text-xs font-semibold text-gray-500 uppercase mb-1 ml-1">Filter by Sport</label>
      <select v-model="store.selectedSport"
        class="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none">
        <option value="">All Sports</option>
        <option v-for="sport in store.uniqueSports" :key="sport" :value="sport">
          {{ sport }}
        </option>
      </select>
    </div>
  </div>
</template>