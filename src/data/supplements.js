// src/data/supplements.js
// Suplementy / Doplňky stravy – data pro karty a detail

export const supplements = [
  {
    group: 'suplementy',
    slug: 'power-c-complex',
    name: 'Power C-Complex',
    type: 'doplněk stravy',
    size: '30 kapslí',
    tags: ['Imunita', 'Energie', 'Antioxidant', 'Slow release'],
    hero: '', // doplníš až bude vizuál
    theme: { from: 'from-amber-50', to: 'to-orange-100', accent: 'bg-orange-500/10 text-orange-700' },
    short:
      'Inteligentní vitamin C (800 mg) s extraktem z kozince, myo-inositolem a IP6. Slow release pro maximální využití, imunita a buněčná vitalita.',
    sections: [
      {
        title: 'Proč Power C-Complex',
        html: `
          <p><strong>Synergie, ne jen dávka:</strong> vitamin C (800&nbsp;mg) se uvolňuje postupně (slow release).
          Účinek posiluje <em>Astragalus (Astragalosid IV)</em>, myo-inositol a IP6.</p>
        `
      },
      {
        title: 'Klíčové benefity',
        html: `
          <ul class="list-disc pl-5 space-y-1">
            <li>Podpora imunity a energie</li>
            <li>Silný antioxidant – ochrana buněk před oxidačním stresem</li>
            <li>Postupné uvolňování pro lepší využití</li>
            <li>Podpora kolagenu (cévy, kůže, dásně, kosti)</li>
          </ul>
        `
      },
      {
        title: 'Složení a užívání',
        html: `
          <p><strong>Složení:</strong> Vitamin C, extrakt z kozince (Astragalus membranaceus, Astragalosid IV), myo-inositol, IP6.</p>
          <p><strong>Dávkování:</strong> 1 kapsle denně se snídaní.</p>
        `
      }
    ],
    eshops: [
      { name: 'Detoxikace Brno', url: 'https://www.detoxikace-brno.cz/' },
      { name: 'Zdravé plody', url: 'https://zdrave-plody.cz/' }
    ]
  },

  {
    group: 'suplementy',
    slug: 'memory-balance',
    name: 'Memory & Balance',
    type: 'doplněk stravy',
    size: '60 kapslí',
    tags: ['Paměť', 'Soustředění', 'Stres', 'Kognice'],
    hero: '',
    theme: { from: 'from-sky-50', to: 'to-indigo-100', accent: 'bg-indigo-500/10 text-indigo-700' },
    short:
      'Komplex pro paměť, soustředění a duševní rovnováhu: CDP-cholin, Bacopa, Ashwagandha, Ginkgo, L-theanin a vitamin B3.',
    sections: [
      {
        title: 'Co dělá Memory & Balance',
        html: `<p>Propojuje tradiční byliny s poznatky neurovědy – cíleně pro mozek, kognici a zvládání stresu.</p>`
      },
      {
        title: 'Aktivní složky',
        html: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Citikolin (CDP-cholin):</strong> neurotransmitery, prokrvení mozku.</li>
            <li><strong>Bacopa monnieri:</strong> paměť, fokus, antioxidant.</li>
            <li><strong>Ashwagandha:</strong> adaptogen pro stres a spánek.</li>
            <li><strong>Ginkgo biloba:</strong> oběh a kognitivní funkce.</li>
            <li><strong>L-theanin:</strong> klid bez ospalosti, lepší fokus.</li>
            <li><strong>Vitamin B3 (niacin):</strong> energie a nervová soustava.</li>
          </ul>
          <p class="mt-2 text-sm opacity-80"><strong>Upozornění:</strong> Při užívání léků na ředění krve konzultujte s lékařem.</p>
        `
      }
    ],
    eshops: [
      { name: 'Detoxikace Brno', url: 'https://www.detoxikace-brno.cz/' },
      { name: 'Zdravé plody', url: 'https://zdrave-plody.cz/' }
    ]
  },

  {
    group: 'suplementy',
    slug: 'alafit-plus',
    name: 'Alafit Plus',
    type: 'doplněk stravy',
    size: '60 kapslí',
    tags: ['Energie', 'Regenerace', 'Imunita', 'Krása'],
    hero: '',
    theme: { from: 'from-emerald-50', to: 'to-teal-100', accent: 'bg-emerald-500/10 text-emerald-700' },
    short:
      'Synergie pro energii, regeneraci a krásu: beta-glukan, BCAA, L-karnitin, L-arginin, L-cystein, zinek a amygdalin.',
    sections: [
      {
        title: 'Proč Alafit Plus',
        html: `<p>Komplex na principu limitní aminokyseliny – výkon, regenerace a viditelný efekt na pleť, vlasy a nehty.</p>`
      },
      {
        title: 'Klíčové benefity',
        html: `
          <ul class="list-disc pl-5 space-y-1">
            <li>Postupné navýšení energie a rychlejší regenerace</li>
            <li>Silnější imunita (beta-glukan, zinek)</li>
            <li>Podpora kolagenu a kvality pokožky, vlasů a nehtů</li>
            <li>Vhodné při fyzické i psychické zátěži</li>
          </ul>
        `
      },
      {
        title: 'Složení',
        html: `
          <p><strong>Složení:</strong> Fermentovaný beta-glukan, L-karnitin tartrát, BCAA (L-leucin, L-isoleucin, L-valin), L-arginin, L-cystein, zinek (laktát), amygdalin.</p>
          <p class="mt-2">Díky kombinaci aminokyselin pomáhá i při alergiích (normální stav).</p>
        `
      }
    ],
    eshops: [
      { name: 'Detoxikace Brno', url: 'https://www.detoxikace-brno.cz/' },
      { name: 'Zdravé plody', url: 'https://zdrave-plody.cz/' }
    ]
  }
]

export const getSupplementBySlug = (slug) =>
  supplements.find((p) => p.slug === slug)
