import { addClassesToBase } from '@components/presentation-logic'

type CloseButtonClassArguments = {
  white?: boolean
  propClasses?: string
}

export const closeButtonClasses = ({
  white,
  propClasses,
}: CloseButtonClassArguments) => {
  const baseClass = 'btn-close'
  const whiteClass = white ? 'btn-close-white' : ''

  return addClassesToBase(baseClass, [whiteClass, propClasses])
}
