import React from "react";

const AnimeInfo = (props) => {
    return (
        <div className={'card'}>
            <h2>{props.name}</h2>
            <h4>{props.dateAired}</h4>
            <h4>{props.genre}</h4>
            <a href={props.redirect}>
                <img className="img" src={props.link}></img>
            </a>
        </div>
    )
}

export default AnimeInfo;