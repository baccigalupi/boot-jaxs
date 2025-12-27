import { addClassesToBase } from '@components/presentation-logic'

type CollapseClassArguments = {
  show?: boolean
  horizontal?: boolean
  propClasses?: string
}

export const collapseClasses = ({
  show,
  horizontal,
  propClasses,
}: CollapseClassArguments) => {
  const baseClass = 'collapse'
  const horizontalClass = horizontal ? 'collapse-horizontal' : ''
  const showClass = show ? 'show' : ''

  return addClassesToBase(baseClass, [horizontalClass, showClass, propClasses])
}
