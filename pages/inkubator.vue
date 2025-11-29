<template>
  <div>
    <NavBar />
    <SearchBar />

    <section class="relative py-20 bg-gradient-to-br from-emerald-50 via-amber-50 to-green-50 overflow-hidden">
      <!-- Delikatne tło z wzorami -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-10 left-10 text-8xl text-emerald-600">🏭</div>
        <div class="absolute top-40 right-20 text-6xl text-amber-600">🥫</div>
        <div class="absolute bottom-20 left-1/4 text-7xl text-green-600">🍯</div>
        <div class="absolute top-1/3 right-1/3 text-5xl text-emerald-500">🧪</div>
        <div class="absolute bottom-40 right-10 text-8xl text-green-500">🌱</div>
      </div>

      <div class="relative max-w-7xl mx-auto px-6">
        <h1 class="text-6xl font-bold text-emerald-800 mb-8 text-center">Inkubator Przetwórstwa Lokalnego</h1>

        <div class="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 space-y-6 border-2 border-emerald-100">
          <p class="text-2xl text-emerald-700 font-semibold text-center mb-4">
            Nowocześnie, ale z sercem ♡
          </p>

          <p class="text-lg text-gray-800 leading-relaxed">
            W 2018 roku postawiliśmy budynek, który nazwaliśmy <span class="font-semibold text-emerald-700">Inkubatorem Przetwórstwa Lokalnego</span>. To miejsce, gdzie nowoczesność spotyka się z tradycją, a technologia służy zachowaniu naturalnego smaku.
          </p>

          <p class="text-lg text-gray-800 leading-relaxed">
            Wygląda nowocześnie, ale w środku pachnie jak u babci w kuchni. Robimy tu kimchi, kiszonki, powidła, konfitury, soki tłoczone i syropy – powoli, z miłością, często przy otwartych oknach i z muzyką w tle.
          </p>

          <p class="text-lg text-gray-800 leading-relaxed">
            Każdą partię próbujemy, doprawiamy, czasem poprawiamy przepis „na oko", bo smak musi być dokładnie taki, jaki pamiętamy z dzieciństwa. Wszystko pachnie domem, wszystko smakuje autentycznie.
          </p>

          <div class="grid md:grid-cols-2 gap-6 mt-8">
            <div class="bg-emerald-50 rounded-2xl p-6 border-2 border-emerald-200">
              <h3 class="text-2xl font-bold text-emerald-800 mb-4">Co tu robimy?</h3>
              <ul class="space-y-2 text-gray-800">
                <li>✓ Kiszonki i fermenty</li>
                <li>✓ Powidła i konfitury</li>
                <li>✓ Soki tłoczone na zimno</li>
                <li>✓ Syropy owocowe</li>
                <li>✓ Produkty sezonowe</li>
              </ul>
            </div>

            <div class="bg-amber-50 rounded-2xl p-6 border-2 border-amber-200">
              <h3 class="text-2xl font-bold text-emerald-800 mb-4">Nasze wartości</h3>
              <ul class="space-y-2 text-gray-800">
                <li>♡ Jakość bez kompromisów</li>
                <li>♡ Lokalne surowce</li>
                <li>♡ Tradycyjne receptury</li>
                <li>♡ Rękodzieło</li>
                <li>♡ Miłość do tego, co robimy</li>
              </ul>
            </div>
          </div>

          <p class="text-xl text-emerald-700 font-semibold text-center mt-8">
            Każdy słoik to cząstka naszej pracy i pasji.<br>
            Spróbuj – poczuj różnicę! ♡
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import NavBar from '~/app/components/NavBar.vue'
import SearchBar from '~/app/components/SearchBar.vue'

useHead({
  title: 'Inkubator Przetwórstwa Lokalnego - EkoWarzywniak',
  meta: [
    { name: 'description', content: 'Poznaj nasz Inkubator Przetwórstwa Lokalnego - miejsce, gdzie tworzymy naturalne przetwory z pasją i miłością.' }
  ]
})
</script>
