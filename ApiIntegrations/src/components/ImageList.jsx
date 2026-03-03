import React from "react";
import ImageShow from "./ImageShow";

export default function ImageList({ term }) {
    return (
        <>
            {term.map((value, index) => {
                return (
                    <div key={index} >
                        <ImageShow 
                            imageSource={value.urls.small}
                        />
                    </div>)
            })}
        </>
    )
}