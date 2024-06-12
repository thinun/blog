'use client'
import Link from "next/link";
import styles from './links.module.css'
import {usePathname} from "next/navigation";
import {useState} from "react";

const Links = () => {
    const pathName = usePathname()
    const [navMenu, setNavMenu] = useState(true)
    // temporary
    const session = true
    const admin = true

    const linksNavbar = [
        {
            title: 'Home Page',
            path: '/'
        },
        {
            title: 'About',
            path: '/pages/about'
        },
        {
            title: 'Contact',
            path: '/pages/contact'
        },
        {
            title: 'Blog',
            path: '/pages/blog'
        }
    ];

    return (
        <>
            <ul className={styles.desktop}>
                {linksNavbar.map(link => (

                    <Link href={link.path}
                          key={link.title}
                          className={`${pathName === link.path ? styles.active : ''} ${styles.li}`}>
                        <li>
                            {link.title}
                        </li>
                    </Link>

                ))}
                {admin ?
                    <Link href={'/pages/admin'}>
                        <li className={`${pathName === '/pages/admin' ? styles.active : ''} ${styles.li}`}>
                            Admin
                        </li>
                    </Link> : ''}
                {session ?
                    <Link href={'/pages/login'}>
                        <button className={`${pathName === '/pages/login' ? styles.active : ''} ${styles.li}`}>
                            Log Out
                        </button>
                    </Link> :
                    <Link href={'/pages/login'}>
                        <button className={`${pathName === '/pages/login' ? styles.active : ''} ${styles.li}`}>
                            Log In
                        </button>
                    </Link>}
            </ul>

            <button className={styles.navButton}
                    onClick={() => setNavMenu(prevState => !prevState)}>
                Nav Menu
            </button>
            {navMenu && (
                <ul className={styles.mobile}>
                    {linksNavbar.map(link => (

                        <Link href={link.path} key={link.title}
                              className={`${pathName === link.path ? styles.active : ''} ${styles.li}`}>
                            <li>
                                {link.title}
                            </li>
                        </Link>

                    ))}
                    {admin ?
                        <Link href={'/pages/admin'}>
                            <li className={`${pathName === '/pages/admin' ? styles.active : ''} ${styles.li}`}>
                                Admin
                            </li>
                        </Link> : ''}
                    {session ?
                        <Link href={'/pages/login'}>
                            <button
                                className={`${pathName === '/pages/login' ? styles.active : ''} ${styles.li}`}>
                                Log Out
                            </button>
                        </Link> :
                        <Link href={'/pages/login'}>
                            <button
                                className={`${pathName === '/pages/login' ? styles.active : ''} ${styles.li}`}>
                                Log In
                            </button>
                        </Link>}
                </ul>
            )}
        </>
    );
};

export default Links;
