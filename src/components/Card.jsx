import React from "react";
import Images from "./Image";

function Card(props) {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <Images imgsrc={props.imgsrc} />
                    <div className="card_info">
                        <span className="card_category">{props.title}</span>
                        <h3 className="card_titile">{props.sname}</h3>
                        <a href={props.link} target="_blank">
                            <button>Download Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;