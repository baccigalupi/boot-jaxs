import { JaxsTypes } from 'jaxs'

type ComponentAction = { component: string; action: string }

export const baseEvent = 'boot-jaxs'
export const componentNamePrefix = ({ component }: { component: string }) => {
  return `${baseEvent}:${component}`
}

export const generateEvent = (
  component: string,
  action: string,
  id?: string,
) => {
  const prefix = componentNamePrefix({ component })
  if (id) {
    return `${prefix}:${action}:${id}`
  } else {
    return `${prefix}:${action}`
  }
}

export const eventGeneratorFor = ({
  component,
  action,
}: {
  component: string
  action: string
}) => {
  return (id: string) => generateEvent(component, action, id)
}

export const generateMatcher = ({ component, action }: ComponentAction) => {
  const prefix = `${baseEvent}:${component}:${action}`
  return new RegExp(`${prefix}:(.+)`)
}

export const eventIdMatch = (matcher: RegExp) => (eventName: string) => {
  return eventName.match(matcher)?.[1] || ''
}

export const getStoreName = (component: string) => {
  return componentNamePrefix({ component })
}

export const getStore = <T>(componentAction: ComponentAction) => {
  const name = getStoreName(componentAction.component)
  return (state: JaxsTypes.State) => state.store<T>(name)
}

export const createStore = <T>(
  app: JaxsTypes.App,
  componentName: string,
  initialState: T,
) => {
  const storeName = getStoreName(componentName)
  return app.state.create<T>(storeName, initialState)
}

export const createEventManagers = <T>(componentAction: ComponentAction) => {
  const matcher = generateMatcher(componentAction)
  return {
    matcher: matcher,
    eventGenerator: eventGeneratorFor(componentAction),
    match: eventIdMatch(matcher),
    getStoreName: getStoreName(componentAction.component),
    getStore: getStore<T>(componentAction),
  }
}
