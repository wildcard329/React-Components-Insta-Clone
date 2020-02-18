// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import dummyData from '../../dummy-data';
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [data] = useState(props.comments)
  console.log('flag',data)
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {data.map(c => (
        <CommentInput key={c.timestamp} comments={c.username} />
      ))}
    </div>
  );
};

export default CommentSection;
