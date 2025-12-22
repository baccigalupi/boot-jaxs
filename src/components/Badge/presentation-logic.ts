export const badgeClass = (variant: string = 'primary', pill: boolean = false) => {
  const pillClass = pill ? ' rounded-pill' : ''

  return `badge bg-${variant}${pillClass}`
}