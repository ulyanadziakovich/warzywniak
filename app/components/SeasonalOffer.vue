<template>
  <section class="relative py-16 bg-gradient-to-br from-emerald-50 via-amber-50 to-green-50 overflow-hidden" id="oferta-sezonowa">
    <!-- Duży pasek "Specjalna Oferta" na górze -->
    <div class="absolute top-0 left-0 right-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600 py-4 shadow-2xl z-10">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex items-center justify-center gap-4">
          <span class="text-4xl animate-pulse">🎄</span>
          <h3 class="text-3xl md:text-4xl font-black text-white uppercase tracking-widest drop-shadow-lg">
            ⭐ Specjalna Oferta Świąteczna ⭐
          </h3>
          <span class="text-4xl animate-pulse">🎄</span>
        </div>
      </div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6 pt-24">
      <!-- Wyrazisty nagłówek -->
      <div class="text-center mb-12">
        <h2 class="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-green-600 to-emerald-800 mb-4 leading-tight drop-shadow-xl">
          Jodły Kaukaskie
        </h2>
        <p class="text-3xl font-bold text-red-600 drop-shadow-md">
          Prawdziwy zapach Świąt już czeka!
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 items-center">
        <!-- Zdjęcie choinki -->
        <div class="order-2 md:order-1">
          <div class="rounded-2xl overflow-hidden shadow-2xl border-4 border-emerald-200 hover:border-emerald-400 transition-all duration-300 transform hover:scale-105">
            <img src="/choinki.jpg" alt="Piękne jodły kaukaskie na Święta" class="w-full h-full object-cover" />
          </div>
        </div>

        <!-- Tekst -->
        <div class="order-1 md:order-2 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border-2 border-emerald-100">
          <p class="text-2xl text-emerald-700 font-semibold text-center mb-6">♡ Kochani!!</p>

          <div class="space-y-4 text-gray-800 leading-relaxed">
            <p>
              Z wielką radością meldujemy – mamy już piękne <span class="font-semibold text-emerald-700">jodły kaukaskie</span> na Święta! ♡
            </p>

            <p>
              Pierwsze transporty prosto z plantacji właśnie do nas dotarły i pachną lasem tak mocno, że aż się uśmiechamy na samą myśl o Waszych domach pełnych tego zapachu.
            </p>

            <p>
              W ofercie tylko <span class="font-semibold text-emerald-700">jodła kaukaska</span> – najpiękniejsza, najtrwalsza i najbardziej „świąteczna". Pochodzi z najlepszych plantacji i z uprawy naturalnej – to Ty decydujesz, które drzewko pokocha Twoja rodzina.
            </p>

            <p class="font-semibold text-emerald-800">
              Wysokość: od 1,5 m do około 3,5 m – mamy rozmiar idealny do każdego domu i mieszkania.
            </p>

            <p class="text-lg font-semibold text-emerald-700 mt-6">
              Zapraszamy serdecznie do Bieszczadzkiego Ogrodu w Moczarach – tu wybierzesz, dotkniesz, powąchasz i zabierzesz ze sobą kawałek prawdziwego, żywego Bożego Narodzenia ♡
            </p>

            <p class="text-center italic text-amber-700 mt-4">
              Czekamy na Was z gorącą herbatą i uśmiechem!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>