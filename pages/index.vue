<template>
  <div>
    <NavBar />
    <SearchBar />
    <Hero />
    <SeasonalOffer />
    <AboutUs />
  </div>
</template>

<script setup>
import Hero from '~/app/components/Hero.vue'
import NavBar from '~/app/components/NavBar.vue'
import SearchBar from '~/app/components/SearchBar.vue'
import SeasonalOffer from '~/app/components/SeasonalOffer.vue'
import AboutUs from '~/app/components/AboutUs.vue'
</script>
