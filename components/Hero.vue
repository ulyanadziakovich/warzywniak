<script setup lang="ts">
import { ref, computed } from 'vue'
import HeroCarousel from '@/components/HeroCarousel.vue'
import { useProductFilters } from '@/composables/useProductFilters'

// === STANY ===
const showAll = ref(false)
const selectedProduct = ref<any>(null)
const isModalOpen = ref(false)
const sortBy = ref<'all' | 'wlasne' | 'waga'>('all')  // nowe sortowanie!

// === ULUBIONE I WYSZUKIWANIE (współdzielone z NavBar) ===
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

// === PRODUKTY ===
const products = [
  // === WŁASNE WYROBY (id 1–24) ===
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
  { id: 17, name: 'Suszony czosnek niedźwiedzi', image: '/pewsto1.jpg', desc: 'Idealny do każdej potrawy.', sklad: '100% czosnek niedźwiedzi suszony.', inStock: true, category: 'wlasne' },
  { id: 18, name: 'Jabłka Suszone', image: '/jablkasuszone1.jpg', desc: 'Chrupiąca, zdrowa przekąska.', sklad: '100% jabłka.', inStock: true, category: 'wlasne' },
  { id: 19, name: 'Dżem Truskawkowy', image: '/dzem1.jpg', desc: 'Z całych truskawek.', sklad: 'Truskawka, cukier, pektyny.', inStock: true, category: 'wlasne' },
  { id: 20, name: 'Powidła Śliwkowe', image: '/powidla1.jpg', desc: 'Gęste, długo gotowane.', sklad: 'Śliwki 192g/100g, cukier.', inStock: true, category: 'wlasne' },
  { id: 21, name: 'Papryka w Sosie Pomidorowym', image: '/papryka1.jpg', desc: 'Słodka papryka w pomidorach.', sklad: 'Papryka 60%, pomidory, cebula.', inStock: true, category: 'wlasne' },
  { id: 22, name: 'Pomidorowa Iskra', image: '/iskra1.jpg', desc: 'Pikantna z chili.', sklad: 'Pomidory 80%, papryka ostra.', inStock: true, category: 'wlasne' },
  { id: 23, name: 'Buraczki z Papryką', image: '/buraczki1.jpg', desc: 'Słodko-pikantne buraczki.', sklad: 'Buraki, papryka, ocet.', inStock: true, category: 'wlasne' },
  { id: 24, name: 'Sałatka z Gyrosem', image: '/gyros1.jpg', desc: 'Idealna na imprezę.', sklad: 'Warzywa, przyprawa gyros.', inStock: true, category: 'wlasne' },

  // === PRODUKTY NA WAGĘ (25–34) ===
  { id: 25, name: 'Pomidory', image: '/pomidory.jpg', desc: 'Świeżo łuskane orzechy włoskie – prosto z sadu.',  inStock: true, category: 'waga' },
  { id: 26, name: 'Ogórki', image: '/ogórki.jpg', desc: 'Chrupiące migdały naturalne.', sklad: '100% migdały', inStock: true, category: 'waga',},
  { id: 27, name: 'Ziemniaki', image: '/ziemniaki.jpg', desc: 'Polskie pestki dyni – prażone lub surowe.', sklad: '100% pestki dyni', inStock: true, category: 'waga' },
  { id: 28, name: 'Czosnek', image: '/czosnek.jpg', desc: 'Idealny do sałatek i przekąsek.', sklad: '100% słonecznik', inStock: true, category: 'waga' },
  { id: 29, name: 'Papryka', image: '/papryczka.jpg', desc: 'Słodkie, mięsiste morele bez siarki.', sklad: '100% morele suszone', inStock: true, category: 'waga' },
  { id: 30, name: 'Rzodkiewka', image: '/rzodkiewka.jpg', desc: 'Słodkie i soczyste.', sklad: '100% rodzynki', inStock: true, category: 'waga' },
  { id: 31, name: 'Marchewka', image: '/marchew.jpg', desc: 'Naturalna, bez dodatku cukru.', sklad: '100% żurawina', inStock: true, category: 'waga' },
  { id: 32, name: 'Jabłka', image: '/jabłka.jpg', desc: 'Złote lub brązowe – do wypieku i zdrowia.', sklad: '100% siemię lniane', inStock: true, category: 'waga' },
  { id: 33, name: 'Buraki', image: '/buraki.jpg', desc: 'Do bułek, sałatek i chałek.', sklad: '100% sezam', inStock: true, category: 'waga' },
  { id: 34, name: 'Gruszka', image: '/gruszka.jpg', desc: 'Świeżo mielony lub cały – do makowca.', sklad: '100% mak niebieski', inStock: true, category: 'waga' },
  { id: 35, name: 'Jajka Swojskie', image: '/jajka.jpg', desc: 'Świeżo mielony lub cały – do makowca.', sklad: '100% mak niebieski', inStock: true, category: 'waga' },
]

const filteredProducts = computed(() => {
  let result = products

  // Sortowanie
  if (sortBy.value === 'wlasne') {
    result = result.filter(p => p.category === 'wlasne')
  } else if (sortBy.value === 'waga') {
    result = result.filter(p => p.category === 'waga')
  }

  // Wyszukiwanie
  if (searchQuery.value.trim() && !isFavoritesView.value) {
    const q = searchQuery.value.toLowerCase().trim()
    result = result.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q)
    )
  }

  // Ulubione
  if (isFavoritesView.value) {
    result = result.filter(p => favorites.value.includes(p.id))
  }

  // Pokaż tylko 10 jeśli nie showAll i nie wyszukiwanie
  if (!showAll.value && !searchQuery.value.trim() && !isFavoritesView.value && sortBy.value === 'all') {
    result = result.slice(0, 12) // trochę więcej, bo mamy teraz więcej produktów
  }

  return result
})

// Ulubione są teraz ładowane automatycznie przez composable
</script>

<template>
  <div class="min-h-screen bg-amber-50">

    <HeroCarousel />

    <!-- ZIELONA BELKA – bez zmian (pomijam dla zwięzłości) -->
    <!-- ... (ta sama belka z wyszukiwaniem i serduszkiem) ... -->

    <!-- NOWE PRZYCISKI SORTOWANIA -->
    <section class="bg-emerald-50 py-8 border-b-4 border-emerald-700">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-wrap justify-center gap-4">
          <button @click="sortBy = 'all'; showAll = true"
                  :class="sortBy === 'all' ? 'bg-emerald-700 text-white' : 'bg-white text-emerald-800'"
                  class="px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition">
            Wszystkie produkty
          </button>
          <button @click="sortBy = 'wlasne'; showAll = true"
                  :class="sortBy === 'wlasne' ? 'bg-emerald-700 text-white' : 'bg-white text-emerald-800'"
                  class="px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition">
            Własne wyroby
          </button>
          <button @click="sortBy = 'waga'; showAll = true"
                  :class="sortBy === 'waga' ? 'bg-emerald-700 text-white' : 'bg-white text-emerald-800'"
                  class="px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition flex items-center gap-2">
            Na wagę
          </button>
        </div>
      </div>
    </section>

    <!-- SIATKA PRODUKTÓW -->
    <section id="oferta" class="py-16 md:py-24 bg-amber-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">
          <div v-for="product in filteredProducts" :key="product.id"
               @click="openModal(product)"
               class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer relative">

            <!-- Serduszko (ulubione) - lewy górny róg -->
            <button @click.stop="toggleFavorite(product.id)"
                    class="absolute top-3 left-3 z-20 p-2 rounded-full bg-white/90 hover:bg-white transition shadow-lg hover:shadow-xl"
                    :class="{ 'bg-red-50': isFavorite(product.id) }">
              <svg class="w-5 h-5 md:w-6 md:h-6" :class="isFavorite(product.id) ? 'text-red-500 fill-red-500' : 'text-gray-700'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </button>

            <!-- Etykieta "NA WAGĘ" -->
            <div v-if="product.category === 'waga'" class="absolute top-0 right-0 bg-orange-500 text-white px-4 py-2 rounded-bl-2xl font-bold text-sm z-10 shadow-lg flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M3 3h14c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2z"/></svg>
              NA WAGĘ
            </div>

            <!-- Brak na stanie -->
            <div v-if="!product.inStock" class="absolute bottom-3 left-3 z-10 bg-red-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
              Brak
            </div>

            <div class="aspect-square overflow-hidden bg-gray-50">
              <img :src="product.image || '/placeholder.jpg'" :alt="product.name"
                   class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                   :class="{ 'grayscale opacity-70': !product.inStock }"
                   loading="lazy" />
            </div>

            <div class="p-5 text-center">
              <h3 class="font-bold text-emerald-800 text-sm md:text-base leading-tight line-clamp-3">
                {{ product.name }}
              </h3>
              <p v-if="product.pricePerKg" class="text-orange-600 font-bold text-lg mt-2">
                {{ product.pricePerKg }}
              </p>
            </div>
          </div>
        </div>

        <!-- Numer telefonu w widoku ulubionych -->
        <div v-if="isFavoritesView" class="mt-12 p-8 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl shadow-2xl text-center">
          <p class="text-white text-xl md:text-3xl font-bold mb-4">
            📞 Zarezerwuj swoje ulubione produkty telefonicznie
          </p>
          <a href="tel:603131190" class="inline-block px-8 py-4 bg-white text-orange-600 text-2xl md:text-3xl font-bold rounded-full shadow-lg hover:scale-105 transition">
            603 131 190
          </a>
          <p class="text-white text-lg mt-4">
            Rezerwacja i odbiór tylko osobiście • Płatność gotówką
          </p>
        </div>

        <!-- Pokaż wszystkie -->
        <div v-if="!searchQuery && !isFavoritesView && sortBy === 'all'" class="text-center mt-16">
          <button @click.prevent="toggleShowAll" class="px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-bold rounded-xl shadow-xl transition hover:scale-105">
            {{ showAll ? 'Pokaż mniej' : 'Pokaż wszystkie (' + products.length + ')' }}
          </button>
        </div>
      </div>
    </section>

    <!-- MODAL – bez zmian (działa też dla produktów na wagę) -->
    <Teleport to="body">
      <!-- ... ten sam modal co wcześniej ... -->
      <!-- (nie wklejam drugi raz – działa idealnie) -->
    </Teleport>

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