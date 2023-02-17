import { Link } from "react-router-dom"

function ErrorPage() {
  return (
    <div>
      <h3>Something went wrong!</h3>
      <Link to="/">Back to Home</Link>
    </div>
  )
}
    
export default ErrorPage