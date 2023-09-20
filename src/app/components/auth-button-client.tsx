'use client'

import { createClientComponentClient, type Session } from '@supabase/auth-helpers-nextjs'
import { GithubIcon } from './icons'

export function AuthButton ({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient()

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback'
      }
    })
  }

  // useEffect(() => {
  //   const getSession = async () => {
  //     const { data } = await supabase.auth.getSession()
  //     setSession(data.session)
  //   }
  //   getSession()
  // }, [])

  return (
    <header>
      {
        session === null &&
          (
            <button onClick={handleSignIn} type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2">
              <GithubIcon className="w-4 h-4 mr-2" />
              Iniciar sesión con Github
            </button>
          )

      }

    </header>
  )
}
