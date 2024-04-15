import Image from 'next/image'
import { HeroImageProps } from './hero.types'

export function HeroImage({ image }: HeroImageProps) {
  return (
    <Image
      className="w-full rounded-2xl motion-safe:animate-fade-in md:absolute md:top-0 md:h-full md:w-[50vw] md:rounded-l-2xl md:object-cover motion-safe:md:animate-fade-in-to-left"
      src={image.src}
      alt={image.alt}
      placeholder="blur"
      priority
    />
  )
}
