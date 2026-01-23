import { JaxsTypes, ListStore } from 'jaxs'
import {
  createEventManagers,
  createStore,
  getStoreName,
} from '@components/event-generation'

// NOTE: Bootsrap allows this to be dynamic, and currently the framework doesn't
// allow this to be customized at all. Ideal would be per usage.

// Another thing that is not handled is the multiple collapse case
const ANIMATION_DURATION = 0.35 * 1000 + 20 // Bootstrap default + buffer
export const component = 'collapse'
type CollapseOpenState = 'show' | 'animating'
export type CollapseState = {
  id: string
  openState: CollapseOpenState
}
export type CollapsesState = CollapseState[]
const initialState: CollapsesState = []
export const storeName = getStoreName(component)
export const subscriptions = [storeName]

// TODO: make this more generic?
export const idMatcher =
  (id: string) =>
  ({ id: itemId }: CollapseState) =>
    id === itemId

export const viewModel = (subscriptions: { [storeName]: CollapsesState }) => {
  const collapseCollection = subscriptions[storeName]
  return { collapseCollection }
}

export const toggle = createEventManagers<CollapsesState>({
  component,
  action: 'toggle',
})

const onToggle = ({
  state,
  eventName,
  publish,
}: JaxsTypes.ListenerKit<unknown>) => {
  const store = toggle.getStore(state)
  const id = toggle.match(eventName)
  const found = ListStore.find(store, idMatcher(id))

  if (found) {
    const collapseState: CollapseState = { id, openState: 'animating' }
    ListStore.replace(store, found, collapseState)
    publish.withTimeout(close.eventGenerator(id), {
      timeout: ANIMATION_DURATION,
    })
  } else {
    const collapseState: CollapseState = { id, openState: 'animating' }
    ListStore.push(store, collapseState)
    publish.withTimeout(show.eventGenerator(id), {
      timeout: ANIMATION_DURATION,
    })
  }
}

export const show = createEventManagers<CollapsesState>({
  component,
  action: 'show',
})

const onShow = ({ state, eventName }: JaxsTypes.ListenerKit<unknown>) => {
  const store = show.getStore(state)
  const id = show.match(eventName)
  const collapseState: CollapseState = { id, openState: 'show' }

  const found = ListStore.find(store, idMatcher(id))
  if (found) {
    ListStore.replace(store, found, collapseState)
  } else {
    ListStore.push(store, collapseState)
  }
}

export const close = createEventManagers<CollapsesState>({
  component,
  action: 'close',
})
const onClose = ({ state, eventName }: JaxsTypes.ListenerKit<unknown>) => {
  const store = close.getStore(state)
  const id = close.match(eventName)
  const found = ListStore.find(store, idMatcher(id))
  if (found) {
    ListStore.remove(store, found)
  }
}

export const registerCollapses = (app: JaxsTypes.App) => {
  createStore(app, component, initialState)

  app.subscribe(toggle.matcher, onToggle)
  app.subscribe(show.matcher, onShow)
  app.subscribe(close.matcher, onClose)
}
