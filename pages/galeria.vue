<template>
  <div>
    <section class="relative py-20 bg-gradient-to-br from-emerald-50 via-amber-50 to-green-50 overflow-hidden">
      <!-- Delikatne tło z wzorami -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-10 left-10 text-8xl text-emerald-600">📸</div>
        <div class="absolute top-40 right-20 text-6xl text-amber-600">🌻</div>
        <div class="absolute bottom-20 left-1/4 text-7xl text-green-600">🌾</div>
        <div class="absolute top-1/3 right-1/3 text-5xl text-emerald-500">🥬</div>
        <div class="absolute bottom-40 right-10 text-8xl text-green-500">🌱</div>
      </div>

      <div class="relative max-w-7xl mx-auto px-6">
        <h1 class="text-6xl font-bold text-emerald-800 mb-8 text-center">Galeria</h1>

        <div class="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border-2 border-emerald-100">
          <p class="text-2xl text-emerald-700 font-semibold text-center mb-8">
            Nasze miejsce w obiektywie ♡
          </p>

          <p class="text-lg text-gray-800 leading-relaxed text-center mb-12">
            Zobacz, jak wygląda nasz ogród, plantacje i miejsce, które kochamy. Każde zdjęcie opowiada historię naszej pasji do uprawy i przetwórstwa lokalnego.
          </p>

          <!-- Siatka zdjęć - placeholdery -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Zdjęcie 1 -->
            <div class="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div class="aspect-square bg-gradient-to-br from-emerald-200 to-green-300 border-2 border-dashed border-emerald-400 flex items-center justify-center">
                <span class="text-emerald-600 text-lg font-semibold">Ogród warzywny</span>
              </div>
            </div>

            <!-- Zdjęcie 2 -->
            <div class="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div class="aspect-square bg-gradient-to-br from-amber-200 to-yellow-300 border-2 border-dashed border-amber-400 flex items-center justify-center">
                <span class="text-amber-700 text-lg font-semibold">Plantacja borówek</span>
              </div>
            </div>

            <!-- Zdjęcie 3 -->
            <div class="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div class="aspect-square bg-gradient-to-br from-green-200 to-emerald-300 border-2 border-dashed border-green-400 flex items-center justify-center">
                <span class="text-green-700 text-lg font-semibold">Inkubator</span>
              </div>
            </div>

            <!-- Zdjęcie 4 -->
            <div class="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div class="aspect-square bg-gradient-to-br from-emerald-200 to-green-300 border-2 border-dashed border-emerald-400 flex items-center justify-center">
                <span class="text-emerald-600 text-lg font-semibold">Zbiory</span>
              </div>
            </div>

            <!-- Zdjęcie 5 -->
            <div class="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div class="aspect-square bg-gradient-to-br from-amber-200 to-yellow-300 border-2 border-dashed border-amber-400 flex items-center justify-center">
                <span class="text-amber-700 text-lg font-semibold">Przetwory</span>
              </div>
            </div>

            <!-- Zdjęcie 6 -->
            <div class="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div class="aspect-square bg-gradient-to-br from-green-200 to-emerald-300 border-2 border-dashed border-green-400 flex items-center justify-center">
                <span class="text-green-700 text-lg font-semibold">Nasza ekipa</span>
              </div>
            </div>
          </div>

          <p class="text-lg text-gray-600 italic text-center mt-12">
            Wkrótce dodamy więcej zdjęć z naszego ogrodu i codziennej pracy!
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Galeria - EkoWarzywniak',
  meta: [
    { name: 'description', content: 'Zobacz zdjęcia z naszego ogrodu, plantacji i Inkubatora Przetwórstwa Lokalnego.' }
  ]
})
</script>
