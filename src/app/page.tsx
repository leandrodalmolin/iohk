import { Button, ExternalLinkIcon } from '@/components'

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl font-semibold">IOHK</h1>
      <Button asChild>
        <a href="#">Button as link</a>
      </Button>
      <br />
      <Button variant="secondary" icon={<ExternalLinkIcon />}>
        Button
      </Button>
    </main>
  )
}
