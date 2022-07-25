import React from "react"
import PostSide from "../../components/PostSide/postSide"
import ProfileSide from "../../components/profileSide/profileSide"
import RightSide from "../../components/RightSide/rightSide"
import './Home.css'
const Home = () => {
    return (
       <div className="Home">
        <ProfileSide/>
        <PostSide/>
        <RightSide/>
       </div>
    )
}

export default Home