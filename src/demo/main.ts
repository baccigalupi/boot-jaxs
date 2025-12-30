import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/backfill.css'
import { createApp } from 'jaxs'
import { App } from './app'

const app = createApp({ document })
app.render(App(), '#app')
