
import './App.css'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import { useEffect, useState } from 'react'
import { fetchUnsplashData } from "./api";

function App() {
  const [value, setValue] = useState("")
  const [response, setResponse] = useState([])

  useEffect(() => {
    async function onLoad() {
      const res = await fetchUnsplashData(value)
      setResponse(res)
    }
    onLoad();
  }, [value])

  function onSubmit(term) {
    setValue(term)
  }

  return (
    <>
      <SearchBar
        handleSubmit={onSubmit}
      />
      {value &&
        <ImageList
          term={response}
        />}
    </>
  )
}

export default App
