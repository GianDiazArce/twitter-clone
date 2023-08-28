'use client'
import { Avatar, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'
import Link from 'next/link'
import { IconMessageCircle, IconHeart, IconRepeat } from '@tabler/icons-react'

interface PostCardProps {
  username: string
  userfullName: string
  avatarUrl: string
  content: string
}

export function PostCard ({
  username,
  userfullName,
  avatarUrl,
  content
}: PostCardProps) {
  return (
    <Card className="bg-transparent shadow-none hover:bg-slate-800 transition border-b border-white/20 rounded-none cursor-pointer">
      <CardHeader className="justify-between">
        <div className="flex gap-4">
          <Link href={`/${username}`} passHref>
            <Avatar isBordered radius="full" size="md" src={avatarUrl} />
          </Link>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{userfullName}</h4>
            <h5 className="text-small tracking-tight text-default-400">@{username}</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-white">
        <p>
          {content}
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <button>
          <IconMessageCircle className='w-4 h-4' />
        </button>
        <button>
          <IconHeart className='w-4 h-4' />
        </button>
        <button>
          <IconRepeat className='w-4 h-4' />
        </button>
      </CardFooter>
    </Card>
  )
}
