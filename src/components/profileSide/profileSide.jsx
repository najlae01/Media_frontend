import React from "react";
import FollowersCard from "../FollowersCard/followersCard";
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../ProfileCard/ProfileCard";
import './profileSide.css'
const ProfileSide = () => {
    return (
        <div className="ProfileSide">
            <LogoSearch/>
            <ProfileCard location= "homePage"/>
            <FollowersCard/>
        </div>
    )
}
 
export default ProfileSide