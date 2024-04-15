import { StaticImageData } from 'next/image'

export type CardType = {
  id: string
  heading: string
  text: string
  cta: {
    text: string
    href: string
  }
  image: {
    src: StaticImageData
    alt: string
  }
}

export type CardProps = Omit<CardType, 'id'> & {
  as?: React.ElementType
  className?: string
}
