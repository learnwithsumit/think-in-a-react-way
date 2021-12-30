import { NavLink } from "react-router-dom";
import classes from "../styles/Header.module.css";

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/" activeClassName={classes.active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" activeClassName={classes.active}>
            Dashboard
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
