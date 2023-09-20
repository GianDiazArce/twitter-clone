import '@sweetalert2/theme-dark/dark.css'
import type { Metadata } from 'next'
import { NavbarComponent } from './components/navbar'
import './globals.css'
import { Providers } from './providers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { type Database } from './types/database'

export const metadata: Metadata = {
  title: 'Clon de twitter',
  description: 'Generando un clon de twitter con nextjs'
}
export const dynamic = 'force-dynamic'
export default async function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session } } = await supabase.auth.getSession()
  console.log(session)
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
          {
            session !== null &&
              (
                <NavbarComponent
                  avatarUrl={session?.user?.user_metadata?.avatar_url}
                  email={session?.user?.email}
                />
              )

          }
          {children}
        </Providers>
      </body>
    </html>
  )
}
