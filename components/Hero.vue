<script setup lang="ts">
import { ref, computed } from 'vue'
import HeroCarousel from '@/components/HeroCarousel.vue'
import { useProductFilters } from '@/composables/useProductFilters'

// === STANY ===
const showAll = ref(false)
const selectedProduct = ref<any>(null)
const isModalOpen = ref(false)
const sortBy = ref<'all' | 'wlasne' | 'waga'>('all')

// === ULUBIONE I WYSZUKIWANIE ===
const { searchQuery, isFavoritesView, favorites, toggleFavorite, isFavorite } = useProductFilters()

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
  { id: 33, name: 'Buraki', image: '/buraki.jpg', desc: 'Buraki', inStock: true, category: 'waga' },
  { id: 34, name: 'Gruszka', image: '/gruszka1.jpg', desc: 'Gruszka', inStock: true, category: 'waga' },
  { id: 35, name: 'Jajka Swojskie', image: '/jajkasw1.jpg', desc: 'Jajka swojskie dostępne na zamówienie z wyprzedzeniem', inStock: true, category: 'waga' },
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

  if (!showAll.value && !searchQuery.value.trim() && !isFavoritesView.value && sortBy.value === 'all') {
    result = result.slice(0, 15)
  }

  return result
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">

    <HeroCarousel />

    <!-- PRZYCISKI SORTOWANIA – bursztynowe, spójne -->
    <section class="py-10 border-b-8 border-amber-600">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-wrap justify-center gap-6">
          <button @click="sortBy = 'all'; showAll = true"
                  :class="sortBy === 'all' ? 'bg-amber-700 text-white shadow-amber-300/50' : 'bg-white text-amber-900 border-2 border-amber-300'"
                  class="px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition">
            Wszystkie produkty
          </button>
          <button @click="sortBy = 'wlasne'; showAll = true"
                  :class="sortBy === 'wlasne' ? 'bg-amber-700 text-white shadow-amber-300/50' : 'bg-white text-amber-900 border-2 border-amber-300'"
                  class="px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition">
            Własne wyroby
          </button>
          <button @click="sortBy = 'waga'; showAll = true"
                  :class="sortBy === 'waga' ? 'bg-amber-700 text-white shadow-amber-300/50' : 'bg-white text-amber-900 border-2 border-amber-300'"
                  class="px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition flex items-center gap-3">
            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"><path d="M3 3h14c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2 2z"/></svg>
            Na wagę
          </button>
        </div>
      </div>
    </section>

    <!-- SIATKA PRODUKTÓW -->
    <section class="py-16 md:py-24">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
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

        <!-- CTA ulubione -->
        <div v-if="isFavoritesView" class="mt-20 p-10 bg-gradient-to-r from-amber-600 to-amber-500 rounded-3xl shadow-2xl text-center text-white">
          <p class="text-2xl md:text-4xl font-bold mb-6">Zarezerwuj swoje ulubione produkty!</p>
          <a href="tel:603131190" class="inline-block px-12 py-6 bg-white text-amber-700 text-3xl font-bold rounded-full shadow-2xl hover:scale-110 transition">
            603 131 190
          </a>
          <p class="mt-6 text-lg opacity-90">Rezerwacja tylko telefonicznie · Płatność gotówką przy odbiorze</p>
        </div>

        <!-- POKAŻ WSZYSTKIE – TERAZ IDENTYCZNY JAK PRZYCISKI SORTOWANIA -->
        <div v-if="!searchQuery && !isFavoritesView && sortBy === 'all'" class="text-center mt-20">
          <button 
            @click.prevent="toggleShowAll" 
            :class="showAll ? 'bg-white text-amber-900 border-2 border-amber-300' : 'bg-amber-700 text-white shadow-amber-300/50'"
            class="px-12 py-5 rounded-full font-bold text-xl shadow-xl hover:scale-110 transition duration-300"
          >
            {{ showAll ? 'Pokaż mniej' : `Pokaż wszystkie (${products.length})` }}
          </button>
        </div>
      </div>
    </section>

    <!-- MODAL – dopasowany do bursztynu -->
    <Teleport to="body">
      <div v-if="isModalOpen" @click="closeModal" class="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-md">
        <div @click.stop class="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl">
          <button @click="closeModal" class="absolute top-4 right-4 w-12 h-12 bg-amber-100 rounded-full shadow-lg hover:bg-amber-200 transition z-10 flex items-center justify-center">
            <svg class="w-7 h-7 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <div class="flex flex-col md:flex-row">
            <div class="md:w-2/5 bg-amber-50 flex items-center justify-center p-8 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none">
              <img :src="selectedProduct?.image" :alt="selectedProduct?.name" class="max-w-full max-h-96 object-contain" />
            </div>
            <div class="p-8 md:p-10">
              <h2 class="text-4xl font-bold text-amber-900 mb-6">{{ selectedProduct?.name }}</h2>
              <div class="flex items-center gap-4 mb-6">
                <span v-if="selectedProduct?.inStock" class="px-6 py-3 bg-amber-100 text-amber-800 rounded-full font-bold">Dostępny</span>
                <span v-else class="px-6 py-3 bg-red-100 text-red-800 rounded-full font-bold">Brak na stanie</span>
                <span v-if="selectedProduct?.category === 'waga'" class="px-6 py-3 bg-amber-600 text-white rounded-full font-bold">NA WAGĘ</span>
              </div>
              <div class="space-y-6 text-gray-700">
                <div><h3 class="text-xl font-bold text-amber-800 mb-2">Opis</h3><p class="leading-relaxed">{{ selectedProduct?.desc }}</p></div>
                <div v-if="selectedProduct?.sklad"><h3 class="text-xl font-bold text-amber-800 mb-2">Skład</h3><p class="leading-relaxed">{{ selectedProduct?.sklad }}</p></div>
              </div>
              <button @click="closeModal" class="w-full mt-10 py-5 bg-amber-600 hover:bg-amber-700 text-white text-xl font-bold rounded-xl shadow-xl transition">
                Zamknij
              </button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>