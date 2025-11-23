// src/data/items.js
// Jeden zdroj pravdy pro kosmetiku i suplementy + bannerová karta pro Home

const img = (p) => new URL(`../assets/images/${p}`, import.meta.url).href;

export const items = [
  // =========================
  // KOSMETIKA
  // =========================
  {
    category: 'kosmetika',
    slug: 'formamnon',
    name: 'Formamnon',
    type: 'gel',
    size: '15ml',
    hero: img('formamnon-hero.jpg'),
    tagline: 'Regenerační gel proti dermatomykózám.',
    short:
      'Genialita v jednoduchosti: pouze 7 složek. Alaptid + byliny pro péči při dermatomykózách a dalších kožních potížích.',
    tags: ['Gel', 'Alaptid', 'Cílená péče'],
    theme: {
      from: 'from-mint-light/20',
      to: 'to-forest-green/20',
      accent: 'bg-copper-accent/20 text-copper-accent',
    },
    sections: [
      {
        title: 'Proč Formamnon',
        html: `
          <p><strong>Genialita v jednoduchosti:</strong> pouze 7 pečlivě zvolených složek pro vysokou účinnost a bezpečnost.</p>
          <ul class="list-disc ml-6 mt-3 space-y-1">
            <li><strong>Alaptid</strong> – aktivace přirozené obnovy a rychlé hojení.</li>
            <li><strong>Tea tree olej</strong> – silný přírodní antiseptik.</li>
            <li><strong>Šalvěj</strong> – tradiční bylina proti infekcím.</li>
            <li><strong>Xylopie</strong> – africká rostlina s antimykotickým účinkem.</li>
            <li><strong>Bez agresivní chemie</strong> – šetrné k pokožce, účinné proti plísním.</li>
          </ul>
          <p class="mt-3">Účinek posiluje konzervační systém se stříbrem (JM Active care).</p>
        `,
      },
      {
        title: 'Jak funguje',
        html: `
          <p>Synergie přírodních extraktů a Alaptidu zacílí na mykotické i další kožní problémy. Ověřeno v praxi u mnoha pacientů.</p>
        `,
      },
      {
        title: 'Použití',
        html: `
          <p>Aplikujte 2× denně na čistou a osušenou pokožku 2–4 týdny (nebo dle potřeby). Airless balení 15&nbsp;ml pro rychlé použití.</p>
        `,
      },
      {
        title: 'Složení & certifikace',
        html: `
          <p>Aktivní: Alaptid, šalvěj, xylopie, tea tree olej + pomocné složky a JMAC (stříbro).</p>
          <p>V souladu s Nařízením (ES) č. 1223/2009; certifikace a bezpečnostní zpráva u výrobce.</p>
        `,
      },
    ],
    buyLinks: [
      { name: 'Detoxikace Brno', url: 'https://www.detoxikace-brno.cz/formamnon-s-alaptidem-na-kozni-infekce' },
      { name: 'Zdravé Plody', url: 'https://zdrave-plody.cz/' },
      { name: 'NanoShop', url: 'https://www.nanoagtive.cz/formamnon/' },
      { name: 'Salveo', url: 'https://www.salveo.cz/formamnon-gel-na-kuzi-s-alaptidem-gaudium-2022-15-ml' },
      { name: 'Green store', url: 'https://www.greenstore.cz/formamnon-gel-na-kuzi-s-alaptidem-15mll' }
    ],
  },

  {
    category: 'kosmetika',
    slug: 'sanusdent',
    name: 'Sanusdent',
    type: 'pasta',
    size: '75ml',
    hero: img('sanusdent-hero.jpg'),
    tagline: 'Nepěnivá zubní pasta s klinicky ověřeným neuropeptidem Alaptidem pro péči o dásně a ústní mikroflóru.',
    short:
      'Nepěnivá pasta s Alaptidem a tinkturou Mygara. Bez fluoru a SLS; jemná abraziva; respekt k mikroflóře; svěžest hřebíčku a máty.',
    tags: [
      'Klinicky ověřený účinek',
      'Solná Anti-parodontální ochrana',
      'Nepění = šetrná a účinná péče',
      'Bez ústní vody'
    ],
    theme: {
      from: 'from-copper-accent/20',
      to: 'to-sage-muted/20',
      accent: 'bg-sage-muted/20 text-forest-green',
    },
    sections: [
      {
        title: 'Co ji dělá jinou',
        html: `
          <ul class="list-disc ml-6 space-y-1">
            <li>Bez Fluoru a pěnidel – šetrná k citlivým dásním.</li>
            <li>Přírodní složení – duběnka, myrha, ratanhia (tinktura Mygara).</li>
            <li>Esenciální oleje z hřebíčku a máty pro svěží dech.</li>
            <li>Alaptid pro regeneraci tkání a rovnováhu ústní mikroflóry.</li>
          </ul>
        `,
      },
      {
        title: 'Sanusdent – pro pocit svěžesti a čistoty',
        html: `
          <p>Esenciální oleje z hřebíčku a máty přinášejí dlouhotrvající svěžest a příjemný komfort při čištění. 
          Hlavní složkou je unikátní tinktura Mygara a směs extraktů z duběnky, myrhy a ratanhiae, které intenzivně pečují o dásně a sliznice.</p>
          <p>Alaptid je biologicky aktivní neuropeptid, aktivuje regenerační procesy a podporuje přirozenou obnovu tkání. 
          Šetrná abraziva a chlorhexidin diglukonát udržují rovnováhu ústní mikroflóry.</p>
          <p>Bez Fluoru a pěnivých látek; odhad RDA ~25.</p>
        `,
      },
      {
        title: 'Inovace a prevence',
        html: `
          <p>Nepěnivá zubní pasta je revolucí v péči o ústní dutinu díky unikátní účinné látce Alaptid 
          (neuropeptid inspirovaný přirozenými procesy těla). Tento klinicky ověřený bioaktivní peptid stimuluje regenerační schopnosti tkání 
          a tím podporuje jejich hojení. Edukačně: bakterie <em>P. gingivalis</em> je spojována s neurodegenerací; péče o dutinu ústní má smysl.</p>
        `,
      },
      {
        title: 'Složení a certifikace',
        html: `
          <p><strong>INCI:</strong> Aqua, Glycerin, Hydrated Silica, Kaolin, Magnesium Carbonate, Illite, Xanthan Gum, Montmorillonite, 
          Zinc Lactate, Quercus Infectoria Fruit Extract, Commiphora Myrrha Resin Extract, Krameria Triandra Root Extract, Alcohol Denat, 
          Sodium Benzoate, Mentha Piperita Oil, Eugenia Caryophyllus Leaf Oil, Stevioside, Glycyrrhiza Glabra Root Extract, Alaptid, 
          Chlorhexidine Digluconate, Menthol, Eugenol.</p>
          <p><strong>Smluvní výrobce:</strong> Česká republika | <strong>Certifikace:</strong> ISO 22716:2007/2008, ISO 9001:2015/2016</p>
        `,
      },
    ],
    buyLinks: [
      { name: 'Detoxikace Brno', url: 'https://www.detoxikace-brno.cz/sanusdent-zubni-pasta-s-alaptidem' },
      { name: 'Zdravé Plody', url: 'https://zdrave-plody.cz/' },
      { name: 'NanoShop', url: 'https://www.nanoagtive.cz/sanusdent/' },
      { name: 'Salveo', url: 'https://www.salveo.cz/sanusdent-zubni-pasta-s-alaptidem-gaudium-2022-75-ml' },
      { name: 'Green store', url: 'https://www.greenstore.cz/sanusdent-zubni-pasta-s-alaptidem-75ml' }
    ],
  },

  {
    category: 'kosmetika',
    slug: 'gloria',
    name: 'Gloria',
    type: 'kosmetika',
    size: '200ml',
    hero: img('gloria-hero.jpg'),
    tagline: 'Regenerační tělové mléko s Alaptidem.',
    short:
      'Český Alaptid – bioaktivní neuropeptid pro intenzivní regeneraci. Černuchový olej, hamamelis, bambucké máslo a celodenní péče.',
    tags: ['Tělové mléko', 'Hydratace', 'Regenerace'],
    theme: {
      from: 'from-mint-light/20',
      to: 'to-warm-beige/40',
      accent: 'bg-mint-light/20 text-forest-green',
    },
    sections: [
      {
        title: 'O produktu',
        html: `
          <p><strong>Český Alaptid</strong> – bio-aktivní neuropeptid pro intenzivní regeneraci.</p>
          <p><strong>Černuchový olej</strong> – tradice starého Egypta pro výživu a hydrataci.</p>
          <p><strong>Hamamelis</strong> – přírodní adstringens ze Severní Ameriky.</p>
          <p><strong>Bambucké máslo</strong> – posílení odolnosti a ochrana pokožky.</p>
          <p><strong>Celodenní péče</strong> – vhodné pro každodenní použití.</p>
          <p class="mt-2 italic">Kde tradice potkává vědu. Pro pleť pružnou, zdravou a krásnou.</p>
        `,
      },
      {
        title: 'Popis',
        html: `
          <p>Tento přípravek je určený k celodenní péči o pleť. Obsahuje složky s účinkem regeneračním a adstringentním. 
          Olej z černuchy je užíván již od dob starého Egypta. Hamamelis používali odedávna přírodní národy Severní Ameriky 
          a původem český Alaptid je předvojem v trendu využívání biologicky aktivních neuropeptidů v kosmetice. 
          Bambucké máslo zlepšuje odolnost pokožky a černuchový olej ji vyživuje a hydratuje.</p>
        `,
      },
      {
        title: 'Složení',
        html: `
          <p><strong>INCI:</strong> Aqua, Caprylic/Capric Triglyceride, Glycerin, Butyrospermum Parkii Butter, Nigella Sativa Seed Oil,
          Glycine Soja Seed Extract, Xanthan Gum, Phenoxyethanol, Alcohol Denat., Sclerotium Gum, Lecithin, Pullulan, Alaptide, Tocopheryl Acetate,
          Parfum, Hamamelis Virginiana Leaf Extract, Disodium EDTA, Ethylhexylglycerin, Silica, Hexamethylindanopyran, Tetramethyl Acetyloctahydronaphthalenes.</p>
        `,
      },
    ],
    buyLinks: [],
  },

  // =========================
  // SUPLEMENTY
  // =========================
  {
    category: 'suplement',
    slug: 'power-c-complex',
    name: 'Power C-Complex',
    type: 'doplněk stravy',
    size: '30 kapslí',
    hero: '',
    tagline: 'Chytrý vitamin C s přidanou hodnotou',
    short:
      'Inteligentní vitamin C (800 mg) s extraktem z kozince, myo-inositolem a IP6. Slow-release pro lepší využití, imunita a buněčná vitalita.',
    tags: ['Imunita', 'Energie', 'Antioxidant', 'Slow release'],
    theme: { from: 'from-amber-50', to: 'to-orange-100', accent: 'bg-copper-accent/20 text-copper-accent' },
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
            <li>Silný antioxidant – ochrana buněk</li>
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
    buyLinks: [
      { name: 'Detoxikace Brno', url: 'https://www.detoxikace-brno.cz/' },
      { name: 'Zdravé plody', url: 'https://zdrave-plody.cz/' }
    ]
  },

  {
    category: 'suplement',
    slug: 'memory-balance',
    name: 'Memory & Balance',
    type: 'doplněk stravy',
    size: '60 kapslí',
    hero: '',
    tagline: 'Síla přírody pro vaši mysl a rovnováhu',
    short:
      'Komplex pro paměť, fokus a zvládání stresu: CDP-cholin, Bacopa, Ashwagandha, Ginkgo, L-theanin a vitamin B3.',
    tags: ['Paměť', 'Soustředění', 'Stres', 'Kognice'],
    theme: { from: 'from-sky-50', to: 'to-indigo-100', accent: 'bg-copper-accent/20 text-copper-accent' },
    sections: [
      {
        title: 'Co dělá Memory & Balance',
        html: `<p>Propojuje tradiční byliny s poznatky neurovědy – cíleně pro mozek, kognici a zvládání stresu.</p>`
      },
      {
        title: 'Aktivní složky',
        html: `
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Citikolin (CDP-cholin):</strong> neurotransmitery a prokrvení mozku</li>
            <li><strong>Bacopa monnieri:</strong> paměť, fokus, antioxidant</li>
            <li><strong>Ashwagandha:</strong> adaptogen pro stres a spánek</li>
            <li><strong>Ginkgo biloba:</strong> oběh a kognitivní funkce</li>
            <li><strong>L-theanin:</strong> klid bez ospalosti, lepší fokus</li>
            <li><strong>Vitamin B3 (niacin):</strong> energie a nervová soustava</li>
          </ul>
          <p class="mt-2 text-sm opacity-80"><strong>Upozornění:</strong> Při užívání léků na ředění krve konzultujte s lékařem.</p>
        `
      }
    ],
    buyLinks: [
      { name: 'Detoxikace Brno', url: 'https://www.detoxikace-brno.cz/' },
      { name: 'Zdravé plody', url: 'https://zdrave-plody.cz/' }
    ]
  },

  {
    category: 'suplement',
    slug: 'alafit-plus',
    name: 'Alafit Plus',
    type: 'doplněk stravy',
    size: '60 kapslí',
    hero: '',
    tagline: 'Energie, regenerace a krása v jedné kapsli',
    short:
      'Synergie pro energii, regeneraci a krásu: beta-glukan, BCAA, L-karnitin, L-arginin, L-cystein, zinek a amygdalin.',
    tags: ['Energie', 'Regenerace', 'Imunita', 'Krása'],
    theme: { from: 'from-emerald-50', to: 'to-teal-100', accent: 'bg-copper-accent/20 text-copper-accent' },
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
        `
      }
    ],
    buyLinks: [
      { name: 'Detoxikace Brno', url: 'https://www.detoxikace-brno.cz/' },
      { name: 'Zdravé plody', url: 'https://zdrave-plody.cz/' },
      { name: 'Green store', url: 'https://www.greenstore.cz/' }
    ]
  },

  // =========================
  // BANNEROVÁ KARTA PRO HOME (Suplementy)
  // =========================
  {
    category: 'banner',
    slug: 'supplements-card',
    name: 'Suplementy / doplňky stravy',
    hero: img('suplementy-hero.jpg'),
    tagline: 'Chytré formulace pro imunitu, energii, kognici a regeneraci.',
    short:
      'Power C-Complex, Memory & Balance a Alafit Plus – synergie vědy a přírody pro vaše tělo a mysl.',
    tags: ['Power C-Complex', 'Memory & Balance', 'Alafit Plus'],
    theme: {
      from: 'from-mint-light/20',
      to: 'to-forest-green/20',
      accent: 'bg-mint-light/20 text-forest-green',
    },
    sections: [
      {
        title: 'Suplementy Gaudium',
        html: `
          Chytré formulace pro <strong>imunitu</strong>, <strong>energii</strong>, 
          <strong>kognici</strong> a <strong>regeneraci</strong>:
          <br class="hidden md:block" />
          <strong>Power C-Complex</strong> (vitamin C 800&nbsp;mg, slow-release + Astragalus, myo-inositol, IP6),
          <strong>Memory &amp; Balance</strong> (CDP-cholin, Bacopa, Ashwagandha, Ginkgo, L-theanin),
          <strong>Alafit Plus</strong> (beta-glukan, BCAA, L-karnitin, L-arginin, L-cystein, zinek).
        `,
      },
    ],
    cta: {
      label: 'Prohlédnout suplementy',
      link: '/suplementy',
    },
  },
];

// =========================
// Selektory a kompatibilní exporty
// =========================
export const getItemBySlug = (slug) => items.find((i) => i.slug === slug);
export const getItemsByCategory = (cat) => items.filter((i) => i.category === cat);

export const products = items.filter((i) => i.category === 'kosmetika');
export const supplements = items.filter((i) => i.category === 'suplement');
export const getProductBySlug = (slug) => products.find((p) => p.slug === slug);
