import { ref, computed } from 'vue'
import type { Ref } from 'vue'

// Stan globalny dla wyszukiwania i ulubionych
const searchQuery = ref('')
const isFavoritesView = ref(false)
const favorites: Ref<number[]> = ref([])

export const useProductFilters = () => {
  const favoritesCount = computed(() => favorites.value.length)

  const toggleFavorite = (id: number) => {
    const idx = favorites.value.indexOf(id)
    if (idx === -1) {
      favorites.value.push(id)
    } else {
      favorites.value.splice(idx, 1)
    }
    localStorage.setItem('eko-favorites', JSON.stringify(favorites.value))
  }

  const isFavorite = (id: number) => favorites.value.includes(id)

  const toggleFavoritesView = () => {
    isFavoritesView.value = !isFavoritesView.value
    if (isFavoritesView.value) {
      searchQuery.value = ''
    }
  }

  const loadFavorites = () => {
    const saved = localStorage.getItem('eko-favorites')
    if (saved) {
      favorites.value = JSON.parse(saved)
    }
  }

  // Wczytaj ulubione przy pierwszym wywołaniu (tylko raz)
  if (favorites.value.length === 0 && typeof localStorage !== 'undefined') {
    loadFavorites()
  }

  return {
    searchQuery,
    isFavoritesView,
    favorites,
    favoritesCount,
    toggleFavorite,
    isFavorite,
    toggleFavoritesView,
    loadFavorites
  }
}
