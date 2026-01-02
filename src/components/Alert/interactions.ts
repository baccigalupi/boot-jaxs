import { JaxsTypes, ListStore } from 'jaxs'
import { createEventManagers, createStore } from '@components/event-generation'

export const componentName = 'alert'
export type AlertsState = string[]
const initialState = [] as AlertsState

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
  createStore(app, componentName, initialState)

  app.subscribe(remove.matcher, removeAlert)
  app.subscribe(add.matcher, addAlert)
}
