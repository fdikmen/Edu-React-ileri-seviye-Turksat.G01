import React from "react";
import HocLoader from "./HocLoader";

function Post(props) {
  console.log("Post props",props);
  return (
    <div style={{ width: "40%", float: "left" }}>
      <h1>Posts</h1>
      <p>
        {props.yenidata}
        {props.testData}
      </p>
      {/* {!posts ? (
        <h2>Loading</h2>
      ) : ( */}
        <ul>
          {props.posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      {/* )} */}
    </div>
  );
}

// export default Post;
export default HocLoader(Post,"posts");
