import { JaxsTypes } from 'jaxs'

export const componentName = 'boot-jaxs:alert'
export type BootJaxsAlertState = string[]
const initialState = [] as BootJaxsAlertState

const alertMatch = (listKey: string, eventKey: string) => listKey === eventKey
const getAlertId = (eventName: string) => eventName.split(':').pop() || ''

export const removeAlert: JaxsTypes.BusListener<unknown> = (
  _payload: unknown,
  listenerKit: JaxsTypes.ListenerKit,
) => {
  const { state, eventName } = listenerKit
  const store = state.store<BootJaxsAlertState>(componentName)
  const id = getAlertId(eventName)
  const updatedValue = [...store.value].filter(
    (alert) => !alertMatch(alert, id),
  )
  store.update(updatedValue)
}

export const addAlert: JaxsTypes.BusListener<unknown> = (
  _payload: unknown,
  listenerKit: JaxsTypes.ListenerKit,
) => {
  const { state, eventName } = listenerKit
  const store = state.store<BootJaxsAlertState>(componentName)
  const id = getAlertId(eventName)
  if (!store.value.includes(id)) {
    const updatedValue = [...store.value, id]
    store.update(updatedValue)
  }
}

export const registerComponent = (app: JaxsTypes.App) => {
  const { state } = app
  const store = state.create<BootJaxsAlertState>(componentName, initialState)

  app.subscribe(new RegExp(`${componentName}:remove:.+`), removeAlert)
  app.subscribe(new RegExp(`${componentName}:add:.+`), addAlert)

  return store
}
