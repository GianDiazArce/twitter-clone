import React from 'react'
import { PostCard } from './post-card'
import { type Post } from '@/app/types/posts'

export function PostsList ({ posts }: { posts: Post[] | null }) {
  return (
    <>
      {
        posts?.map(post => {
          const {
            id,
            user,
            content
          } = post

          const {
            user_name: username,
            name: userfullName,
            avatar_url: avatarUrl
          } = user

          return (
            <PostCard
              key={id}
              username={username}
              userfullName={userfullName}
              avatarUrl={avatarUrl}
              content={content}
            />
          )
        })
      }
    </>
  )
}
