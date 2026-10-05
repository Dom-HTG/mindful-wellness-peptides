export type Category =
  | 'Metabolic'
  | 'Recovery'
  | 'Longevity'
  | 'Cognitive'
  | 'Skin & Glow'
  | 'Lab Supplies'

export type Product = {
  id: string
  name: string
  subtitle: string
  category: Category
  size: string
  purity: string
  price: number
  compareAt?: number
  rating: number
  reviews: number
  badge?: 'Best Seller' | 'Trending' | 'New' | 'Restocked'
  accent: string
  description: string
  benefits: string[]
}

export const CATEGORIES: Category[] = [
  'Metabolic',
  'Recovery',
  'Longevity',
  'Cognitive',
  'Skin & Glow',
  'Lab Supplies',
]

export const PRODUCTS: Product[] = [
  {
    id: 'tirz-30',
    name: 'Tirzepatide 30mg',
    subtitle: 'Dual GIP / GLP-1 receptor agonist',
    category: 'Metabolic',
    size: '30mg lyophilised vial',
    purity: '99.2%',
    price: 685000,
    compareAt: 760000,
    rating: 4.9,
    reviews: 214,
    badge: 'Best Seller',
    accent: '#E8B25C',
    description:
      'A high-purity dual incretin agonist prepared under strict quality control. Supplied as a lyophilised powder with batch-matched HPLC and mass spectrometry documentation.',
    benefits: ['Dual receptor action', 'Batch COA included', 'Cold-chain packed'],
  },
  {
    id: 'tirz-15',
    name: 'Tirzepatide 15mg',
    subtitle: 'Dual GIP / GLP-1 receptor agonist',
    category: 'Metabolic',
    size: '15mg lyophilised vial',
    purity: '99.1%',
    price: 385000,
    compareAt: 430000,
    rating: 4.8,
    reviews: 178,
    badge: 'Trending',
    accent: '#F0C888',
    description:
      'A compact presentation of the same research-grade dual agonist, ideal for laboratories running lower-volume comparative protocols.',
    benefits: ['Same batch standards', 'Compact format', 'Nationwide dispatch'],
  },
  {
    id: 'sema-5',
    name: 'Semaglutide 5mg',
    subtitle: 'GLP-1 receptor agonist peptide',
    category: 'Metabolic',
    size: '5mg lyophilised vial',
    purity: '99.3%',
    price: 235000,
    rating: 4.9,
    reviews: 301,
    accent: '#D9A24E',
    description:
      'Long-established GLP-1 reference compound, synthesised with premium-grade amino acids and verified for sequence accuracy and structural integrity.',
    benefits: ['Reference standard', 'High sequence fidelity', 'In-house QC'],
  },
  {
    id: 'reta-30',
    name: 'Retatrutide 30mg',
    subtitle: 'Triple GIP / GLP-1 / glucagon agonist',
    category: 'Metabolic',
    size: '30mg lyophilised vial',
    purity: '99.0%',
    price: 720000,
    compareAt: 810000,
    rating: 4.9,
    reviews: 156,
    badge: 'Best Seller',
    accent: '#C98F3A',
    description:
      'A tri-receptor agonist supplied at research scale, with each batch confirmed by independent HPLC and MS analysis before release.',
    benefits: ['Triple receptor target', 'Third-party tested', 'Priority Lagos dispatch'],
  },
  {
    id: 'reta-15',
    name: 'Retatrutide 15mg',
    subtitle: 'Triple GIP / GLP-1 / glucagon agonist',
    category: 'Metabolic',
    size: '15mg lyophilised vial',
    purity: '99.0%',
    price: 425000,
    compareAt: 470000,
    rating: 4.8,
    reviews: 121,
    accent: '#D9A24E',
    description:
      'Entry research volume of the triple agonist, packaged with desiccant and cold packs for stability in transit across Nigeria.',
    benefits: ['Stability packed', 'Full COA', 'Nationwide courier'],
  },
  {
    id: 'cagri-5',
    name: 'Cagrilintide 5mg',
    subtitle: 'Long-acting amylin analogue',
    category: 'Metabolic',
    size: '5mg lyophilised vial',
    purity: '98.9%',
    price: 310000,
    rating: 4.7,
    reviews: 88,
    badge: 'New',
    accent: '#B99A63',
    description:
      'An amylin receptor research analogue frequently studied alongside incretin compounds. Supplied with full analytical documentation.',
    benefits: ['Companion research use', 'Analytical packet', 'Sealed vial'],
  },
  {
    id: 'bpc-157',
    name: 'BPC-157 5mg',
    subtitle: 'Body protection compound pentadecapeptide',
    category: 'Recovery',
    size: '5mg lyophilised vial',
    purity: '99.4%',
    price: 98000,
    compareAt: 115000,
    rating: 4.9,
    reviews: 342,
    badge: 'Best Seller',
    accent: '#6E8F7A',
    description:
      'A stable synthetic pentadecapeptide widely used in recovery research. Manufactured with premium reagents and released against tight purity tolerances.',
    benefits: ['Recovery research staple', 'High stability', 'Best value pack'],
  },
  {
    id: 'tb-500',
    name: 'TB-500 5mg',
    subtitle: 'Thymosin beta-4 fragment',
    category: 'Recovery',
    size: '5mg lyophilised vial',
    purity: '99.0%',
    price: 112000,
    rating: 4.8,
    reviews: 190,
    accent: '#7FA08B',
    description:
      'A thymosin fragment used in musculoskeletal and tissue research models, verified for exact sequence and low endotoxin load.',
    benefits: ['Low endotoxin', 'Sequence verified', 'Stack-ready'],
  },
  {
    id: 'bpc-tb-blend',
    name: 'BPC-157 + TB-500 Blend',
    subtitle: 'Recovery research combination',
    category: 'Recovery',
    size: '10mg combined vial',
    purity: '99.1%',
    price: 195000,
    compareAt: 220000,
    rating: 4.9,
    reviews: 143,
    badge: 'Trending',
    accent: '#5F8471',
    description:
      'A pre-mixed recovery research blend combining both reference peptides in a single vial for streamlined protocol work.',
    benefits: ['Two compounds', 'Single vial', 'Optimised blend'],
  },
  {
    id: 'ss-31',
    name: 'SS-31 (Elamipretide) 50mg',
    subtitle: 'Mitochondria-targeted tetrapeptide',
    category: 'Longevity',
    size: '50mg lyophilised vial',
    purity: '99.2%',
    price: 585000,
    rating: 4.8,
    reviews: 64,
    badge: 'New',
    accent: '#8AA678',
    description:
      'A mitochondria-targeted research peptide supplied at high volume for cellular energetics studies, with third-party confirmation.',
    benefits: ['Mitochondrial research', 'High-volume vial', 'Third-party tested'],
  },
  {
    id: 'nad-500',
    name: 'NAD+ 500mg',
    subtitle: 'Nicotinamide adenine dinucleotide',
    category: 'Longevity',
    size: '500mg lyophilised vial',
    purity: '99.5%',
    price: 145000,
    compareAt: 210000,
    rating: 4.8,
    reviews: 233,
    badge: 'Best Seller',
    accent: '#D7B169',
    description:
      'Laboratory-grade NAD+ prepared for cellular metabolism and longevity research, supplied sterile and batch tested for identity.',
    benefits: ['Sterile fill', 'Identity tested', 'Core longevity reagent'],
  },
  {
    id: 'ghk-cu',
    name: 'GHK-Cu 50mg',
    subtitle: 'Copper tripeptide-1 complex',
    category: 'Skin & Glow',
    size: '50mg lyophilised vial',
    purity: '99.0%',
    price: 88000,
    rating: 4.9,
    reviews: 276,
    badge: 'Trending',
    accent: '#6FA9A0',
    description:
      'A copper-bound tripeptide researched extensively in dermal remodelling and collagen studies. Deep-blue crystalline complex with full COA.',
    benefits: ['Copper peptide complex', 'Dermal research', 'COA included'],
  },
  {
    id: 'ahk-cu',
    name: 'AHK-Cu 50mg',
    subtitle: 'Copper tripeptide-3 complex',
    category: 'Skin & Glow',
    size: '50mg lyophilised vial',
    purity: '98.8%',
    price: 82000,
    rating: 4.7,
    reviews: 97,
    accent: '#5E9A91',
    description:
      'A copper tripeptide studied in follicular and skin biology research, manufactured with strict purity controls and supplied blue-grade.',
    benefits: ['Follicular research', 'Blue-grade complex', 'Sealed and tested'],
  },
  {
    id: 'semax',
    name: 'Semax 30mg',
    subtitle: 'ACTH (4-10) analogue',
    category: 'Cognitive',
    size: '30mg lyophilised vial',
    purity: '99.1%',
    price: 95000,
    rating: 4.8,
    reviews: 112,
    accent: '#9BA37F',
    description:
      'A synthetic ACTH analogue studied in cognitive and neurotrophic research, synthesised to exact sequence and released with HPLC data.',
    benefits: ['Neurotrophic research', 'HPLC verified', 'Precise sequence'],
  },
  {
    id: 'selank',
    name: 'Selank 30mg',
    subtitle: 'Tuftsin analogue heptapeptide',
    category: 'Cognitive',
    size: '30mg lyophilised vial',
    purity: '99.0%',
    price: 92000,
    rating: 4.7,
    reviews: 81,
    badge: 'Restocked',
    accent: '#A7A98B',
    description:
      'A tuftsin-derived research heptapeptide supplied for anxiolytic and immune signalling studies, with stability-focused packaging.',
    benefits: ['Immune signalling', 'Stability packed', 'Batch documentation'],
  },
  {
    id: 'bac-water-10',
    name: 'Bacteriostatic Water 10ml',
    subtitle: 'Sterile multi-use diluent',
    category: 'Lab Supplies',
    size: '10ml sterile vial',
    purity: 'USP grade',
    price: 18000,
    rating: 5.0,
    reviews: 421,
    accent: '#8FA6B2',
    description:
      'Sterile bacteriostatic water for reconstitution workflow, sourced from certified suppliers and sealed for multi-use laboratory handling.',
    benefits: ['USP-grade diluent', 'Sterile seal', 'Essential lab supply'],
  },
  {
    id: 'bac-water-3',
    name: 'Bacteriostatic Water 3ml',
    subtitle: 'Sterile multi-use diluent',
    category: 'Lab Supplies',
    size: '3ml sterile vial',
    purity: 'USP grade',
    price: 9500,
    rating: 4.9,
    reviews: 318,
    accent: '#7F97A4',
    description:
      'Compact sterile diluent vial for single-protocol reconstitution, supplied with tamper-evident sealing for laboratory use.',
    benefits: ['Tamper evidence', 'Compact format', 'Bulk discounts'],
  },
]

export const formatNaira = (value: number): string =>
  `\u20A6${value.toLocaleString('en-NG')}`
