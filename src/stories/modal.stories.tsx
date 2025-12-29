/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'
import type { Meta, StoryObj } from '@storybook/html'
import { renderJaxs } from '../../.storybook/render-jaxs'
import type { ModalProps } from '../components/modal/modal'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '../components/modal/modal'
import { Button } from '../components/button/button'

const meta = {
  title: 'Bootstrap/Modal',
  tags: ['autodocs'],
  render: () =>
    renderJaxs(
      <Modal id="example-modal" visible={true} class="bg-secondary-subtle position-static d-block">
        <ModalContent>
          <ModalHeader>
            <h5 class="modal-title">Modal title</h5>
          </ModalHeader>
          <ModalBody>Modal body text goes here.</ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick="close-modal">
              Close
            </Button>
            <Button variant="primary" onClick="save-changes">
              Save changes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>,
    ),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from './components/modal/modal'
import { Button } from './components/button/button'

<Modal id="example-modal" visible={true}>
  <ModalContent>
    <ModalHeader>
      <h5 class="modal-title">Modal title</h5>
    </ModalHeader>
    <ModalBody>Modal body text goes here.</ModalBody>
    <ModalFooter>
      <Button variant="secondary" onClick="close-modal">
        Close
      </Button>
      <Button variant="primary" onClick="save-changes">
        Save changes
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>
`,
      },
    },
  },
} satisfies Meta<ModalProps>

export default meta

type Story = StoryObj<ModalProps>

export const Default: Story = {}

export const Scrollable: Story = {
  render: () =>
    renderJaxs(
      <div class="vh-100 d-flex align-items-center">
        <Modal id="scrollable-modal" visible={true} class="bg-secondary-subtle position-static d-block">
          <ModalContent scrollable={true}>
            <ModalHeader>
              <h5 class="modal-title">Scrollable modal</h5>
            </ModalHeader>
            <ModalBody>
              <p>
                This is a scrollable modal. When content exceeds the modal height,
                the modal body will scroll.
              </p>
              {Array.from({ length: 20 }, (_, i) => (
                <p>Paragraph {i + 1} of repeated content.</p>
              ))}
            </ModalBody>
            <ModalFooter>
              <Button variant="secondary" onClick="close-modal">
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>,
    ),
}
