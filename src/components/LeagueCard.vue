<script setup lang="ts">
import { ref } from 'vue';
import type { League } from '../types';
import { useLeagueStore } from '../stores/useLeagueStore';

const props = defineProps<{ league: League }>();
const store = useLeagueStore();
const badgeUrl = ref('');
const isFetchingBadge = ref(false);

async function handleShowBadge() {
  if (badgeUrl.value) return; // Already loaded
  isFetchingBadge.value = true;
  badgeUrl.value = await store.fetchBadge(props.league.idLeague);
  isFetchingBadge.value = false;
}
</script>

<template>
  <div @click="handleShowBadge"
    class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-pointer group">
    <div class="flex items-start justify-between">
      <div>
        <span class="inline-block px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600 mb-2">
          {{ league.strSport }}
        </span>
        <h3 class="text-lg font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
          {{ league.strLeague }}
        </h3>
        <p v-if="league.strLeagueAlternate" class="text-sm text-gray-400 italic mt-1 line-clamp-1">
          {{ league.strLeagueAlternate }}
        </p>
      </div>

      <div class="h-16 w-16 shrink-0 flex items-center justify-center">
        <img v-if="badgeUrl" :src="badgeUrl" class="max-h-full max-w-full object-contain animate-fade-in" />
        <div v-else-if="isFetchingBadge" class="animate-pulse h-10 w-10 bg-gray-100 rounded-full"></div>
        <div v-else class="text-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>