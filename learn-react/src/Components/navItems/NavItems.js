import './NavItems.css'

const NavItems = (props) => {
  return (
    <li className="nav-item">
     {props.children}   
    </li>
  )
}

const NavItemsDrop = (props) => {
    return (
      <li className="nav-item dropdown">
          {props.children}
      </li>
    )
  }

  const DropdownItem = (props) => {
    return (
      <li><a className="dropdown-item" href={props.href}>
        {props.text}
        </a></li>
    )
  }
export default NavItems;
export {NavItemsDrop,DropdownItem};
