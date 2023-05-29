import Link from 'next/link'
import React from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.navbarLeft}><Image src="/next.svg" width={150} height={100}></Image></div>
        <div className={styles.navbarRight}>
            <Link className={styles.navLink} href="about">About</Link>
            <Link className={styles.navLink} href="info">Info</Link>
            <Link className={styles.navLink} href="register">Register</Link>
        </div>
    </div>
  )
}

export default Navbar
