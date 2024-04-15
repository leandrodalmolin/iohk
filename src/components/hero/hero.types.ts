import { ReactNode } from 'react'
import { StaticImageData } from 'next/image'

type HeroContentType = {
  heading: string
  subheading: ReactNode | string
  copy: string
}

type HeroImageType = {
  src: StaticImageData
  alt: string
}

type HeroCtaType = {
  id: string
  text: string
  href: string
  isExternal: boolean
}

export interface HeroProps {
  content: HeroContentType
  image: HeroImageType
  ctas: HeroCtaType[]
}

export interface HeroCtasProps {
  ctas: HeroCtaType[]
}

export interface HeroContentProps {
  content: HeroContentType
}

export interface HeroImageProps {
  image: HeroImageType
}
