/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { Button, ButtonProps } from '../button/button'
import { ButtonGroup } from '@components/button-group/button-group'
import { addClassesToBase } from '@components/presentation-logic'
import { buttonClass } from '../button/presentation-logic'
import { toggle } from './interactions'

export type DropdownButtonSplitProps = JaxsTypes.Props<
  ButtonProps & { dropdownId: string }
>

export const DropdownButtonSplit = ({
  variant = 'primary',
  size,
  outline = false,
  class: propClass,
  children,
  dropdownId,
  onClick,
  ...props
}: DropdownButtonSplitProps) => {
  const secondaryId = props.id ? `${props.id}-slit` : undefined
  const buttonClasses = buttonClass({ variant, outline, size, propClass })
  const dropdownTriggerClasses = addClassesToBase(
    'dropdown-toggle dropdown-toggle-split',
    buttonClasses,
  )
  const onToggle = toggle.eventGenerator(dropdownId)

  return (
    <ButtonGroup>
      <Button
        {...props}
        variant={variant}
        outline={outline}
        size={size}
        class={buttonClasses}
        onClick={onClick}
      >
        {children}
      </Button>
      <Button
        class={dropdownTriggerClasses}
        id={secondaryId}
        onClick={onToggle}
      >
        <span class="visually-hidden">Toggle Dropdown</span>
      </Button>
    </ButtonGroup>
  )
}
