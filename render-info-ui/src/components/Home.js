import classes from "./Home.module.css"
import Button from "../ui/Button"

function Home() {
  return (
    <div className={classes["home-container"]}>
      <h3>Home</h3>
      <Button to="/characters">Character list</Button>
    </div>
  )
}
    
export default Home