/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'
import type { Meta, StoryObj } from '@storybook/html'
import { renderJaxs } from '../../.storybook/render-jaxs'
import { Carousel, CarouselInner, CarouselItem, CarouselIndicators, CarouselControls, CarouselCaption } from '@components/carousel/carousel'

// Placeholder slide images
const PlaceholderImage = ({
  color,
  text,
  alt,
}: {
  color: string
  text: string
  alt: string
}) => (
  <svg
    class="bd-placeholder-img d-block w-100"
    width="800"
    height="400"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label={alt}
    preserveAspectRatio="xMidYMid slice"
  >
    <title>{alt}</title>
    <rect width="100%" height="100%" fill={color}></rect>
    <text
      x="50%"
      y="50%"
      fill="#ffffff"
      dominant-baseline="middle"
      text-anchor="middle"
      dy=".3em"
      font-size="3rem"
    >
      {text}
    </text>
  </svg>
)

const meta = {
  title: 'Bootstrap/Carousel',
  tags: ['autodocs'],
  render: () =>
    renderJaxs(
      <Carousel id="carouselExample">
        <CarouselInner>
          <CarouselItem active={true}>
            <PlaceholderImage
              color="#0d6efd"
              text="First Slide"
              alt="First slide"
            />
          </CarouselItem>
          <CarouselItem>
            <PlaceholderImage
              color="#6c757d"
              text="Second Slide"
              alt="Second slide"
            />
          </CarouselItem>
          <CarouselItem>
            <PlaceholderImage
              color="#198754"
              text="Third Slide"
              alt="Third slide"
            />
          </CarouselItem>
        </CarouselInner>
        <CarouselControls />
      </Carousel>,
    ),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Carousel } from './components/carousel/carousel'
import { CarouselInner } from './components/carousel/carousel-inner'
import { CarouselItem } from './components/carousel/carousel-item'

<Carousel id="carouselExample">
  <CarouselInner>
    <CarouselItem active={true}>
      <PlaceholderImage color="#0d6efd" text="First Slide" alt="First slide" />
    </CarouselItem>
    <CarouselItem>
      <PlaceholderImage color="#6c757d" text="Second Slide" alt="Second slide" />
    </CarouselItem>
    <CarouselItem>
      <PlaceholderImage color="#198754" text="Third Slide" alt="Third slide" />
    </CarouselItem>
  </CarouselInner>
  <CarouselControls />
</Carousel>`,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj

export const Basic: Story = {
  render: () =>
    renderJaxs(
      <Carousel id="carouselBasic">
        <CarouselInner>
          <CarouselItem active>
            <PlaceholderImage
              color="#0d6efd"
              text="First Slide"
              alt="First slide"
            />
          </CarouselItem>
          <CarouselItem>
            <PlaceholderImage
              color="#6c757d"
              text="Second Slide"
              alt="Second slide"
            />
          </CarouselItem>
          <CarouselItem>
            <PlaceholderImage
              color="#198754"
              text="Third Slide"
              alt="Third slide"
            />
          </CarouselItem>
        </CarouselInner>
        <CarouselControls />
      </Carousel>,
    ),
}

export const WithIndicators: Story = {
  render: () =>
    renderJaxs(
      <Carousel id="carouselIndicators">
        <CarouselIndicators
          numberOfSlides={3}
          currentSlide={0}
        />
        <CarouselInner>
          <CarouselItem active={true}>
            <PlaceholderImage
              color="#6c757d"
              text="First Slide"
              alt="First slide"
            />
          </CarouselItem>
          <CarouselItem>
            <PlaceholderImage
              color="#0e5ca1ff"
              text="Second Slide"
              alt="Second slide"
            />
          </CarouselItem>
          <CarouselItem>
            <PlaceholderImage
              color="#198754"
              text="Third Slide"
              alt="Third slide"
            />
          </CarouselItem>
        </CarouselInner>
        <CarouselControls />
      </Carousel>,
    ),
}

export const WithCaptions: Story = {
  render: () =>
    renderJaxs(
      <Carousel id="carouselCaptions">
        <CarouselInner>
          <CarouselItem active={true}>
            <PlaceholderImage
              color="#0d6efd"
              text="First Slide"
              alt="First slide"
            />
            <CarouselCaption>
              <h5>First Slide Label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem>
            <PlaceholderImage
              color="#6c757d"
              text="Second Slide"
              alt="Second slide"
            />
            <CarouselCaption>
              <h5>Second Slide Label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem>
            <PlaceholderImage
              color="#198754"
              text="Third Slide"
              alt="Third slide"
            />
            <CarouselCaption>
              <h5>Third Slide Label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </CarouselCaption>
          </CarouselItem>
        </CarouselInner>
        <CarouselControls />
      </Carousel>,
    ),
}