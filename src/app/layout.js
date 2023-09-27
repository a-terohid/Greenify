import Layout from '@/layout/Layout'
import { Kaoly, Lato } from '@/utils/font'

import './globals.css'

export const metadata = {
  title: 'Create Next App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` ${ Kaoly.variable } ${ Lato.variable } `} >
      <body > 
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
