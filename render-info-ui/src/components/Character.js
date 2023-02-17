import Button from "../ui/Button"
import PropTypes from "prop-types"

function Character({name}) {
  return (
    <Button to={`/characters/${name}`}>{name}</Button>
  )
}

Character.propTypes = {
  name: PropTypes.string.isRequired
}
    
export default Character