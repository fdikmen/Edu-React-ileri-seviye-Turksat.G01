import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewPost } from './postSlice';

export default function AddPostForm() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();//prevent page refresh
        if (title && body) {
            /*dispatch({
            type: "posts/addNewPost",
            payload: {
                title,
                body
            }
        })*/
        dispatch(addNewPost({title, body}))
        setTitle("")
        setBody("")
        }
    }

  return (
    <div>AddPostForm
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Title..." value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Body..." value={body} onChange={(e) => setBody(e.target.value)} />
            <button type="submit">Add Post</button>
        </form>
    </div>
  )
}
