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
