import classes from "./CharacterList.module.css"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Character from "./Character"
import Button from "../ui/Button"
import PropTypes from "prop-types"

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
    <div className={classes["character-list-container"]}>
      <Button to="/">Back to Home</Button>
      {content}
    </div>
  )
}

CharacterList.propTypes = {
  getData: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
}

export default CharacterList