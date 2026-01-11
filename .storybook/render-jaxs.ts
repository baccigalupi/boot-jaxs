import { createApp } from 'jaxs'
import { registerDropdown } from '@components/dropdown/interactions'
import { registerAlerts, add as addAlert } from '@components/alert/interactions'
import {
  registerAccordions,
  open as openAccordion,
} from '@components/accordion/interactions'

// NOTE & TODO: This is too generic a render function. The registering
// of components really only applies to each page and sometimes to each story.
// It would be good to have a more flexible way to customize the setup.

export const renderJaxs = (template: any): HTMLElement => {
  const container = document.createElement('div')
  const app = createApp({ document })
  registerDropdown(app)
  registerAlerts(app)
  registerAccordions(app)

  // app.subscribe(/.*/, console.log)

  app.publish(addAlert.eventGenerator('dismissible-alert'), null)
  app.publish(openAccordion.eventGenerator('accordionExample:item1'), null)
  app.publish(openAccordion.eventGenerator('accordionDefault:item1'), null)
  app.publish(openAccordion.eventGenerator('accordionFlush:item1'), null)


  const tempId = `jaxs-story-${Math.random().toString(36).substr(2, 9)}`
  container.id = tempId
  document.body.appendChild(container)

  app.render(template, `#${tempId}`)

  // Remove from body and return the container with rendered content
  document.body.removeChild(container)

  return container
}
