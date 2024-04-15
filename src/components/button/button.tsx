import { Slot, Slottable } from '@radix-ui/react-slot'
import { ButtonProps } from './button.types'
import { buttonStyles } from './button.styles'

/**
 * Serve as both a button and a wrapper for other elements and components,
 * such as anchors and Next Links, by utilizing the "asChild" prop.
 * This enables easy reuse of its styles across different contexts.
 */
export function Button({
  asChild = false,
  children,
  icon,
  variant = 'primary',
  ...rest
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp className={buttonStyles({ variant })} {...rest}>
      {icon}
      <Slottable>{children}</Slottable>
    </Comp>
  )
}
