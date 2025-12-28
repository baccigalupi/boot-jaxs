/// <reference types="./env.d.ts" />
import type { Preview } from '@storybook/html'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/styles/backfill.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
