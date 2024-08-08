import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function PostsList() {
    const posts = useSelector((state) => state.posts)
    console.log("State=>",posts)
  return (
    <div>PostsList
        <ul>
            {posts.items.map((post) => (
                <li key={post.id}>{post.name}</li>
            ))}
        </ul>
    </div>
  )
}
