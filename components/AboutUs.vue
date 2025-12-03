<template>
  <section class="pt-24 md:pt-32 pb-0 bg-white" id="o-nas">
    <!-- Cienkie bursztynowe paski na górze -->
    <div class="bg-gradient-to-r from-amber-700 to-amber-600 h-1"></div>
    <div class="bg-gradient-to-r from-amber-700 to-amber-600 h-px"></div>

    <!-- Główny kontener -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Nagłówek -->
      <div class="text-center mb-16 md:mb-24">
        <p class="text-sm font-medium text-gray-600 tracking-widest uppercase mb-4">Nasza historia</p>
        <h2 class="text-5xl md:text-7xl font-bold text-gray-900">O nas</h2>
        <div class="w-24 h-1 bg-amber-700 mx-auto mt-8"></div>
      </div>

      <!-- Tekst -->
      <div class="max-w-5xl mx-auto px-4 mb-20">
        <div class="bg-white rounded-2xl shadow-xl p-10 md:p-16 border border-gray-100 text-gray-700 text-lg md:text-xl leading-relaxed space-y-10">
          <p class="text-2xl md:text-3xl font-light text-center text-amber-800">
            Cześć, cieszymy się, że jesteś ♡
          </p>
          <p>W 2015 roku kupiliśmy kawałek ziemi po dawnym PGR-ze w Bieszczadach. Marzyło nam się miejsce, w którym będzie pachniało pomidorami prosto z krzaka, a dzieci będą biegać między grządkami.</p>
          <p>Zaczęliśmy od borówki amerykańskiej – dziś mamy prawie 3 hektary krzewów. Obok rosną dereń, śliwy, czarny bez i mnóstwo ziół. Potem powstał wielki ogród warzywny. Sadzimy, pielimy i zbieramy niemal wszystko ręcznie – bo tylko tak warzywa i owoce mają w sobie prawdziwy smak słońca i deszczu.</p>
          <p>W 2018 roku zbudowaliśmy <span class="font-medium text-amber-900">Inkubator Przetwórstwa Lokalnego</span>. Robimy tu kimchi, kiszonki, powidła, soki tłoczone i syropy – powoli, z miłością, często przy otwartych oknach i z muzyką w tle.</p>
          <p>W 2020 roku narodziła się nasza marka – <span class="font-semibold text-amber-900">Bieszczadzki Ogród</span>. Wszystko pochodzi z naszych upraw albo od sąsiadów, którym ufamy jak rodzinie.</p>
          <p class="text-xl md:text-2xl font-light text-center text-amber-800 italic">
            To nie sklep. To nasz dom, który otwieramy przed Wami z szeroko otwartymi ramionami.
          </p>
        </div>
      </div>

      <!-- Zdjęcia Mirek i Kasia -->
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div class="text-center">
            <div class="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-100 hover:border-amber-300 transition">
              <img src="/mirek.jpg" alt="Mirek" class="w-full h-full object-cover" />
            </div>
            <p class="mt-6 text-2xl font-medium text-gray-800">Mirek</p>
            <p class="text-gray-600">założyciel i serce całego ogrodu</p>
          </div>
          <div class="text-center">
            <div class="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-100 hover:border-amber-300 transition">
              <img src="/kasia.jpg" alt="Kasia" class="w-full h-full object-cover" />
            </div>
            <p class="mt-6 text-2xl font-medium text-gray-800">Kasia</p>
            <p class="text-gray-600">mózg operacyjny i królowa przetworów</p>
          </div>
        </div>
        <div class="text-center mt-12 md:mt-0 md:absolute md:inset-x-0 md:top-1/2 md:-translate-y-1/2 md:pointer-events-none">
          <p class="text-xl md:text-2xl text-gray-700">
            
          </p>
        </div>
      </div>

      <!-- Mapa i adres -->
      <div class="mt-24 md:mt-32">
        <p class="text-center text-sm uppercase tracking-widest text-gray-600 mb-8">Gdzie nas znaleźć</p>
        <div class="w-full bg-gray-50 shadow-lg overflow-hidden">
          <iframe src="https://maps.google.com/maps?q=Moczary+39,+38-700+Ustrzyki+Dolne&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="420" style="border:0;" allowfullscreen loading="lazy"></iframe>
        </div>
        <div class="text-center mt-8 space-y-1 text-gray-700">
          <p class="font-medium">Moczary 39</p>
          <p>38-700 Ustrzyki Dolne</p>
          <p class="text-amber-800 font-medium">tel. 603 131 190</p>
        </div>
      </div>

      <!-- Cienki pasek na dole -->
      <div class="mt-20 pt-12 border-t border-gray-200 max-w-7xl mx-auto"></div>
    </div>

    <!-- NOWY: MINIMALISTYCZNY POMARAŃCZOWY PASEK KONTAKTOWY -->
    <div class="bg-gradient-to-r from-amber-600 to-amber-700 py-8 mt-20">
      <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8 text-white text-lg md:text-xl font-medium">
        <div class="flex items-center gap-3">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          <a href="tel:603131190" class="hover:underline">603 131 190</a>
        </div>
        <div class="hidden md:block w-px h-10 bg-white/30"></div>
        <div class="flex items-center gap-3">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          <a href="mailto:info@bieszczadzkiogrod.pl" class="hover:underline">info@bieszczadzkiogrod.pl</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Optymalizacje mobilne dla sekcji O nas */

@media (max-width: 768px) {
  /* Sekcja */
  section {
    padding-top: 3rem !important;
    padding-bottom: 0 !important;
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

  /* Tekst - pudełko */
  .max-w-5xl > div {
    padding: 1.5rem !important;
    margin-bottom: 3rem !important;
  }

  /* Tytuł w pudełku */
  .space-y-10 > p:first-child {
    font-size: 1.375rem !important;
  }

  /* Akapity w pudełku */
  .space-y-10 {
    gap: 1.5rem !important;
  }

  .space-y-10 p {
    font-size: 0.9375rem !important;
    line-height: 1.6 !important;
  }

  /* Ostatni cytat */
  .space-y-10 > p:last-child {
    font-size: 1.125rem !important;
    margin-top: 1rem !important;
  }

  /* Zdjęcia */
  .grid.md\\:grid-cols-2 {
    gap: 2rem !important;
  }

  .grid img {
    border-radius: 1rem !important;
  }

  .grid p {
    font-size: 1.125rem !important;
  }

  /* Mapa */
  .max-w-6xl + div {
    margin-top: 3rem !important;
  }

  .max-w-6xl + div p:first-child {
    font-size: 0.75rem !important;
    margin-bottom: 1.5rem !important;
  }

  .max-w-6xl + div iframe {
    height: 280px !important;
  }

  /* Adres pod mapą */
  .max-w-6xl + div .text-center {
    margin-top: 1.5rem !important;
  }

  .max-w-6xl + div .text-center p {
    font-size: 0.9375rem !important;
  }

  /* Pasek kontaktowy na dole */
  .bg-gradient-to-r.from-amber-600 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .bg-gradient-to-r.from-amber-600 .flex {
    gap: 1.5rem !important;
    font-size: 0.9375rem !important;
  }

  .bg-gradient-to-r.from-amber-600 svg {
    width: 1.25rem !important;
    height: 1.25rem !important;
  }
}

/* Extra small mobile */
@media (max-width: 480px) {
  section {
    padding-top: 2rem !important;
  }

  section h2 {
    font-size: 2rem !important;
  }

  .max-w-5xl > div {
    padding: 1.25rem !important;
  }

  .space-y-10 > p:first-child {
    font-size: 1.25rem !important;
  }

  .space-y-10 p {
    font-size: 0.875rem !important;
  }

  .space-y-10 > p:last-child {
    font-size: 1rem !important;
  }

  .max-w-6xl + div iframe {
    height: 240px !important;
  }

  .bg-gradient-to-r.from-amber-600 .flex {
    font-size: 0.875rem !important;
  }
}
</style>