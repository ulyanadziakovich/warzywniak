<template>
  <div class="bg-gradient-to-r from-emerald-50 via-amber-50 to-green-50 border-b border-emerald-200 shadow-sm">
    <div class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex items-center gap-6">

        <!-- Spacer dla logo (żeby pole wyszukiwania było po prawej) -->
        <div class="w-48"></div>

        <!-- Pole wyszukiwania (przesunięte w prawo) -->
        <div class="flex-1 max-w-2xl">
          <div class="relative">
            <input
              type="text"
              placeholder="Szukaj produktów..."
              class="w-full px-6 py-3 pl-12 rounded-full border-2 border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition bg-white shadow-sm"
            />
            <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <!-- Ikony social media i akcje -->
        <div class="flex items-center gap-3">
          <!-- Facebook -->
          <a href="https://www.facebook.com/BieszczadzkiOgrod/?ref=embed_page#" target="_blank" rel="noopener" class="p-2.5 rounded-full bg-white border-2 border-emerald-200 hover:border-blue-500 hover:bg-blue-50 transition group">
            <svg class="w-6 h-6 text-emerald-600 group-hover:text-blue-600 transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          <!-- Serduszko (ulubione) -->
          <button class="relative p-2.5 rounded-full bg-white border-2 border-emerald-200 hover:border-red-500 hover:bg-red-50 transition group">
            <svg class="w-6 h-6 text-emerald-600 group-hover:text-red-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>

          <!-- Koszyk -->
          <button class="relative p-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 transition group shadow-md">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>
