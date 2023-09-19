'use server'

import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

export const editPost = async (formData: FormData) => {
  const content = formData.get('content')
  const id = formData.get('id')

  if (content === null || id === null) return

  const supabase = createServerActionClient({ cookies })
  // Revisar si el usuario realmente esta autenticado
  const {
    data: { user }
  } = await supabase.auth.getUser()
  if (user === null) return

  await supabase.from('posts').update({ content }).match({ id })
  revalidatePath(`/?content=${content.toString()}`)
}
