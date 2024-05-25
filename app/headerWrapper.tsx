'use client'

import { SessionProvider } from "next-auth/react"

export interface HeaderWrapperProps {
  children: JSX.Element;
}

export default function HeaderWrapper({children}: HeaderWrapperProps) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}