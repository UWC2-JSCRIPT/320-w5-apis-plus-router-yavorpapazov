import classes from "./Button.module.css"
import { Link } from "react-router-dom"

function Button({to, children}) {
  return (
    <Link className={classes.btn} to={to}>{children}</Link>
  )
}

export default Button