import { createApp } from 'jaxs'

export const renderJaxs = (template: any): HTMLElement => {
  const container = document.createElement('div')
  const app = createApp({ document })
  
  const tempId = `jaxs-story-${Math.random().toString(36).substr(2, 9)}`
  container.id = tempId
  document.body.appendChild(container)
  
  app.render(template, `#${tempId}`)
  
  // Remove from body and return the container with rendered content
  document.body.removeChild(container)
  
  return container
}
