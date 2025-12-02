<template>
  <div class="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">

    <!-- Przycisk powrotu – zostawiłem tylko delikatny bursztyn, bez pomarańczowego cienia -->
    <NuxtLink 
      to="/" 
      class="fixed top-6 fixed top-6 left-6 z-50 bg-amber-600 hover:bg-amber-700 text-white px-7 py-4 rounded-full font-bold shadow-2xl hover:scale-105 transition flex items-center gap-3"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
      </svg>
      Strona główna
    </NuxtLink>

    <!-- HERO – bez pomarańczowego filtra -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <img 
        src="/inkubator2.jpg" 
        alt="Inkubator Przetwórstwa Lokalnego" 
        class="absolute inset-0 w-full h-full object-cover"
      />
      <!-- Tylko czyste przyciemnienie od dołu – zero pomarańczu -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      <div class="relative text-center px-6 max-w-6xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl mb-6 leading-tight">
          Inkubator<br>
          <span class="text-amber-300">Przetwórstwa Lokalnego</span>
        </h1>
        <p class="text-2xl md:text-4xl text-amber-100 font-medium drop-shadow-lg mb-10">
          Przynieś swoje owoce i warzywa – zrobimy z nich coś pysznego!
        </p>

        <a 
          href="tel:603131190" 
          class="inline-flex items-center gap-4 bg-amber-600 hover:bg-amber-700 text-white px-12 py-6 rounded-full text-2xl font-bold shadow-2xl hover:scale-110 transition"
        >
          Zadzwoń i umów się → 603 131 190
        </a>
      </div>

      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-12 h-12 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </section>

    <!-- TREŚĆ – czysto, bez pomarańczowych cieni i filtrów -->
    <section class="py-20 px-6 bg-transparent">
      <div class="max-w-7xl mx-auto">

        <div class="text-center mb-16">
          <h2 class="text-5xl md:text-6xl font-bold text-amber-800">
            Masz swoje jabłka, gruszki, maliny, pomidory?
          </h2>
          <p class="text-3xl md:text-4xl text-amber-700 mt-6 font-medium">
            Przynieś – zrobimy Ci z nich coś wspaniałego!
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-12 mb-20">
          <div class="bg-white rounded-3xl shadow-2xl p-10 text-center hover:shadow-2xl hover:scale-105 transition duration-300">
            <img src="/sokmalina1.jpg" alt="Soki tłoczone" class="w-36 h-36 object-cover rounded-full mx-auto mb-6" />
            <h3 class="text-3xl font-bold text-amber-700 mb-4">Soki tłoczone</h3>
            <p class="text-lg text-gray-700">100% Twoje owoce → czysty, naturalny sok NFC<br>(bez cukru, bez wody, pasteryzowany)</p>
          </div>

          <div class="bg-white rounded-3xl shadow-2xl p-10 text-center hover:shadow-2xl hover:scale-105 transition duration-300">
            <img src="/truskawka1.jpg" alt="Konfitury i dżemy" class="w-36 h-36 object-cover rounded-full mx-auto mb-6" />
            <h3 class="text-3xl font-bold text-amber-700 mb-4">Konfitury i dżemy</h3>
            <p class="text-lg text-gray-700">Z Twoich malin, truskawek, śliwek, porzeczek – dokładnie tak, jak lubisz</p>
          </div>

          <div class="bg-white rounded-3xl shadow-2xl p-10 text-center hover:shadow-2xl hover:scale-105 transition duration-300">
            <img src="/ogorkicurry1.jpg" alt="Kiszonki i kimchi" class="w-36 h-36 object-cover rounded-full mx-auto mb-6" />
            <h3 class="text-3xl font-bold text-amber-700 mb-4">Kiszonki i kimchi</h3>
            <p class="text-lg text-gray-700">Ogórki, kapusta, buraki, marchew, kimchi – ukisimy wszystko!</p>
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
  50% { transform: translateY(-20px); }
}
.animate-bounce { animation: bounce 2s infinite; }
</style>