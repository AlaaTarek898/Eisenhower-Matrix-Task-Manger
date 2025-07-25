// styles
import styles from './Layout.module.css'
// components
import NavBar from '../../compnents/NavBar/NavBar'
import Footer from '../../compnents/Footer/Footer.jsx'
import Home from '../Home/Home.jsx'
import Login from '../Login/Login.jsx'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
  <div className={styles.wrapper}>
  <NavBar/>
  <Outlet/>
  <Footer/>
  </div>
  )
}
