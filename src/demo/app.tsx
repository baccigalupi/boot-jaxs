/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'

import { Alert } from '../components/alert/alert'
import { PageNavbar } from './app/navbar'

export const App = () => {
  return (
    <div class="container my-5">
      <PageNavbar />

      <Alert id="info-alert" variant="info" dismissible={true} class="mb-4">
        Welcome to the Boot-Jaxs component library! This is a demo page to
        experiment with components.
      </Alert>

      <div class="row mb-4"></div>
    </div>
  )
}
