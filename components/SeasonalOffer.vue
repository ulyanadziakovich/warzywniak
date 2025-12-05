<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const images = [
  '/choinki1.jpg',
  '/choinki2.jpg',
  '/choinki3.jpg'
]

const currentImage = ref(0)
let interval: ReturnType<typeof setInterval> | null = null

const nextImage = () => {
  currentImage.value = (currentImage.value + 1) % images.length
}

const prevImage = () => {
  currentImage.value = (currentImage.value - 1 + images.length) % images.length
}

// Auto-play co 5 sekund
onMounted(() => {
  interval = setInterval(nextImage, 5000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<template>
  <section class="-mt-16 md:mt-12 pb-24 md:pb-32 bg-white" id="oferta-sezonowa">
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

    <div class="max-w-5xl mx-auto px-6">
      <!-- Minimalistyczny nagłówek -->
      <div class="text-center mb-20 mt-6">
        <h2 class="text-5xl md:text-7xl font-bold text-gray-900">
          Jodły Kaukaskie
        </h2>
        <div class="w-24 h-1 bg-amber-700 mx-auto mt-8"></div>
      </div>

      <div class="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
        <!-- Karuzela zdjęć – czysta, z cienką ramką -->
        <div class="order-2 md:order-1">
          <div class="relative group">
            <div class="absolute inset-0 bg-amber-100 rounded-lg transform rotate-3 group-hover:rotate-6 transition duration-700 -z-10"></div>

            <!-- Karuzela -->
            <div class="relative rounded-lg shadow-xl overflow-hidden z-10">
              <div class="carousel-track" :style="{ transform: `translateX(-${currentImage * 100}%)` }">
                <img
                  v-for="(image, index) in images"
                  :key="index"
                  :src="image"
                  :alt="`Jodła kaukaska premium ${index + 1}`"
                  class="carousel-image"
                />
              </div>

              <!-- Strzałki -->
              <button
                @click="prevImage"
                class="carousel-arrow left"
                aria-label="Poprzednie zdjęcie"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <button
                @click="nextImage"
                class="carousel-arrow right"
                aria-label="Następne zdjęcie"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>

              <!-- Kropki -->
              <div class="carousel-dots">
                <button
                  v-for="(_, i) in images"
                  :key="i"
                  @click="currentImage = i"
                  :class="{ active: i === currentImage }"
                  class="carousel-dot"
                  :aria-label="`Przejdź do zdjęcia ${i + 1}`"
                />
              </div>
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
/* Karuzela */
.carousel-track {
  display: flex;
  width: 100%;
  transition: transform 0.6s cubic-bezier(0.7, 0, 0.3, 1);
}

.carousel-image {
  min-width: 100%;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.95);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 20;
  transition: all 0.3s;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-arrow:hover {
  background: white;
  transform: translateY(-50%) scale(1.15);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
}

.carousel-arrow svg {
  width: 24px;
  height: 24px;
  stroke: #b45309;
}

.carousel-arrow:hover svg {
  stroke: #92400e;
}

.carousel-arrow.left {
  left: 16px;
}

.carousel-arrow.right {
  right: 16px;
}

.carousel-dots {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 20;
}

.carousel-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.carousel-dot.active {
  background: #b45309;
  transform: scale(1.3);
  box-shadow: 0 0 12px rgba(180, 83, 9, 0.8);
}

.carousel-dot:hover {
  background: rgba(255, 255, 255, 0.9);
}

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

  /* Karuzela - mobilne strzałki */
  .carousel-arrow {
    width: 40px !important;
    height: 40px !important;
  }

  .carousel-arrow svg {
    width: 20px !important;
    height: 20px !important;
  }

  .carousel-arrow.left {
    left: 8px !important;
  }

  .carousel-arrow.right {
    right: 8px !important;
  }

  .carousel-dots {
    bottom: 12px !important;
    gap: 8px !important;
  }

  .carousel-dot {
    width: 10px !important;
    height: 10px !important;
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

  /* Karuzela - bardzo małe ekrany */
  .carousel-arrow {
    width: 36px !important;
    height: 36px !important;
  }

  .carousel-arrow svg {
    width: 18px !important;
    height: 18px !important;
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
