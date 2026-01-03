import { addClassesToBase } from '@components/presentation-logic'
import { Placement } from '@components/types'

export const tooltipClass = (placement?: Placement, propClasses?: string) => {
  const placementClass = placement ? `tooltip-${placement}` : ''
  return addClassesToBase('tooltip show', [placementClass, propClasses])
}
