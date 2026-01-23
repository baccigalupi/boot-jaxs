import { addClassesToBase } from '@components/presentation-logic'
import { CollapseState } from './interactions'

type CollapseClassArguments = {
  show?: boolean
  animating?: boolean
  horizontal?: boolean
  propClasses?: string
}

export const collapseClasses = ({
  show,
  animating,
  horizontal,
  propClasses,
}: CollapseClassArguments) => {
  const baseClass = animating ? 'collapsing' : 'collapse'
  const horizontalClass = horizontal ? 'collapse-horizontal' : ''
  const showClass = show ? 'show' : ''

  return addClassesToBase(baseClass, [horizontalClass, showClass, propClasses])
}

type AnimationArguments = { collapseCollection: CollapseState[]; id: string }

export const isShowing = ({ collapseCollection, id }: AnimationArguments) => {
  const found = collapseCollection.find((collapse) => collapse.id === id)
  if (!found) return false

  return found.openState === 'show'
}

export const isAnimating = ({ collapseCollection, id }: AnimationArguments) => {
  const found = collapseCollection.find((collapse) => collapse.id === id)
  if (!found) return false

  return found.openState === 'animating'
}
