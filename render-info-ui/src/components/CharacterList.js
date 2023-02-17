import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import Character from "./Character"

function CharacterList({getData, data, isLoading, error}) {
  let navigate = useNavigate()
  useEffect(() => {
    getData()
  }, [getData])
  let people = data.map(item => <Character key={item.created} name={item.name} />)
  let content = <h3>Found no data</h3>
  if(data.length > 0) {
    content = people
  }
  if(error) {
    content = navigate('/error')
  }
  if(isLoading) {
    content = <h3>Loading...</h3>
  }
  return (
    <div>
      <Link to="/">Back to Home</Link>
      {content}
    </div>
  )
}
    
export default CharacterList