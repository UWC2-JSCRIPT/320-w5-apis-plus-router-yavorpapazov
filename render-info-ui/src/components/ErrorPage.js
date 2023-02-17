import classes from "./ErrorPage.module.css"
import Button from "../ui/Button"

function ErrorPage() {
  return (
    <div className={classes["error-page-container"]}>
      <h3>Something went wrong!</h3>
      <Button to="/">Back to Home</Button>
    </div>
  )
}
    
export default ErrorPage