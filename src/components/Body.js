import React from "react";

export default function Body(props) {
    return(
        <div className="cards">
            <img className="img" src={props.item.img} alt="Location Image" />
            <p className="location">{props.item.location} | <a className="link" href={props.item.googleMaps}>Google Maps.</a></p>
            <h1 className="title">{props.item.title}</h1>
            <p className="dates">{props.item.startDate} | {props.item.endDate}</p>
            <p className="para">{props.item.description}</p>
        </div>
    )
}