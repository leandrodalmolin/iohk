import { ReactNode } from 'react'
import { VariantProps } from 'class-variance-authority'
import { buttonStyles } from './button.styles'

export type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonStyles> & {
    asChild?: boolean
    children: ReactNode
    icon?: ReactNode
  }
