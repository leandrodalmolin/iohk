import { cva } from 'class-variance-authority'

export const buttonStyles = cva(
  [
    'inline-flex items-center gap-2 rounded-2xl px-4 pb-3 pt-2.5',
    'text-base font-semibold leading-tight transition-colors',
  ],
  {
    variants: {
      variant: {
        primary: 'bg-lavender-100 hover:bg-lavender-200',
        secondary: 'bg-peach-100 hover:bg-peach-200',
      },
      defaultVariants: {
        variant: 'primary',
      },
    },
  },
)
