import { useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"

function CharacterDetails({getData, data, isLoading, error, name, birth_year, height}) {
  let {id} = useParams()
  let navigate = useNavigate()
  useEffect(() => {
    getData(id)
  }, [getData, id])
  let content = <h3>Found no data</h3>
  if(data.length > 0) {
    content = (
      <div>
        <h3>Name: {name}</h3>
        <h3>Birth year: {birth_year}</h3>
        <h3>Height: {height}</h3>
        <Link to="/">Back to Home</Link>
      </div>
    )
  }
  if(error) {
    content = navigate('/error')
  }
  if(isLoading) {
    content = <h3>Loading...</h3>
  }
  return (
    <div>
      {content}
    </div>
  )
}
    
export default CharacterDetails