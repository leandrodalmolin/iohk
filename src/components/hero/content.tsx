import { HeroContentProps } from './hero.types'

export function HeroContent({ content }: HeroContentProps) {
  const { copy, heading, subheading } = content
  return (
    <>
      <div className="flex max-w-[90%] flex-col gap-2.5">
        <h1 className="text-xl leading-7 lg:text-2xl">{heading}</h1>
        <h2 className="text-3xl leading-[1.2] lg:text-[2.625rem]">
          {subheading}
        </h2>
      </div>
      <p className="leading-relaxed">{copy}</p>
    </>
  )
}
