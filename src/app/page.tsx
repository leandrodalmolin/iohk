import { FeaturedCards, Hero } from '@/components'
import { MOCKED_CARDS, MOCKED_HERO } from '@/store'

export default function Home() {
  return (
    <main>
      <Hero {...MOCKED_HERO} />
      <FeaturedCards cards={MOCKED_CARDS} />
    </main>
  )
}
