<template>
  <section class="py-24 md:py-32 bg-white" id="oferta-sezonowa">
    <!-- Cienki, elegancki pasek na górze -->
    <div class="bg-gradient-to-r from-red-700 to-amber-700 h-1"></div>
    <div class="bg-gradient-to-r from-red-700 to-amber-700 h-px"></div>

    <div class="max-w-5xl mx-auto px-6">
      <!-- Minimalistyczny nagłówek -->
      <div class="text-center mb-20">
        <p class="text-sm md:text-base font-medium text-gray-600 tracking-widest uppercase mb-4">
          Specjalna oferta sezonowa
        </p>
        <h2 class="text-5xl md:text-7xl font-bold text-gray-900">
          Jodły Kaukaskie
        </h2>
        <div class="w-24 h-1 bg-amber-700 mx-auto mt-8"></div>
      </div>

      <div class="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
        <!-- Zdjęcie – czyste, z cienką ramką -->
        <div class="order-2 md:order-1">
          <div class="relative group">
            <div class="absolute inset-0 bg-amber-100 rounded-lg transform rotate-3 group-hover:rotate-6 transition duration-700 -z-10"></div>
            <img 
              src="/choinki.jpg" 
              alt="Jodła kaukaska premium" 
              class="w-full h-auto rounded-lg shadow-xl relative z-10 transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        <!-- Tekst – minimalistyczny, elegancki -->
        <div class="order-1 md:order-2 space-y-8 text-gray-700">
          <p class="text-3xl font-light leading-relaxed">
            Z dumą prezentujemy tegoroczną kolekcję <span class="font-serif italic text-amber-800">jodeł kaukaskich</span> – najpiękniejszych i najbardziej trwałych choinek na rynku.
          </p>

          <div class="space-y-5 text-lg leading-relaxed">
            <p>
              Każde drzewko pochodzi z certyfikowanej plantacji, jest ręcznie selekcjonowane i transportowane w idealnych warunkach, by zachować świeżość i intensywny zapach lasu.
            </p>
            <p>
              Gęste, miękkie igliwie, perfekcyjny pokrój i trwałość nawet do 6 tygodni – to znak rozpoznawczy jodły kaukaskiej.
            </p>
          </div>

          <div class="pt-6">
            <div class="flex items-center gap-4 text-gray-800">
              <span class="text-sm uppercase tracking-wider text-gray-500">Wysokość</span>
              <span class="text-2xl font-medium">1,5 – 3,5 m</span>
            </div>
          </div>

          <div class="pt-8">
            <p class="text-xl text-gray-800 leading-relaxed">
              Zapraszamy do Bieszczadzkiego Ogrodu w Moczarach – wybierz swoją idealną choinkę osobiście.
            </p>
            <p class="text-sm text-gray-500 mt-3">
              Czynne codziennie w godzinach 9:00 – 17:00 · tel. 603 131 190
            </p>
          </div>
        </div>
      </div>

      <!-- Cienki pasek na dole -->
      <div class="mt-24 pt-12 border-t border-gray-200">
        <p class="text-center text-gray-500 text-sm tracking-wider">
          Do zobaczenia wśród choinek
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Optymalizacje mobilne dla Oferty Sezonowej */

@media (max-width: 768px) {
  /* Sekcja */
  section {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  /* Nagłówek */
  section > div > div:first-of-type {
    margin-bottom: 2.5rem !important;
  }

  section h2 {
    font-size: 2.25rem !important;
    line-height: 1.2 !important;
  }

  section > div > div:first-of-type p:first-child {
    font-size: 0.75rem !important;
    margin-bottom: 0.75rem !important;
  }

  /* Grid */
  .grid {
    gap: 2rem !important;
  }

  /* Obrazek - zmniejsz efekty */
  .group .absolute {
    transform: rotate(2deg) !important;
  }

  .group:hover .absolute {
    transform: rotate(3deg) !important;
  }

  .group img {
    border-radius: 0.5rem !important;
  }

  /* Tekst główny */
  .space-y-8 > p:first-child {
    font-size: 1.375rem !important;
    line-height: 1.6 !important;
  }

  /* Akapity */
  .space-y-5 {
    gap: 1rem !important;
  }

  .space-y-5 p {
    font-size: 0.9375rem !important;
    line-height: 1.6 !important;
  }

  /* Wysokość */
  .flex.items-center.gap-4 span:first-child {
    font-size: 0.7rem !important;
  }

  .flex.items-center.gap-4 span:last-child {
    font-size: 1.25rem !important;
  }

  /* Zaproszenie */
  .space-y-8 > div:last-of-type p:first-child {
    font-size: 1.125rem !important;
    line-height: 1.6 !important;
  }

  .space-y-8 > div:last-of-type p:last-child {
    font-size: 0.8125rem !important;
    margin-top: 0.5rem !important;
  }

  /* Dolny pasek */
  .mt-24 {
    margin-top: 3rem !important;
    padding-top: 2rem !important;
  }

  .mt-24 p {
    font-size: 0.8125rem !important;
  }
}

/* Extra small mobile */
@media (max-width: 480px) {
  section {
    padding-top: 2rem !important;
    padding-bottom: 2rem !important;
  }

  section h2 {
    font-size: 2rem !important;
  }

  .space-y-8 > p:first-child {
    font-size: 1.25rem !important;
  }

  .space-y-5 p {
    font-size: 0.875rem !important;
  }
}
</style>