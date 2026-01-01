import { addClassesToBase } from '@components/presentation-logic'

type NavClassProps = {
  tabs?: boolean
  pills?: boolean
  underline?: boolean
  fill?: boolean
  justified?: boolean
  vertical?: boolean
}

export const navClass = ({
  tabs,
  pills,
  underline,
  fill,
  justified,
  vertical,
}: NavClassProps) => {
  const classes = [
    tabs ? 'nav-tabs' : '',
    pills ? 'nav-pills' : '',
    underline ? 'nav-underline' : '',
    fill ? 'nav-fill' : '',
    justified ? 'nav-justified' : '',
    vertical ? 'flex-column' : '',
  ]
  return addClassesToBase('nav', classes)
}

type NavLinkClassProps = {
  active?: boolean
  disabled?: boolean
}

export const navLinkClass = ({ active, disabled }: NavLinkClassProps) => {
  const classes = [
    active ? 'active' : '',
    disabled ? 'disabled' : '',
  ]
  return addClassesToBase('nav-link', classes)
}

type TabPaneClassProps = {
  active?: boolean
  fade?: boolean
  show?: boolean
}

export const tabPaneClass = ({ active, fade, show }: TabPaneClassProps) => {
  const classes = [
    'tab-pane',
    fade ? 'fade' : '',
    active ? 'active' : '',
    show ? 'show' : '',
  ]
  return classes.filter(c => c).join(' ').trim()
}
