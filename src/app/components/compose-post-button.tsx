'use client'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
export function ComposePostButton () {
  const { pending } = useFormStatus()
  return (
    <button disabled={pending} type='submit' className='bg-sky-500 font-bold text-md rounded-full px-2 py-2 self-end disabled:opacity-50 disabled:cursor-none'>
      { pending ? 'Posteando...' : 'Postear'}
    </button>
  )
}
