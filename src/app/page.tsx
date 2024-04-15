import { Button, ExternalLinkIcon, Wrapper } from '@/components'

export default function Home() {
  return (
    <main>
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
