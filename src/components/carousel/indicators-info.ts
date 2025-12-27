type IndicatorInfoArguments = {
  currentSlide: number
  slideId: number
}

export class IndicatorInfo {
  currentSlide: number
  slideId: number

  constructor({ currentSlide, slideId }: IndicatorInfoArguments) {
    this.currentSlide = currentSlide
    this.slideId = slideId
  }

  isActive(): boolean {
    return this.currentSlide === this.slideId
  }

  activeClass(): string {
    return this.isActive() ? 'active' : ''
  }

  ariaCurrent(): 'true' | 'false' {
    return this.isActive() ? 'true' : 'false'
  }

  ariaLabel(): string {
    return `Slide ${this.slideId + 1}`
  }

  toProps() {
    return {
      class: this.activeClass(),
      ariaCurrent: this.ariaCurrent(),
      ariaLabel: this.ariaLabel(),
    }
  }
}

export const createIndicatorInfo = (
  args: IndicatorInfoArguments,
): IndicatorInfo => {
  return new IndicatorInfo(args)
}

type IndicatorsInfoArguments = {
  numberOfSlides: number
  currentSlide: number
}
export class IndicatorsInfo {
  indicators?: IndicatorInfo[]
  numberOfSlides: number
  currentSlide: number

  constructor({ numberOfSlides, currentSlide }: IndicatorsInfoArguments) {
    this.numberOfSlides = numberOfSlides
    this.currentSlide = currentSlide
  }

  create() {
    if (this.indicators) return this.indicators

    this.indicators = [] as IndicatorInfo[]
    for (let index = 0; index < this.numberOfSlides; index++) {
      const indicatorInfo = createIndicatorInfo({
        currentSlide: this.currentSlide,
        slideId: index,
      })
      this.indicators.push(indicatorInfo)
    }

    return this.indicators
  }
}

export const createIndicatorsInfo = (
  args: IndicatorsInfoArguments,
): IndicatorInfo[] => {
  return new IndicatorsInfo(args).create()
}
