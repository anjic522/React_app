import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { Recipecontext } from "./navigation";



const Navbar = () => {

  const linkstyle = { margin: 40, textDecoration: "none", }
  const { favouritedish } = useContext(Recipecontext)


  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={"/"} style={linkstyle}>HOME</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/about"} style={linkstyle}>MENU</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/new"} style={linkstyle}>NEWHOME</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/setting"} style={linkstyle}>LOCATION</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/blog"} style={linkstyle}>REGISTRATION</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/recipe"} style={linkstyle}>RECIPES</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/favourite"} style={linkstyle}> FAVOURITE RECIPES  {favouritedish.length}</NavLink>
            </li>
          </ul>
        </div>
      </nav>

    </div>
  )
}
export default Navbar;