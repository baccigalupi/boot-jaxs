import { addClassesToBase } from '@components/presentation-logic'

type CaroselClassArguments = {
  fade?: boolean
  dark?: boolean
  propClasses?: string | undefined
}
export const caroselClasses = ({
  fade,
  dark,
  propClasses,
}: CaroselClassArguments) => {
  const baseClass = 'carousel slide'
  const fadeClass = fade ? 'carousel-fade' : ''
  const darkClass = dark ? 'carousel-dark' : ''

  return addClassesToBase(baseClass, [fadeClass, darkClass, propClasses])
}

type CaroselItemClassesArguments = {
  propClasses?: string
  active: boolean
}
export const caroselItemClasses = ({
  propClasses,
  active,
}: CaroselItemClassesArguments) => {
  const baseClass = 'carousel-item'
  const activeCrass = active ? 'active' : ''
  
  return addClassesToBase(baseClass, [activeCrass, propClasses])
}
