<!-- components/Navbar.vue -->
<template>
  <nav class="fixed top-0 left-0 right-0 z-50 shadow-2xl backdrop-blur-sm">
    <!-- Lekkie drewniane tło -->
    <div class="absolute inset-0 opacity-20 pointer-events-none">
      <img src="https://www.transparenttextures.com/patterns/wood-pattern.png" class="w-full h-full object-cover" />
    </div>
    <!-- Gradient z lepszym przejściem -->
    <div class="absolute inset-0 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-500 opacity-95 pointer-events-none"></div>
    <!-- Subtelna nakładka dla głębi -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none"></div>

    <div class="relative max-w-7xl mx-auto px-6 py-3">
      <div class="flex items-center justify-between">

        <!-- Logo (duże, wystawające z dołu na desktop, małe na mobile) -->
        <NuxtLink to="/" class="flex items-center group relative z-50 flex-shrink-0" style="height:56px; width: 180px;">
          <img src="/logoogrod.png" alt="EkoWarzywniak" class="hidden md:block h-48 w-auto rounded-xl shadow-2xl group-hover:scale-105 transition" style="position: absolute; top: 0; left: 0; z-index: 100;" />
          <img src="/logoogrod.png" alt="EkoWarzywniak" class="md:hidden h-12 w-auto rounded-lg shadow-lg" />
        </NuxtLink>

        <!-- Linki nawigacyjne -->
        <div class="hidden lg:flex items-center gap-6 flex-1 justify-center">
          <NuxtLink to="/inkubator" class="nav-link">Inkubator</NuxtLink>
          <NuxtLink to="/galeria" class="nav-link">Galeria</NuxtLink>
          <a href="https://www.ustrzyki-nocleg.pl/" class="nav-link" target="_blank" rel="noopener">Nasz Gościniec</a>
        </div>

        <!-- Funkcje po prawej: wyszukiwarka, ulubione, kontakt -->
        <div class="hidden md:flex items-center gap-4 flex-shrink-0">
          <!-- Wyszukiwarka -->
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Szukaj produktu..."
              class="pl-10 pr-4 py-2 rounded-full bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white shadow-md w-56 transition-all focus:w-64"
            />
            <svg class="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>

          <!-- Serduszko (ulubione) -->
          <button
            @click="toggleFavoritesView"
            class="relative p-3 rounded-full bg-white/90 hover:bg-white transition shadow-md hover:shadow-lg"
            :class="{ 'bg-red-100': isFavoritesView }"
          >
            <svg class="w-6 h-6" :class="isFavoritesView ? 'text-red-500 fill-red-500' : 'text-gray-700'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            <span v-if="favoritesCount > 0" class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-md">
              {{ favoritesCount }}
            </span>
          </button>

          <!-- Kontakt -->
          <div class="relative">
            <button @click="showContact = !showContact" class="nav-link-button px-6 py-2 bg-white/90 hover:bg-white rounded-full shadow-md hover:shadow-lg transition flex items-center gap-2">
              <svg class="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <span class="font-semibold text-gray-800">Kontakt</span>
            </button>
            <div v-if="showContact" id="contact-popup" class="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-2xl p-6 z-50 border-2 border-orange-200">
              <div class="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
                <svg class="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <a href="tel:603131190" class="text-lg font-bold text-gray-800 hover:text-orange-600 transition">603 131 190</a>
              </div>
              <div class="flex items-center gap-3">
                <svg class="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <a href="mailto:info@bieszczadzkiogrod.pl" class="text-sm font-semibold text-gray-700 hover:text-orange-600 transition break-all">info@bieszczadzkiogrod.pl</a>
              </div>
            </div>
          </div>

          <!-- Facebook -->
          <a href="https://www.facebook.com/BieszczadzkiOgrod?locale=pl_PL" target="_blank" rel="noopener" class="p-3 rounded-full bg-white/90 hover:bg-white transition shadow-md hover:shadow-lg">
            <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>

        <!-- Hamburger na telefonie -->
        <div class="flex items-center gap-4">
          <!-- Hamburger (tylko na telefonie) -->
          <button @click="toggleMobileMenu" class="md:hidden p-3 relative" style="z-index: 150;">
            <div class="space-y-1.5">
              <span class="block w-7 h-0.5 bg-white transition" :class="{ 'rotate-45 translate-y-2': mobileOpen }"></span>
              <span class="block w-7 h-0.5 bg-white transition" :class="{ 'opacity-0': mobileOpen }"></span>
              <span class="block w-7 h-0.5 bg-white transition" :class="{ '-rotate-45 -translate-y-2': mobileOpen }"></span>
            </div>
          </button>
        </div>
      </div>
    </div>

  </nav>

  <!-- Odstęp pod fixed navbar (przestrzeń dla wystawającego logo) -->
  <div class="h-16 md:h-20"></div>

  <!-- Menu mobilne przez Teleport -->
  <Teleport to="body">
    <!-- Backdrop dla menu mobilnego -->
    <div v-if="mobileOpen" @click="mobileOpen = false" class="md:hidden fixed inset-0 bg-black/50 z-[100]"></div>

    <!-- Mobilne menu (wysuwane z dołu) -->
    <div v-if="mobileOpen" class="md:hidden fixed left-0 right-0 bottom-0 bg-gradient-to-br from-orange-600 to-amber-600 overflow-y-auto z-[110]" style="top: 80px;">
      <div class="py-6 px-6 space-y-4">
        <!-- Linki mobilne -->
        <NuxtLink to="/" @click="mobileOpen = false" class="w-full py-3 px-4 rounded-full bg-white hover:bg-gray-50 transition shadow-md flex items-center justify-center gap-3">
          <span class="font-bold text-gray-800">Strona główna</span>
        </NuxtLink>

        <NuxtLink to="/inkubator" @click="mobileOpen = false" class="w-full py-3 px-4 rounded-full bg-white hover:bg-gray-50 transition shadow-md flex items-center justify-center gap-3">
          <span class="font-bold text-gray-800">Inkubator</span>
        </NuxtLink>

        <NuxtLink to="/galeria" @click="mobileOpen = false" class="w-full py-3 px-4 rounded-full bg-white hover:bg-gray-50 transition shadow-md flex items-center justify-center gap-3">
          <span class="font-bold text-gray-800">Galeria</span>
        </NuxtLink>

        <a href="https://www.ustrzyki-nocleg.pl/" target="_blank" rel="noopener" @click="mobileOpen = false" class="w-full py-3 px-4 rounded-full bg-white hover:bg-gray-50 transition shadow-md flex items-center justify-center gap-3">
          <span class="font-bold text-gray-800">Nasz Gościniec</span>
        </a>

        <!-- Kontakt mobilny -->
        <div class="space-y-3">
          <button @click="showContact = !showContact" class="w-full py-3 px-4 rounded-full bg-white hover:bg-gray-50 transition shadow-md flex items-center justify-center gap-3">
            <svg class="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            <span class="font-bold text-gray-800">Kontakt</span>
            <svg class="w-5 h-5 text-gray-600 transition-transform" :class="{ 'rotate-180': showContact }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          <!-- Rozwijana sekcja kontaktowa -->
          <div v-if="showContact" class="bg-white/95 rounded-2xl p-5 space-y-4 shadow-lg">
            <a href="tel:603131190" class="flex items-center gap-3 p-3 rounded-xl hover:bg-amber-50 transition active:bg-amber-100 w-full text-left">
              <svg class="w-6 h-6 text-orange-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <div class="text-left">
                <div class="text-xs text-gray-500 font-medium">Telefon</div>
                <div class="text-base font-bold text-gray-800">603 131 190</div>
              </div>
            </a>

            <a href="mailto:info@bieszczadzkiogrod.pl" class="flex items-center gap-3 p-3 rounded-xl hover:bg-amber-50 transition active:bg-amber-100 w-full text-left">
              <svg class="w-6 h-6 text-orange-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <div class="text-left">
                <div class="text-xs text-gray-500 font-medium">Email</div>
                <div class="text-sm font-bold text-gray-800 break-all">info@bieszczadzkiogrod.pl</div>
              </div>
            </a>
          </div>
        </div>

        <!-- Facebook mobilny -->
        <a href="https://www.facebook.com/BieszczadzkiOgrod?locale=pl_PL" target="_blank" rel="noopener" @click="mobileOpen = false" class="w-full py-3 px-4 rounded-full bg-blue-600 hover:bg-blue-700 transition shadow-md flex items-center justify-center gap-3">
          <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          <span class="font-bold text-white">Facebook</span>
        </a>
      </div>
    </div>
  </Teleport>

  <!-- Odstęp pod fixed navbar (przestrzeń dla wystawającego logo) -->
  <div class="h-16 md:h-20"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useProductFilters } from '@/composables/useProductFilters'

const mobileOpen = ref(false)
const showContact = ref(false)

// Wyszukiwarka i ulubione (współdzielone z Hero.vue)
const { searchQuery, isFavoritesView, favoritesCount, toggleFavoritesView } = useProductFilters()

// Funkcja do toggleowania menu mobilnego
const toggleMobileMenu = () => {
  console.log('🍔 Kliknięto hamburger! Poprzednia wartość:', mobileOpen.value)
  mobileOpen.value = !mobileOpen.value
  console.log('🍔 Nowa wartość:', mobileOpen.value)
}

// Debug - obserwuj zmiany mobileOpen
import { watch } from 'vue'
watch(mobileOpen, (newVal) => {
  console.log('🍔 Menu mobile WATCH:', newVal ? 'OTWARTE' : 'ZAMKNIĘTE')
})

function handleClickOutside(event) {
  const contactPopup = document.getElementById('contact-popup')
  if (showContact.value && contactPopup && !contactPopup.contains(event.target)) {
    showContact.value = false
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})
</script>

<style scoped>
.nav-link {
  @apply text-white font-bold text-base relative transition-all duration-300;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  letter-spacing: 0.025em;
}
.nav-link:hover {
  @apply text-white;
  transform: translateY(-1px);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.nav-link::after {
  content: '';
  @apply absolute -bottom-1 left-0 w-0 h-1 bg-white rounded-full transition-all duration-300;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
}
.nav-link:hover::after {
  @apply w-full;
}

.nav-link-button {
  @apply font-semibold text-base;
}
</style>