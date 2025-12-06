<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Muzyka świąteczna
const audioRef = ref<HTMLAudioElement | null>(null)
const isPlaying = ref(false)
const isInView = ref(false)

// Video ref
const videoRef = ref<HTMLVideoElement | null>(null)

const toggleMusic = () => {
  if (audioRef.value) {
    if (isPlaying.value) {
      audioRef.value.pause()
      isPlaying.value = false
    } else {
      audioRef.value.play().catch(err => {
        console.log('Nie można odtworzyć muzyki:', err)
      })
      isPlaying.value = true
    }
  }
}

onMounted(() => {
  // Wymuś odtworzenie video
  if (videoRef.value) {
    videoRef.value.play().catch(err => {
      console.log('Nie można automatycznie odtworzyć video:', err)
    })
  }

  // Intersection Observer do wykrywania czy sekcja jest widoczna
  const section = document.getElementById('oferta-sezonowa')
  if (section) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isInView.value = entry.isIntersecting

          if (!entry.isIntersecting) {
            // Sekcja niewidoczna - zatrzymaj muzykę
            if (audioRef.value && isPlaying.value) {
              audioRef.value.pause()
              audioRef.value.currentTime = 0
              isPlaying.value = false
            }
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(section)

    onUnmounted(() => {
      observer.disconnect()
    })
  }
})

onUnmounted(() => {
  if (audioRef.value) {
    audioRef.value.pause()
  }
})
</script>

<template>
  <section class="-mt-16 md:mt-12 pb-24 md:pb-32 bg-white" id="oferta-sezonowa">
    <!-- Muzyka świąteczna -->
    <audio ref="audioRef" loop preload="auto">
      <source src="/christmas-music.mp3" type="audio/mpeg">
    </audio>

    <!-- Przycisk muzyki -->
    <button
      v-if="isInView"
      @click="toggleMusic"
      class="music-toggle"
      :aria-label="isPlaying ? 'Zatrzymaj muzykę' : 'Włącz muzykę'"
    >
      <!-- Ikona play -->
      <svg v-if="!isPlaying" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
      <!-- Ikona pause -->
      <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="6" y="4" width="4" height="16" fill="white"></rect>
        <rect x="14" y="4" width="4" height="16" fill="white"></rect>
      </svg>
    </button>

    <!-- Bardzo wąski pasek z napisem w środku -->
    <div class="relative">
      <!-- Bardzo wąski pasek na całą szerokość -->
      <div class="bg-gradient-to-r from-red-700 to-amber-700 h-1"></div>
      <!-- Tekst na środku, nad paskiem -->
      <div class="absolute inset-0 flex items-center justify-center">
        <p class="bg-white px-4 text-sm md:text-base font-bold text-red-700 tracking-widest uppercase">
          Specjalna oferta sezonowa
        </p>
      </div>
    </div>

    <!-- Świąteczne lampeczki -->
    <div class="christmas-lights">
      <div class="light light-red"></div>
      <div class="light light-green"></div>
      <div class="light light-yellow"></div>
      <div class="light light-blue"></div>
      <div class="light light-white"></div>
      <div class="light light-red"></div>
      <div class="light light-green"></div>
      <div class="light light-yellow"></div>
      <div class="light light-blue"></div>
      <div class="light light-white"></div>
      <div class="light light-red"></div>
      <div class="light light-green"></div>
    </div>

    <div class="max-w-5xl mx-auto px-6">
      <!-- Minimalistyczny nagłówek -->
      <div class="text-center mb-20 mt-6">
        <h2 class="text-5xl md:text-7xl font-bold text-gray-900">
          Jodły Kaukaskie
        </h2>
        <div class="w-24 h-1 bg-amber-700 mx-auto mt-8"></div>
      </div>

      <div class="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
        <!-- Filmik choinki -->
        <div class="order-2 md:order-1">
          <div class="relative group">
            <div class="absolute inset-0 bg-amber-100 rounded-lg transform rotate-3 group-hover:rotate-6 transition duration-700 -z-10"></div>

            <!-- Video -->
            <div class="relative rounded-lg shadow-xl overflow-hidden z-10 max-h-[650px]">
              <video
                ref="videoRef"
                autoplay
                loop
                muted
                playsinline
                preload="auto"
                class="w-full h-full object-cover rounded-lg"
              >
                <source src="/choinki.MOV" type="video/mp4">
                Twoja przeglądarka nie obsługuje odtwarzania wideo.
              </video>
            </div>
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
              
            </p>
          </div>
        </div>
      </div>

      <!-- Podstawki pod choinkę - prosta sekcja typograficzna -->
      <div class="mt-20 md:mt-24 text-center max-w-3xl mx-auto">
        <h3 class="text-4xl md:text-5xl font-serif italic text-amber-800 mb-8">
          W tym roku w sprzedaży: podstawki pod choinkę
        </h3>

        <div class="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            <span class="font-bold text-gray-900">Minimalistyczne czarne</span> — eleganckie, nowoczesne podstawki w głębokim, matowym czerni.
          </p>

          <p>
            <span class="font-bold text-red-800">Świąteczne sanki</span> — unikalne podstawki z charakterem, wykonane ze starych sanek, które nie nadają się do sprzedaży, a my dajemy im drugie życie.
          </p>
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
/* Świąteczne lampeczki */
.christmas-lights {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 0.5rem;
  position: relative;
  overflow: visible;
  min-height: 40px;
}

.light {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
  animation: twinkle 1.5s ease-in-out infinite;
  box-shadow: 0 0 10px currentColor, 0 0 20px currentColor;
  display: inline-block;
  vertical-align: middle;
}

.light-red {
  background: #ef4444;
  color: #ef4444;
  animation-delay: 0s;
}

.light-green {
  background: #22c55e;
  color: #22c55e;
  animation-delay: 0.3s;
}

.light-yellow {
  background: #fbbf24;
  color: #fbbf24;
  animation-delay: 0.6s;
}

.light-blue {
  background: #3b82f6;
  color: #3b82f6;
  animation-delay: 0.9s;
}

.light-white {
  background: #ffffff;
  color: #ffffff;
  animation-delay: 1.2s;
}

@keyframes twinkle {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}

/* Przycisk muzyki */
.music-toggle {
  position: fixed;
  top: 100px;
  right: 24px;
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #dc2626 0%, #b45309 100%);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 100;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(220, 38, 38, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pulseGlow 2s ease-in-out infinite;
}

.music-toggle:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 24px rgba(220, 38, 38, 0.5);
}

.music-toggle:active {
  transform: scale(0.95);
}

.music-toggle svg {
  width: 28px;
  height: 28px;
  stroke: white;
}

@keyframes pulseGlow {
  0%, 100% {
    box-shadow: 0 4px 16px rgba(220, 38, 38, 0.3);
  }
  50% {
    box-shadow: 0 4px 24px rgba(220, 38, 38, 0.6), 0 0 16px rgba(220, 38, 38, 0.4);
  }
}

/* Optymalizacje mobilne dla Oferty Sezonowej */
@media (max-width: 768px) {
  /* Lampeczki - ukryj na mobilce */
  .christmas-lights {
    display: none;
  }

  /* Przycisk muzyki - mobile */
  .music-toggle {
    top: 80px;
    right: 16px;
    width: 48px;
    height: 48px;
  }

  .music-toggle svg {
    width: 24px;
    height: 24px;
  }

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

  .group video {
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

  /* Sekcja podstawki - mobile */
  .mt-20 h3 {
    font-size: 1.75rem !important;
    margin-bottom: 1.5rem !important;
  }

  .mt-20 .space-y-6 {
    gap: 1.25rem !important;
  }

  .mt-20 p {
    font-size: 1rem !important;
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
  /* Przycisk muzyki - bardzo małe ekrany */
  .music-toggle {
    width: 44px;
    height: 44px;
    top: 75px;
    right: 12px;
  }

  .music-toggle svg {
    width: 22px;
    height: 22px;
  }

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

  /* Podstawki - bardzo małe ekrany */
  .mt-20 h3 {
    font-size: 1.5rem !important;
    margin-bottom: 1.25rem !important;
  }

  .mt-20 p {
    font-size: 0.9375rem !important;
  }
}
</style>
