import { addClassesToBase } from '@components/presentation-logic'

type PlaceholderClassProps = {
  size?: 'xs' | 'sm' | 'lg'
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
  animation?: 'glow' | 'wave'
  propClasses?: string
}

export const placeholderClass = ({
  size,
  color,
  animation,
  propClasses,
}: PlaceholderClassProps): string => {
  const sizeClass = size ? `placeholder-${size}` : ''
  const colorClass = color ? `bg-${color}` : ''
  const animationClass = animation ? `placeholder-${animation}` : ''

  return addClassesToBase('placeholder', [
    sizeClass,
    colorClass,
    animationClass,
    propClasses,
  ])
}
