<!-- src/views/Contact.vue -->
<template>
  <section class="pt-36 pb-24 gradient-bg">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div v-on-view class="text-center mb-12 slide-in">
        <div class="inline-block bg-mint-light/20 text-forest-green px-6 py-2 rounded-full text-sm font-semibold mb-6">
          KONTAKTUJTE NÁS
        </div>
        <h1 class="text-5xl font-bold text-gradient mb-4">Jsme tu pro vás</h1>
        <p class="text-lg text-forest-green/80 max-w-3xl mx-auto">
          Máte dotaz k produktům nebo spolupráci? Napište nám – odpovíme co nejdříve.
        </p>
      </div>

      <!-- Content -->
      <div class="grid lg:grid-cols-2 gap-10 items-stretch">
        <!-- Left: Contact info -->
        <div v-on-view class="glass-effect rounded-3xl p-8 lg:p-10 slide-in">
          <div class="flex items-center gap-4 mb-8">
            <div class="w-14 h-14 bg-gradient-to-br from-mint-light to-forest-green rounded-2xl flex items-center justify-center shadow-lg">
              <span class="text-white font-bold text-xl">G</span>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-forest-dark">Gaudium – Natural Science</h2>
              <p class="text-forest-green/70 text-sm">Síla přírody podpořená vědou</p>
            </div>
          </div>

          <ul class="space-y-5">
            <li class="flex gap-4 items-start">
              <div class="w-10 h-10 rounded-xl bg-mint-light/20 text-forest-green flex items-center justify-center shrink-0">
                <!-- phone icon -->
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M22 16.92v2a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.09 4.18 2 2 0 0 1 5 2h2a2 2 0 0 1 2 1.72c.12.9.33 1.77.64 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.48a2 2 0 0 1 2.11-.45c.83.31 1.7.52 2.6.64A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <p class="text-sm text-forest-green/70">Telefon</p>
                <a href="tel:+420776251226" class="text-lg font-semibold text-forest-dark hover:text-mint-light transition-colors">+420&nbsp;776&nbsp;251&nbsp;226</a>
              </div>
            </li>

            <li class="flex gap-4 items-start">
              <div class="w-10 h-10 rounded-xl bg-mint-light/20 text-forest-green flex items-center justify-center shrink-0">
                <!-- mail icon -->
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="m22 6-10 7L2 6"/></svg>
              </div>
              <div>
                <p class="text-sm text-forest-green/70">E-mail</p>
                <a href="mailto:info@gaudium2022.cz" class="text-lg font-semibold text-forest-dark hover:text-mint-light transition-colors">info@gaudium2022.cz</a>
              </div>
            </li>
          </ul>

          <div class="mt-8 p-5 rounded-2xl bg-white/60">
            <p class="text-sm text-forest-green/80">
              Tip: pro rychlejší odpověď prosím uveďte, kterého produktu se dotaz týká (Formamnon, Sanusdent, Gloria).
            </p>
          </div>
        </div>

        <!-- Right: Form -->
        <div v-on-view class="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 slide-in-right">
          <h3 class="text-2xl font-bold text-forest-dark mb-6">Kontaktní formulář</h3>

          <form @submit.prevent="handleSubmit" class="space-y-5">
            <div>
              <label for="name" class="block text-sm font-medium text-forest-green">Jméno a příjmení *</label>
              <input v-model.trim="form.name" id="name" type="text" required
                     class="mt-2 w-full rounded-xl border border-sage-muted/40 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-mint-light focus:border-transparent" />
            </div>

            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label for="email" class="block text-sm font-medium text-forest-green">E-mail *</label>
                <input v-model.trim="form.email" id="email" type="email" required
                       class="mt-2 w-full rounded-xl border border-sage-muted/40 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-mint-light focus:border-transparent" />
              </div>
              <div>
                <label for="phone" class="block text-sm font-medium text-forest-green">Telefon</label>
                <input v-model.trim="form.phone" id="phone" type="tel"
                       class="mt-2 w-full rounded-xl border border-sage-muted/40 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-mint-light focus:border-transparent" />
              </div>
            </div>

            <div>
              <label for="topic" class="block text-sm font-medium text-forest-green">Téma</label>
              <select v-model="form.topic" id="topic"
                      class="mt-2 w-full rounded-xl border border-sage-muted/40 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-mint-light focus:border-transparent">
                <option value="">Vyberte…</option>
                <option>Formamnon</option>
                <option>Sanusdent</option>
                <option>Gloria</option>
                <option>Obecný dotaz</option>
                <option>Spolupráce</option>
              </select>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-forest-green">Zpráva *</label>
              <textarea v-model.trim="form.message" id="message" rows="5" required
                        class="mt-2 w-full rounded-xl border border-sage-muted/40 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-mint-light focus:border-transparent"></textarea>
            </div>

            <div class="flex items-start gap-3">
              <input id="consent" type="checkbox" v-model="form.consent" required
                     class="mt-1 h-5 w-5 rounded border-sage-muted/50 text-forest-green focus:ring-mint-light" />
              <label for="consent" class="text-sm text-forest-green/80">
                Souhlasím se zpracováním vyplněných údajů pro účely vyřízení dotazu.
              </label>
            </div>

            <div class="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
              <button type="submit"
                      class="bg-gradient-to-r from-forest-green to-mint-light text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                Odeslat zprávu
              </button>
              <p v-if="sent" class="text-mint-light font-medium">Děkujeme! Otevře se váš e-mail s předvyplněnou zprávou.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  topic: '',
  message: '',
  consent: false,
})

const sent = ref(false)

const handleSubmit = () => {
  // jednoduchá kontrola
  if (!form.name || !form.email || !form.message || !form.consent) return

  const subject = encodeURIComponent(`Kontakt z webu – ${form.topic || 'Dotaz'}`)
  const body = encodeURIComponent(
    `Jméno: ${form.name}\nE-mail: ${form.email}\nTelefon: ${form.phone || '-'}\nTéma: ${form.topic || '-'}\n\nZpráva:\n${form.message}\n`
  )
  // Mailto: otevře default e-mail klienta
  window.location.href = `mailto:info@gaudium2022.cz?subject=${subject}&body=${body}`
  sent.value = true
}
</script>


