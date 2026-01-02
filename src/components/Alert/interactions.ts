import { JaxsTypes, ListStore } from 'jaxs'
import { createEventManagers, getStoreName } from '@components/event-generation'

export const componentName = 'alert'
export type AlertsState = string[]
const initialState = [] as AlertsState

const createStore = (app: JaxsTypes.App) => {
  const storeName = getStoreName(componentName)
  return app.state.create<AlertsState>(storeName, initialState)
}

const add = createEventManagers<AlertsState>({
  component: componentName,
  action: 'add',
})

const remove = createEventManagers<AlertsState>({
  component: componentName,
  action: 'remove',
})

export const removeAlert: JaxsTypes.BusListener<unknown> = ({
  state,
  eventName,
}: JaxsTypes.ListenerKit<any>) => {
  const store = remove.getStore(state)
  const id = remove.match(eventName)
  ListStore.remove(store, id)
}

export const addAlert: JaxsTypes.BusListener<unknown> = ({
  state,
  eventName,
}: JaxsTypes.ListenerKit<any>) => {
  const store = add.getStore(state)
  const id = add.match(eventName)
  ListStore.appendIfUnique(store, id)
}

export const registerComponent = (app: JaxsTypes.App) => {
  createStore(app)

  app.subscribe(remove.matcher, removeAlert)
  app.subscribe(add.matcher, addAlert)
}
