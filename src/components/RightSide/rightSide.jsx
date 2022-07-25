import React, { useState } from "react";
import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import {UilSetting} from '@iconscout/react-unicons'
import './rightSide.css'
import Trendcard from "../TrendCard/trendCard";
import ShareModal from "../ShareModal/shareModal";
import {Link} from 'react-router-dom';
import { List } from "@mantine/core";

const RightSide = () =>{
    const [modalOpened, setModalOpened] = useState(false)
    return (
        <div className="RightSide">
            <div className="navIcons">
                <Link to ="../home"><img src={Home} alt="" /></Link> 
                <UilSetting/>
                <img src={Noti} alt="" />
                <img src={Comment} alt="" />
            </div>

            <Trendcard/>

            <button className="button r-button" onClick ={() => setModalOpened(true)} >
                    Share
            </button>
            <ShareModal 
                    modalOpened={modalOpened}
                    setModalOpened = {setModalOpened}
                    />
        </div>
    )
}

export default RightSide