import React from 'react'
import styles from "./Navbar.module.scss"
import { redirect } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_left}>
                <a className={styles.title} href='./'>
                    QuickCards
                </a>
            </div>
            <div className={styles.navbar_right}>
                <button className={styles.admin_btn}>
                    <a href="./admin">
                        Admin
                    </a>
                </button>
            </div>
        </nav>
    )
}

export default Navbar