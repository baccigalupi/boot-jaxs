import { JaxsTypes } from 'jaxs'
import {
  componentNamePrefix,
  createEventManagers,
} from '@components/event-generation'
import { onDocumentClick } from '@components/document'

// Initial setup
export const component = 'dropdown'
export const dropdownStoreName = componentNamePrefix({ component })
const initialState: DropdownsState = []
export type DropdownsState = string[] // array of dropdown ids that are open
export const createDropdownStore = (app: JaxsTypes.App) => {
  return app.state.create<DropdownsState>(dropdownStoreName, initialState)
}

// Close handling
export const close = createEventManagers({
  component,
  action: 'close',
})

export const closeDropdown = ({
  eventName,
  state,
}: JaxsTypes.ListenerKit<Event | null>) => {
  const dropdownId = close.match(eventName)
  if (!dropdownId) return

  const store = state.store<DropdownsState>(dropdownStoreName)
  removeDropdownFromStore(store, dropdownId)
}

// Toggle handling
export const toggle = createEventManagers({
  component,
  action: 'toggle',
})

const toggleDropdown: JaxsTypes.BusListener<MouseEvent> = ({
  eventName,
  state,
  publish,
  payload: event,
}: JaxsTypes.ListenerKit<Event>) => {
  const dropdownId = toggle.match(eventName)
  if (!dropdownId) return

  event.stopPropagation()

  const store = state.store<DropdownsState>(dropdownStoreName)
  if (store.value.includes(dropdownId)) {
    removeDropdownFromStore(store, dropdownId)
  } else {
    onDocumentClick(() => publish(close.eventGenerator(dropdownId), null))
    store.update((currentState) => [...currentState, dropdownId])
  }
}

const removeDropdownFromStore = (
  store: JaxsTypes.Store<DropdownsState>,
  id: string,
) => {
  store.update((currentState) =>
    currentState.filter((dropdownId) => dropdownId !== id),
  )
}

// Registration
export const subscribeToDropdownEvents = (app: JaxsTypes.App) => {
  app.subscribe(toggle.matcher, toggleDropdown)
  app.subscribe(close.matcher, closeDropdown)
}

export const registerDropdown = (app: JaxsTypes.App) => {
  createDropdownStore(app)
  subscribeToDropdownEvents(app)
}
