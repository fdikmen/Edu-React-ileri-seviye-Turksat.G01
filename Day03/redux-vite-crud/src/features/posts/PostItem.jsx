// interface PostItemProps {
//     posts: {
//         items: {
//             id: number;
//             title: string;
//             body: string;
//         }[];
//     };
// }

export default function PostItem({ posts }) {
  return (
    <div>
      <ul>
        {posts.slice().reverse().map((post) => (
          <li key={post.id}>
            <p>
              <strong>{post.id}.{post.title}</strong>
              <br />
              {post.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
