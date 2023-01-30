import '../styles/globals.css'
import type { AppProps } from 'next/app'

import localFont from '@next/font/local'

const firaCode = localFont({ src: '../public/assets/FiraCode-Medium.woff'})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={firaCode.className}>
      <Component {...pageProps} />
    </main>
  )
}
