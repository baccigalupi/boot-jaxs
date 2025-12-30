export const baseEvent = 'boot-jaxs'

export const createEventName = (
  component: string,
  action: string,
  id?: string,
) => {
  if (id) {
    return `${baseEvent}:${component}:${action}:${id}`
  } else {
    return `${baseEvent}:${component}:${action}`
  }
}
