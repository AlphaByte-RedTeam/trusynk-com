import { FAQ_ITEMS } from '@/data/faq-items'
import { H2, H3, P } from './typography'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { useId } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'

const FAQ = () => {
  const id = useId()

  return (
    <section
      id="faq"
      className="relative p-8 md:p-16 w-full md:w-2xl h-fit flex flex-col items-center justify-center overflow-hidden gap-4"
    >
      <H2 className="text-center">Got questions? We&apos;ve got you.</H2>
      <P className="text-center text-sm">
        Find clear, friendly answers to help you get the most out of Trusynk. No pressure, no
        confusion — just simple guidance to keep your networking flow smooth. And if you ever need
        more help, we&apos;re always here for you.
      </P>
      <Accordion type="single" collapsible className="w-full">
        {FAQ_ITEMS.slice(0, 7).map((item, index) => (
          <AccordionItem key={`${id}`} value={`${id}-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <H3>Have more questions?</H3>
      <div className="flex flex-row gap-4">
        <Button asChild variant="outline">
          <Link href="mailto:support@trusynk.com">
            <Mail />
            Contact Technical Support
          </Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/faq">
            Find more answers here
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  )
}

export default FAQ
