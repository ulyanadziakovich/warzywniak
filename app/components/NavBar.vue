<!-- components/Navbar.vue -->
<template>
  <nav class="fixed top-0 left-0 right-0 z-50 shadow-lg">
    <!-- Lekkie drewniane tło + zielony gradient -->
    <div class="absolute inset-0 opacity-30">
      <img src="https://www.transparenttextures.com/patterns/wood-pattern.png" class="w-full h-full object-cover" />
    </div>
    <div class="absolute inset-0 bg-gradient-to-r from-emerald-700 to-lime-700"></div>

    <div class="relative max-w-7xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">

        <!-- Logo + nazwa -->
        <a href="#hero" class="flex items-center gap-4 group relative" style="height:48px;">
          <img src="/logoogrod.png" alt="EkoWarzywniak" class="h-36 w-auto rounded-xl shadow-md group-hover:scale-110 transition absolute left-0 z-20" style="bottom:-96px;" />
          <span class="hidden md:block text-2xl font-bold text-white tracking-tight ml-40">
            Eko<span class="text-amber-300">Warzywniak</span>
          </span>
        </a>

        <!-- Linki na desktopie -->
        <ul class="hidden md:flex items-center gap-10">
          <li><a href="#oferta-sezonowa" class="nav-link">Oferta sezonowa</a></li>
          <li><a href="/inkubator" class="nav-link">Inkubator</a></li>
          <li><a href="/galeria" class="nav-link">Galeria</a></li>
          <li><a href="https://www.ustrzyki-nocleg.pl/" class="nav-link" target="_blank" rel="noopener">Nasz Gościniec</a></li>
          <li><a href="#o-nas" class="nav-link">O nas</a></li>
          <li class="relative">
            <button @click="showContact = !showContact" class="nav-link flex items-center gap-2">
              Kontakt
            </button>
            <div v-if="showContact" id="contact-popup" class="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg p-4 z-50 border border-emerald-200">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-emerald-600 text-xl">📞</span>
                <a href="tel:603131190" class="font-semibold text-emerald-700 hover:underline">603 131 190</a>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-emerald-600 text-xl">✉️</span>
                <a href="mailto:info@bieszczadzkiogrod.pl" class="font-semibold text-emerald-700 hover:underline">info@bieszczadzkiogrod.pl</a>
              </div>
            </div>
          </li>

        </ul>

        <!-- Hamburger na telefonie -->
        <div class="flex items-center gap-4">
          <!-- Hamburger (tylko na telefonie) -->
          <button @click="mobileOpen = !mobileOpen" class="md:hidden p-3">
            <div class="space-y-1.5">
              <span class="block w-7 h-0.5 bg-white transition"></span>
              <span class="block w-7 h-0.5 bg-white transition"></span>
              <span class="block w-7 h-0.5 bg-white transition"></span>
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobilne menu (wysuwane z dołu) -->
    <div v-if="mobileOpen" class="md:hidden absolute top-full left-0 right-0 bg-emerald-700/95 backdrop-blur-lg border-t border-white/20">
      <ul class="py-6 px-8 space-y-6 text-center">
        <li><a href="#oferta-sezonowa" @click="mobileOpen = false" class="block text-xl text-white hover:text-amber-300 transition">Oferta sezonowa</a></li>
        <li><a href="/inkubator" @click="mobileOpen = false" class="block text-xl text-white hover:text-amber-300 transition">Inkubator</a></li>
        <li><a href="/galeria" @click="mobileOpen = false" class="block text-xl text-white hover:text-amber-300 transition">Galeria</a></li>
        <li><a href="https://www.ustrzyki-nocleg.pl/" target="_blank" rel="noopener" class="block text-xl text-white hover:text-amber-300 transition">Nasz Gościniec</a></li>
        <li><a href="#o-nas" @click="mobileOpen = false" class="block text-xl text-white hover:text-amber-300 transition">O nas</a></li>
        <li><a href="#kontakt" @click="mobileOpen = false" class="block text-xl text-white hover:text-amber-300 transition">Kontakt</a></li>
      </ul>
    </div>
  </nav>

  <!-- Odstęp pod fixed navbar -->
  <div class="h-24"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'


const mobileOpen = ref(false)
const showContact = ref(false)


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
  @apply text-white font-semibold text-lg relative transition;
}
.nav-link:hover {
  @apply text-amber-300;
}
.nav-link::after {
  content: '';
  @apply absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-300 transition-all;
}
.nav-link:hover::after {
  @apply w-full;
}
</style>