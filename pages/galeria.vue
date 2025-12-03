<template>
  <div class="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">

    <!-- Przycisk Strona główna -->
    <NuxtLink
      to="/"
      class="fixed top-4 left-4 z-50 bg-amber-600 hover:bg-amber-700 text-white px-5 py-3 rounded-full font-bold shadow-2xl hover:scale-105 transition flex items-center gap-2 text-sm"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
      </svg>
      Strona główna
    </NuxtLink>

    <!-- HERO -->
    <section class="relative py-16 md:py-32 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-amber-100 via-amber-50 to-amber-50 opacity-70"></div>

      <div class="relative max-w-7xl mx-auto px-6 text-center">
        <h1 class="text-5xl md:text-8xl font-bold text-amber-900 mb-6 leading-tight">
          Galeria
        </h1>
        <p class="text-xl md:text-4xl text-amber-700 font-medium px-4">
          Nasz ogród, nasze ręce, nasze serce
        </p>
        <div class="flex justify-center mt-8">
          <div class="w-32 h-1 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full"></div>
        </div>
      </div>
    </section>

    <!-- GALERIA -->
    <section class="py-12 md:py-24 px-4 md:px-6">
      <div class="max-w-7xl mx-auto">

        <!-- Opis -->
        <div class="text-center mb-10 md:mb-16 px-4">
          <p class="text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Zobacz, jak wygląda nasze miejsce na co dzień – od porannej rosy na borówkach,
            przez pracę w Inkubatorze, po uśmiechy podczas zbiorów.
          </p>
        </div>

        <!-- Zdjęcia -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          <div
            v-for="photo in visiblePhotos"
            :key="photo.id"
            class="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <img
              :src="photo.src"
              :alt="photo.alt"
              class="w-full h-full object-cover aspect-square"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
              <p class="text-white text-xl md:text-2xl font-bold text-center px-4">
                {{ photo.title }}
              </p>
            </div>
          </div>
        </div>

        <!-- Przycisk „Pokaż więcej" – tylko na mobile -->
        <div v-if="isMobile && !showAll" class="text-center mt-12">
          <button
            @click="showAll = true"
            class="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition"
          >
            Pokaż więcej zdjęć
          </button>
        </div>

        <!-- Dolny tekst -->
        <div class="text-center mt-16 md:mt-20 px-4">
          <p class="text-2xl md:text-3xl text-amber-800 font-medium">
            To my. To nasz dom. To nasze Bieszczady.
          </p>
          <p class="text-base md:text-lg text-gray-600 mt-4 italic">
            Wkrótce więcej zdjęć – obiecujemy!
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const photos = [
  { id: 1, src: '/lesko.jpg',        alt: 'Targi w Lesko',        title: 'Targi w Lesko' },
  { id: 2, src: '/swietogrzyba.jpg', alt: 'Święto Grzyba',        title: 'Święto Grzyba' },
  { id: 3, src: '/kaczki.jpg',       alt: 'Nasze kaczuszki',      title: 'Nasze kaczuszki' },
  { id: 4, src: '/plantacja.jpg',    alt: 'Ręczne zbiory',        title: 'Ręczne zbiory' },
  { id: 5, src: '/swiecy.jpg',       alt: 'Ręczne wykonanie',     title: 'Ręczne wykonanie' },
  { id: 6, src: '/borowka.jpg',      alt: 'Plantacja borówki',    title: 'Plantacja borówki' },
]

const showAll = ref(false)
const isMobile = ref(false)

onMounted(() => {
  const check = () => {
    isMobile.value = window.innerWidth <= 768
  }
  check()
  window.addEventListener('resize', check)

  onUnmounted(() => {
    window.removeEventListener('resize', check)
  })
})

const visiblePhotos = computed(() => {
  if (!isMobile.value || showAll.value) return photos
  return photos.slice(0, 4)
})

useHead({
  title: 'Galeria – Bieszczadzki Ogród',
  meta: [
    { name: 'description', content: 'Zdjęcia z naszego ogrodu, plantacji borówki, Inkubatora Przetwórstwa i codziennej pracy z pasją.' }
  ]
})
</script>

<style scoped>
@media (max-width: 768px) {
  section { padding-left: 1rem; padding-right: 1rem; }
}
@media (max-width: 480px) {
  h1 { font-size: 3.5rem !important; }
}
</style>