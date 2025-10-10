// src/data/products.js
export const products = [
  {
    slug: 'formamnon',
    name: 'Formamnon',
    short:
      'Jednoduché složení, vysoká účinnost. Gel s Alaptidem pro cílenou péči při dermatomykózách a dalších kožních potížích.',
    type: 'gel',
    size: '15ml',
    tags: ['Gel', 'Alaptid', 'Cílená péče'],
    hero: '../src/assets/images/formamnon-hero.jpg', // až bude fotka
    theme: { from: 'from-mint-light/20', to: 'to-forest-green/20', accent: 'bg-copper-accent/20 text-copper-accent' },
    sections: [
      {
        title: 'Proč Formamnon',
        html: `
          <p><strong>Genialita v jednoduchosti:</strong> pouze sedm pečlivě zvolených složek pro maximální účinek a bezpečnost. 
          Produkt vznikl pod vedením dermatologa s více než 40 lety praxe.</p>
          <ul class="list-disc ml-6 mt-3 space-y-1">
            <li>Úleva při <em>dermatomykózách</em> i celé řadě dalších kožních potíží po těle.</li>
            <li>Kombinuje bylinné extrakty (např. xylopie, tea tree, šalvěj) a neuropeptid <strong>Alaptid</strong>.</li>
            <li>Konzervační složka se <em>stříbrem</em> (JM Active care) pro podporu antimikrobiální účinnosti.</li>
          </ul>
        `,
      },
      {
        title: 'Jak funguje',
        html: `
          <p>Synergie přírodních látek s Alaptidem podporuje regeneraci a zklidnění pokožky; jednoduché složení napomáhá skvělé snášenlivosti. 
          Ověřeno v praxi u mnoha pacientů.</p>
        `,
      },
      {
        title: 'Použití',
        html: `
          <p>Aplikujte 2× denně na čistou a osušenou pokožku po dobu 2–4 týdnů nebo dle potřeby.</p>
        `,
      },
    ],
    buyLinks: [],
  },
  {
    slug: 'sanusdent',
    name: 'Sanusdent',
    short:
      'Nepěnivá, šetrná zubní pasta bez SLS a fluoru. S Alaptidem pro péči o dásně a ústní mikroflóru — ideální pro citlivé zuby.',
    type: 'pasta',
    size: '75ml',
    tags: ['Pasta', 'Bez SLS', 'Citlivé zuby'],
    hero: '../src/assets/images/sanusdent-hero.jpg',
    theme: { from: 'from-copper-accent/20', to: 'to-sage-muted/20', accent: 'bg-sage-muted/20 text-forest-green' },
    sections: [
      {
        title: 'Co ji dělá jinou',
        html: `
          <ul class="list-disc ml-6 space-y-1">
            <li><strong>Nepění</strong> a neobsahuje fluor, laurylsulfát ani agresivní chemikálie.</li>
            <li>Šetrná abrazivita (odhadované RDA ~25) — vhodné pro každodenní použití a citlivé zuby.</li>
            <li>Bylinné složení (duběnka, myrha, ratanhia) pro dásně, plus <strong>Alaptid</strong> pro podporu obnovy tkání.</li>
          </ul>
        `,
      },
      {
        title: 'Pocit svěžesti',
        html: `
          <p>Esenciální oleje z hřebíčku a máty přináší dlouhotrvající svěžest a příjemný komfort při čištění.</p>
        `,
      },
      {
        title: 'Inovace a prevence',
        html: `
          <p>Alaptid pomáhá udržovat zdravou mikroflóru v ústech. V kontextu výzkumu zubních patogenů 
          (např. <em>Porphyromonas gingivalis</em>) je cílem podpořit péči o dásně a prevenci komplikací.</p>
        `,
      },
    ],
    buyLinks: [],
  },
  {
    slug: 'gloria',
    name: 'Gloria',
    short:
      'Hydratační řada s Alaptidem – denní krém a tělové mléko pro hebkou, dlouhodobě vyživenou pokožku.',
    type: 'kosmetika',
    size: '',
    tags: ['Denní krém', 'Tělové mléko', 'Hydratace'],
    hero: '../src/assets/images/gloria-hero.jpg',
    theme: { from: 'from-mint-light/20', to: 'to-warm-beige/40', accent: 'bg-mint-light/20 text-forest-green' },
    variants: [
      { key: 'krem', label: 'Denní krém', size: '50ml', short: 'Lehký, rychle se vstřebává, pod make-up.' },
      { key: 'mleko', label: 'Tělové mléko', size: '200ml', short: 'Celodenní hebkost bez lepivosti.' },
    ],
    sections: [
      {
        title: 'Charakteristika',
        html: `
          <p>Moderní hydratační základ s Alaptidem a rostlinnými oleji pro podporu kožní bariéry a příjemný pocit bez zátěže. 
          Ideální pro každodenní použití i citlivou pleť.</p>
        `,
      },
      {
        title: 'Výhody',
        html: `
          <ul class="list-disc ml-6 space-y-1">
            <li>Dlouhodobá hydratace a zklidnění</li>
            <li>Rychlé vstřebávání, sametový finiš</li>
            <li>Vhodné pro široké spektrum typů pokožky</li>
          </ul>
        `,
      },
    ],
    buyLinks: [],
  },
];

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug);
