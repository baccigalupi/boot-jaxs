import { addClassesToBase } from '@components/presentation-logic'

type modalClassNameProps = {
  propClasses?: string
  visible?: boolean
}
export const modalClassName = ({
  propClasses,
  visible = false,
}: modalClassNameProps): string => {
  // 'fade show'
  // 'position-static d-block'
  const visibilityClass = visible ? 'fade show dislpay-block' : ''

  return addClassesToBase('modal', [visibilityClass, propClasses])
}

type ModalDialogClassNameProps = {
  scrollable?: boolean
  propClasses?: string
}

export const modalDialogClassName = ({
  scrollable = false,
  propClasses,
}: ModalDialogClassNameProps): string => {
  const scrollableClass = scrollable ? 'modal-dialog-scrollable' : ''
  return addClassesToBase('modal-dialog', [scrollableClass, propClasses])
}
