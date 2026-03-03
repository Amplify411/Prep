import React, { useState } from "react";


export default function SearchBar({ handleSubmit }) {
    const [term,setTerm] = useState("")
    function handlePageSubmit(e){
        e.preventDefault()
        handleSubmit(term)
    }
    function handleTermChange(e){
        setTerm(e.target.value)
    }
    return (
        <>
            <h1>Search Box</h1>
            <form action="submit" onSubmit={handlePageSubmit} >
                <input
                value={term}
                onChange={handleTermChange}
                />
                <button>Submit</button>
            </form>

            
        </>
    )
}