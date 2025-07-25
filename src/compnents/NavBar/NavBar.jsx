import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router';
//styles
import styles from './Navbar.module.css'
//asests
import logo from '../../assets/logo.png'
export default function NavBar() {
  return (
    <Navbar expand="lg" className={styles.nav}>
      <Container>
        <NavLink className='d-flex  align-items-end justify-content-center text-decoration-none' to={"./home"}>
          <img className={styles.logo}  src={logo}/>
           <p className={styles.brand}>The Eisenhower Matrix</p>
           </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className={styles.tabs} to={'./todo'}>lets do it!</NavLink>
            <NavLink className={styles.tabs}  to={'./login'}>Login</NavLink>
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
