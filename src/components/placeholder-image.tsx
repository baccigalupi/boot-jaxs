/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'
import { addClassesToBase } from './presentation-logic'

export const PlaceholderImage = ({
  color = '#4d4d4dff',
  text = 'Placeholder image',
  alt = 'Placeholder image',
  height = '100%',
  fontSize = '3rem',
  class: className,
}: {
  color?: string
  text?: string
  alt?: string
  class?: string
  height?: string
  fontSize?: string
}) => {
  const classes = addClassesToBase('d-block w-100', className)

  return (
    <svg
      class={classes}
      width="100%"
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={alt}
      preserveAspectRatio="xMidYMid slice"
    >
      <title>{alt}</title>
      <rect width="100%" height="100%" fill={color}></rect>
      <text
        x="50%"
        y="50%"
        fill="#ffffff"
        dominant-baseline="middle"
        text-anchor="middle"
        dy=".3em"
        font-size={fontSize}
      >
        {text}
      </text>
    </svg>
  )
}
