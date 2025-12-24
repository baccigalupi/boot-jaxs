/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import type { HTMLAttributes } from '../types'
import { getActiveInfo } from './active-info';
import { Link } from '@components/link/link'

export type BreadcrumbItemProps = JaxsTypes.Props<{
  href?: string;
  active?: boolean
} & HTMLAttributes>

export const BreadcrumbItem = ({
  active = false,
  children,
  ...rest
}: BreadcrumbItemProps) => {
  const activeInfo = getActiveInfo(active)
  
  return (
    <li
      class={activeInfo.itemClass()}
      aria-current={activeInfo.ariaCurrent()}
    >
      <BreadcrumbBody active={active} {...rest}>{children}</BreadcrumbBody>
    </li>
  )
}

const BreadcrumbBody = ({href, active, children, ...rest}: BreadcrumbItemProps) => {
  const useLink = getActiveInfo(active).useLink(href)

  if (useLink) {
    return <Link href={href as string} {...rest}>{children}</Link>
  } else {
    return <>{children}</>
  }
}
