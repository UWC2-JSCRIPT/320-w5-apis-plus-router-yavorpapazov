import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <h3>Home</h3>
      <Link to="/characters">Character list</Link>
    </div>
  )
}
    
export default Home