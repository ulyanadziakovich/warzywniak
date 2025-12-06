<template>
  <div class="min-h-screen bg-gradient-to-b from-red-50 via-white to-red-50">

    <!-- Przycisk powrotu – mniejszy na mobile -->
    <NuxtLink
      to="/"
      class="fixed top-4 left-4 z-50 bg-red-600 hover:bg-red-700 text-white px-5 py-3 md:px-7 md:py-4 rounded-full font-bold shadow-2xl hover:scale-105 transition flex items-center gap-2 md:gap-3 text-sm md:text-base"
    >
      <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
      </svg>
      Strona główna
    </NuxtLink>

    <!-- HERO -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0">
      <img
        src="/inkubator2.jpg"
        alt="Inkubator Przetwórstwa Lokalnego"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      <div class="relative text-center px-4 md:px-6 max-w-6xl mx-auto">
        <h1 class="text-3xl md:text-5xl lg:text-7xl font-bold text-white drop-shadow-2xl mb-3 md:mb-6 leading-tight">
          Inkubator<br>
          <span class="text-red-300">Przetwórstwa Lokalnego</span>
        </h1>
        <p class="text-base md:text-2xl lg:text-4xl text-red-100 font-medium drop-shadow-lg mb-6 md:mb-10 px-2 md:px-4 leading-relaxed">
          Przynieś swoje owoce i warzywa – zrobimy z nich coś pysznego!
        </p>

        <a
          href="tel:603131190"
          class="inline-flex flex-col md:flex-row items-center gap-1 md:gap-3 bg-red-600 hover:bg-red-700 text-white px-6 py-4 md:px-12 md:py-6 rounded-full text-base md:text-2xl font-bold shadow-2xl hover:scale-110 transition"
        >
          <span class="text-sm md:text-2xl">Zadzwoń i umów się</span>
          <span class="text-lg md:text-2xl">→ 603 131 190</span>
        </a>
      </div>

      <!-- Strzałka w dół – mniejsza na mobile -->
      <div class="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-10 h-10 md:w-12 md:h-12 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </section>

    <!-- TREŚĆ -->
    <section class="py-16 md:py-20 px-4 md:px-6">
      <div class="max-w-7xl mx-auto">

        <div class="text-center mb-10 md:mb-16 px-2">
          <h2 class="text-2xl md:text-5xl lg:text-6xl font-bold text-red-800 leading-tight mb-3 md:mb-4">
            Masz swoje jabłka, gruszki, maliny, pomidory?
          </h2>
          <p class="text-xl md:text-3xl lg:text-4xl text-red-700 mt-3 md:mt-6 font-medium leading-relaxed">
            Przynieś – zrobimy Ci z nich coś wspaniałego!
          </p>
        </div>

        <!-- Kafelki – 1 kolumna na mobile, 3 na desktopie -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mb-12 md:mb-16">

          <div class="bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-10 text-center hover:shadow-2xl hover:scale-105 transition duration-300">
            <img src="/sokmalina1.jpg" alt="Soki tłoczone" class="w-24 h-24 md:w-36 md:h-36 object-cover rounded-full mx-auto mb-5 md:mb-6 shadow-lg" />
            <h3 class="text-xl md:text-3xl font-bold text-red-700 mb-3 md:mb-4">Soki tłoczone</h3>
            <p class="text-sm md:text-lg text-gray-700 leading-relaxed">
              100% Twoje owoce → czysty, naturalny sok NFC<br>
              <span class="text-xs md:text-base text-gray-600">(bez cukru, bez wody, pasteryzowany)</span>
            </p>
          </div>

          <div class="bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-10 text-center hover:shadow-2xl hover:scale-105 transition duration-300">
            <img src="/truskawka1.jpg" alt="Konfitury i dżemy" class="w-24 h-24 md:w-36 md:h-36 object-cover rounded-full mx-auto mb-5 md:mb-6 shadow-lg" />
            <h3 class="text-xl md:text-3xl font-bold text-red-700 mb-3 md:mb-4">Konfitury i dżemy</h3>
            <p class="text-sm md:text-lg text-gray-700 leading-relaxed">
              Z Twoich malin, truskawek, śliwek, porzeczek – dokładnie tak, jak lubisz
            </p>
          </div>

          <div class="bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-10 text-center hover:shadow-2xl hover:scale-105 transition duration-300">
            <img src="/ogorkicurry1.jpg" alt="Kiszonki i kimchi" class="w-24 h-24 md:w-36 md:h-36 object-cover rounded-full mx-auto mb-5 md:mb-6 shadow-lg" />
            <h3 class="text-xl md:text-3xl font-bold text-red-700 mb-3 md:mb-4">Kiszonki i kimchi</h3>
            <p class="text-sm md:text-lg text-gray-700 leading-relaxed">
              Ogórki, kapusta, buraki, marchew, kimchi – ukisimy wszystko!
            </p>
          </div>

        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Inkubator Przetwórstwa Lokalnego – soki, dżemy, kiszonki z Twoich owoców',
  meta: [
    { name: 'description', content: 'Przynieś swoje jabłka, maliny, ogórki – zrobimy naturalny sok NFC, konfitury, kimchi i inne przetwory. Bieszczady, 603 131 190' }
  ]
})
</script>

<style scoped>
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}
.animate-bounce {
  animation: bounce 2s infinite;
}

/* Optymalizacja dla bardzo małych ekranów (320px - 480px) */
@media (max-width: 480px) {
  /* Dodatkowe dostosowania dla lepszej czytelności */
  img {
    max-width: 100%;
    height: auto;
  }
}
</style>