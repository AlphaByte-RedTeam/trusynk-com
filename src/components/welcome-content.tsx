'use client'

import { useSearchParams } from 'next/navigation'
import { Button } from './ui/button'
import { ArrowRight, ArrowLeft, BadgeCheckIcon } from 'lucide-react'
import Link from 'next/link'
import { H1, H3, P } from './typography'
import { Separator } from './ui/separator'
import { Badge } from './ui/badge'

const WelcomeContent = () => {
  const searchParams = useSearchParams()
  const name = searchParams.get('name') || 'there'

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-brand-1 px-4 py-8">
      <div className="max-w-2xl w-full flex flex-col gap-4 items-start justify-start">
        <Badge variant="secondary" className="bg-green-300 text-green-900">
          <BadgeCheckIcon />
          Verified
        </Badge>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <H1 className="font-bold">Welcome, {name}</H1>
            <P className="text-gray-11 text-sm">
              You're now part of Trusynk's early access. We'll keep you updated as we launch.
            </P>
          </div>

          <Separator className="bg-brand-6" />

          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <P className="shrink-0 w-8 h-8 rounded-full bg-brand-3 flex items-center justify-center text-brand-10 font-semibold text-sm">
                1
              </P>
              <div>
                <H3 className="text-lg text-brand-12 mb-1">Watch your inbox</H3>
                <P className="text-gray-11 text-sm">
                  Launch updates and early access perks coming soon
                </P>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <P className="shrink-0 w-8 h-8 rounded-full bg-brand-3 flex items-center justify-center text-brand-10 font-semibold text-sm">
                2
              </P>
              <div className="space-y-4">
                <H3 className="text-lg text-brand-12 mb-1">Join us on Instagram</H3>
                <P className="text-gray-11 text-sm">
                  Get behind-the-scenes updates and claim your welcome gift
                </P>
                <Button asChild size="default" className="bg-brand-9 hover:bg-brand-10 text-white">
                  <Link
                    href="https://instagram.com/trusynk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow @trusynk
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Button asChild variant="ghost">
          <Link
            href="/"
            className="text-gray-10 text-sm font-inter hover:text-brand-9 transition-colors"
          >
            <ArrowLeft />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default WelcomeContent
