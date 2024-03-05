import Link from "next/link";
import styles from "../src/styles/Navbar.module.css"

export default function Navbar() {
    return (
        <ul className={styles.navbar}>
        <li>
            <Link href='/'>
             Home
            </Link>
        </li>
        <li>
            <Link href='/Products'>
             produtos
            </Link>
        </li>
        <li>
            <Link href='/about'>
             Sobre Nós
            </Link>
        </li>
        </ul>
    )
}