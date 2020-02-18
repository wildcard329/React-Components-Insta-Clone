//Complete the necessary code in this file IMPORTED USESTATE AND DUMMYDATA, SET STATE FOR DATA, AND MAPPED THROUGH DATA
import React, {useState} from "react";
import Post from "./Post";
import dummyData from '../../dummy-data'
import "./Posts.css";

const PostsPage = (props) => {
  // set up state for your data
  const [data] = useState(dummyData);
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {data.map(p =>
        <Post key={p.timestamp} post={p} />
        )}
    </div>
  );
};

export default PostsPage;

