'use client'

import { ReactNode } from 'react'

import StyledComponentsRegistry from '@/lib/registry'

import localFont from 'next/font/local'
import './styles/globals.css'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

const fontPlusJakartaSans = localFont({
  src: [
    {
      path: '../../public/fonts/PlusJakartaSans-VariableFont_wght.ttf',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PlusJakartaSans-Italic-VariableFont_wght.ttf',
      style: 'italic',
    },
  ],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={fontPlusJakartaSans.className}>
        <ThemeProvider theme={defaultTheme}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  )
}
