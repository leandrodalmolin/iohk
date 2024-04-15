import { WrapperProps } from './wrapper.types'

export function Wrapper({ as: Comp = 'section', children }: WrapperProps) {
  return <Comp className="mx-auto max-w-6xl px-7">{children}</Comp>
}
