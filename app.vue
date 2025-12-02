<template>
  <div>
    <NavBar v-if="!hideNavBar" />
    <NuxtPage />
  </div>
</template>

<script setup>
import NavBar from '~/components/NavBar.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Ukryj nawigację na stronach inkubator i galeria
const hideNavBar = computed(() => {
  return route.path === '/inkubator' || route.path === '/galeria'
})
</script>
