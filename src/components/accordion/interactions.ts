import { JaxsTypes, RecordStore, ArrayModifiers } from 'jaxs'
import {
  createEventManagers,
  createStore,
  getStoreName,
} from '@components/event-generation'
import { idsFromString } from './presentation-logic'

export const component = 'accordion'
export type AccordionState = Record<string, string[]>
const initialState = {} as AccordionState
export const storeName = getStoreName(component)
export const subscriptions = [storeName]
export type SubscriptionMap = { [storeName]: AccordionState }

export const toggle = createEventManagers<AccordionState>({
  component,
  action: 'toggle',
})
const onToggle = ({ state, eventName }: JaxsTypes.ListenerKit<unknown>) => {
  const store = toggle.getStore(state)
  const eventId = toggle.match(eventName)
  const { accordionId, itemId } = idsFromString(eventId)
  const accordion = store.value[accordionId] || []

  if (accordion.includes(itemId)) {
    ArrayModifiers.remove(accordion, itemId)
  } else {
    ArrayModifiers.push(accordion, itemId)
  }

  RecordStore.updateAttribute(store, accordionId, accordion)
}

export const open = createEventManagers<AccordionState>({
  component,
  action: 'open',
})
const onOpen = ({ state, eventName }: JaxsTypes.ListenerKit<unknown>) => {
  const store = open.getStore(state)
  const eventId = open.match(eventName)
  const { accordionId, itemId } = idsFromString(eventId)
  const accordion = store.value[accordionId] || []
  ArrayModifiers.appendIfUnique(accordion, itemId)
  RecordStore.updateAttribute(store, accordionId, accordion)
}

export const close = createEventManagers<AccordionState>({
  component,
  action: 'close',
})
const onClose = ({ state, eventName }: JaxsTypes.ListenerKit<unknown>) => {
  const store = close.getStore(state)
  const eventId = close.match(eventName)
  const { accordionId, itemId } = idsFromString(eventId)
  const accordion = store.value[accordionId] || []
  ArrayModifiers.remove(accordion, itemId)
  RecordStore.updateAttribute(store, accordionId, accordion)
}

export const registerAccordions = (app: JaxsTypes.App) => {
  createStore(app, component, initialState)

  app.subscribe(toggle.matcher, onToggle)
  app.subscribe(open.matcher, onOpen)
  app.subscribe(close.matcher, onClose)
}
