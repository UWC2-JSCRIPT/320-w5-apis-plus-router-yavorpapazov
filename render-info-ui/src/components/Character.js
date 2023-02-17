import { Link } from "react-router-dom"

function Character({name}) {
  return (
    <div>
      <Link to={`/characters/${name}`}>{name}</Link>
    </div>
  )
}
    
export default Character