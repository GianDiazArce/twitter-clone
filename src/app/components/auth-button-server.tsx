import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { AuthButton } from './auth-button-client'

// import { redirect } from 'next/navigation'

export async function AuthButtonServer () {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  // if (session === null) {
  //   redirect('/login')
  // }

  return (
    <AuthButton session={session} />
  )
}
