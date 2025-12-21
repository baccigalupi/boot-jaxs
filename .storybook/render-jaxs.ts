import { createApp } from 'jaxs'

// Create a single shared JAXS app instance for all stories
const storybookApp = createApp({ document })

// Export the app so components can access it
export const getStorybookApp = () => storybookApp

// Create a simple render function for Storybook
export const renderJaxs = (template: any): HTMLElement => {
  const container = document.createElement('div')
  
  // Render the template into a temporary container
  const tempId = `jaxs-story-${Math.random().toString(36).substr(2, 9)}`
  container.id = tempId
  document.body.appendChild(container)
  
  storybookApp.render(template, `#${tempId}`)
  
  // Remove from body and return the container with rendered content
  document.body.removeChild(container)
  
  return container
}
