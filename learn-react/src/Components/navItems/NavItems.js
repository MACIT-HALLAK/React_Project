import "./NavItems.css";
import { Link } from "react-router-dom";
const NavItems = (props) => {
  return <li className="nav-item">{props.children}</li>;
};

const NavItemsDrop = (props) => {
  return <li className="nav-item dropdown">{props.children}</li>;
};

const DropdownItem = (props) => {
  return (
    <li>
      <Link
        className="dropdown-item"
        to="/Derslerim"
        state={{ ders: props.id, sinif: props.text }}
      >
        {props.text}
      </Link>
    </li>
  );
};
export default NavItems;
export { NavItemsDrop, DropdownItem };
