/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'
import type { Meta, StoryObj } from '@storybook/html'
import { renderJaxs } from '../../.storybook/render-jaxs'
import {
  Pagination,
  PaginationItem,
  PaginationLink,
} from '../components/pagination/pagination'

const BasicPagination = () => {
  return (
    <Pagination>
      <PaginationItem>
        <PaginationLink href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  )
}

const PaginationWithIcons = () => {
  return (
    <Pagination>
      <PaginationItem>
        <PaginationLink href="#">Previous</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">Next</PaginationLink>
      </PaginationItem>
    </Pagination>
  )
}

const DisabledAndActivePagination = () => {
  return (
    <Pagination>
      <PaginationItem disabled>
        <PaginationLink disabled aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  )
}

const SmallPagination = () => {
  return (
    <Pagination size="sm">
      <PaginationItem>
        <PaginationLink href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  )
}

const LargePagination = () => {
  return (
    <Pagination size="lg">
      <PaginationItem>
        <PaginationLink href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  )
}

const CenteredPagination = () => {
  return (
    <div class="d-flex justify-content-center">
      <Pagination>
        <PaginationItem disabled>
          <PaginationLink disabled aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </PaginationLink>
        </PaginationItem>
        <PaginationItem active>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    </div>
  )
}

const RightAlignedPagination = () => {
  return (
    <div class="d-flex justify-content-end">
      <Pagination>
        <PaginationItem>
          <PaginationLink href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem active>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    </div>
  )
}

const meta: Meta = {
  title: 'Bootstrap/Pagination',
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        language: 'tsx',
      },
    },
  },
}

export default meta

type Story = StoryObj

export const Default: Story = {
  render: () => renderJaxs(BasicPagination()),
  parameters: {
    docs: {
      source: {
        code: `import {
  Pagination,
  PaginationItem,
  PaginationLink,
} from './components/pagination/pagination'

<Pagination>
  <PaginationItem>
    <PaginationLink href="#" aria-label="Previous">
      <span aria-hidden="true">&laquo;</span>
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">1</PaginationLink>
  </PaginationItem>
  <PaginationItem active>
    <PaginationLink href="#">2</PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">3</PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#" aria-label="Next">
      <span aria-hidden="true">&raquo;</span>
    </PaginationLink>
  </PaginationItem>
</Pagination>`,
      },
    },
  },
}

export const WithText: Story = {
  render: () => renderJaxs(PaginationWithIcons()),
  parameters: {
    docs: {
      source: {
        code: `import {
  Pagination,
  PaginationItem,
  PaginationLink,
} from './components/pagination/pagination'

<Pagination>
  <PaginationItem>
    <PaginationLink href="#">Previous</PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">1</PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">2</PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">3</PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">Next</PaginationLink>
  </PaginationItem>
</Pagination>`,
      },
    },
  },
}

export const DisabledAndActive: Story = {
  render: () => renderJaxs(DisabledAndActivePagination()),
  parameters: {
    docs: {
      source: {
        code: `import {
  Pagination,
  PaginationItem,
  PaginationLink,
} from './components/pagination/pagination'

<Pagination>
  <PaginationItem disabled>
    <PaginationLink disabled aria-label="Previous">
      <span aria-hidden="true">&laquo;</span>
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">1</PaginationLink>
  </PaginationItem>
  <PaginationItem active>
    <PaginationLink href="#">2</PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">3</PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#" aria-label="Next">
      <span aria-hidden="true">&raquo;</span>
    </PaginationLink>
  </PaginationItem>
</Pagination>`,
      },
    },
  },
}

export const Small: Story = {
  render: () => renderJaxs(SmallPagination()),
  parameters: {
    docs: {
      source: {
        code: `import {
  Pagination,
  PaginationItem,
  PaginationLink,
} from './components/pagination/pagination'

<Pagination size="sm">
  <PaginationItem>
    <PaginationLink href="#" aria-label="Previous">
      <span aria-hidden="true">&laquo;</span>
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">1</PaginationLink>
  </PaginationItem>
  <PaginationItem active>
    <PaginationLink href="#">2</PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">3</PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#" aria-label="Next">
      <span aria-hidden="true">&raquo;</span>
    </PaginationLink>
  </PaginationItem>
</Pagination>`,
      },
    },
  },
}

export const Large: Story = {
  render: () => renderJaxs(LargePagination()),
  parameters: {
    docs: {
      source: {
        code: `import {
  Pagination,
  PaginationItem,
  PaginationLink,
} from './components/pagination/pagination'

<Pagination size="lg">
  <PaginationItem>
    <PaginationLink href="#" aria-label="Previous">
      <span aria-hidden="true">&laquo;</span>
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">1</PaginationLink>
  </PaginationItem>
  <PaginationItem active>
    <PaginationLink href="#">2</PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">3</PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#" aria-label="Next">
      <span aria-hidden="true">&raquo;</span>
    </PaginationLink>
  </PaginationItem>
</Pagination>`,
      },
    },
  },
}

export const Centered: Story = {
  render: () => renderJaxs(CenteredPagination()),
  parameters: {
    docs: {
      source: {
        code: `import {
  Pagination,
  PaginationItem,
  PaginationLink,
} from './components/pagination/pagination'

<div class="d-flex justify-content-center">
  <Pagination>
    <PaginationItem disabled>
      <PaginationLink disabled aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </PaginationLink>
    </PaginationItem>
    <PaginationItem active>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </PaginationLink>
    </PaginationItem>
  </Pagination>
</div>`,
      },
    },
  },
}

export const RightAligned: Story = {
  render: () => renderJaxs(RightAlignedPagination()),
  parameters: {
    docs: {
      source: {
        code: `import {
  Pagination,
  PaginationItem,
  PaginationLink,
} from './components/pagination/pagination'

<div class="d-flex justify-content-end">
  <Pagination>
    <PaginationItem>
      <PaginationLink href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem active>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </PaginationLink>
    </PaginationItem>
  </Pagination>
</div>`,
      },
    },
  },
}
