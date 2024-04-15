import Link from 'next/link'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { Button } from '@/components'
import { CardProps } from './card.types'

export function Card({
  as: Comp = 'div',
  className = '',
  cta,
  heading,
  image,
  text,
}: CardProps) {
  const cardStyles = twMerge(
    'shadow-default overflow-hidden rounded-2xl bg-white flex flex-col',
    'motion-safe:md:hover:-translate-y-2 transition-transform duration-500',
    className,
  )

  return (
    <Comp className={cardStyles}>
      <Image
        className="max-h-40 w-full object-cover object-bottom"
        src={image.src}
        alt={image.alt}
        placeholder="blur"
      />
      <div className="flex flex-1 flex-col justify-between gap-4 p-7">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl leading-7">{heading}</h3>
          <p className="leading-snug">{text}</p>
        </div>
        <div>
          <Button variant="secondary" asChild>
            <Link href={cta.href}>{cta.text}</Link>
          </Button>
        </div>
      </div>
    </Comp>
  )
}
