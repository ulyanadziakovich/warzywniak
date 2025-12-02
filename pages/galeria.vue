<template>
  <div class="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">

    <!-- Przycisk "Strona główna" -->
    <NuxtLink to="/" class="fixed top-6 left-6 z-50 bg-amber-600 hover:bg-amber-700 text-white px-7 py-4 rounded-full font-bold shadow-2xl hover:scale-105 transition flex items-center gap-3">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
      </svg>
      Strona główna
    </NuxtLink>

    <!-- HERO -->
    <section class="relative py-24 md:py-32 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-amber-100 via-amber-50 to-amber-50 opacity-70"></div>

      <div class="relative max-w-7xl mx-auto px-6 text-center">
        <h1 class="text-6xl md:text-8xl font-bold text-amber-900 mb-6">
          Galeria
        </h1>
        <p class="text-2xl md:text-4xl text-amber-700 font-medium">
          Nasz ogród, nasze ręce, nasze serce
        </p>
        <div class="flex justify-center mt-8">
          <div class="w-32 h-1 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full"></div>
        </div>
      </div>
    </section>

    <!-- GALERIA -->
    <section class="py-16 md:py-24 px-6">
      <div class="max-w-7xl mx-auto">

        <div class="text-center mb-16">
          <p class="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Zobacz, jak wygląda nasze miejsce na co dzień – od porannej rosy na borówkach, przez pracę w Inkubatorze, po uśmiechy podczas zbiorów.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          
          <div class="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <img src="/lesko.jpg" alt="Ogród warzywny" class="w-full h-full object-cover aspect-square" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
              <p class="text-white text-2xl font-bold">Targi w Lesko</p>
            </div>
          </div>

          <div class="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <img src="/swietogrzyba.jpg" alt="swietogrzyba" class="w-full h-full object-cover aspect-square" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
              <p class="text-white text-2xl font-bold">Swieto Grzyba</p>
            </div>
          </div>

          <div class="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <img src="/kaczki.jpg" alt="Inkubator" class="w-full h-full object-cover aspect-square" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
              <p class="text-white text-2xl font-bold">Nasze kaczuszki</p>
            </div>
          </div>

          <div class="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <img src="/plantacja.jpg" alt="Zbiory" class="w-full h-full object-cover aspect-square" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
              <p class="text-white text-2xl font-bold">Ręczne zbiory</p>
            </div>
          </div>

          <div class="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <img src="/swiecy.jpg" alt="Przetwory" class="w-full h-full object-cover aspect-square" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
              <p class="text-white text-2xl font-bold">Reczne wykonanie</p>
            </div>
          </div>

          <div class="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <img src="/borowka.jpg" alt="Ekipa" class="w-full h-full object-cover aspect-square" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
              <p class="text-white text-2xl font-bold">Plantacja borówki</p>
            </div>
          </div>

        </div>

        <div class="text-center mt-20">
          <p class="text-2xl md:text-3xl text-amber-800 font-medium">
            To my. To nasz dom. To nasze Bieszczady.
          </p>
          <p class="text-lg text-gray-600 mt-6 italic">
            Wkrótce więcej zdjęć – obiecujemy!
          </p>
        </div>

      </div>
    </section>

    <!-- PASEK NA DOLE USUNIĘTY -->

  </div>
</template>

<script setup>
useHead({
  title: 'Galeria – Bieszczadzki Ogród',
  meta: [
    { name: 'description', content: 'Zdjęcia z naszego ogrodu, plantacji borówki, Inkubatora Przetwórstwa i codziennej pracy z pasją.' }
  ]
})
</script>