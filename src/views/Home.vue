<template>
  <div class="home flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-6 pt-28 font-sans">
    <h1 class="text-5xl font-extrabold text-gray-900 mb-8 animate-fade-in tracking-wide">Vítejte na stránkách Gaudium2022 s.r.o.</h1>
    <p class="text-xl text-gray-700 max-w-3xl animate-slide-up leading-relaxed">
      Jsme specialisté na vývoj a výrobu inovativní přírodní kosmetiky, která podporuje zdraví pokožky a celkovou pohodu.
    </p>

    <!-- About Section -->
    <div class="mt-16 max-w-4xl text-center px-6 py-8 bg-white rounded-xl shadow-lg">
      <h2 class="text-3xl font-bold text-gray-900 mb-4">O nás</h2>
      <p class="text-lg text-gray-700 leading-relaxed">
        Naše společnost byla založena v roce 2022 a specializuje se na vývoj a výrobu kosmetiky. 
        Jsme tým odborníků, kteří se zaměřují na inovativní a účinné kosmetické produkty, které přinášejí 
        skutečnou hodnotu pro zdraví pokožky a celkovou pohodu.
      </p>
    </div>

    <!-- Products Section -->
    <div class="flex space-x-10 mt-16 px-6">
      <!-- Formamnon Product -->
      <div class="bg-white p-8 rounded-xl shadow-lg animate-slide-up w-96 text-center">
        <h2 class="text-2xl font-bold uppercase text-gray-900">FORMAMNON</h2>
        <img src="/src/assets/images/formamnon.jpg" alt="Formamnon produkt" class="w-full h-80 object-cover mt-4 rounded-lg shadow">
        <p class="text-lg text-gray-700 mt-4 leading-relaxed">
          Gel proti dermatomykózám s unikátní kombinací bylinných extraktů a neuropeptidu Alaptid.
        </p>
        <router-link to="/formamnon" class="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition text-lg font-semibold">
          Více informací
        </router-link>
      </div>

      <!-- Sanusdent Product -->
      <div class="bg-white p-8 rounded-xl shadow-lg animate-slide-up w-96 text-center">
        <h2 class="text-2xl font-bold uppercase text-gray-900">SANUSDENT</h2>
        <img src="/src/assets/images/sanusdent.jpg" alt="Sanusdent produkt" class="w-full h-80 object-cover mt-4 rounded-lg shadow">
        <p class="text-lg text-gray-700 mt-4 leading-relaxed">
          Nepěnivá zubní pasta s Alaptidem a přírodními složkami pro šetrnou péči o zuby a dásně.
        </p>
        <router-link to="/sanusdent" class="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition text-lg font-semibold">
          Více informací
        </router-link>
      </div>
    </div>

    <!-- Product Uniqueness Section -->
    <div class="mt-16 max-w-4xl text-center px-6 py-8 bg-white rounded-xl shadow-lg">
      <h2 class="text-3xl font-bold text-gray-900 mb-4">Unikátnost našich produktů</h2>
      <p class="text-lg text-gray-700 leading-relaxed">
        Výjimečnost našich produktů spočívá v pečlivě vybraném složení bylin a neuropeptidu Alaptid, 
        který se podílí na jejich výjimečné účinnosti a bezpečnosti. Tento pečlivý výběr složek zajišťuje, 
        že produkty poskytují efektivní a zároveň šetrnou péči pro pokožku a ústní dutinu.
      </p>
      <p class="text-lg text-gray-700 mt-4 leading-relaxed">
        V letošním roce plánujeme rozšíření našeho portfolia o další inovativní produkty, včetně denních a nočních krémů, 
        regeneračního tělového mléka (tyto produkty jsou již v EU notifikovány), dále máme ve vývoji gel na popáleniny, 
        po kousnutí hmyzem a krém na ekzém. Dále připravujeme na trh také doplňky stravy, které svou unikátní kombinací 
        dosud nikde na trhu nejsou nabízeny (prevence onko, podpora kognitivních funkcí mozku, prevence alergií).
      </p>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.animate-fade-in { animation: fadeIn 1.5s ease-in-out; }
.animate-slide-up { animation: slideUp 1.5s ease-in-out; }
</style>
