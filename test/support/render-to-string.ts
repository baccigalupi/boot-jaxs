import { JSDOM } from 'jsdom'
import { createApp } from 'jaxs'

export const renderToString = (template: any): string => {
  const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>')
  const { document } = dom.window

  const container = document.createElement('div')
  const app = createApp({ document })

  const tempId = `jaxs-test-${Math.random().toString(36).substr(2, 9)}`
  container.id = tempId
  document.body.appendChild(container)

  app.render(template, `#${tempId}`)

  const html = container.innerHTML

  return html
}
