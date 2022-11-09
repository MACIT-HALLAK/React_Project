import './Header.css';
import NavItems,{NavItemsDrop,DropdownItem} from '../navItems/NavItems';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/calculator.png'
const Header = () => {
    
  return (
    <nav className="navbar navbar-expand-lg navbar-blue bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className='navbar-img' src={logo}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <NavItems>
          
          <Link className="nav-link active" aria-current="page" to='/'>Ana sayfa</Link>
         
          </NavItems>
          <NavItems>
          
          <Link className="nav-link active" aria-current="page" to='/Derslerim'>Derslerim</Link>
         
          </NavItems>
        <NavItems>
          
          <Link className="nav-link" to='/Egzersiz'>Egzersizler</Link>
        </NavItems>
        <NavItemsDrop>
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sınıflar
          </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <DropdownItem text='1.sinif' href='#'/>              
                            <DropdownItem text='2.sinif' href='#'/>              
                            <DropdownItem text='3.sinif' href='#'/>              
                            <DropdownItem text='4.sinif' href='#'/>              
                            <DropdownItem text='5.sinif' href='#'/>              
                            <DropdownItem text='6.sinif' href='#'/>              
                            <DropdownItem text='7.sinif' href='#'/>              
                            <DropdownItem text='8.sinif' href='#'/>              
                                       
                        </ul>
               

        </NavItemsDrop>
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Header