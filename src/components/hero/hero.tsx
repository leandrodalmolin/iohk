import { Wrapper } from '@/components'
import { HeroCtas } from './ctas'
import { HeroContent } from './content'
import { HeroImage } from './image'
import { HeroProps } from './hero.types'

export function Hero({ content, image, ctas }: HeroProps) {
  return (
    <section className="overflow-hidden pb-16 pt-10 md:py-20">
      <Wrapper as="div">
        <div className="relative flex flex-col gap-10 md:min-h-[27rem] md:flex-row md:items-center md:py-5 lg:gap-[5rem]">
          <div className="motion-safe:animate-fade-in flex flex-col gap-4 md:w-[62%]">
            <HeroContent content={content} />
            <HeroCtas ctas={ctas} />
          </div>

          <div className="md:w-[38%]">
            <HeroImage image={image} />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
