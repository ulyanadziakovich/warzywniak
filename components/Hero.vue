<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import HeroCarousel from '@/components/HeroCarousel.vue'
import { useProductFilters } from '@/composables/useProductFilters'

// === STANY ===
const showAll = ref(false)
const selectedProduct = ref<any>(null)
const isModalOpen = ref(false)
const sortBy = ref<'all' | 'wlasne' | 'waga'>('all')
const isMobile = ref(false)
const viewMode = ref<'grid' | 'list'>('list') // Domyślnie lista na mobile

// === ULUBIONE I WYSZUKIWANIE ===
const { searchQuery, isFavoritesView, favorites, toggleFavorite, isFavorite, favoritesCount, toggleFavoritesView } = useProductFilters()

// Sprawdź, czy jesteśmy na mobile
const checkMobile = () => {
  if (typeof window !== 'undefined') {
    isMobile.value = window.innerWidth <= 768
  }
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', checkMobile)
  }
})

const toggleShowAll = () => {
  showAll.value = !showAll.value
}

const openModal = (product: any) => {
  selectedProduct.value = product
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  document.body.style.overflow = 'auto'
}

// === PRODUKTY (bez zmian) ===
const products = [
  // ... (cała Twoja tablica produktów – zostawiam dokładnie taką, jak miałeś) ...
  { id: 1, name: 'Konfitura z Jagody Kamczackiej', image: '/jagoda1.jpg', desc: 'Słodka, aromatyczna konfitura z dojrzałych jagód kamczackich.', sklad: 'Jagoda kamczacka, cukier, pektyny, woda. 80g owoców/100g.', inStock: true, category: 'wlasne' },
  { id: 2, name: 'Konfitura z Jagody Kamczackiej i Truskawka', image: '/truskawka1.jpg', desc: 'Połączenie jagód kamczackich z truskawkami.', sklad: 'Jagoda kamczacka, truskawka, cukier, pektyny.', inStock: true, category: 'wlasne' },
  { id: 3, name: 'Ogórki Kiszone', image: '/ogorkikiszone1.jpg', desc: 'Tradycyjnie kiszone – chrupiące i aromatyczne.', sklad: 'Ogórki 65%, woda, sól, czosnek, koperek, chrzan.', inStock: true, category: 'wlasne' },
  { id: 4, name: 'Ogórki z Curry', image: '/ogorkicurry1.jpg', desc: 'Pikantno-słodkie w zalewie curry.', sklad: 'Ogórki 65%, woda, curry, cukier, cebula.', inStock: true, category: 'wlasne' },
  { id: 5, name: 'Olej z Pestek Dyni', image: '/olej1.jpg', desc: 'Tłoczony na zimno, orzechowy smak.', sklad: '100% olej z pestek dyni.', inStock: true, category: 'wlasne' },
  { id: 6, name: 'Olej Lniany', image: '/olej1.jpg', desc: 'Bogaty w omega-3.', sklad: '100% olej lniany tłoczony na zimno.', inStock: true, category: 'wlasne' },
  { id: 7, name: 'Olej Słonecznikowy', image: '/olej1.jpg', desc: 'Naturalny, nierafinowany.', sklad: '100% olej słonecznikowy.', inStock: true, category: 'wlasne' },
  { id: 8, name: 'Olej z Czarnuszki', image: '/olej1.jpg', desc: 'Prozdrowotny, lekko pikantny.', sklad: '100% olej z czarnuszki.', inStock: true, category: 'wlasne' },
  { id: 9, name: 'Olej Sezamowy', image: '/olej1.jpg', desc: 'Aromatyczny do dań azjatyckich.', sklad: '100% olej sezamowy.', inStock: true, category: 'wlasne' },
  { id: 10, name: 'Olej Rzepakowy', image: '/olej1.jpg', desc: 'Tłoczony na zimno.', sklad: '100% olej rzepakowy.', inStock: true, category: 'wlasne' },
  { id: 11, name: 'Sok Borówkowo-Aroniowy', image: '/sokborówka1.jpg', desc: 'Gęsty sok bez konserwantów.', sklad: 'Borówka, aronia, cukier.', inStock: true, category: 'wlasne' },
  { id: 12, name: 'Sok Malinowy Tłoczony', image: '/sokmalina1.jpg', desc: '100% malin – na przeziębienie.', sklad: 'Malina, cukier.', inStock: true, category: 'wlasne' },
  { id: 13, name: 'Sok Jabłko z Miętą', image: '/sokjablkomieta1.jpg', desc: 'Orzeźwiający i naturalny.', sklad: 'Jabłko 97%, mięta 3%.', inStock: true, category: 'wlasne' },
  { id: 14, name: 'Syrop z Mniszka Lekarskiego', image: '/syropmniszek1.jpg', desc: 'Domowy miód z mniszka.', sklad: 'Kwiaty mniszka, cukier, cytryna.', inStock: true, category: 'wlasne' },
  { id: 15, name: 'Syrop z Kwiatów Czarnego Bzu', image: '/syropbez1.jpg', desc: 'Przeciwgrypowy hit!', sklad: 'Kwiaty bzu 51%, cukier, cytryna.', inStock: true, category: 'wlasne' },
  { id: 16, name: 'Pesto z Czosnku Niedźwiedziego', image: '/pewsto1.jpg', desc: 'Intensywnie czosnkowe pesto.', sklad: 'Czosnek niedźwiedzi, olej, sól.', inStock: true, category: 'wlasne' },
  { id: 17, name: 'Suszony czosnek niedźwiedzi', image: '/pewsto1.jpg', desc: 'Idealny do każdej potrawy.', sklad: '100% czosnek niedźwiedzi suszony.', inStock: 'wlasne' },
  { id: 18, name: 'Jabłka Suszone', image: '/jablkasuszone1.jpg', desc: 'Chrupiąca, zdrowa przekąska.', sklad: '100% jabłka.', inStock: true, category: 'wlasne' },
  { id: 19, name: 'Dżem Truskawkowy', image: '/dzem1.jpg', desc: 'Z całych truskawek.', sklad: 'Truskawka, cukier, pektyny.', inStock: true, category: 'wlasne' },
  { id: 20, name: 'Powidła Śliwkowe', image: '/powidla1.jpg', desc: 'Gęste, długo gotowane.', sklad: 'Śliwki 192g/100g, cukier.', inStock: true, category: 'wlasne' },
  { id: 21, name: 'Papryka w Sosie Pomidorowym', image: '/papryka1.jpg', desc: 'Słodka papryka w pomidorach.', sklad: 'Papryka 60%, pomidory, cebula.', inStock: true, category: 'wlasne' },
  { id: 22, name: 'Pomidorowa Iskra', image: '/iskra1.jpg', desc: 'Pikantna z chili.', sklad: 'Pomidory 80%, papryka ostra.', inStock: true, category: 'wlasne' },
  { id: 23, name: 'Buraczki z Papryką', image: '/buraczki1.jpg', desc: 'Słodko-pikantne buraczki.', sklad: 'Buraki, papryka, ocet.', inStock: true, category: 'wlasne' },
  { id: 24, name: 'Sałatka z Gyrosem', image: '/gyros1.jpg', desc: 'Idealna na imprezę.', sklad: 'Warzywa, przyprawa gyros.', inStock: true, category: 'wlasne' },
  { id: 25, name: 'Pomidory', image: '/pomidory1.jpg', desc: 'Pomidory', inStock: true, category: 'waga' },
  { id: 26, name: 'Ogórki', image: '/ogorki1.jpg', desc: 'Ogórki', inStock: false, category: 'waga' },
  { id: 27, name: 'Ziemniaki', image: '/ziemniaki1.jpg', desc: 'Ziemniaki', inStock: true, category: 'waga' },
  { id: 28, name: 'Czosnek', image: '/czosnek1.jpg', desc: 'Czosnek', inStock: true, category: 'waga' },
  { id: 29, name: 'Papryka', image: '/papryczka1.jpg', desc: 'Papryka', inStock: true, category: 'waga' },
  { id: 30, name: 'Rzodkiewka', image: '/rzodkiewka1.jpg', desc: 'Rzodkiewka', inStock: true, category: 'waga' },
  { id: 31, name: 'Marchewka', image: '/marchewka1.jpg', desc: 'Marchewka', inStock: true, category: 'waga' },
  { id: 32, name: 'Jabłka', image: '/jablka1.jpg', desc: 'Jabłka', inStock: true, category: 'waga' },
  { id: 33, name: 'Buraki', image: '/burak.jpg', desc: 'Buraki', inStock: true, category: 'waga' },
  { id: 34, name: 'Gruszka', image: '/gruszka1.jpg', desc: 'Gruszka', inStock: true, category: 'waga' },
  { id: 35, name: 'Jajka Swojskie', image: '/jajkasw1.jpg', desc: 'Jajka swojskie dostępne na zamówienie z wyprzedzeniem', inStock: true, category: 'waga' },
  { id: 35, name: 'Śliwka', image: '/sliwka.jpg', desc: 'Śliwka', inStock: false, category: 'waga' },
  { id: 35, name: 'Fasolka', image: '/fasol.jpg', desc: 'Fasolka', inStock: false, category: 'waga' },
  { id: 35, name: 'Cebula', image: '/cebula.jpg', desc: 'Cebula czerwona/biała', inStock: true, category: 'waga' },
  { id: 35, name: 'Kapusta', image: '/kapusta.jpg', desc: 'Kapusta', inStock: true, category: 'waga' },
 
]

const filteredProducts = computed(() => {
  let result = products

  if (sortBy.value === 'wlasne') result = result.filter(p => p.category === 'wlasne')
  if (sortBy.value === 'waga') result = result.filter(p => p.category === 'waga')

  if (searchQuery.value.trim() && !isFavoritesView.value) {
    const q = searchQuery.value.toLowerCase().trim()
    result = result.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))
  }

  if (isFavoritesView.value) {
    result = result.filter(p => favorites.value.includes(p.id))
  }

  // Limituj produkty jeśli nie showAll i nie ma wyszukiwania
  if (!showAll.value && !searchQuery.value.trim() && !isFavoritesView.value) {
    // W widoku listy pokazujemy więcej produktów (8), w siatce mniej (4)
    const limit = isMobile.value ? (viewMode.value === 'list' ? 8 : 4) : 15
    result = result.slice(0, limit)
  }

  return result
})

// Całkowita liczba produktów w aktualnej kategorii (przed limitowaniem)
const totalProductsInCategory = computed(() => {
  let result = products

  if (sortBy.value === 'wlasne') result = result.filter(p => p.category === 'wlasne')
  if (sortBy.value === 'waga') result = result.filter(p => p.category === 'waga')

  return result.length
})

// Czy pokazać przycisk "Pokaż więcej"
const shouldShowMoreButton = computed(() => {
  const limit = isMobile.value ? (viewMode.value === 'list' ? 8 : 4) : 15
  return !searchQuery.value.trim() && !isFavoritesView.value && totalProductsInCategory.value > limit
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">

    <HeroCarousel />

    <!-- PRZYCISKI SORTOWANIA – bursztynowe, spójne -->
    <section class="py-10 border-b-8 border-amber-600">
      <div class="max-w-7xl mx-auto px-6">
        <!-- Wyszukiwarka i ulubione - tylko mobile -->
        <div class="md:hidden mb-6 space-y-3">
          <!-- Wyszukiwarka mobilna -->
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Szukaj produktu..."
              class="w-full pl-10 pr-4 py-3 rounded-full bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-lg border-2 border-amber-200"
            />
            <svg class="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>

          <!-- Ulubione i przełącznik widoku -->
          <div class="flex gap-3">
            <button
              @click="toggleFavoritesView"
              class="flex-1 py-3 px-4 rounded-full bg-white hover:bg-gray-50 transition shadow-lg border-2 border-amber-200 flex items-center justify-center gap-2"
              :class="{ 'bg-red-50 border-red-300': isFavoritesView }"
            >
              <svg class="w-6 h-6" :class="isFavoritesView ? 'text-red-500 fill-red-500' : 'text-amber-700'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
              <span class="font-bold text-gray-800">Ulubione</span>
              <span v-if="favoritesCount > 0" class="bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-md">
                {{ favoritesCount }}
              </span>
            </button>

            <!-- Przełącznik widoku -->
            <button
              @click="viewMode = viewMode === 'grid' ? 'list' : 'grid'"
              class="py-3 px-4 rounded-full bg-white hover:bg-gray-50 transition shadow-lg border-2 border-amber-200 flex items-center justify-center"
              :title="viewMode === 'grid' ? 'Przełącz na listę' : 'Przełącz na siatkę'"
            >
              <!-- Ikona siatki -->
              <svg v-if="viewMode === 'list'" class="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
              </svg>
              <!-- Ikona listy -->
              <svg v-else class="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>

        <div class="flex flex-wrap justify-center gap-6">
          <button @click="sortBy = 'all'; showAll = false"
                  :class="sortBy === 'all' ? 'bg-amber-700 text-white shadow-amber-300/50' : 'bg-white text-amber-900 border-2 border-amber-300'"
                  class="px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition">
            Wszystkie produkty
          </button>
          <button @click="sortBy = 'wlasne'; showAll = false"
                  :class="sortBy === 'wlasne' ? 'bg-amber-700 text-white shadow-amber-300/50' : 'bg-white text-amber-900 border-2 border-amber-300'"
                  class="px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition">
            Własne wyroby
          </button>
          <button @click="sortBy = 'waga'; showAll = false"
                  :class="sortBy === 'waga' ? 'bg-amber-700 text-white shadow-amber-300/50' : 'bg-white text-amber-900 border-2 border-amber-300'"
                  class="px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition flex items-center justify-center gap-3">
            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"><path d="M3 3h14c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2 2z"/></svg>
            Na wagę
          </button>
        </div>
      </div>
    </section>

    <!-- SIATKA PRODUKTÓW -->
    <section class="py-16 md:py-24">
      <div class="max-w-7xl mx-auto px-6">
        <!-- Widok siatki -->
        <div v-if="viewMode === 'grid' || !isMobile" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <!-- kafelki produktów – bez zmian, tylko kolory dopasowane do bursztynu -->
          <div v-for="product in filteredProducts" :key="product.id"
               @click="openModal(product)"
               class="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer relative border border-amber-100">

            <button @click.stop="toggleFavorite(product.id)"
                    class="absolute top-4 left-4 z-20 p-3 rounded-full bg-white/95 backdrop-blur shadow-lg hover:shadow-xl transition"
                    :class="{ 'ring-4 ring-red-400 bg-red-50': isFavorite(product.id) }">
              <svg class="w-6 h-6" :class="isFavorite(product.id) ? 'text-red-600 fill-red-600' : 'text-gray-600'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </button>

            <div v-if="product.category === 'waga'" class="absolute top-0 right-0 bg-amber-600 text-white px-5 py-2 rounded-bl-3xl font-bold text-sm shadow-lg flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M3 3h14c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2 2z"/></svg>
              NA WAGĘ
            </div>

            <div v-if="!product.inStock" class="absolute inset-0 bg-black/50 rounded-3xl flex items-center justify-center z-10">
              <span class="bg-red-600 text-white px-8 py-4 rounded-full text-xl font-bold shadow-2xl">Brak</span>
            </div>

            <div class="aspect-square overflow-hidden bg-amber-50">
              <img :src="product.image || '/placeholder.jpg'" :alt="product.name"
                   class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                   :class="{ 'grayscale opacity-60': !product.inStock }"
                   loading="lazy" />
            </div>

            <div class="p-5 text-center">
              <h3 class="font-bold text-amber-900 text-sm md:text-base leading-tight line-clamp-3 min-h-[4.5rem] flex items-center justify-center">
                {{ product.name }}
              </h3>
            </div>
          </div>
        </div>

        <!-- Widok listy (tylko mobile) -->
        <div v-else class="space-y-4">
          <div v-for="product in filteredProducts" :key="product.id"
               @click="openModal(product)"
               class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer relative border border-amber-100 flex">

            <button @click.stop="toggleFavorite(product.id)"
                    class="absolute top-3 right-3 z-20 p-2.5 rounded-full bg-white/95 backdrop-blur shadow-md hover:shadow-lg transition"
                    :class="{ 'ring-2 ring-red-400 bg-red-50': isFavorite(product.id) }">
              <svg class="w-5 h-5" :class="isFavorite(product.id) ? 'text-red-600 fill-red-600' : 'text-gray-600'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </button>

            <div v-if="!product.inStock" class="absolute inset-0 bg-black/50 rounded-2xl flex items-center justify-center z-10">
              <span class="bg-red-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-2xl">Brak</span>
            </div>

            <!-- Obrazek po lewej -->
            <div class="w-56 h-56 flex-shrink-0 bg-amber-50 relative">
              <img :src="product.image || '/placeholder.jpg'" :alt="product.name"
                   class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                   :class="{ 'grayscale opacity-60': !product.inStock }"
                   loading="lazy" />
            </div>

            <!-- Treść po prawej -->
            <div class="flex-1 p-5 flex flex-col justify-center">
              <h3 class="font-bold text-amber-900 text-lg leading-tight mb-2">
                {{ product.name }}
              </h3>
              <p class="text-base text-gray-600 line-clamp-2 mb-3">
                {{ product.desc }}
              </p>
              <div class="flex items-center gap-2 flex-wrap">
                <span v-if="product.category === 'waga'" class="bg-amber-600 text-white px-3 py-1 rounded-full font-bold text-xs flex items-center gap-1">
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M3 3h14c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2 2z"/></svg>
                  NA WAGĘ
                </span>
                <span v-if="product.inStock" class="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold text-xs">
                  Dostępny
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA ulubione -->
        <div v-if="isFavoritesView" class="mt-20 p-10 bg-gradient-to-r from-amber-600 to-amber-500 rounded-3xl shadow-2xl text-center text-white">
          <p class="text-2xl md:text-4xl font-bold mb-6">Zarezerwuj swoje ulubione produkty!</p>
          <a href="tel:603131190" class="inline-block px-12 py-6 bg-white text-amber-700 text-3xl font-bold rounded-full shadow-2xl hover:scale-110 transition">
            603 131 190
          </a>
          <p class="mt-6 text-lg opacity-90">Rezerwacja tylko telefonicznie · Płatność gotówką przy odbiorze</p>
        </div>

        <!-- POKAŻ WSZYSTKIE/WIĘCEJ – DLA WSZYSTKICH KATEGORII -->
        <div v-if="shouldShowMoreButton" class="text-center mt-20">
          <button
            @click.prevent="toggleShowAll"
            :class="showAll ? 'bg-white text-amber-900 border-2 border-amber-300' : 'bg-amber-700 text-white shadow-amber-300/50'"
            class="px-12 py-5 rounded-full font-bold text-xl shadow-xl hover:scale-110 transition duration-300"
          >
            {{ showAll ? 'Pokaż mniej' : `Pokaż wszystkie (${totalProductsInCategory})` }}
          </button>
        </div>
      </div>
    </section>

    <!-- MODAL – dopasowany do bursztynu -->
    <Teleport to="body">
      <div v-if="isModalOpen" @click="closeModal" class="fixed inset-0 bg-black/90 z-50 flex items-start justify-center overflow-y-auto backdrop-blur-md">
        <div @click.stop class="bg-white w-full max-w-3xl min-h-screen md:min-h-0 md:my-4 md:rounded-3xl shadow-2xl relative">
          <button @click="closeModal" class="sticky top-4 right-4 ml-auto mr-4 w-12 h-12 bg-amber-100 rounded-full shadow-lg hover:bg-amber-200 transition z-20 flex items-center justify-center">
            <svg class="w-7 h-7 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <div class="flex flex-col">
            <!-- Obrazek - prawie cały ekran -->
            <div class="w-full bg-amber-50 flex items-center justify-center p-4 md:p-8">
              <img :src="selectedProduct?.image" :alt="selectedProduct?.name" class="w-full h-auto max-h-[85vh] md:max-h-[70vh] object-contain rounded-2xl shadow-lg" />
            </div>

            <!-- Treść do scrollowania -->
            <div class="p-6 md:p-10">
              <h2 class="text-3xl md:text-4xl font-bold text-amber-900 mb-4 md:mb-6">{{ selectedProduct?.name }}</h2>
              <div class="flex items-center gap-3 mb-6 flex-wrap">
                <span v-if="selectedProduct?.inStock" class="px-4 py-2 bg-amber-100 text-amber-800 rounded-full font-bold text-sm">Dostępny</span>
                <span v-else class="px-4 py-2 bg-red-100 text-red-800 rounded-full font-bold text-sm">Brak na stanie</span>
                <span v-if="selectedProduct?.category === 'waga'" class="px-4 py-2 bg-amber-600 text-white rounded-full font-bold text-sm">NA WAGĘ</span>
              </div>
              <div class="space-y-6 text-gray-700">
                <div><h3 class="text-xl font-bold text-amber-800 mb-2">Opis</h3><p class="leading-relaxed text-base">{{ selectedProduct?.desc }}</p></div>
                <div v-if="selectedProduct?.sklad"><h3 class="text-xl font-bold text-amber-800 mb-2">Skład</h3><p class="leading-relaxed text-base">{{ selectedProduct?.sklad }}</p></div>
              </div>
              <button @click="closeModal" class="w-full mt-8 py-4 bg-amber-600 hover:bg-amber-700 text-white text-lg font-bold rounded-xl shadow-xl transition">
                Zamknij
              </button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
/* Optymalizacje mobilne dla profesjonalnego wyglądu */

/* Przyciski sortowania - mobile */
@media (max-width: 768px) {
  section:has(.flex.flex-wrap.justify-center) {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  /* Przyciski sortowania */
  .flex.flex-wrap.justify-center {
    gap: 0.75rem !important;
  }

  .flex.flex-wrap.justify-center button {
    padding: 0.625rem 1.25rem !important;
    font-size: 0.875rem !important;
    width: 100%;
    max-width: none;
  }

  /* Ikona wagi - ukryj na małych ekranach */
  .flex.flex-wrap.justify-center button svg {
    width: 1.25rem !important;
    height: 1.25rem !important;
  }
}

/* Siatka produktów - mobile */
@media (max-width: 768px) {
  /* Sekcja produktów */
  section:has(.grid) {
    padding-top: 2rem !important;
    padding-bottom: 2rem !important;
  }

  /* Siatka produktów */
  .grid {
    gap: 1rem !important;
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }

  /* Karty produktów */
  .grid > div {
    border-radius: 1rem !important;
  }

  /* Tytuły produktów */
  .grid > div h3 {
    font-size: 0.8125rem !important;
    min-height: 3rem !important;
    padding: 0.5rem !important;
  }

  /* Przycisk ulubione */
  .grid > div button {
    padding: 0.5rem !important;
    top: 0.5rem !important;
    left: 0.5rem !important;
  }

  .grid > div button svg {
    width: 1.25rem !important;
    height: 1.25rem !important;
  }

  /* Badge "NA WAGĘ" */
  .grid > div > div:has(svg):not(button) {
    padding: 0.375rem 0.75rem !important;
    font-size: 0.625rem !important;
  }

  .grid > div > div:has(svg):not(button) svg {
    width: 0.875rem !important;
    height: 0.875rem !important;
  }

  /* Badge "Brak" */
  .grid > div > div:has(.bg-red-600) span {
    padding: 0.5rem 1rem !important;
    font-size: 0.875rem !important;
  }
}

/* CTA Ulubione - mobile */
@media (max-width: 768px) {
  div:has(a[href="tel:603131190"]) {
    padding: 1.5rem !important;
    margin-top: 2rem !important;
    border-radius: 1.5rem !important;
  }

  div:has(a[href="tel:603131190"]) p:first-child {
    font-size: 1.25rem !important;
    margin-bottom: 1rem !important;
  }

  div:has(a[href="tel:603131190"]) a {
    padding: 1rem 2rem !important;
    font-size: 1.5rem !important;
  }

  div:has(a[href="tel:603131190"]) p:last-child {
    font-size: 0.875rem !important;
    margin-top: 1rem !important;
  }
}

/* Przycisk "Pokaż wszystkie" - mobile */
@media (max-width: 768px) {
  .text-center:has(button) button {
    padding: 0.875rem 2rem !important;
    font-size: 0.9375rem !important;
  }
}

/* Modal - mobile pełnoekranowy */
@media (max-width: 768px) {
  /* Container modala */
  .fixed.inset-0.bg-black\/70 {
    padding: 0 !important;
  }

  /* Modal content */
  .fixed.inset-0.bg-black\/70 > div {
    max-width: 100% !important;
    max-height: 100vh !important;
    border-radius: 0 !important;
    margin: 0 !important;
  }

  /* Obrazek w modalu */
  .fixed.inset-0.bg-black\/70 img {
    max-height: 50vw !important;
    padding: 1.5rem !important;
  }

  /* Treść modala */
  .fixed.inset-0.bg-black\/70 .p-8,
  .fixed.inset-0.bg-black\/70 .md\\:p-10 {
    padding: 1.5rem !important;
  }

  /* Tytuł w modalu */
  .fixed.inset-0.bg-black\/70 h2 {
    font-size: 1.5rem !important;
    margin-bottom: 1rem !important;
  }

  /* Badges w modalu */
  .fixed.inset-0.bg-black\/70 .flex.items-center.gap-4 {
    gap: 0.5rem !important;
    flex-wrap: wrap;
  }

  .fixed.inset-0.bg-black\/70 .flex.items-center.gap-4 span {
    padding: 0.5rem 1rem !important;
    font-size: 0.75rem !important;
  }

  /* Sekcje opis/skład */
  .fixed.inset-0.bg-black\/70 .space-y-6 {
    gap: 1rem !important;
  }

  .fixed.inset-0.bg-black\/70 h3 {
    font-size: 1rem !important;
    margin-bottom: 0.5rem !important;
  }

  .fixed.inset-0.bg-black\/70 .space-y-6 p {
    font-size: 0.875rem !important;
  }

  /* Przycisk zamknij */
  .fixed.inset-0.bg-black\/70 button {
    padding: 0.875rem !important;
    font-size: 1rem !important;
    margin-top: 1.5rem !important;
  }
}

/* Extra small mobile */
@media (max-width: 480px) {
  .flex.flex-wrap.justify-center button {
    font-size: 0.8125rem !important;
    padding: 0.5rem 1rem !important;
  }

  .grid h3 {
    font-size: 0.75rem !important;
  }

  /* Widok listy - dostosowane obrazki na bardzo małych ekranach */
  .space-y-4 > div {
    min-height: 170px;
  }

  .space-y-4 .w-56 {
    width: 160px !important;
    height: 160px !important;
  }

  .space-y-4 .flex-1 {
    padding: 1rem !important;
  }

  .space-y-4 h3 {
    font-size: 0.875rem !important;
    margin-bottom: 0.375rem !important;
  }

  .space-y-4 p {
    font-size: 0.75rem !important;
    margin-bottom: 0.375rem !important;
  }

  .space-y-4 .flex.items-center.gap-2 span {
    font-size: 0.625rem !important;
    padding: 0.25rem 0.625rem !important;
  }
}

/* Styl dla widoku listy */
.space-y-4 > div {
  transition: all 0.3s ease;
}

.space-y-4 > div:active {
  transform: scale(0.98);
}
</style>