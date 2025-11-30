// composables/useCart.ts
import { ref } from 'vue'

// Tymczasowy pusty koszyk – wystarczy, żeby błąd zniknął
const items = ref<any[]>([])
const itemsCount = ref(0)

export const useCart = () => {
  const addToCart = (product: any) => {
    console.log('Dodano do koszyka (jeszcze nie działa)', product)
  }

  return {
    items,
    itemsCount,
    addToCart,
  }
}