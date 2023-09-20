'use client'
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

interface Props {
  avatarUrl?: string
  email?: string
}

export function NavbarComponent ({ avatarUrl = '', email = '' }: Props) {
  const supabase = createClientComponentClient()
  const router = useRouter()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <Navbar maxWidth='md' className='mb-4'>
      <NavbarBrand>
        <p className="font-bold text-inherit">Twitter Clone</p>
      </NavbarBrand>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src={avatarUrl !== '' ? avatarUrl : 'https://i.pravatar.cc/100'}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">
                {/* Signed in as in spanish */}
                {email !== '' ? 'Registrado como' : 'Signed in as'}
              </p>
              <p className="font-semibold">{email !== '' ? email : 'zoey@example.com'}</p>
            </DropdownItem>
            <DropdownItem key="settings">Configuracion</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={handleSignOut}>
              Cerrar sesi&oacute;n
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  )
}
