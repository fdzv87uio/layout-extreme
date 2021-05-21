import React, { Children } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useStyles } from './PageLayout.styles'

export class PageLayoutProps {
  width: number | null
  height: number | null
  src: string
  children: React.ReactNode
}

export default function PageLayout({
  width,
  height,
  src,
  children,
}: PageLayoutProps): JSX.Element {
  // retrieve styles
  const classes = useStyles()
  return (
    <div
      className={classes.pageWrapper}
      style={{ width: width, height: height }}
    >
      <div className={classes.pageHeader}>
        <Link href={src}>
          <Image
            className={classes.BackArrow}
            src="/images/Arrow_Back.png"
            width={25}
            height={25}
          />
        </Link>
        <div>&nbsp;</div>
      </div>
      {children}
    </div>
  )
}
