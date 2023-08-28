'use server'

import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'

export const addPost = async (formData: FormData) => {
  const content = formData.get('content')

  if (content === null) return

  const supabase = createServerActionClient({ cookies })
  // Revisar si el usuario realmente esta autenticado
  const {
    data: { user }
  } = await supabase.auth.getUser()
  if (user === null) return

  await supabase.from('posts').insert({ content, user_id: user.id })
  revalidatePath(`/?content=${content.toString()}`)
}
