import { useState, useCallback } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import CharacterList from "./components/CharacterList"
import CharacterDetails from "./components/CharacterDetails"
import ErrorPage from "./components/ErrorPage"

function App() {
  let [data, setData] = useState([])
  let [character, setCharacter] = useState({})
  let [isLoading, setIsLoading] = useState(false)
  let [error, setError] = useState('')
  const getData = useCallback(async (id) => {
    setIsLoading(true)
    try {
      let url = 'https://swapi.dev/api/people/'
      let response = await fetch(url)
      if(!response.ok) {
        throw new Error('Something went wrong!')
      }
      let receivedData = await response.json()
      if(id) {
        let characterObj = receivedData.results.find(item => item.name === id)
        setCharacter(characterObj)
      }
      setData(receivedData.results)
    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false)
  }, [])
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characters" element={<CharacterList getData={getData} data={data} isLoading={isLoading} error={error} />} />
      <Route path="/characters/:id" element={<CharacterDetails getData={getData} data={data} {...character} isLoading={isLoading} error={error} />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App