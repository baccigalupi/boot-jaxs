import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/backfill.css'
import { createApp } from 'jaxs'
import { App } from './app'
import { registerDropdown } from '@components/dropdown/interactions'

const app = createApp()
registerDropdown(app)
app.subscribe(/.*/, console.log) // to show all events for debugging
app.render(App(), '#app')
