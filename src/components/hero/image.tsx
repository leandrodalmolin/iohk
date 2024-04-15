import Image from 'next/image'
import { HeroImageProps } from './hero.types'

export function HeroImage({ image }: HeroImageProps) {
  return (
    <Image
      className="motion-safe:animate-fade-in motion-safe:md:animate-fade-in-to-left w-full rounded-2xl md:absolute md:top-0 md:h-full md:w-[50vw] md:rounded-l-2xl md:object-cover"
      src={image.src}
      alt={image.alt}
      priority
    />
  )
}
