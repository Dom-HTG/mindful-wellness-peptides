import type { Category } from './products'

export type QuizOption = {
  id: string
  label: string
  description: string
  icon: string
  weights?: Partial<Record<Category, number>>
  tag?: 'unsure'
}

export type QuizQuestion = {
  id: string
  title: string
  subtitle: string
  type: 'single' | 'multi'
  options: QuizOption[]
}

export const QUESTIONS: QuizQuestion[] = [
  {
    id: 'goal',
    title: 'What would you like to research?',
    subtitle: 'Pick the goal that feels closest. You can refine it on the next step.',
    type: 'single',
    options: [
      {
        id: 'metabolic',
        label: 'Metabolic & weight research',
        description: 'Appetite signalling, energy balance and body composition studies.',
        icon: 'Flame',
        weights: { Metabolic: 5, Longevity: 1 },
      },
      {
        id: 'recovery',
        label: 'Recovery & tissue repair',
        description: 'Muscle, tendon and connective tissue recovery models.',
        icon: 'Activity',
        weights: { Recovery: 5, Longevity: 1 },
      },
      {
        id: 'longevity',
        label: 'Longevity & cellular health',
        description: 'Mitochondrial function, cellular energy and healthy ageing.',
        icon: 'Dna',
        weights: { Longevity: 5, Recovery: 1 },
      },
      {
        id: 'cognitive',
        label: 'Focus & cognitive research',
        description: 'Neurotrophic signalling, clarity, mood and stress response.',
        icon: 'Brain',
        weights: { Cognitive: 5, Longevity: 1 },
      },
      {
        id: 'skin',
        label: 'Skin, hair & glow',
        description: 'Collagen, dermal remodelling and follicular research.',
        icon: 'Sparkles',
        weights: { 'Skin & Glow': 5, Longevity: 1 },
      },
      {
        id: 'unsure',
        label: 'Not sure yet',
        description: 'Show me the most popular options across the catalogue.',
        icon: 'Compass',
        tag: 'unsure',
      },
    ],
  },
  {
    id: 'focus',
    title: 'Which areas matter most right now?',
    subtitle: 'Select as many as apply. This fine-tunes your matches.',
    type: 'multi',
    options: [
      {
        id: 'appetite',
        label: 'Appetite & metabolic signalling',
        description: 'Incretin and amylin receptor research.',
        icon: 'Gauge',
        weights: { Metabolic: 3 },
      },
      {
        id: 'muscle',
        label: 'Muscle & connective tissue',
        description: 'Soft tissue and musculoskeletal repair studies.',
        icon: 'HeartPulse',
        weights: { Recovery: 3 },
      },
      {
        id: 'energy',
        label: 'Cellular energy & ageing',
        description: 'Mitochondrial and metabolic-aging research.',
        icon: 'Zap',
        weights: { Longevity: 3 },
      },
      {
        id: 'clarity',
        label: 'Clarity, mood & focus',
        description: 'Neurotrophic and stress-signalling research.',
        icon: 'Lightbulb',
        weights: { Cognitive: 3 },
      },
      {
        id: 'glow',
        label: 'Skin, hair & collagen',
        description: 'Dermal and follicular biology research.',
        icon: 'Droplets',
        weights: { 'Skin & Glow': 3 },
      },
      {
        id: 'supplies',
        label: 'Lab essentials & diluents',
        description: 'Reconstitution and handling supplies.',
        icon: 'FlaskConical',
        weights: { 'Lab Supplies': 3 },
      },
    ],
  },
  {
    id: 'experience',
    title: 'How familiar are you with peptide research?',
    subtitle: 'We will tune how much guidance we include in your matches.',
    type: 'single',
    options: [
      {
        id: 'new',
        label: 'This is my first time',
        description: 'Recommend trusted, well-documented starting points.',
        icon: 'GraduationCap',
      },
      {
        id: 'some',
        label: 'I have run a few studies',
        description: 'I know the basics and want solid options.',
        icon: 'Beaker',
      },
      {
        id: 'expert',
        label: 'Experienced researcher',
        description: 'Prioritise purity and specific compounds.',
        icon: 'Microscope',
      },
    ],
  },
  {
    id: 'priority',
    title: 'What matters most in this order?',
    subtitle: 'We will weight the recommendations accordingly.',
    type: 'single',
    options: [
      {
        id: 'cost',
        label: 'Lowest cost',
        description: 'Budget-friendly options without cutting quality.',
        icon: 'Wallet',
      },
      {
        id: 'purity',
        label: 'Highest purity',
        description: 'Top analytical grades and documentation.',
        icon: 'BadgeCheck',
      },
      {
        id: 'speed',
        label: 'Fastest delivery',
        description: 'Same-day dispatch from Lagos or Abuja.',
        icon: 'Truck',
      },
      {
        id: 'value',
        label: 'Best overall value',
        description: 'A balance of price, purity and popularity.',
        icon: 'Tag',
      },
    ],
  },
  {
    id: 'supply',
    title: 'How would you like it supplied?',
    subtitle: 'Optional. We will suggest a sensible starting kit either way.',
    type: 'single',
    options: [
      {
        id: 'single',
        label: 'A single vial',
        description: 'Start with one compound and see how it goes.',
        icon: 'Package',
      },
      {
        id: 'stack',
        label: 'A research stack',
        description: 'A blend or pairing of complementary compounds.',
        icon: 'Layers',
      },
      {
        id: 'supplies',
        label: 'Include lab supplies',
        description: 'Add diluents and essentials to the order.',
        icon: 'Droplets',
      },
    ],
  },
]
