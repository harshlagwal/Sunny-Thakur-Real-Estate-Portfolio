import sunnyPortrait from '../assets/Sunny Thakur.webp';
import {
  AreaGuideItem,
  CategoryInfo,
  LocalityHotspot,
  PropertyItem,
  TerritoryNode,
  TestimonialItem,
  TimelineMilestone,
} from '../types';

export const BRAND = {
  name: 'Sunny Thakur',
  role: 'Real Estate Consultant',
  headline: 'Find Your Place. Build Your Future.',
  territory: 'Kurali • Kharar • Chandigarh',
  territoryFull: 'Kurali → Kharar → Chandigarh',
  sinceYear: 2014,
  experience: '12+ Years',
  phone: '62303-69704',
  phoneClean: '+916230369704',
  email: 'devbhoomihimachal50@gmail.com',
  organizations: ['EvaraHomes', 'SRV Real Estate'],
  stats: {
    plots: '100+',
    kothis: '50+',
    flats: '40+',
    villas: '10+',
    totalDeals: '200+',
  },
  images: {
    monogram: '',
    portrait: sunnyPortrait,
    hero:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDoJgTeyEKt3r94cLUA47wXj6R8Nb7RlCtW4vFVcWjSRNOpjQIZkveus47TJroGygtG3Y7-FW7zvH4jd7buQJQrJcLjZ__d0ywm9bq4J8kq30I-ubjGe7j7duwVhxs2uTGzKbuUBn9lzMhvrUqCplydoXzyDBNQ1ue4pT7bdmz0r0dKgWTBD9tD6aL8aBpNqnMaRxTAjfLOfKCGXm1yIwR9Vf0I6wwZiutoH54sAskyvtD1An__3Z0f',
  },
};

export const TERRITORY_NODES: Record<string, TerritoryNode> = {
  kurali: {
    id: 'kurali',
    name: 'Kurali',
    badge: 'SELECTED REGION: KURALI',
    tagline: 'High-Yield Plotted Expansion Corridor',
    transit: 'Direct Expressway • 25 Mins to Mohali Industrial Corridor',
    elevation: '312m above sea level',
    coords: '30.8284° N, 76.5746° E',
    primaryTypology: 'Freehold Plots & Plotted Masterplans',
    highlights: [
      'Institutional land titles & clear registry',
      'Wide 60ft to 80ft arterial road infrastructure',
      'Low initial capital basis with exponential growth trajectory',
    ],
    description:
      'The prime northern growth axis with institutional township developments, planned sector networks, and accessible initial square-yard valuations for families seeking to build independent residences or secure multi-year land holdings.',
    strategicNote:
      'Ideal for long-term investors and those seeking spacious custom home construction with countryside serenity yet direct highway commute.',
  },
  kharar: {
    id: 'kharar',
    name: 'Kharar (Core Hub)',
    badge: 'SELECTED REGION: KHARAR (CORE HUB)',
    tagline: 'High-Growth Residential & Family Epicenter',
    transit: '8 Mins to Mohali • 15 Mins to Chandigarh Sector 17',
    elevation: '318m above sea level',
    coords: '30.7499° N, 76.6411° E',
    primaryTypology: 'Independent Kothis, Gated Flats & Villas',
    highlights: [
      'Anchored by Sunny Enclave, Sector 125 & 127',
      'Walk-to-amenities: schools, healthcare, and retail hubs',
      'Maximum liquidity and continuous capital appreciation',
    ],
    description:
      'The vibrant core of modern family living in the tri-city. Features the region’s highest concentration of architect-built independent Kothis, prime sector layouts, and luxury gated communities with verified legal approvals.',
    strategicNote:
      'The most in-demand residential sector for self-use families relocating from Chandigarh, Punjab, and Himachal Pradesh seeking immediate move-in residences.',
  },
  chandigarh: {
    id: 'chandigarh',
    name: 'Chandigarh Periphery',
    badge: 'SELECTED REGION: CHANDIGARH PERIPHERY',
    tagline: 'Capital Gateway & Ultra-Luxury Sanctuary',
    transit: 'Direct Ring Road • 20 Mins to Shaheed Bhagat Singh Int. Airport',
    elevation: '321m above sea level',
    coords: '30.7333° N, 76.7794° E',
    primaryTypology: 'Sky Suites, Luxury Floors & Signature Villas',
    highlights: [
      'Proximity to Le Corbusier masterplanned sectors',
      'Panoramic Shivalik foothill horizons',
      'Top-tier institutional covenants & elite addresses',
    ],
    description:
      'Unmatched prestige on the border of the capital city. Characterized by high-capital residential towers, expansive green belts, elite clubhouse amenities, and bespoke single-owner luxury residences.',
    strategicNote:
      'Targeted for HNIs, corporate executives, and discerning families seeking high aesthetic architectural living with capital city access.',
  },
};

export const LOCALITY_HOTSPOTS: LocalityHotspot[] = [
  {
    id: 'dau-majra',
    name: 'Dau Majra, Kharar',
    subTitle: 'High-Growth Plotted Expansion Corridor',
    tag: 'Plotted Land Belt',
    badge: 'HOT PLOTTED CORRIDOR',
    mapQuery: 'Dau Majra, Kharar, Punjab',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Dau+Majra+Kharar+Punjab',
    coords: '30.7621° N, 76.6215° E',
    keySizes: ['120 Gaj', '230 Gaj', '300 Gaj', 'Custom Plots'],
    propertyTypes: 'Freehold Residential Plots & Farmland',
    recentDeals: 'Anu Bala (120 Gaj), Sunil Kumar (300 Gaj), Kanchan Thakur (230 Gaj)',
    distanceHighlights: [
      { label: 'Kharar Main Market', time: '5 Mins' },
      { label: 'VR Punjab Mall', time: '10 Mins' },
      { label: 'Mohali IT City / Airport Rd', time: '18 Mins' },
      { label: 'Chandigarh Border', time: '20 Mins' },
    ],
    description:
      'The premier high-velocity plotted growth sector in Kharar. Renowned for wide approach roads, peaceful green environs, clear registry, and maximum value appreciation for families building custom independent homes.',
    whyInvest: [
      'Immediate registry with 100% verified documentation',
      'High annual appreciation & low entry square-yard cost',
      'Flexible plot sizes from 100 gaj to 300+ gaj',
    ],
  },
  {
    id: 'sunny-enclave',
    name: 'Sunny Enclave & Sector 125',
    subTitle: 'Prime Residential & Modern Villa Epicenter',
    tag: 'Established Residential Hub',
    badge: 'PRIME LUXURY CORE',
    mapQuery: 'Sunny Enclave, Sector 125, Kharar, Punjab',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sunny+Enclave+Sector+125+Kharar+Punjab',
    coords: '30.7490° N, 76.6520° E',
    keySizes: ['100 Gaj', '150 Gaj', '200 Gaj', 'Independent Kothis'],
    propertyTypes: 'Independent Kothis, Designer Villas & Builder Floors',
    recentDeals: 'Harpreet Singh (Luxury Villa), Dr. H. Sharma (4 BHK Kothi)',
    distanceHighlights: [
      { label: 'VR Punjab Mall', time: '6 Mins' },
      { label: 'Max Super Speciality Hospital', time: '12 Mins' },
      { label: 'Chandigarh Sector 17', time: '18 Mins' },
      { label: 'Mohali Industrial Area', time: '12 Mins' },
    ],
    description:
      'The benchmark urban township of the western tri-city corridor. Anchored by Sector 125 & 127 with world-class conveniences: top schools, healthcare, bustling shopping avenues, and the region’s highest demand for luxury Kothis.',
    whyInvest: [
      'Ready move-in independent Kothis & modern duplexes',
      'Unmatched retail, hospital, and school proximity',
      'Highest rental liquidity and solid year-on-year returns',
    ],
  },
  {
    id: 'kurali',
    name: 'Kurali Township & Bypass',
    subTitle: 'High-Yield Plotted Corridor & Kothis',
    tag: 'National Highway NH-205',
    badge: 'HIGH CAPITAL APPRECIATION',
    mapQuery: 'Kurali, Punjab',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kurali+Punjab',
    coords: '30.8284° N, 76.5746° E',
    keySizes: ['100 Gaj', '122 Gaj', '150 Gaj', '2-Story Kothis'],
    propertyTypes: 'Freehold Plots & 2-Manzil Independent Kothis',
    recentDeals: 'Rohit Kumar (100 Gaj Plot), Dinesh Thakur (122 Gaj 2-Story Kothi), Rajesh Sharma (130 Gaj Kothi)',
    distanceHighlights: [
      { label: 'NH-205 Expressway', time: 'Direct 2 Mins' },
      { label: 'Kharar Elevated Flyover', time: '12 Mins' },
      { label: 'Rupnagar Industrial Belt', time: '18 Mins' },
      { label: 'Mohali Border', time: '22 Mins' },
    ],
    description:
      'Strategic northern expansion corridor connecting Chandigarh and Kharar with high-yield plotted masterplans. Exceptional option for buyers seeking spacious custom residences or investors targeting exponential land valuation.',
    whyInvest: [
      'Accessible entry cost per square yard with immense upside',
      'Rapid infrastructure development & broad highway widening',
      'Direct highway transit for daily Tricity commuters',
    ],
  },
  {
    id: 'chandigarh-mohali',
    name: 'Chandigarh & Airport Road',
    subTitle: 'Capital Gateway & High-Rise Sanctuary',
    tag: '200ft Airport Expressway',
    badge: 'METROPOLITAN CORRIDOR',
    mapQuery: 'Airport Road, Sector 118, Mohali, Punjab',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Airport+Road+Mohali+Punjab',
    coords: '30.7046° N, 76.7179° E',
    keySizes: ['3 BHK', '4 BHK', 'Sky Suites', 'Luxury Penthouses'],
    propertyTypes: 'High-Rise Apartments, Gated Towers & Signature Floors',
    recentDeals: 'M. Dhillon (3+1 BHK Sky Flat)',
    distanceHighlights: [
      { label: 'Shaheed Bhagat Singh Airport', time: '20 Mins' },
      { label: 'Mohali IT City & Infosys Campus', time: '15 Mins' },
      { label: 'Chandigarh Sector 35 / 17', time: '15 Mins' },
      { label: 'PCA Mohali Cricket Stadium', time: '14 Mins' },
    ],
    description:
      'The premier high-capital lifestyle axis along the signal-free 200ft Airport Expressway. Direct proximity to international airport terminals, elite IT parks, multi-specialty hospitals, and premium gated skyscraper communities.',
    whyInvest: [
      'Elite gated clubhouse communities with international amenities',
      'Strong corporate executive and NRI rental tenant pool',
      'Fastest transit access across the entire tri-city network',
    ],
  },
];


export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'plots',
    number: '01',
    name: 'Plots',
    tagline: 'Space to build what comes next.',
    editorialStatement: 'Pure canvas for your family’s multi-generational vision.',
    description:
      'Approved freehold residential land in Kurali and Kharar extensions. Wide road frontages, clear institutional demarcations, and rapid capital appreciation.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDb5WlM5NWyxUgy_rrXsSXcOftnpMBKcIS_D4MpiYyL9QO5qaOWmq-l64zihGQT7ZIES739UvW64snxmj56FPKWo0vxr6cBK9DF9JsCSfCibf_ZdEpC5K_4c-hRq39BWmxJjs4Ps29bIc0QvtaC3IBOIGIyrvOUeCHViNN7aBaN34h09ESOZUHUTobR9pUWqeIZDoKpXHkrMD_i4QSbFXYUamDMtbyaRmSvLVzuFDR66vM9iTItq5oR',
    badge: 'High Appreciation',
  },
  {
    id: 'kothis',
    number: '02',
    name: 'Kothis',
    tagline: 'Independent living with room to grow.',
    editorialStatement: 'Your own ground, your own roof, your own architectural statement.',
    description:
      'Private multi-floor bungalows in Sunny Enclave and prime Kharar sectors. Featuring independent foundations, private driveways, open terrace lounges, and double-height living spaces.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA83k4LEYNC4cahTQU-XKOMSSPzTZdpGz1ufaZ4TIAqjxXWPKK3E6w6DeEVE3E9S2wRvoy6ts_i2TdgZUGGHsMEF7Z7ibJyLegDFvBQAYyAEU-zuNqZgI__M4EY93LyDLBJzftFZ75M6nEQG5vTtnKrXy7JFFGXGiaDydPuwVcZZ1ANwrDRBrCQqwG7cNE53FOFhQVYxqR6RhIBw36DovPHjAmkbJgvOOXudZm8jcTKjst-wOyWsp1q',
    badge: 'Sunny Enclave Focus',
  },
  {
    id: 'flats',
    number: '03',
    name: 'Flats',
    tagline: 'Modern living in connected neighbourhoods.',
    editorialStatement: 'Effortless turnkey luxury with high-efficiency security.',
    description:
      'Smart 2, 3, and 4 BHK residential apartments in secure gated enclaves with elevators, dedicated parking bays, fitness clubhouses, and zero maintenance overhead.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCnHlDpDgDoTNvWBd-CBa1XVkoAWNvwCgr4gvPCGJRI72M-mUdW4etOO-VUazhALOrPuIPLe7TfOT2n-GwGMbsdsGUABZgl0X0e98peXoCIqR1XlhoALJfK9VQwryZu9MBcd3l3lU76GI1eLLFUT0_tleofOMNyviGdg9kOLO8ilrgnaqfDjAAs_kjRgvX_gpGVQ7E3lEf_-E3GmtDTtWdrOHo2pRNpNjf2gnjYt10iG5iNTJfxxvpz',
    badge: 'Gated Security',
  },
  {
    id: 'villas',
    number: '04',
    name: 'Villas',
    tagline: 'Space, privacy and a premium lifestyle.',
    editorialStatement: 'Bespoke sanctuaries designed for private luxury.',
    description:
      'Curated private estates boasting fair-face concrete, timber louvers, internal reflection courtyards, imported stone flooring, and secluded garden pavilions.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCub6hF_1BS01QhkZEx5vmqjf8ZqyKqr9j9kbVHdqGqmY3vlrztNLmxW6I6Lm827ARU7IoshoeRuORLxyHPRAKVRVIEPUlH1qZ1nrFvlaBxOrw1TrXUCgcwgdCnZIUym5H1o98mhrITCcWPsrZ7bPJTXkPZojDZmkJLJqq-udvakQ2GKsxwz5TmFxkta_gbk3iUckJVzkxoz4vAVJmvwq7MCUjCL0ekGEoNg5SMdy_BGa6_TzdiXD0_',
    badge: 'Ultra-Luxury',
  },
];

export const FEATURED_PROPERTIES: PropertyItem[] = [
  {
    id: 'opp-kothi-kharar',
    title: 'Independent Kothi Residence',
    category: 'kothis',
    categoryLabel: 'KOTHI',
    location: 'Kharar, Punjab',
    basicInfo: '4 BHK · Residential',
    shortDescription: 'Spacious independent residence in a well-connected locality.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC3si_LgiLtEytLyZA54q2MhASn3GKydd57GzqSaJrOhXvShCTy6rPCOBWCz4L78W9Nlqcx2Vq-hBi0rtYC6mgoNS0YpMXm4QqiuumlBIlcLxUtYoOwscvT1wFz-JwbPr3LUzmGqSlwIbW7OeNgo5_PbsF3v9RmumAb1ZDEwrFjADsw_oY9URoUY53R0v85bDJK0Zelz9ock5qE2YlfsD37V_YOvHAGCTlOowKOJjqgUdinEP7HwlnI',
    aspectClass: 'md:col-span-7',
  },
  {
    id: 'opp-plot-kurali',
    title: 'Demarcated Residential Plot',
    category: 'plots',
    categoryLabel: 'PLOT',
    location: 'Kurali, Punjab',
    basicInfo: 'Residential Plot',
    shortDescription: 'Explore residential plot opportunities suited to your requirements.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD1NKHjIrpd7vIAcnH4gBpGqpmhm_Ts6p3Pe1AFslZDYi5NB6M9gjX8yMxlgZKL7NZaCyFfBxY4pcmJqwwXfTwwoqfS3vtYM8YEiLAdEdubGlhhTkgBLjiRGklCxseoTyw1DE3O3v2X3lf2j-4RyHg10yPejS3d7DHItVdMQjsZuTTphg3wEO_tyj6ujk0-JQs-2o-nh8opyhvSmDnaJ3s5SikVvVUp8f4EkeLiqHpb9CQZD8yaWgce',
    aspectClass: 'md:col-span-5',
  },
  {
    id: 'opp-flat-kharar',
    title: 'Modern Connected Apartment',
    category: 'flats',
    categoryLabel: 'FLAT',
    location: 'Kharar, Punjab',
    basicInfo: 'Residential Apartment',
    shortDescription: 'Modern residential living in a connected locality.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA_5yqZJoW84ayvYZJ2f7Qo8M7NYhdGihZbcbFwmTOXV1evS9WLc3REMNLT2ts0H_-ck-1V9liRO7oUdLjlPpymZtwvGygdumuKh47I36KAbY9lcStEBTcvfHJoo9EpGJCjefd17w3EcwULYH1zlZb7m9rHSVVy2FCHN9Em1g8kCsufsGv3NPthL0Pd5oRNBhQGmmRSYy9ZnD7ZV4vWbMN_cKi7VMJfAoP1I3KT3L91-unIORcBC61z',
    aspectClass: 'md:col-span-5',
  },
  {
    id: 'opp-villa-chandigarh',
    title: 'Architectural Courtyard Villa',
    category: 'villas',
    categoryLabel: 'VILLA',
    location: 'Chandigarh Periphery',
    basicInfo: 'Premium Residential',
    shortDescription: 'Explore spacious residential living with a premium feel.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAyV9RFx0QIad6Y-wfjVDVLiyoPc1PRvJpHx3K-XtlMRRF8D7-Ckh-sqAU5B6grN5W8QFDg2_7bIoi-A86tkFCvkRjnfeyfg1SDAMRWV-8c6v9M9UaW-N-lkn4--MtGZGgJdwhU-6x8GR3N6HwOKXJqwHXFIeTr_hybwFc1RlN0T9nWRYHG_oNfRBlMw6-O5p1wZ7JNy6iyosG1dyMAtwmn5rtNHvK9tZGsUXYeKONgi8EqmwpR8xwc',
    aspectClass: 'md:col-span-7',
  },
];

export const TIMELINE: TimelineMilestone[] = [
  {
    year: '2014',
    chapter: 'Chapter 01',
    title: 'The Beginning',
    description:
      'Sunny Thakur begins his professional career in 2014 in Punjab real estate advisory, focusing on title verification, transparent transactions, and client-first representation.',
  },
  {
    year: '2019',
    chapter: 'Chapter 02',
    title: 'Kharar & Kurali Expansion',
    description:
      'Deepened advisory presence across the Sunny Enclave and Kurali growth belts, bridging buyers with independent builders and masterplanned plotted developments.',
  },
  {
    year: '2022',
    chapter: 'Chapter 03',
    title: '150+ Property Milestones',
    description:
      'Surpassed 150 completed property acquisitions, earning client trust across plots, independent residences, and modern apartment towers.',
  },
  {
    year: '2026',
    chapter: 'Present Day',
    title: '12+ Years of Experience',
    description:
      'Over 12 years (since 2014) of unbroken dedication with 200+ verified property journeys across Kurali, Kharar, and Chandigarh, backed by direct developer relationships.',
    highlight: true,
  },
];

export const WHY_SUNNY_PILLARS = [
  {
    number: '01',
    code: '01 / TIME-TESTED',
    title: '12+ Years Experience',
    description:
      'Over 12 years navigating regional property cycles, RERA norms, municipal approvals, and title documentation without interruption.',
    footerTag: 'EST. 2014 • CONTINUOUS ADVISORY',
  },
  {
    number: '02',
    code: '02 / LOCAL MASTERY',
    title: 'Deep Local Knowledge',
    description:
      'Focused strictly on the Kurali, Kharar, and Chandigarh triangle. Intimate understanding of sector road extensions, water table quality, and true price benchmarks.',
    footerTag: 'KURALI • KHARAR • CHANDIGARH',
  },
  {
    number: '03',
    code: '03 / PROVEN RECORD',
    title: '200+ Reported Sales',
    description:
      'Demonstrated track record of 100+ Plots, 50+ Kothis, 40+ Flats, and 10+ Villas completed with verified customer longevity and clean registries.',
    footerTag: 'VERIFIED TRANSACTION LEDGER',
  },
  {
    number: '04',
    code: '04 / DIRECT ACCESS',
    title: 'Direct Guidance',
    description:
      'One-to-one communication from first site visit to final deed registration. No call centers or junior handlers—you deal directly with Sunny Thakur.',
    footerTag: 'ONE-ON-ONE RELATIONSHIP',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'review-anu-bala',
    quote:
      'Sunny Thakur ji ne hume Dau Majra, Kharar me 120 gaj ka shandar plot dilwaya. Site visit se lekar title check, registry aur possession tak ka sara kaam bilkul transparent aur hassle-free tareeke se karwaya. Highly satisfied!',
    clientName: 'Anu Bala',
    location: 'Dau Majra, Kharar',
    propertyType: 'Freehold Residential Plot',
    dealDetail: '120 Gaj Plot',
    rating: 5,
    badge: 'Verified Deal',
    year: '2024 Acquisition',
  },
  {
    id: 'review-sunil-kumar',
    quote:
      'Sunny Thakur ji ke through Dau Majra me 300 gaj ka bada residential plot purchase kiya. Wide road access, clear government approvals aur bohot hi fair market pricing dilwayi. Kharar me in jaisa genuine property consultant milna mushkil hai.',
    clientName: 'Sunil Kumar',
    location: 'Dau Majra, Kharar',
    propertyType: 'Spacious Residential Plot',
    dealDetail: '300 Gaj Plot',
    rating: 5,
    badge: 'Verified Deal',
    year: '2024 Acquisition',
  },
  {
    id: 'review-rohit-kumar',
    quote:
      'Kurali me 100 gaj plot lene ka plan tha. Sunny bhaiya ne prime connecting location me clear registry wala plot finalize karwaya. Har step par unka guidance aur honest advice sach me lajawab raha. Best advisor for Kurali plots!',
    clientName: 'Rohit Kumar',
    location: 'Kurali Plotted Belt',
    propertyType: 'Freehold Plot',
    dealDetail: '100 Gaj Plot',
    rating: 5,
    badge: 'Verified Buyer',
    year: '2023 Acquisition',
  },
  {
    id: 'review-dinesh-thakur',
    quote:
      'Sunny ji ne Kurali me hume 122 gaj ki 2-manzil shandar independent kothi dilwayi. Construction quality inspection, registry paperwork se lekar bank loan process tak sab me pura personal support diya. We are truly thankful!',
    clientName: 'Dinesh Thakur',
    location: 'Kurali Main Sector',
    propertyType: '2-Story Independent Kothi',
    dealDetail: '122 Gaj 2-Manzil Kothi',
    rating: 5,
    badge: 'Verified Homeowner',
    year: '2023 Acquisition',
  },
  {
    id: 'review-kanchan-thakur',
    quote:
      'Dau Majra, Kharar me 230 gaj plot acquire kiya through Sunny Thakur. Title deed verification aur clear documentation priority thi jo unhone bina kisi delay ke complete karwayi. One-to-one dealing with zero hidden fees.',
    clientName: 'Kanchan Thakur',
    location: 'Dau Majra, Kharar',
    propertyType: 'Prime Residential Plot',
    dealDetail: '230 Gaj Plot',
    rating: 5,
    badge: 'Verified Buyer',
    year: '2024 Acquisition',
  },
  {
    id: 'review-harpreet-singh',
    quote:
      'Sunny Thakur helped our family secure a premium modern independent villa in Kharar. His in-depth understanding of builder track records, ventilation architecture, and direct developer pricing saved us both time and lakhs.',
    clientName: 'Harpreet Singh',
    location: 'Sunny Enclave, Kharar',
    propertyType: 'Modern Luxury Villa',
    dealDetail: '180 Gaj Independent Villa',
    rating: 5,
    badge: 'Verified Homeowner',
    year: '2024 Acquisition',
  },
  {
    id: 'review-rajesh-sharma',
    quote:
      'Kurali bypass growth corridor me independent kothi purchase karni thi. Sunny ji ne verified builder kothi arrange karwai jisme sunlight orientation aur road access bilkul perfect hai. Honest consultant with exceptional commitment.',
    clientName: 'Rajesh Sharma',
    location: 'Kurali Expressway Corridor',
    propertyType: 'Independent 3 BHK Kothi',
    dealDetail: '130 Gaj Independent Kothi',
    rating: 5,
    badge: 'Verified Buyer',
    year: '2023 Acquisition',
  },
  {
    id: 'review-manpreet-kaur',
    quote:
      'Finding a newly constructed duplex kothi in Kharar with clear title seemed difficult until we consulted Sunny Thakur. Very polite, highly professional, and delivers exactly what he commits. 5-star service throughout!',
    clientName: 'Manpreet Kaur & Family',
    location: 'Kharar Central Corridor',
    propertyType: 'Designer Duplex Kothi',
    dealDetail: '150 Gaj Duplex Kothi',
    rating: 5,
    badge: 'Verified Homeowner',
    year: '2024 Acquisition',
  },
];

export const AREA_GUIDES: AreaGuideItem[] = [
  {
    id: 'kurali-guide',
    name: 'Kurali',
    zone: 'Zone North',
    badge: 'HIGH-YIELD PLOTS',
    tagline: 'The High-Velocity Plotted Corridor',
    description:
      'The fastest-emerging growth axis with prime plotted township developments, broad expressway connectivity, and accessible entry pricing for families seeking substantial long-term capital appreciation and spacious custom builds.',
    primaryTypologies: 'Freehold Plots, Land Parcels',
    transitInfo: '35 Mins to Airport • Direct Highway',
    appreciationTrend: 'High Growth Trajectory',
  },
  {
    id: 'kharar-guide',
    name: 'Kharar',
    zone: 'Central Hub',
    badge: 'CORE FAMILY LIVING',
    tagline: 'The Beating Heart of Tri-City Living',
    description:
      'The bustling urban center of the western tri-city corridor. Anchored by Sunny Enclave, premier schools, multi-specialty healthcare, and the region’s highest inventory of independent Kothis and modern gated apartments.',
    primaryTypologies: 'Kothis, Gated Flats, Townhouses',
    transitInfo: '8–12 Mins to Mohali • 15 Mins to Chd',
    appreciationTrend: 'Highest Volume & Liquidity',
  },
  {
    id: 'chandigarh-guide',
    name: 'Chandigarh Periphery',
    zone: 'Capital Corridor',
    badge: 'PREMIUM SANCTUARY',
    tagline: 'World-Class Urban Prestige & Foothill Views',
    description:
      'Proximity to Le Corbusier’s iconic planned city, high-capital residential sky residences, landscaped boulevards, and luxury estates offering enduring prestige, elite schooling, and generational security.',
    primaryTypologies: 'Sky Suites, Luxury Floors, Villas',
    transitInfo: '15 Mins to Sector 17 Plaza',
    appreciationTrend: 'Elite Capital Preservation',
  },
];
