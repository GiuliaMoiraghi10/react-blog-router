import Navbar from "../Components/Navbar";
import style from './Header.module.css'

export default function Header() {
    return (
        <header className={style.header}>
            <Navbar />
        </header>
    )
}