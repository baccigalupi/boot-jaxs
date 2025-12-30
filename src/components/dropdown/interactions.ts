import { JaxsTypes } from 'jaxs'
import {
  generateMatcher,
  eventGeneratorFor,
  componentNamePrefix,
} from '@components/event-generation'

export const component = 'dropdown'

const toggleAction = {
  component,
  action: 'toggle',
}
export const toggleDropdownMatcher = generateMatcher(toggleAction)
export const generateToggleEvent = eventGeneratorFor(toggleAction)

export const dropdownStoreName = componentNamePrefix({ component })
const initialState: DropdownsState = []
export type DropdownsState = string[] // array of dropdown ids that are open
export const createDropdownStore = (app: JaxsTypes.App) => {
  return app.state.create<DropdownsState>(dropdownStoreName, initialState)
}

const toggleDropdown: JaxsTypes.BusListener<MouseEvent> = (
  _event: MouseEvent,
  { eventName, state }: JaxsTypes.ListenerKit) => {
  const dropdownId = eventName.match(toggleDropdownMatcher)?.[1]
  if (!dropdownId) return

  const store = state.store<DropdownsState>(dropdownStoreName)
  if (store.value.includes(dropdownId)) {
    store.update((current) =>
      current.filter((id) => id !== dropdownId)
    )
  } else {
    store.update((current) => [...current, dropdownId])
  }
}

export const subscribeToDropdownEvents = (app: JaxsTypes.App) => {
  app.subscribe(toggleDropdownMatcher, toggleDropdown)
}

export const registerDropdown = (app: JaxsTypes.App) => {
  createDropdownStore(app)
  subscribeToDropdownEvents(app)
}