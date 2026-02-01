import { addClassesToBase } from '@components/presentation-logic'
import { CloseButtonProps } from './close-button'

export const viewModel = ({
  white = false,
  class: propsClass,
}: CloseButtonProps) => {
  const whiteClass = white ? 'btn-close-white' : ''
  const buttonClass = addClassesToBase('btn-close', [whiteClass, propsClass])

  return {
    class: buttonClass,
  }
}
