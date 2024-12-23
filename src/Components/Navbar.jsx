import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={style.nav}>
            <ul className={style.menu}>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/characters'>Personaggi</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}