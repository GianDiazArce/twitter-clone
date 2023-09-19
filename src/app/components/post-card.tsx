'use client'
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure
} from '@nextui-org/react'
import {
  IconDotsVertical,
  IconHeart,
  IconMessageCircle,
  IconRepeat
} from '@tabler/icons-react'
import Link from 'next/link'
import { deletePost } from '../actions/delete-post.action'

interface PostCardProps {
  id: string
  username: string
  userfullName: string
  avatarUrl: string
  content: string
}

export function PostCard ({
  id,
  username,
  userfullName,
  avatarUrl,
  content
}: PostCardProps) {
  const { isOpen, onOpenChange } = useDisclosure()
  // console.log({ userId })
  return (
    <>
      <Card className="bg-transparent shadow-none hover:bg-slate-800 transition border-b border-white/20 rounded-none cursor-pointer">
        <CardHeader className="justify-between">
          <div className="flex gap-4 w-full">
            <Link href={`/${username}`} passHref>
              <Avatar isBordered radius="full" size="md" src={avatarUrl} />
            </Link>
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                {userfullName}
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                @{username}
              </h5>
            </div>
            <div className="ml-auto mr-4">
              <Dropdown>
                <DropdownTrigger>
                  <button className="hover:bg-slate-700 shadow-md rounded-full p-1 transition-background">
                    <IconDotsVertical />
                  </button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="edit">Editar</DropdownItem>
                  <DropdownItem
                    onClick={() => { deletePost(id) }}
                    key="delete"
                    className="text-danger"
                    color="danger"
                  >
                    Eliminar
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-white">
          <p>{content}</p>
        </CardBody>
        <CardFooter className="gap-3">
          <button>
            <IconMessageCircle className="w-4 h-4" />
          </button>
          <button>
            <IconHeart className="w-4 h-4" />
          </button>
          <button>
            <IconRepeat className="w-4 h-4" />
          </button>
        </CardFooter>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  ¿Estás seguro de eliminar este post?
                </ModalHeader>
                <ModalBody>
                  <p>Esta acción no se puede deshacer.</p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cancelar
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Eliminar
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </Card>
    </>
  )
}
