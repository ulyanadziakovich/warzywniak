<template>
  <div class="carousel-container">
    <div class="carousel">
      <button class="carousel-arrow left" @click="prevSlide">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div class="carousel-slide">
        <img :src="slides[current].img" :alt="slides[current].title" class="carousel-img" />
        <div class="carousel-content">
          <span class="carousel-category">{{ slides[current].category }}</span>
          <h2 class="carousel-title">{{ slides[current].title }}</h2>
          <p class="carousel-desc">{{ slides[current].desc }}</p>
        </div>
      </div>
      <button class="carousel-arrow right" @click="nextSlide">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
    <div class="carousel-dots">
      <span v-for="(slide, i) in slides" :key="i" class="dot" :class="{ active: i === current }" @click="goToSlide(i)"></span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const slides = [
  {
    img: '/ogrod1.jpg',
    category: 'Nasz Ogród',
    title: 'Ogród pełen warzyw',
    desc: 'Zobacz jak rosną nasze ekologiczne warzywa.',
    link: '#oferta-sezonowa',
  },
  {
    img: '/ogrod2.jpg',
    category: 'Nasz Ogród',
    title: 'Uprawy sezonowe',
    desc: 'Sezonowe produkty prosto z grządki.',
    link: '#oferta-sezonowa',
  },
  {
    img: '/ogrod3.jpg',
    category: 'Nasz Ogród',
    title: 'Naturalne metody',
    desc: 'Dbamy o naturę i zdrowie naszych roślin.',
    link: '#oferta-sezonowa',
  },
]
const current = ref(0)
function prevSlide() {
  current.value = (current.value - 1 + slides.length) % slides.length
}
function nextSlide() {
  current.value = (current.value + 1) % slides.length
}
function goToSlide(i) {
  current.value = i
}
</script>

<style scoped>
.carousel-container {
  max-width: 1200px;
  margin: 0 auto 3rem auto;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0 10px 60px rgba(5, 150, 105, 0.15);
  background: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.carousel-container:hover {
  box-shadow: 0 15px 80px rgba(5, 150, 105, 0.25);
}

.carousel {
  display: flex;
  align-items: center;
  position: relative;
}

.carousel-slide {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  min-height: 450px;
  overflow: hidden;
}

.carousel-img {
  width: 100%;
  height: 450px;
  object-fit: cover;
  object-position: center center;
  transition: transform 0.5s ease;
}

.carousel-slide:hover .carousel-img {
  transform: scale(1.05);
}

.carousel-content {
  position: absolute;
  left: 2.5rem;
  bottom: 2.5rem;
  color: #fff;
  background: linear-gradient(135deg, rgba(5, 150, 105, 0.95) 0%, rgba(16, 185, 129, 0.9) 100%);
  backdrop-filter: blur(16px);
  padding: 1.75rem 2rem;
  border-radius: 1.25rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
  max-width: 380px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.carousel-content:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 50px rgba(0, 0, 0, 0.35);
}

.carousel-category {
  display: inline-block;
  background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%);
  color: #fff;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.4rem 1rem;
  border-radius: 2rem;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);
}

.carousel-title {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  line-height: 1.2;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.carousel-desc {
  font-size: 1rem;
  margin-bottom: 1.25rem;
  line-height: 1.5;
  opacity: 0.95;
}

.carousel-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  color: #065f46;
  font-size: 0.95rem;
  font-weight: 700;
  padding: 0.75rem 1.5rem;
  border-radius: 3rem;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(251, 191, 36, 0.5);
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.4);
}

.carousel-btn:hover {
  background: linear-gradient(135deg, #fcd34d 0%, #fbbf24 100%);
  box-shadow: 0 6px 24px rgba(251, 191, 36, 0.6);
  transform: translateY(-2px);
}

.carousel-arrow {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%);
  border: 2px solid rgba(5, 150, 105, 0.2);
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #059669;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(5, 150, 105, 0.15);
}

.carousel-arrow:hover {
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  color: #fff;
  transform: scale(1.1);
  box-shadow: 0 6px 24px rgba(5, 150, 105, 0.3);
}

.carousel-arrow.left {
  position: absolute;
  left: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
}

.carousel-arrow.left:hover {
  transform: translateY(-50%) scale(1.1);
}

.carousel-arrow.right {
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
}

.carousel-arrow.right:hover {
  transform: translateY(-50%) scale(1.1);
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1.5rem 0;
}

.dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #d1d5db;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.dot:hover {
  background: #9ca3af;
  transform: scale(1.2);
}

.dot.active {
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  border: 2px solid rgba(5, 150, 105, 0.3);
  box-shadow: 0 2px 12px rgba(5, 150, 105, 0.4);
  transform: scale(1.3);
}

@media (max-width: 768px) {
  .carousel-slide {
    min-height: 350px;
  }

  .carousel-img {
    height: 350px;
  }

  .carousel-content {
    left: 1.5rem;
    right: 1.5rem;
    bottom: 1.5rem;
    padding: 1.5rem;
    max-width: calc(100% - 3rem);
  }

  .carousel-title {
    font-size: 1.75rem;
  }

  .carousel-desc {
    font-size: 0.95rem;
  }

  .carousel-arrow {
    width: 44px;
    height: 44px;
  }

  .carousel-arrow.left {
    left: 0.75rem;
  }

  .carousel-arrow.right {
    right: 0.75rem;
  }
}
</style>
