<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import HeroCarousel from '@/components/HeroCarousel.vue'

// === STANY ===
const searchQuery = ref('')
const showAll = ref(false)
const isFavoritesView = ref(false)

// === ULUBIONE ===
const favorites = ref<number[]>([])
const favoritesCount = computed(() => favorites.value.length)

const toggleFavorite = (id: number) => {
  const idx = favorites.value.indexOf(id)
  if (idx === -1) favorites.value.push(id)
  else favorites.value.splice(idx, 1)
  localStorage.setItem('eko-favorites', JSON.stringify(favorites.value))
}

const isFavorite = (id: number) => favorites.value.includes(id)

// POPRAWIONE – bez przewijania strony!
const toggleFavoritesView = () => {
  isFavoritesView.value = !isFavoritesView.value
  searchQuery.value = ''
  // usunięto window.scrollTo – to było przyczyną skoku!
}

const toggleShowAll = () => {
  showAll.value = !showAll.value
}

// === PRODUKTY ===
const products = [
  { id: 1,  name: 'Konfitura z Jagody Kamczackiej', image: '/jagoda1.jpg' },
  { id: 2,  name: 'Konfitura z Jagody Kamczackiej i Truskawka', image: '/truskawka1.jpg' },
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

const filteredProducts = computed(() => {
  let result = products
  if (isFavoritesView.value) {
    result = result.filter(p => favorites.value.includes(p.id))
  } else if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase().trim()
    result = result.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.name.toLowerCase().split(' ').some(w => w.startsWith(q))
    )
  } else if (!showAll.value) {
    result = result.slice(0, 10)
  }
  return result
})

onMounted(() => {
  const saved = localStorage.getItem('eko-favorites')
  if (saved) favorites.value = JSON.parse(saved)
})
</script>

<template>
  <div class="min-h-screen bg-amber-50">

    <!-- KARUZELA -->
    <HeroCarousel />

    <!-- ZIELONA BELKA -->
    <section class="bg-emerald-700 text-white py-6 shadow-xl">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="relative flex-1 max-w-2xl w-full">
            <input
              v-model="searchQuery"
              @input="showAll = true; isFavoritesView = false"
              type="text"
              placeholder="Szukaj produktu..."
              class="w-full px-5 py-3 pl-12 pr-10 text-base rounded-full bg-white text-emerald-900 placeholder-emerald-500 focus:outline-none focus:ring-4 focus:ring-amber-300 shadow-lg transition-all"
            />
            <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <button v-if="searchQuery" @click="searchQuery = ''" class="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-600 hover:text-red-600 text-2xl font-bold">×</button>
          </div>

          <div class="flex items-center gap-6">
            <a href="https://www.facebook.com/BieszczadzkiOgrod/" target="_blank" class="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition shadow-lg">
              <svg class="w-7 h-7 text-emerald-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.469h3.047v-2.648c0-3.014 1.792-4.682 4.533-4.682 1.313 0 2.686.235 2.686.235v2.953h-1.512c-1.491 0-1.956.925-1.956 1.875v2.25h3.328l-.532 3.469h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z"/>
              </svg>
            </a>

            <!-- KLUCZOWA ZMIANA: @click.prevent -->
            <button @click.prevent="toggleFavoritesView" class="relative hover:scale-110 transition">
              <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <svg class="w-7 h-7 transition-colors" 
                     :class="isFavoritesView ? 'text-red-600 fill-red-500' : 'text-emerald-700'"
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
                <span v-if="favoritesCount" class="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow animate-pulse">
                  {{ favoritesCount }}
                </span>
              </div>
            </button>
          </div>
        </div>

        <div class="text-center mt-4 text-sm font-medium">
          <p v-if="isFavoritesView" class="text-amber-300">
            Tylko ulubione ({{ filteredProducts.length }}) 
            <button @click.prevent="isFavoritesView = false" class="underline ml-2 hover:text-white">pokaż wszystkie</button>
          </p>
          <p v-else-if="searchQuery && filteredProducts.length === 0" class="text-red-300">
            Nic nie znaleziono dla „{{ searchQuery }}”
          </p>
          <p v-else-if="searchQuery" class="text-amber-200">
            Znaleziono: {{ filteredProducts.length }}
          </p>
        </div>
      </div>
    </section>

    <!-- SIATKA PRODUKTÓW -->
    <section id="oferta" class="py-16 md:py-24 bg-amber-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">
          <div v-for="product in filteredProducts" :key="product.id"
               class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
            <div class="aspect-square overflow-hidden bg-gray-50">
              <img :src="product.image" :alt="product.name"
                   class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                   loading="lazy" />
            </div>
            <div class="p-5 text-center">
              <h3 class="font-bold text-emerald-800 text-sm md:text-base leading-tight line-clamp-3 mb-5 min-h-16">
                {{ product.name }}
              </h3>
              <!-- również dodane .prevent -->
              <button @click.prevent="toggleFavorite(product.id)"
                      class="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition shadow-md flex items-center justify-center gap-2 text-sm md:text-base">
                <svg class="w-6 h-6" :class="isFavorite(product.id) ? 'text-red-500 fill-red-500' : 'text-white'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
                {{ isFavorite(product.id) ? 'W ulubionych' : 'Do ulubionych' }}
              </button>
            </div>
          </div>
        </div>

        <!-- POPRAWIONY PRZYCISK POKAŻ WSZYSTKO -->
        <div v-if="!searchQuery && !isFavoritesView && products.length > 10" class="text-center mt-16">
          <button @click.prevent="toggleShowAll"
                  class="px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-bold rounded-xl shadow-xl transition hover:scale-105">
            {{ showAll ? 'Pokaż mniej' : 'Pokaż wszystkie' }}
          </button>
        </div>
      </div>
    </section>

    <!-- MINI KONTAKT -->
    <section class="bg-emerald-700 text-white py-8">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <p class="text-lg md:text-2xl font-bold leading-tight">
          Rezerwacja i odbiór tylko osobiście 
          <a href="tel:603131190" class="underline hover:text-amber-300">603 131 190</a> (Mirek) 
          • Płatność gotówką • Czekam z kawą i uśmiechem!
        </p>
      </div>
    </section>

  </div>
</template>

<style scoped>
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1 }
  50% { opacity: 0.7 }
}
</style>