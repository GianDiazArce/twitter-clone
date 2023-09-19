'use server'

import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

export const deletePost = async (id: string) => {
  const supabase = createServerActionClient({ cookies })
  // Revisar si el usuario realmente esta autenticado
  const {
    data: { user }
  } = await supabase.auth.getUser()
  if (user === null) return

  await supabase.from('posts').delete().match({ id })
  revalidatePath('/')
}
