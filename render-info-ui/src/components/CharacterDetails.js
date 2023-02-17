import classes from "./CharacterDetails.module.css"
import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Button from "../ui/Button"

function CharacterDetails({getData, data, isLoading, error, name, birth_year, height}) {
  let {id} = useParams()
  let navigate = useNavigate()
  useEffect(() => {
    getData(id)
  }, [getData, id])
  let content = (
    <div>
      <h3>Found no data</h3>
    </div>
  )
  if(data.length > 0) {
    content = (
      <div className={classes["character-details-container"]}>
        <Button to="/">Back to Home</Button>
        <h3>Name: {name}</h3>
        <h3>Birth year: {birth_year}</h3>
        <h3>Height: {height}</h3>
      </div>
    )
  }
  if(error) {
    content = navigate('/error')
  }
  if(isLoading) {
    content = (
      <div className={classes["character-details-container"]}>
        <h3>Loading...</h3>
      </div>
    )
  }
  return (
    <div>
      {content}
    </div>
  )
}
    
export default CharacterDetails