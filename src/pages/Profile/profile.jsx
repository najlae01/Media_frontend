import React from "react";
import ProfileLeft from "../../components/ProfileLeft/profileLeft";
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import PostSide from '../../components/PostSide/postSide'
import RightSide from '../../components/RightSide/rightSide'
import './profile.css'

const Profile = () =>{
    return (
        <div className="Profile">
            <ProfileLeft/>
            <div className="profile-center">
                <ProfileCard location = "profilePage"/>
                <PostSide/>
            </div>
            <RightSide/>
        </div>
    )
}

export default Profile