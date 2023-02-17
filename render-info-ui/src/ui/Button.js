import classes from "./Button.module.css"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

function Button({to, children}) {
  return (
    <Link className={classes.btn} to={to}>{children}</Link>
  )
}

Button.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

export default Button