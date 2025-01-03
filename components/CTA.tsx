import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Ready to Take the Wheel?</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto">
          Join thousands of satisfied learners and start your journey to becoming a confident driver today.
        </p>
        <Link href="#get-started" className="inline-flex items-center text-lg bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors">
          Get Started Now
          <ChevronRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  )
}

