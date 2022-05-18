import React from "react";
import data from "./data";
import Header from "./components/Header";
import Body from "./components/Body";

export default function App() {
    const cards = data.map(item => {
        return(
            <Body 
                key="1"
                item={item}
            />
        )
    })
    return(
        <div>
            <Header />
            {cards}
        </div>
    )
}