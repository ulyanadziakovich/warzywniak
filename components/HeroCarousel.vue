<template>
  <div class="hero-carousel">
    <div class="carousel-wrapper">
      <!-- Slajdy -->
      <div class="carousel-track" :style="{ transform: `translateX(-${current * 100}%)` }">
        <div v-for="(slide, index) in slides" :key="index" class="carousel-slide">
          <img :src="slide.img" :alt="slide.title" class="slide-img" />
          
          <!-- Overlay z treścią – bez przycisku -->
          <div class="slide-overlay">
            <div class="slide-content">
              <span class="slide-tag">{{ slide.tag }}</span>
              <h1 class="slide-title">{{ slide.title }}</h1>
              <p class="slide-desc">{{ slide.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Strzałki -->
      <button class="arrow left" @click="prevSlide" aria-label="Poprzedni slajd">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      <button class="arrow right" @click="nextSlide" aria-label="Następny slajd">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>

      <!-- Kropki -->
      <div class="dots">
        <button
          v-for="(slide, i) in slides"
          :key="i"
          :class="{ active: i === current }"
          class="dot"
          @click="current = i"
          :aria-label="`Przejdź do slajdu ${i + 1}`"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
  {
    img: '/pomidory.jpg',
    title: 'Świeże warzywa prosto z pola',
    desc: 'Ekologiczne, lokalne, ręcznie robione – prosto z Bieszczadów na Twój stół.',
  },
  {
    img: '/papryczka.jpg',
    title: 'Ladne papryczki, pomidory, ziemniaki...',
    desc: 'Właśnie teraz smakują najlepiej! Sprawdź, co dziś zebraliśmy dla Ciebie.',
  },
  {
    img: '/ziemniaki.jpg',
    title: 'Sprawdź naszą sezonową ofertę',
    desc: 'Uprawiamy tak, jak robiły to nasze babcie – z miłością do ziemi i ludzi.',
  },
]

const current = ref(0)
let interval = null

const nextSlide = () => {
  current.value = (current.value + 1) % slides.length
}

const prevSlide = () => {
  current.value = (current.value - 1 + slides.length) % slides.length
}

// Auto-play co 6 sekund
onMounted(() => {
  interval = setInterval(nextSlide, 6000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<style scoped>
.hero-carousel {
  max-width: 1400px;
  margin: 0 auto 4rem;
  border-radius: 2.5rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  position: relative;
}

.carousel-wrapper {
  position: relative;
  aspect-ratio: 16 / 7;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.6s cubic-bezier(0.7, 0, 0.3, 1);
}

.carousel-slide {
  min-width: 100%;
  position: relative;
}

.slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.7) 100%);
  display: flex;
  align-items: flex-end;
  padding: 4rem 5rem;
}

.slide-content {
  color: white;
  max-width: 700px;
  transform: translateY(20px);
  animation: fadeInUp 0.9s ease forwards;
}

.slide-tag {
  display: inline-block;
  background: #E8F5E8;
  color: #2d6a2d;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.slide-title {
  font-size: 3.8rem;
  font-weight: 900;
  line-height: 1.1;
  margin: 0.5rem 0 1rem;
  text-shadow: 0 3px 10px rgba(0,0,0,0.5);
}

.slide-desc {
  font-size: 1.35rem;
  line-height: 1.6;
  text-shadow: 0 2px 8px rgba(0,0,0,0.6);
  opacity: 0.95;
}

/* Strzałki */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
}

.arrow:hover {
  background: white;
  transform: translateY(-50%) scale(1.15);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.arrow svg {
  width: 32px;
  height: 32px;
  stroke: #f97316;
}

.arrow:hover svg {
  stroke: #ea580c;
}

.arrow.left { left: 24px; }
.arrow.right { right: 24px; }

.dots {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 10;
}

.dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: rgba(255,255,255,0.5);
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.dot.active {
  background: #4caf50;
  transform: scale(1.3);
  box-shadow: 0 0 15px rgba(76,175,80,0.7);
}

/* Responsywność */
@media (max-width: 1024px) {
  .slide-overlay { padding: 3rem; }
  .slide-title { font-size: 3rem; }
  .slide-desc { font-size: 1.25rem; }
}

/* Mobile - profesjonalny wygląd */
@media (max-width: 768px) {
  .hero-carousel {
    margin: 0 0 2rem 0;
    border-radius: 0;
    box-shadow: none;
  }

  .carousel-wrapper {
    aspect-ratio: 4 / 3;
  }

  .slide-overlay {
    padding: 1.5rem;
    background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.85) 100%);
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .slide-content {
    max-width: 100%;
  }

  .slide-tag {
    font-size: 0.7rem;
    padding: 0.35rem 0.9rem;
    margin-bottom: 0.75rem;
  }

  .slide-title {
    font-size: 1.75rem;
    line-height: 1.2;
    margin: 0.5rem 0 0.75rem;
  }

  .slide-desc {
    font-size: 0.95rem;
    line-height: 1.5;
  }

  /* Ukryj strzałki na mobile */
  .arrow {
    display: none;
  }

  /* Większe i lepiej widoczne kropki */
  .dots {
    bottom: 16px;
    gap: 10px;
  }

  .dot {
    width: 10px;
    height: 10px;
    background: rgba(255,255,255,0.6);
  }

  .dot.active {
    background: #f97316;
    transform: scale(1.4);
    box-shadow: 0 0 12px rgba(249,115,22,0.8);
  }
}

/* Extra small mobile */
@media (max-width: 480px) {
  .slide-overlay {
    padding: 1rem;
  }

  .slide-title {
    font-size: 1.5rem;
  }

  .slide-desc {
    font-size: 0.85rem;
  }

  .slide-tag {
    font-size: 0.65rem;
    padding: 0.3rem 0.8rem;
  }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>