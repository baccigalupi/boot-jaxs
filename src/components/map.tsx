/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from './types'

// TODO: move to Jaxs
// Also switch to coponent syntax in Jaxs

interface HasToProps<T> {
  toProps(): JaxsTypes.Props<T & HTMLAttributes>
}

export type MapProps<T> = JaxsTypes.Props<{
  items: HasToProps<T>[]
  component: JaxsTypes.TypedTemplate<T>
}>

export const Map = <T,>({ items, component: Component }: MapProps<T>) => {
  const itemProps = items.map((item) => item.toProps())

  return (
    <>
      {itemProps.map((props) => (
        <Component {...props} />
      ))}
    </>
  )
}
