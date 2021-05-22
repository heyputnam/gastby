import * as React from 'react' 
import { Link } from 'gatsby'
import {
     container,
     heading,
    navLinks,
    navLinkItem,
    navLinkText, 
 } from '../components/layout.module.css'

// decunstructing 
const Layout = ({ pageTitle, children }) => {
    return(
        <main className={container}>
            <title className={heading}>{pageTitle}</title>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to='/' className={navLinkText}>Home</Link></li>
                    <li className={navLinkItem}><Link to='/about' className={navLinkText}>About</Link></li>
                </ul>
            </nav>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
        </main>
    )
}

export default Layout