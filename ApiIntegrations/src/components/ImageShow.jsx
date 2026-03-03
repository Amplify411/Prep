import React from "react";

export default function ImageShow({imageSource}){
    return (
    <div>
        <img alt="titleImage" src={imageSource} />
    </div>
  )
}