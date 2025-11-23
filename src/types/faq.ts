export type FAQProps = {
  question: string
  answer: string
  category?: string
}

export type CategorizedFAQItem = FAQProps & {
  category: string
  id: string
  priority?: number
}

export type FAQCategory = {
  items: CategorizedFAQItem[]
  name: string
}
