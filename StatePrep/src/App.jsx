import React, { useState } from "react"
import AnimalShow from "./AnimalShow"
import "./App.css"
function getRandomAnimal() {
  const animals = ["bird", "cat", "cow","dog","gator","horse"]
  let index = Math.floor(Math.random() * animals.length)
  return animals[index]
}

function App() {
  const [animalArray, setAnimalArray] = useState([])

  function handleAddClick() {
    setAnimalArray([...animalArray, getRandomAnimal()])
  }

  const renderedAnimal = animalArray.map((animal,index)=>{
    return <AnimalShow type={animal} key={index} />
  })

  return (
    <div className="app" >
        <button onClick={handleAddClick} >
          Add Animal
        </button>
    <div className="animal-list">
        {renderedAnimal}
      </div>
    </div>
  )

}
export default App;