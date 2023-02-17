import Button from "../ui/Button"

function Character({name}) {
  return (
    <Button to={`/characters/${name}`}>{name}</Button>
  )
}
    
export default Character