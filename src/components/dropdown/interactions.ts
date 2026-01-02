import { JaxsTypes, ListStore } from 'jaxs'
import {
  getStoreName,
  createEventManagers,
  createStore,
} from '@components/event-generation'
import { onDocumentClick } from '@components/document'

// Initial setup
export const component = 'dropdown'
export const dropdownStoreName = getStoreName(component)
export type DropdownsState = string[] // array of dropdown ids that are open
const initialState: DropdownsState = []

// Close handling
export const close = createEventManagers<DropdownsState>({
  component,
  action: 'close',
})

export const toggle = createEventManagers<DropdownsState>({
  component,
  action: 'toggle',
})

export const closeDropdown = ({
  eventName,
  state,
}: JaxsTypes.ListenerKit<Event | null>) => {
  const id = close.match(eventName)
  const store = close.getStore(state)
  ListStore.remove(store, id)
}

const toggleDropdown: JaxsTypes.BusListener<MouseEvent> = ({
  eventName,
  state,
  publish,
  payload: event,
}: JaxsTypes.ListenerKit<Event>) => {
  const id = toggle.match(eventName)

  // to avoid the document listener automatically firing to close the dropdown
  event.stopPropagation()

  const store = toggle.getStore(state)

  if (ListStore.includes(store, id)) {
    ListStore.remove(store, id)
  } else {
    onDocumentClick(() => publish(close.eventGenerator(id), null))
    ListStore.push(store, id)
  }
}

// Registration
export const subscribeToDropdownEvents = (app: JaxsTypes.App) => {
  app.subscribe(toggle.matcher, toggleDropdown)
  app.subscribe(close.matcher, closeDropdown)
}

export const registerDropdown = (app: JaxsTypes.App) => {
  createStore(app, component, initialState)
  subscribeToDropdownEvents(app)
}
