import React, { useState } from "react";
import "./AnimalShow.css"
import bird from "./Assets/bird.svg"
import cat from "./Assets/cat.svg"
import dog from "./Assets/dog.svg"
import cow from "./Assets/cow.svg"
import gator from "./Assets/gator.svg"
import horse from "./Assets/horse.svg"
import heart from "./Assets/heart.svg"

export default function AnimalShow({ type }) {

    const [click, setClick] = useState(0)
    const srcMap = {
        bird,
        cat,
        cow,
        horse,
        gator,
        dog
    }

    function handleAnimalClick() {
        setClick(click + 1)
    }

    return (
        <div className="animal-show" style={{ height: "250px", width: "250px", }} onClick={handleAnimalClick}>
            <img
                className="animal-show"
                alt="animal"
                src={srcMap[type]}
            />
            <img
                className="animal"
                alt="heart"
                src={heart}
                style={{
                    width: 10 + 10 * click + "px",
                    height: 10 + 10 * click + "px"
                }}
            />
        </div>
    )
}