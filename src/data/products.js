// src/data/products.js

// 🔧 Helper pro správné bundlování obrázků (Vite)
const img = (p) => new URL(`../assets/images/${p}`, import.meta.url).href;

export const products = [
  {
    slug: 'formamnon',
    name: 'Formamnon',
    tagline: '',
    short:
      'Jednoduché složení, vysoká účinnost. Gel s Alaptidem pro cílenou péči při dermatomykózách a dalších kožních potížích.',
    type: 'gel',
    size: '15ml',
    tags: ['Gel', 'Alaptid', 'Cílená péče'],
    hero: img('formamnon-hero.jpg'),
    theme: {
      from: 'from-mint-light/20',
      to: 'to-forest-green/20',
      accent: 'bg-copper-accent/20 text-copper-accent',
    },
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
    buyLinks: [
      { name: 'Detoxikace Brno', url: 'https://www.detoxikace-brno.cz/formamnon-s-alaptidem-na-kozni-infekce' },
      { name: 'Zdravé Plody', url: 'https://zdrave-plody.cz/' },
      { name: 'NanoShop', url: 'https://www.nanoagtive.cz/formamnon/' },
      { name: 'Salveo', url: 'https://www.salveo.cz/formamnon-gel-na-kuzi-s-alaptidem-gaudium-2022-15-ml' },
      { name: 'Green store', url: 'https://www.greenstore.cz/formamnon-gel-na-kuzi-s-alaptidem-15mll' }
    ],
  },
  {
    slug: 'sanusdent',
    name: 'Sanusdent',
    tagline: 'Nepěnivá zubní pasta s klinicky ověřeným neuropeptidem Alaptidem pro péči o dásně a ústní mikroflóru.',
    short:
      'Nepěnivá zubní pasta s Alaptidem, která přináší šetrnou a účinnou péči o dásně a ústní mikroflóru. Ideální i po chirurgických zákrocích.',
    type: 'pasta',
    size: '75ml',
    tags: [
      'Klinicky ověřený účinek',
      'Solná Anti-parodontální ochrana',
      'Nepění = šetrná a účinná péče',
      'Bez ústní vody'
    ],
    hero: img('sanusdent-hero.jpg'),
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
            <li>Přírodní složení – duběnka, myrha, ratanhia pro zdravé dásně.</li>
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
          <p>Bez Fluoru a pěnivých látek.</p>
        `,
      },
      {
        title: 'Inovace a prevence',
        html: `
          <p>Nepěnivá zubní pasta je revolucí v péči o ústní dutinu díky unikátní účinné látce Alaptid 
          (neuropeptid inspirovaný přirozenými procesy těla). Tento klinicky ověřený bioaktivní peptid stimuluje regenerační schopnosti tkání 
          a tím podporuje jejich hojení.</p>
        `,
      },
      {
        title: 'Složení a certifikace',
        html: `
          <p><strong>Složení:</strong> Aqua, Glycerin, Hydrated Silica, Kaolin, Magnesium Carbonate, Illite, Xanthan Gum, Montmorillonite, 
          Zinc Lactate, Quercus Infectoria Fruit Extract, Commiphora Myrrha Resin Extract, Krameria Triandra Root Extract, Alcohol Denat, 
          Sodium Benzoate, Mentha Piperita Oil, Eugenia Caryophyllus Leaf Oil, Stevioside, Glycyrrhiza Glabra Root Extract, Alaptid, 
          Chlorhexidine Digluconate, Menthol, Eugenol.</p>
          <p><strong>Smluvní výrobce:</strong> Česká republika</p>
          <p><strong>Certifikace:</strong> ISO 22716:2007 / 2008 (GMP pro kosmetiku), ISO 9001:2015 / 2016 (Systém managementu kvality)</p>
        `,
      },
      {
        title: 'Kde koupit',
        html: `<p>Naši distributoři – kliknutím přejdete na jejich stránky:</p>`,
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
    slug: 'gloria',
    name: 'Gloria',
    tagline: '',
    short:
      'Hydratační řada s Alaptidem – denní krém a tělové mléko pro hebkou, dlouhodobě vyživenou pokožku.',
    type: 'kosmetika',
    size: '',
    tags: ['Denní krém', 'Tělové mléko', 'Hydratace'],
    hero: img('gloria-hero.jpg'),
    theme: {
      from: 'from-mint-light/20',
      to: 'to-warm-beige/40',
      accent: 'bg-mint-light/20 text-forest-green',
    },
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
