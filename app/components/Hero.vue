<template>
  <HeroCarousel />

  <!-- Sekcja z produktami -->
  <section class="py-12 md:py-20 bg-amber-50">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Siatka kafli -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
        
        <!-- Jeden powtarzalny kafelek -->
        <div
          v-for="product in displayedProducts"
          :key="product.id"
          class="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
        >
          <!-- Delikatne drewniane tło -->
          <div class="absolute inset-0 opacity-20 pointer-events-none">
            <img src="https://www.transparenttextures.com/patterns/wood-pattern.png" class="w-full h-full object-cover" alt="" />
          </div>

          <!-- Zdjęcie produktu (z public) -->
          <div class="aspect-square relative overflow-hidden bg-gray-100">
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div v-if="!product.image" class="flex items-center justify-center h-full text-gray-400 text-xs">
              brak zdjęcia
            </div>
          </div>

          <!-- Nazwa + przyciski (zawsze na dole) -->
          <div class="p-4 flex flex-col flex-1 justify-end bg-gradient-to-t from-amber-50/90">
            <h3 class="text-center font-bold text-emerald-800 text-sm md:text-base leading-tight line-clamp-3 mb-3">
              {{ product.name }}
            </h3>

            <div class="flex gap-2">
              <button
                @click="alert('Dodano do koszyka: ' + product.name)"
                class="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs md:text-sm font-semibold rounded-lg transition shadow-md"
              >
                Do koszyka
              </button>

              <button
                @click="alert('Dodano do ulubionych: ' + product.name)"
                class="p-2.5 bg-white border-2 border-emerald-200 hover:border-red-500 hover:bg-red-50 rounded-lg transition"
              >
                <svg class="w-5 h-5 text-emerald-600 hover:text-red-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Przycisk "Pokaż wszystkie produkty" -->
      <div class="text-center mt-12">
        <button
          v-if="products.length > 10"
          @click="showAll = !showAll"
          class="px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
        >
          {{ showAll ? 'Pokaż mniej' : 'Pokaż wszystkie produkty' }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import HeroCarousel from './HeroCarousel.vue'

const showAll = ref(false)

// Twoja pełna lista 23 produktów
const products = [
  { id: 1,  name: 'Konfitura z Jagody Kamczackiej', image: '/jagoda1.jpg' },
  { id: 2,  name: 'Konfitura z Jagody Kamczackiej + Truskawka', image: '/truskawka1.jpg' },
  { id: 3,  name: 'Ogórki Kiszone', image: '/ogorkikiszone1.jpg' },
  { id: 4,  name: 'Ogórki z Curry', image: '/ogorkicurry1.jpg' },
  { id: 5,  name: 'Olej z Pestek Dyni', image: '/olej1.jpg' },
  { id: 6,  name: 'Olej Lniany', image: '/olej1.jpg' },
  { id: 7,  name: 'Olej Słonecznikowy', image: '/olej1.jpg' },
  { id: 8,  name: 'Olej z Czarnuszki', image: '/olej1.jpg' },
  { id: 9,  name: 'Olej Sezamowy', image: '/olej1.jpg' },
  { id: 10, name: 'Olej Rzepakowy', image: '/olej1.jpg' },
  { id: 11, name: 'Sok Borówkowo-Aroniowy', image: '/sokborówka1.jpg' },
  { id: 12, name: 'Sok Malinowy Tłoczony', image: '/sokmalina1.jpg' },
  { id: 13, name: 'Sok Jabłko z Miętą', image: '/sokjablkomieta1.jpg' },
  { id: 14, name: 'Syrop z Mniszka Lekarskiego', image: '/syropmniszek1.jpg' },
  { id: 15, name: 'Syrop z Kwiatów Czarnego Bzu', image: '/syropbez1.jpg' },
  { id: 16, name: 'Pesto z Czosnku Niedźwiedziego', image: '/pewsto1.jpg' },
  { id: 17, name: 'Jabłka Suszone', image: '/jablkasuszone1.jpg' },
  { id: 18, name: 'Dżem Truskawkowy', image: '/dzem1.jpg' },
  { id: 19, name: 'Powidła Śliwkowe', image: '/powidla1.jpg' },
  { id: 20, name: 'Papryka w Sosie Pomidorowym', image: '/papryka1.jpg' },
  { id: 21, name: 'Pomidorowa Iskra', image: '/iskra1.jpg' },
  { id: 22, name: 'Buraczki z Papryką', image: '/buraczki1.jpg' },
  { id: 23, name: 'Sałatka z Gyrosem', image: '/gyros1.jpg' },
]

// Pokazuje 10 lub wszystkie
const displayedProducts = computed(() => {
  return showAll.value ? products : products.slice(0, 10)
})
</script>

<style scoped>
/* Zapobiega przewijaniu w bok */
html, body, #__nuxt, #__layout {
  overflow-x: hidden !important;
}
</style>