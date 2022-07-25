import React from "react";
import Posts from "../Posts/posts";
import PostShare from "../PostShare/postShare";
import './postSide.css'
const PostSide = () => {
    return (
        <div className="PostSide">
            <PostShare/>
            <Posts/>
        </div>
    )
}

export default PostSide