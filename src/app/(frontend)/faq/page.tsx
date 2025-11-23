import CategorizedFAQ from '@/components/categorized-faq'
import LoadingState from '@/components/loading-state'
import { Suspense } from 'react'

const FAQ = () => {
  return (
    <Suspense fallback={<LoadingState />}>
      <CategorizedFAQ />
    </Suspense>
  )
}

export default FAQ
