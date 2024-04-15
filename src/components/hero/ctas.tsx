import { Button, ExternalLinkIcon } from '@/components'
import { HeroCtasProps } from './hero.types'

export function HeroCtas({ ctas }: HeroCtasProps) {
  return (
    <div className="mt-3.5 flex flex-wrap gap-3.5">
      {ctas.map((cta) => {
        const ctaVariant = cta.isExternal ? 'secondary' : 'primary'
        const ctaTarget = cta.isExternal ? '_blank' : '_self'
        const ctaIcon = cta.isExternal ? <ExternalLinkIcon /> : null

        return (
          <Button key={cta.id} variant={ctaVariant} icon={ctaIcon} asChild>
            <a href={cta.href} target={ctaTarget}>
              {cta.text}
            </a>
          </Button>
        )
      })}
    </div>
  )
}
