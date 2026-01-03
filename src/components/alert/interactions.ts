import { JaxsTypes, ListStore } from 'jaxs'
import {
  createEventManagers,
  createStore,
  getStoreName,
} from '@components/event-generation'

export const component = 'alert'
export type AlertsState = string[]
const initialState = [] as AlertsState
export const storeName = getStoreName(component)
export const viewModelSubscriptions = [storeName]

export const add = createEventManagers<AlertsState>({
  component,
  action: 'add',
})

export const remove = createEventManagers<AlertsState>({
  component,
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

export const registerAlerts = (app: JaxsTypes.App) => {
  createStore(app, component, initialState)

  app.subscribe(remove.matcher, removeAlert)
  app.subscribe(add.matcher, addAlert)
}

export const viewModel = (subscriptions: { [storeName]: AlertsState }) => {
  const alerts = subscriptions[storeName]
  return { alerts }
}
