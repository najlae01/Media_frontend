import React from "react";
import LogoSearch from '../LogoSearch/LogoSearch'
import FollowersCard from '../FollowersCard/followersCard'
import InfoCard from "../InfoCard/infoCard";

const ProfileLeft = () =>{
    return (
        <div className="ProfileSide">
            <LogoSearch/>
            <InfoCard/>
            <FollowersCard/>
        </div>
    )
}

export default ProfileLeft