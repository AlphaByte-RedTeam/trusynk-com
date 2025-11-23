import { CATEGORY_RULES } from '@/data/category-rules'
import type { CategorizedFAQItem, FAQCategory, FAQProps } from '@/types/faq'
import { randomUUID } from 'node:crypto'

const makeId = () => randomUUID()

export function categorizeFAQItem(faq: FAQProps): CategorizedFAQItem {
  const q = `${faq.question} ${faq.answer || ''}`.toLowerCase()

  const rule = CATEGORY_RULES.find((r) => r.keywords.some((k) => q.includes(k)))

  const category = rule?.name ?? 'General'

  return {
    ...faq,
    category,
    id: makeId(),
  }
}

export function categorizeFAQs(faqs: FAQProps[]): FAQCategory[] {
  const mapped = faqs.map(categorizeFAQItem)

  const groups = new Map<string, CategorizedFAQItem[]>()

  for (const item of mapped) {
    if (!groups.has(item.category)) groups.set(item.category, [])
    groups.get(item.category)!.push(item)
  }

  const orderedNames = CATEGORY_RULES.map((r) => r.name).concat(
    [...groups.keys()].filter((k) => !CATEGORY_RULES.some((r) => r.name === k)),
  )

  const categories: FAQCategory[] = []
  const seen = new Set<string>()

  for (const name of orderedNames) {
    if (!groups.has(name)) continue
    categories.push({ name, items: groups.get(name)! })
    seen.add(name)
  }

  for (const [name, items] of groups.entries()) {
    if (!seen.has(name)) categories.push({ name, items })
  }

  return categories
}

export function topFAQs(faqs: FAQProps[], n = 7): FAQProps[] {
  return faqs.slice(0, n)
}
