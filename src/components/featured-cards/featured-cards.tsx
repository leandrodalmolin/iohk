import { Card, Wrapper } from '@/components'
import { FeaturedCardsProps } from './featured-cards.types'

export function FeaturedCards({ cards }: FeaturedCardsProps) {
  return (
    <section className="bg-brand-gradient py-16 md:py-24">
      <Wrapper as="div">
        <ul className="flex flex-col gap-8 md:flex-row lg:gap-10">
          {cards.map((card) => (
            <Card as="li" key={card.id} className="w-full md:w-1/3" {...card} />
          ))}
        </ul>
      </Wrapper>
    </section>
  )
}
