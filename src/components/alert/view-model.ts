import { storeName, remove, type SubscriptionMap } from './interactions'
import { addClassesToBase } from '@components/presentation-logic'
import { StyleVariant } from '@components/types'
import type { AlertTemplateProps } from './alert'

type AlertViewModelProps = {
  id: string
  variant?: StyleVariant
  dismissible?: boolean
  class?: string
}

export class AlertViewModel {
  subscriptions: SubscriptionMap
  id: string
  variant: StyleVariant
  dismissible: boolean
  propClasses?: string

  constructor(
    subscriptions: SubscriptionMap,
    {
      id,
      variant = 'primary',
      dismissible = false,
      class: propClasses,
    }: AlertViewModelProps,
  ) {
    this.subscriptions = subscriptions
    this.id = id
    this.variant = variant
    this.dismissible = dismissible
    this.propClasses = propClasses
  }

  show(): boolean {
    if (!this.dismissible) return true

    return this.alerts().includes(this.id)
  }

  className(): string {
    return addClassesToBase(this.baseClass(), [
      this.dismissibleClass(),
      this.propClasses,
    ])
  }

  onClick(): string {
    return remove.eventGenerator(this.id)
  }

  toProps(): Partial<AlertTemplateProps> {
    return {
      class: this.className(),
      show: this.show(),
      dismissible: this.dismissible,
      onClick: this.onClick(),
    }
  }

  private alerts(): string[] {
    return this.subscriptions[storeName]
  }

  private dismissibleClass(): string {
    return this.dismissible ? 'alert-dismissible fade show' : ''
  }

  private baseClass(): string {
    return `alert alert-${this.variant}`
  }
}

export const viewModel = (
  subscriptions: SubscriptionMap,
  props: AlertViewModelProps,
): Partial<AlertTemplateProps> => {
  return new AlertViewModel(subscriptions, props).toProps()
}
