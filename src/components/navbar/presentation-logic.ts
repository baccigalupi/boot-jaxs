import { addClassesToBase } from '@components/presentation-logic'

type NavLinkClassProps = {
  active?: boolean
  disabled?: boolean
  propClasses?: string
}

export const navLinkClasses = ({
  active = false,
  disabled = false,
  propClasses,
}: NavLinkClassProps): string => {
  const activeClass = active ? 'active' : undefined
  const disabledClass = disabled ? 'disabled' : undefined

  return addClassesToBase('nav-link', [activeClass, disabledClass, propClasses])
}
