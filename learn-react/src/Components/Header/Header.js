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
          
          <Link className="nav-link" to='/Egzersiz' state={{data:1}}>Egzersizler</Link>
        </NavItems>
        <NavItemsDrop>
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sınıflar
          </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <DropdownItem text='1.sınıf' id='1'/>              
                            <DropdownItem text='2.sınıf' id='2'/>              
                            <DropdownItem text='3.sınıf' id='3'/>              
                            <DropdownItem text='4.sınıf' id='4' />              
                            <DropdownItem text='5.sınıf' id='5' />              
                            <DropdownItem text='6.sınıf' id='6' />              
                            <DropdownItem text='7.sınıf' id='7'/>              
                            <DropdownItem text='8.sınıf' id='8' />              
                                       
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