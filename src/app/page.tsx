import { Button, ExternalLinkIcon, Hero, Wrapper } from '@/components'
import { MOCKED_HERO } from '@/store'

export default function Home() {
  return (
    <main>
      <Hero {...MOCKED_HERO} />
      <Wrapper>
        <h1 className="text-2xl font-semibold">IOHK</h1>
        <Button asChild>
          <a href="#">Button as link</a>
        </Button>
        <br />
        <Button variant="secondary" icon={<ExternalLinkIcon />}>
          Button
        </Button>
      </Wrapper>
    </main>
  )
}
