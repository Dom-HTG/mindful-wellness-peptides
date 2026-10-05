import { CATEGORIES, PRODUCTS, type Category, type Product } from '../data/products'
import { QUESTIONS } from '../data/quiz'

export type QuizAnswers = Record<string, string | string[]>

export type QuizRecommendation = {
  product: Product
  score: number
  reasons: string[]
}

export type QuizResult = {
  profileTitle: string
  profileSummary: string
  focusLabels: string[]
  focusCategories: Category[]
  recommendations: QuizRecommendation[]
  kit: { product: Product; companion: Product } | null
}

const purityValue = (product: Product): number => {
  const value = parseFloat(product.purity)
  return Number.isFinite(value) ? value : 0
}

const discountOf = (product: Product): number =>
  product.compareAt
    ? Math.round(((product.compareAt - product.price) / product.compareAt) * 100)
    : 0

const isBlend = (product: Product): boolean => /blend|\+/i.test(product.name)

const badgeScore = (product: Product): number => {
  switch (product.badge) {
    case 'Best Seller':
      return 1.4
    case 'Trending':
      return 1.1
    case 'Restocked':
      return 0.6
    case 'New':
      return 0.5
    default:
      return 0
  }
}

const applyWeights = (
  scores: Partial<Record<Category, number>>,
  weights?: Partial<Record<Category, number>>,
) => {
  if (!weights) return
  ;(Object.keys(weights) as Category[]).forEach((category) => {
    scores[category] = (scores[category] ?? 0) + (weights[category] ?? 0)
  })
}

export const recommendPeptides = (answers: QuizAnswers): QuizResult => {
  const scores: Partial<Record<Category, number>> = {}

  const goalQuestion = QUESTIONS[0]
  const primary = goalQuestion.options.find((option) => option.id === answers[goalQuestion.id])
  const unsure = primary?.tag === 'unsure'
  if (primary && !unsure) applyWeights(scores, primary.weights)

  const focusQuestion = QUESTIONS[1]
  const focusIds = (answers[focusQuestion.id] as string[] | undefined) ?? []
  const focusOptions = focusQuestion.options.filter((option) => focusIds.includes(option.id))
  focusOptions.forEach((option) => applyWeights(scores, option.weights))

  if (unsure) CATEGORIES.forEach((category) => (scores[category] = (scores[category] ?? 0) + 2))

  const experience = answers[QUESTIONS[2].id] as string | undefined
  const priority = answers[QUESTIONS[3].id] as string | undefined
  const supply = answers[QUESTIONS[4].id] as string | undefined

  const focusCategories = (Object.entries(scores) as Array<[Category, number]>)
    .filter(([, value]) => value > 0)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([category]) => category)

  const topCategory = focusCategories[0]

  const recommendations: QuizRecommendation[] = PRODUCTS.map((product) => {
    const purity = purityValue(product)
    const discount = discountOf(product)

    let score = (scores[product.category] ?? 0) + product.rating * 0.8 + badgeScore(product)

    if (priority === 'cost') score -= product.price / 260000
    if (priority === 'purity') score += Math.max(purity - 98.5, 0) * 1.4
    if (priority === 'speed') score += badgeScore(product)
    if (priority === 'value') score += discount * 0.12

    if (experience === 'new') score += badgeScore(product) * 0.5 + product.rating * 0.25
    if (experience === 'expert') score += Math.max(purity - 98.5, 0) * 0.8

    if (supply === 'single' && isBlend(product)) score -= 1.2
    if (supply === 'stack' && isBlend(product)) score += 1.4
    if (supply === 'supplies' && product.category === 'Lab Supplies') score += 1.2

    const reasons: string[] = []
    if (product.category === topCategory) reasons.push('Top match for your main focus')
    else if (focusCategories.includes(product.category)) reasons.push('Matches a focus area')
    else if (unsure) reasons.push('Popular across the catalogue')
    else reasons.push('Complementary option')

    if (product.rating >= 4.8) reasons.push(`Top rated ${product.rating}`)
    if (product.badge) reasons.push(product.badge)
    if (discount >= 10) reasons.push(`Save ${discount}%`)
    if (purity >= 99.2) reasons.push(`High purity ${product.purity}`)
    if (priority === 'cost' && product.price <= 120000) reasons.push('Budget friendly')

    return { product, score, reasons: reasons.slice(0, 4) }
  })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)

  const primaryLabel = primary && !unsure ? primary.label : null
  const secondaryLabels = focusOptions.map((option) => option.label)
  const focusLabels = [
    ...(primaryLabel ? [primaryLabel] : []),
    ...secondaryLabels,
  ]

  let profileTitle = 'Broad-spectrum starting profile'
  if (primaryLabel && secondaryLabels.length > 0) {
    profileTitle = `${primaryLabel} profile, tuned to ${secondaryLabels.length} focus area${
      secondaryLabels.length > 1 ? 's' : ''
    }`
  } else if (primaryLabel) {
    profileTitle = `${primaryLabel} profile`
  } else if (secondaryLabels.length > 0) {
    profileTitle = `${secondaryLabels[0]} profile`
  }

  const focusText = focusCategories.length
    ? focusCategories.join(', ')
    : 'a broad selection of categories'

  const experienceText =
    experience === 'new'
      ? 'As a newer researcher, we pushed trusted, well-documented starting points to the top.'
      : experience === 'expert'
        ? 'With your experience in mind, we weighted purity and precise compounds.'
        : 'We balanced popularity with analytical quality to keep options dependable.'

  const priorityText =
    priority === 'cost'
      ? 'You leaned toward value, so lower-cost options rank higher.'
      : priority === 'purity'
        ? 'You prioritised purity, so the highest analytical grades rank higher.'
        : priority === 'speed'
          ? 'You value fast delivery, so in-stock best sellers rank higher.'
          : priority === 'value'
            ? 'You asked for overall value, so discounts and ratings are weighted together.'
            : ''

  const supplyText =
    supply === 'stack'
      ? 'Where possible we also highlighted research blends.'
      : supply === 'supplies'
        ? 'We included the lab essentials needed to reconstitute and run your study.'
        : ''

  const profileSummary = `Your answers point toward ${focusText}. ${experienceText} ${priorityText} ${supplyText} Treat the matches below as a starting point for your own sourcing research.`

  const primaryRecommendation = recommendations[0]?.product
  const companion = PRODUCTS.find((product) => product.id === 'bac-water-10') ?? null
  const kit =
    primaryRecommendation &&
    companion &&
    primaryRecommendation.category !== 'Lab Supplies' &&
    companion.id !== primaryRecommendation.id
      ? { product: primaryRecommendation, companion }
      : null

  return {
    profileTitle,
    profileSummary,
    focusLabels,
    focusCategories,
    recommendations,
    kit,
  }
}
