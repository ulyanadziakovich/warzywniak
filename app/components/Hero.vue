<template>
  <HeroCarousel />
  <section class="py-12 md:py-20 bg-amber-50">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-5 gap-8" :class="{ 'max-h-[1000px] overflow-hidden': !showAll }">
        <!-- Kafelek 1 -->
        <div class="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col">
          <div class="absolute inset-0 opacity-30 pointer-events-none">
            <img src="https://www.transparenttextures.com/patterns/wood-pattern.png" class="w-full h-full object-cover" alt="drewniane tło" />
          </div>
          <div class="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 flex items-center justify-center w-full">
            <span class="text-gray-500 text-sm">tutaj zdjęcie</span>
          </div>
          <div class="p-4 flex flex-col flex-1">
            <h3 class="text-lg font-bold text-emerald-800 mb-2">Sałatka z Gyrosem</h3>
            <p class="text-amber-700 font-semibold mb-3">już od 3,99 zł/kg</p>
            <div class="mt-auto flex gap-2">
              <button class="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition">
                Do koszyka
              </button>
              <button class="p-2 bg-white border-2 border-emerald-200 hover:border-red-500 hover:bg-red-50 rounded-lg transition group">
                <svg class="w-5 h-5 text-emerald-600 group-hover:text-red-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Kafelek 2 -->
        <div class="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col">
          <div class="absolute inset-0 opacity-25 pointer-events-none">
            <img src="https://www.transparenttextures.com/patterns/wood-pattern.png" class="w-full h-full object-cover" alt="" />
          </div>
          <div class="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 flex items-center justify-center">
            <span class="text-gray-500 text-sm">Ogórki kiszone</span>
          </div>
          <div class="p-4 flex flex-col flex-1">
            <h3 class="text-lg font-bold text-emerald-800 mb-2">Pomidory malinowe</h3>
            <p class="text-amber-700 font-semibold mb-3">już od 3,99 zł/kg</p>
            <div class="mt-auto flex gap-2">
              <button class="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition">
                Do koszyka
              </button>
              <button class="p-2 bg-white border-2 border-emerald-200 hover:border-red-500 hover:bg-red-50 rounded-lg transition group">
                <svg class="w-5 h-5 text-emerald-600 group-hover:text-red-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Kafelek 3 -->
        <div class="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col">
          <div class="absolute inset-0 opacity-25 pointer-events-none">
            <img src="https://www.transparenttextures.com/patterns/wood-pattern.png" class="w-full h-full object-cover" alt="" />
          </div>
          <div class="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 flex items-center justify-center">
            <span class="text-gray-500 text-sm">tutaj zdjęcie</span>
          </div>
          <div class="p-4 flex flex-col flex-1">
            <h3 class="text-lg font-bold text-emerald-800 mb-2">Buraczki z papryką</h3>
            <p class="text-amber-700 font-semibold mb-3">już od 3,99 zł/kg</p>
            <div class="mt-auto flex gap-2">
              <button class="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition">
                Do koszyka
              </button>
              <button class="p-2 bg-white border-2 border-emerald-200 hover:border-red-500 hover:bg-red-50 rounded-lg transition group">
                <svg class="w-5 h-5 text-emerald-600 group-hover:text-red-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Kafelek 4 -->
        <div class="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col">
          <div class="absolute inset-0 opacity-25 pointer-events-none">
            <img src="https://www.transparenttextures.com/patterns/wood-pattern.png" class="w-full h-full object-cover" alt="" />
          </div>
          <div class="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 flex items-center justify-center">
            <span class="text-gray-500 text-sm">tutaj zdjęcie</span>
          </div>
          <div class="p-4 flex flex-col flex-1">
            <h3 class="text-lg font-bold text-emerald-800 mb-2">Papryka</h3>
            <p class="text-amber-700 font-semibold mb-3">już od 3,99 zł/kg</p>
            <div class="mt-auto flex gap-2">
              <button class="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition">
                Do koszyka
              </button>
              <button class="p-2 bg-white border-2 border-emerald-200 hover:border-red-500 hover:bg-red-50 rounded-lg transition group">
                <svg class="w-5 h-5 text-emerald-600 group-hover:text-red-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Kafelek 5 -->
        <div class="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col">
          <div class="absolute inset-0 opacity-25 pointer-events-none">
            <img src="https://www.transparenttextures.com/patterns/wood-pattern.png" class="w-full h-full object-cover" alt="" />
          </div>
          <div class="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 flex items-center justify-center">
            <span class="text-gray-500 text-sm">tutaj zdjęcie</span>
          </div>
          <div class="p-4 flex flex-col flex-1">
            <h3 class="text-lg font-bold text-emerald-800 mb-2">Konfitura z Jagody Kamczackiej</h3>
            <p class="text-amber-700 font-semibold mb-3">już od 3,99 zł/kg</p>
            <div class="mt-auto flex gap-2">
              <button class="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition">
                Do koszyka
              </button>
              <button class="p-2 bg-white border-2 border-emerald-200 hover:border-red-500 hover:bg-red-50 rounded-lg transition group">
                <svg class="w-5 h-5 text-emerald-600 group-hover:text-red-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Kafelek 6 -->
        <div class="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col">
          <div class="absolute inset-0 opacity-25 pointer-events-none">
            <img src="https://www.transparenttextures.com/patterns/wood-pattern.png" class="w-full h-full object-cover" alt="" />
          </div>
          <div class="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 flex items-center justify-center">
            <span class="text-gray-500 text-sm">tutaj zdjęcie</span>
          </div>
          <div class="p-4 flex flex-col flex-1">
            <h3 class="text-lg font-bold text-emerald-800 mb-2">Sałata rzymska</h3>
            <p class="text-amber-700 font-semibold mb-3">już od 3,99 zł/kg</p>
            <div class="mt-auto flex gap-2">
              <button class="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition">
                Do koszyka
              </button>
              <button class="p-2 bg-white border-2 border-emerald-200 hover:border-red-500 hover:bg-red-50 rounded-lg transition group">
                <svg class="w-5 h-5 text-emerald-600 group-hover:text-red-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Kafelek 7 -->
        <div class="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col">
          <div class="absolute inset-0 opacity-25 pointer-events-none">
            <img src="https://www.transparenttextures.com/patterns/wood-pattern.png" class="w-full h-full object-cover" alt="" />
          </div>
          <div class="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 flex items-center justify-center">
            <span class="text-gray-500 text-sm">tutaj zdjęcie</span>
          </div>
          <div class="p-4 flex flex-col flex-1">
            <h3 class="text-lg font-bold text-emerald-800 mb-2">Powidła śliwkowe</h3>
            <p class="text-amber-700 font-semibold mb-3">już od 3,99 zł/kg</p>
            <div class="mt-auto flex gap-2">
              <button class="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition">
                Do koszyka
              </button>
              <button class="p-2 bg-white border-2 border-emerald-200 hover:border-red-500 hover:bg-red-50 rounded-lg transition group">
                <svg class="w-5 h-5 text-emerald-600 group-hover:text-red-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Kafelek 8 -->
        <div class="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col">
          <div class="absolute inset-0 opacity-25 pointer-events-none">
            <img src="https://www.transparenttextures.com/patterns/wood-pattern.png" class="w-full h-full object-cover" alt="" />
          </div>
          <div class="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 flex items-center justify-center">
            <span class="text-gray-500 text-sm">tutaj zdjęcie</span>
          </div>
          <div class="p-4 flex flex-col flex-1">
            <h3 class="text-lg font-bold text-emerald-800 mb-2">Dzem truskawkowy</h3>
            <p class="text-amber-700 font-semibold mb-3">już od 3,99 zł/kg</p>
            <div class="mt-auto flex gap-2">
              <button class="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition">
                Do koszyka
              </button>
              <button class="p-2 bg-white border-2 border-emerald-200 hover:border-red-500 hover:bg-red-50 rounded-lg transition group">
                <svg class="w-5 h-5 text-emerald-600 group-hover:text-red-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Kafelek 9 -->
        <div class="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col">
          <div class="absolute inset-0 opacity-25 pointer-events-none">
            <img src="https://www.transparenttextures.com/patterns/wood-pattern.png" class="w-full h-full object-cover" alt="" />
          </div>
          <div class="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 flex items-center justify-center">
            <span class="text-gray-500 text-sm">tutaj zdjęcie</span>
          </div>
          <div class="p-4 flex flex-col flex-1">
            <h3 class="text-lg font-bold text-emerald-800 mb-2">Konfitura Jagoda Kamczacka-Truskawka</h3>
            <p class="text-amber-700 font-semibold mb-3">już od 3,99 zł/kg</p>
            <div class="mt-auto flex gap-2">
              <button class="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition">
                Do koszyka
              </button>
              <button class="p-2 bg-white border-2 border-emerald-200 hover:border-red-500 hover:bg-red-50 rounded-lg transition group">
                <svg class="w-5 h-5 text-emerald-600 group-hover:text-red-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Kafelek 10 -->
        <div class="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col">
          <div class="absolute inset-0 opacity-25 pointer-events-none">
            <img src="https://www.transparenttextures.com/patterns/wood-pattern.png" class="w-full h-full object-cover" alt="" />
          </div>
          <div class="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 flex items-center justify-center">
            <span class="text-gray-500 text-sm">tutaj zdjęcie</span>
          </div>
          <div class="p-4 flex flex-col flex-1">
            <h3 class="text-lg font-bold text-emerald-800 mb-2">Olej</h3>
            <p class="text-amber-700 font-semibold mb-3">już od 3,99 zł/kg</p>
            <div class="mt-auto flex gap-2">
              <button class="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition">
                Do koszyka
              </button>
              <button class="p-2 bg-white border-2 border-emerald-200 hover:border-red-500 hover:bg-red-50 rounded-lg transition group">
                <svg class="w-5 h-5 text-emerald-600 group-hover:text-red-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Kafelek 11 -->
        <div v-show="showAll" class="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col">
          <div class="absolute inset-0 opacity-25 pointer-events-none">
            <img src="https://www.transparenttextures.com/patterns/wood-pattern.png" class="w-full h-full object-cover" alt="" />
          </div>
          <div class="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 flex items-center justify-center">
            <span class="text-gray-500 text-sm">tutaj zdjęcie</span>
          </div>
          <div class="p-4 flex flex-col flex-1">
            <h3 class="text-lg font-bold text-emerald-800 mb-2">Cukinia</h3>
            <p class="text-amber-700 font-semibold mb-3">już od 4,99 zł/kg</p>
            <div class="mt-auto flex gap-2">
              <button class="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition">
                Do koszyka
              </button>
              <button class="p-2 bg-white border-2 border-emerald-200 hover:border-red-500 hover:bg-red-50 rounded-lg transition group">
                <svg class="w-5 h-5 text-emerald-600 group-hover:text-red-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Kafelek 12 -->
        <div v-show="showAll" class="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col">
          <div class="absolute inset-0 opacity-25 pointer-events-none">
            <img src="https://www.transparenttextures.com/patterns/wood-pattern.png" class="w-full h-full object-cover" alt="" />
          </div>
          <div class="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 flex items-center justify-center">
            <span class="text-gray-500 text-sm">tutaj zdjęcie</span>
          </div>
          <div class="p-4 flex flex-col flex-1">
            <h3 class="text-lg font-bold text-emerald-800 mb-2">Bakłażan</h3>
            <p class="text-amber-700 font-semibold mb-3">już od 5,99 zł/kg</p>
            <div class="mt-auto flex gap-2">
              <button class="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition">
                Do koszyka
              </button>
              <button class="p-2 bg-white border-2 border-emerald-200 hover:border-red-500 hover:bg-red-50 rounded-lg transition group">
                <svg class="w-5 h-5 text-emerald-600 group-hover:text-red-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Kafelek 13 -->
        <div v-show="showAll" class="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col">
          <div class="absolute inset-0 opacity-25 pointer-events-none">
            <img src="https://www.transparenttextures.com/patterns/wood-pattern.png" class="w-full h-full object-cover" alt="" />
          </div>
          <div class="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 flex items-center justify-center">
            <span class="text-gray-500 text-sm">tutaj zdjęcie</span>
          </div>
          <div class="p-4 flex flex-col flex-1">
            <h3 class="text-lg font-bold text-emerald-800 mb-2">Marchew</h3>
            <p class="text-amber-700 font-semibold mb-3">już od 2,99 zł/kg</p>
            <div class="mt-auto flex gap-2">
              <button class="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition">
                Do koszyka
              </button>
              <button class="p-2 bg-white border-2 border-emerald-200 hover:border-red-500 hover:bg-red-50 rounded-lg transition group">
                <svg class="w-5 h-5 text-emerald-600 group-hover:text-red-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Kafelek 14 -->
        <div v-show="showAll" class="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col">
          <div class="absolute inset-0 opacity-25 pointer-events-none">
            <img src="https://www.transparenttextures.com/patterns/wood-pattern.png" class="w-full h-full object-cover" alt="" />
          </div>
          <div class="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 flex items-center justify-center">
            <span class="text-gray-500 text-sm">tutaj zdjęcie</span>
          </div>
          <div class="p-4 flex flex-col flex-1">
            <h3 class="text-lg font-bold text-emerald-800 mb-2">Kalarepa</h3>
            <p class="text-amber-700 font-semibold mb-3">już od 3,49 zł/kg</p>
            <div class="mt-auto flex gap-2">
              <button class="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition">
                Do koszyka
              </button>
              <button class="p-2 bg-white border-2 border-emerald-200 hover:border-red-500 hover:bg-red-50 rounded-lg transition group">
                <svg class="w-5 h-5 text-emerald-600 group-hover:text-red-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Kafelek 15 -->
        <div v-show="showAll" class="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col">
          <div class="absolute inset-0 opacity-25 pointer-events-none">
            <img src="https://www.transparenttextures.com/patterns/wood-pattern.png" class="w-full h-full object-cover" alt="" />
          </div>
          <div class="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 flex items-center justify-center">
            <span class="text-gray-500 text-sm">tutaj zdjęcie</span>
          </div>
          <div class="p-4 flex flex-col flex-1">
            <h3 class="text-lg font-bold text-emerald-800 mb-2">Brokuły</h3>
            <p class="text-amber-700 font-semibold mb-3">już od 6,99 zł/kg</p>
            <div class="mt-auto flex gap-2">
              <button class="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition">
                Do koszyka
              </button>
              <button class="p-2 bg-white border-2 border-emerald-200 hover:border-red-500 hover:bg-red-50 rounded-lg transition group">
                <svg class="w-5 h-5 text-emerald-600 group-hover:text-red-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Kafelek 16 -->
        <div v-show="showAll" class="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col">
          <div class="absolute inset-0 opacity-25 pointer-events-none">
            <img src="https://www.transparenttextures.com/patterns/wood-pattern.png" class="w-full h-full object-cover" alt="" />
          </div>
          <div class="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 flex items-center justify-center">
            <span class="text-gray-500 text-sm">tutaj zdjęcie</span>
          </div>
          <div class="p-4 flex flex-col flex-1">
            <h3 class="text-lg font-bold text-emerald-800 mb-2">Kapusta kiszona</h3>
            <p class="text-amber-700 font-semibold mb-3">już od 4,49 zł/kg</p>
            <div class="mt-auto flex gap-2">
              <button class="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition">
                Do koszyka
              </button>
              <button class="p-2 bg-white border-2 border-emerald-200 hover:border-red-500 hover:bg-red-50 rounded-lg transition group">
                <svg class="w-5 h-5 text-emerald-600 group-hover:text-red-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Kafelek 17 -->
        <div v-show="showAll" class="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col">
          <div class="absolute inset-0 opacity-25 pointer-events-none">
            <img src="https://www.transparenttextures.com/patterns/wood-pattern.png" class="w-full h-full object-cover" alt="" />
          </div>
          <div class="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 flex items-center justify-center">
            <span class="text-gray-500 text-sm">tutaj zdjęcie</span>
          </div>
          <div class="p-4 flex flex-col flex-1">
            <h3 class="text-lg font-bold text-emerald-800 mb-2">Miód lipowy</h3>
            <p class="text-amber-700 font-semibold mb-3">już od 25,99 zł/kg</p>
            <div class="mt-auto flex gap-2">
              <button class="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition">
                Do koszyka
              </button>
              <button class="p-2 bg-white border-2 border-emerald-200 hover:border-red-500 hover:bg-red-50 rounded-lg transition group">
                <svg class="w-5 h-5 text-emerald-600 group-hover:text-red-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Kafelek 18 -->
        <div v-show="showAll" class="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col">
          <div class="absolute inset-0 opacity-25 pointer-events-none">
            <img src="https://www.transparenttextures.com/patterns/wood-pattern.png" class="w-full h-full object-cover" alt="" />
          </div>
          <div class="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 flex items-center justify-center">
            <span class="text-gray-500 text-sm">tutaj zdjęcie</span>
          </div>
          <div class="p-4 flex flex-col flex-1">
            <h3 class="text-lg font-bold text-emerald-800 mb-2">Sok jabłkowy</h3>
            <p class="text-amber-700 font-semibold mb-3">już od 8,99 zł/l</p>
            <div class="mt-auto flex gap-2">
              <button class="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition">
                Do koszyka
              </button>
              <button class="p-2 bg-white border-2 border-emerald-200 hover:border-red-500 hover:bg-red-50 rounded-lg transition group">
                <svg class="w-5 h-5 text-emerald-600 group-hover:text-red-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Kafelek 19 -->
        <div v-show="showAll" class="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col">
          <div class="absolute inset-0 opacity-25 pointer-events-none">
            <img src="https://www.transparenttextures.com/patterns/wood-pattern.png" class="w-full h-full object-cover" alt="" />
          </div>
          <div class="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 flex items-center justify-center">
            <span class="text-gray-500 text-sm">tutaj zdjęcie</span>
          </div>
          <div class="p-4 flex flex-col flex-1">
            <h3 class="text-lg font-bold text-emerald-800 mb-2">Grzyby suszone</h3>
            <p class="text-amber-700 font-semibold mb-3">już od 45,99 zł/kg</p>
            <div class="mt-auto flex gap-2">
              <button class="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition">
                Do koszyka
              </button>
              <button class="p-2 bg-white border-2 border-emerald-200 hover:border-red-500 hover:bg-red-50 rounded-lg transition group">
                <svg class="w-5 h-5 text-emerald-600 group-hover:text-red-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Kafelek 20 -->
        <div v-show="showAll" class="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col">
          <div class="absolute inset-0 opacity-25 pointer-events-none">
            <img src="https://www.transparenttextures.com/patterns/wood-pattern.png" class="w-full h-full object-cover" alt="" />
          </div>
          <div class="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed border-gray-400 flex items-center justify-center">
            <span class="text-gray-500 text-sm">tutaj zdjęcie</span>
          </div>
          <div class="p-4 flex flex-col flex-1">
            <h3 class="text-lg font-bold text-emerald-800 mb-2">Kompot malinowy</h3>
            <p class="text-amber-700 font-semibold mb-3">już od 12,99 zł/l</p>
            <div class="mt-auto flex gap-2">
              <button class="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition">
                Do koszyka
              </button>
              <button class="p-2 bg-white border-2 border-emerald-200 hover:border-red-500 hover:bg-red-50 rounded-lg transition group">
                <svg class="w-5 h-5 text-emerald-600 group-hover:text-red-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>

      <!-- Przycisk Pokaż wszystkie towary -->
      <div class="text-center mt-12">
        <button
          @click="showAll = !showAll"
          class="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
        >
          {{ showAll ? 'Pokaż mniej' : 'Pokaż wszystkie towary' }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import HeroCarousel from './HeroCarousel.vue'

const showAll = ref(false)
</script>

<style scoped>
.section-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  text-align: center;
}

/* Zero scrolla w bok */
html, body, #__nuxt, #__layout {
  overflow-x: hidden !important;
  max-width: 100vw;
}
</style>