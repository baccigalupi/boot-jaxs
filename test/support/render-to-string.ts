import { JSDOM } from 'jsdom'
import { createApp, JaxsTypes } from 'jaxs'

export const renderToString = (
  template: JaxsTypes.Renderable,
): string => {
  const app = buildAppForRendering()

  app.render(template, '#jaxs-test')
  return app.document.getElementById('jaxs-test')!.innerHTML
}

type Registration = (app: JaxsTypes.App) => void
export const renderWithRegistrations = (
  template: JaxsTypes.Renderable,
  registrations: Registration[] = [],
): string => {
  const app = buildAppForRendering(registrations)
  app.render(template, '#jaxs-test')

  return app.document.getElementById('jaxs-test')!.innerHTML
}

export const buildAppForRendering = (registrations: Registration[] = [], id: string = 'jaxs-test') => {
  const dom = new JSDOM(
    `<!DOCTYPE html><html><body><div id="${id}"></div></body></html>`,
  )
  const { document } = dom.window
  const app = createApp({ document })
  registrations.forEach((register) => register(app))
  return app
}

export const renderWithApp = (
  template: JaxsTypes.Renderable,
  app: JaxsTypes.App,
) => {
  app.render(template, '#jaxs-test')
  return app.document.getElementById('jaxs-test')!.innerHTML
}
