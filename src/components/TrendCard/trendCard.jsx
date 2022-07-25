import React from "react";
import { TrendData } from "../../Data/TrendData";
import './trendCard.css'

const Trendcard = () =>{
    return (
        <div className="TrendCard">
            <h3>Trends For You</h3>
            {TrendData.map((trend)=>{
                return (
                    <div className="trend">
                        <span>#{trend.name}</span>
                        <span>{trend.shares}k shares</span>
                    </div>
                )
            })}
       </div>
    )
}

export default Trendcard