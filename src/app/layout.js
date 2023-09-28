import Layout from '@/layout/Layout'
import { FONTS } from '@/utils/font'

import './globals.css'

export const metadata = {
  title: 'Create Next App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ FONTS } >
      <body > 
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
